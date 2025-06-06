import { useEffect, useRef } from "react";

const NUMBER_STARS = 400;
const CANVAS_HEIGHT = 3000;
const CANVAS_WIDTH = 3000;

const Stars = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    const drawStars = () => {
        if (canvasRef.current) {
            const ctx = canvasRef.current.getContext("2d");
            for (let i = 0; i < NUMBER_STARS; i++) {
                const x = CANVAS_WIDTH * Math.random()
                const y = CANVAS_HEIGHT * Math.random();
                const r = 3.5 * Math.random();
                if (ctx) {
                    ctx.beginPath();
                    // styling of the star
                    ctx.shadowColor = `rgba(255, 255, 255, ${Math.random() + 0.5})`;
                    ctx.fillStyle = "white"
                    ctx.shadowBlur = 12;
                    ctx.shadowOffsetX = 0.6;
                    ctx.shadowOffsetY = -0.4;
                    // drawing logic
                    ctx.arc(x, y, r, 0, 2 * Math.PI);
                    ctx.fill();
                }
            }
        }
    }

    useEffect(() => {
        drawStars();
    }, []);

    return (
        <canvas className="w-full h-full z-[-100]" ref={canvasRef} height={CANVAS_HEIGHT} width={CANVAS_WIDTH}></canvas>
    )
};

export default Stars;