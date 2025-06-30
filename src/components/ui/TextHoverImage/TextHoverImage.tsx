import { useState, useRef } from "react";
import "./textHoverImage.css"

interface TextHoverImageProps {
    text: string,
    src: string,
    containerClass?: string,
    imgClass?: string,
    textClass?: string
}

const TextHoverImage : React.FC<TextHoverImageProps> = ({text, src, containerClass, imgClass, textClass}) => {
    const [isHovered, setIsHovered] = useState(false);
    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0
    });
    const containerRef = useRef<HTMLDivElement>(null);


    const handleMouseMove = (e: React.MouseEvent<HTMLSpanElement>) => {
        if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            setMousePosition({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top
            });
        }
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    }

    const handleMouseLeave = () => {
        setIsHovered(false);
    }

    return (
        <div
            id="container"
            ref={containerRef}
            className={`${containerClass} inline-block relative`}>
            <span onMouseEnter={() => handleMouseEnter()}
                onMouseLeave={() => handleMouseLeave()}
                onMouseMove={(e) => handleMouseMove(e)}
                className={`text-gray-100 ${textClass}`}>
                {text}
            </span>
            <img
                style={{
                    left: mousePosition.x,
                    top: mousePosition.y,
                    position: "absolute",
                    pointerEvents: "none",
                    transform: "translate(-50%, -50%)"
                }}
                className={`fixed-hover-img-size text-gray-100 rounded-2xl ${imgClass} ${!isHovered ? "hidden" : "visible"}`}
                src={src}
                alt={text}
            />
        </div>
    )
};

export default TextHoverImage;