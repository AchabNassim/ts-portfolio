import React, { useEffect, useRef } from "react";

const CANVAS_HEIGHT = window.innerHeight;
const CANVAS_WIDTH = window.innerWidth;
const ANIMATION_TIME = 1.4;

const MeteorShower = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const intervalRef = useRef<number | null>(null);

    const shootingStar = (
        ctx: CanvasRenderingContext2D,
        x: number,
        y: number,
        radius: number,
        progress: number
    ) => {
        ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        let alpha = 1;
        if (progress < 0.3) alpha = progress / 0.3;
        else if (progress > ANIMATION_TIME - 0.3)
            alpha = (ANIMATION_TIME - progress) / 0.3;

        ctx.globalAlpha = Math.max(0, Math.min(1, alpha));

        const starX = x - progress * 700;
        const starY = y + progress * 300;

        // Draw trail - line to the right of the star
        const trailLength = 2;
        const gradient = ctx.createLinearGradient(
        starX, starY,
        starX + (trailLength / 2) * Math.cos(-Math.PI / 4), // 45° up-right
        starY + (trailLength / 2) * Math.sin(-Math.PI / 4)
        );
        gradient.addColorStop(0, `rgba(255, 255, 255, ${alpha})`);
        gradient.addColorStop(1, `rgba(122, 194, 184, 0)`);

        ctx.strokeStyle = gradient;
        ctx.lineWidth = radius * 2;
        ctx.shadowBlur = 8;
        ctx.shadowColor = "rgba(122, 194, 184, 0.4)";
        ctx.beginPath();
        ctx.moveTo(starX, starY);
        ctx.lineTo(
        starX + trailLength * Math.cos(-Math.PI / 4),
        starY + trailLength * Math.sin(-Math.PI / 4)
        );
        ctx.stroke();

        // Draw star (circle)
        ctx.shadowBlur = 5;
        ctx.shadowColor = "rgba(122, 194, 184, 0.6)";
        ctx.beginPath();
        ctx.arc(starX, starY, radius, 0, 2 * Math.PI);
        ctx.fillStyle = "white";
        ctx.fill();

        // Reset
        ctx.shadowBlur = 0;
        ctx.globalAlpha = 1;
    };

    const animate = (
        ctx: CanvasRenderingContext2D,
        startTime: number,
        x: number,
        y: number,
        radius: number
    ) => {
        const now = Date.now();
        const elapsed = (now - startTime) / 1000;

        if (elapsed < ANIMATION_TIME) {
            shootingStar(ctx, x, y, radius, elapsed);
            requestAnimationFrame(() => animate(ctx, startTime, x, y, radius));
        }
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        intervalRef.current = setInterval(() => {
            const x = CANVAS_WIDTH / 2;
            const y = Math.floor(Math.random() * (CANVAS_HEIGHT / 2));
            const radius = Math.round(Math.random() * 1) + 0.8;
            animate(ctx, Date.now(), x, y, radius);
        }, 3000);

        return () => clearInterval(intervalRef.current!);
    }, []);

    return (
        <canvas
            ref={canvasRef}
            width={CANVAS_WIDTH}
            height={CANVAS_HEIGHT}
            className="absolute top-0 left-0 w-screen h-full lg:h-screen z-[-10]"
        ></canvas>
    );
};

export default MeteorShower;
