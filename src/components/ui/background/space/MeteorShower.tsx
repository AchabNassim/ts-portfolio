import { useEffect, useRef } from "react";

const CANVAS_HEIGHT = window.innerHeight;
const CANVAS_WIDTH = window.innerWidth;
const ANIMATION_TIME = 1.6;

type Meteor = {
    startX: number;
    startY: number;
    endX: number;
    endY: number;
    radius: number;
    color: string;
    startTime: number;
    duration: number;
};

const COLORS = [
    "rgba(122, 194, 184, 1)",
    "rgba(89, 185, 180, 1)",
    "rgba(120, 180, 255, 1)",
    "rgba(255,255,255,1)"
];

function lerp(a: number, b: number, t: number) {
    return a + (b - a) * t;
}

const MeteorShower = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const meteorsRef = useRef<Meteor[]>([]);

    // Draw a single meteor with a glowing, colored trail
    const drawMeteor = (
        ctx: CanvasRenderingContext2D,
        meteor: Meteor,
        progress: number
    ) => {
        // Interpolate position
        const x = lerp(meteor.startX, meteor.endX, progress);
        const y = lerp(meteor.startY, meteor.endY, progress);

        // Trail
        const trailLength = 100;
        const trailX = lerp(meteor.startX, meteor.endX, Math.max(0, progress - trailLength / CANVAS_WIDTH));
        const trailY = lerp(meteor.startY, meteor.endY, Math.max(0, progress - trailLength / CANVAS_WIDTH));

        // Trail gradient
        const gradient = ctx.createLinearGradient(x, y, trailX, trailY);
        gradient.addColorStop(0, meteor.color);
        gradient.addColorStop(0.5, "rgba(255,255,255,0.5)");
        gradient.addColorStop(1, "rgba(255,255,255,0)");

        ctx.save();
        // Fade in at start, fade out at end
        let alpha = Math.min(1, Math.max(0, (progress - 0.08) / 0.18)); // fade in
        alpha *= 1 - progress * 0.7; // fade out
        ctx.globalAlpha = alpha;
        ctx.strokeStyle = gradient;
        ctx.lineWidth = meteor.radius * 2.2;
        ctx.shadowBlur = 14;
        ctx.shadowColor = meteor.color;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(trailX, trailY);
        ctx.stroke();
        ctx.restore();

        // Head (glowing)
        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.shadowBlur = 18;
        ctx.shadowColor = meteor.color;
        ctx.beginPath();
        ctx.arc(x, y, meteor.radius * 1.5, 0, 2 * Math.PI);
        ctx.fillStyle = "#fff";
        ctx.fill();
        ctx.restore();
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationId: number;

        // Animate all meteors
        const animate = () => {
            ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
            const now = Date.now();
            meteorsRef.current = meteorsRef.current.filter(meteor => {
                const elapsed = (now - meteor.startTime) / 1000;
                const progress = elapsed / meteor.duration;
                if (progress > 1) return false;
                drawMeteor(ctx, meteor, progress);
                return true;
            });
            animationId = requestAnimationFrame(animate);
        };

        animate();

        // Add new meteors at intervals
        const interval = setInterval(() => {
            // Start from random X at the right edge, random Y in the top 40%
            const startX = CANVAS_WIDTH + 40;
            const startY = Math.random() * CANVAS_HEIGHT * 0.4;
            // End at random X in the left 20%, and further down (60-90% of canvas height)
            const endX = Math.random() * CANVAS_WIDTH * 0.2 - 40;
            const endY = startY + CANVAS_HEIGHT * (0.4 + Math.random() * 0.4);

            const radius = Math.random() * 0.7 + 0.5;
            const color = COLORS[Math.floor(Math.random() * COLORS.length)];
            const duration = ANIMATION_TIME + Math.random() * 0.6;

            meteorsRef.current.push({
                startX,
                startY,
                endX,
                endY,
                radius,
                color,
                startTime: Date.now(),
                duration
            });
        }, 2600);

        return () => {
            clearInterval(interval);
            cancelAnimationFrame(animationId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            width={CANVAS_WIDTH}
            height={CANVAS_HEIGHT}
            className="absolute top-0 left-0 w-screen h-full lg:h-screen z-[-10] pointer-events-none"
        ></canvas>
    );
};

export default MeteorShower;
