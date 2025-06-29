import React, { useState } from "react";

interface imageContainerProps {
    src: string;
    alt?: string;
    containerClass?: string;
    imgClass?: string;
}

const ImageContainer: React.FC<imageContainerProps> = ({ src, alt, containerClass = "", imgClass = "" }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <div className={`${containerClass}`}>
            {!isLoaded && (
                <div className={`w-full h-full flex items-center justify-center bg-black/20 rounded-full animate-pulse z-10`}>
                    <span className="text-gray-400">Loading...</span>
                </div>
            )}
            <img
                className={`${isLoaded ? "animate-fade-in" : "opacity-0"} ${imgClass}`}
                src={src}
                alt={alt}
                onLoad={() => setIsLoaded(true)}
            />
        </div>
    );
};

export default ImageContainer;
