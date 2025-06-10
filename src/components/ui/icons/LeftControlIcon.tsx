import React from "react";

interface LeftControlIconProps {
    onClick?: () => void;
    className?: string;
}

const LeftControlIcon: React.FC<LeftControlIconProps> = ({ onClick, className }) => (
    <div
        onClick={onClick}
        className={`h-[1.4rem] w-[1.4rem] md:h-[1.38rem] md:w-[1.38rem]`}
        role={onClick ? "button" : undefined}
        tabIndex={onClick ? 0 : undefined}
        aria-label="Previous"
    >
        <svg
            width="100%"
            height="100%"
            viewBox="0 0 200 380"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`fill-light-gray-100 hover:fill-gray-300 hover:cursor-pointer ${className} transition`}
        >
            <path d="M166.815 379.998C162.546 380.012 158.328 379.117 154.471 377.379C150.614 375.642 147.215 373.105 144.526 369.956L6.50083 207.114C2.29774 202.258 0 196.167 0 189.88C0 183.594 2.29774 177.503 6.50083 172.646L149.384 9.8045C154.234 4.26199 161.204 0.776517 168.761 0.114844C176.317 -0.546829 183.841 1.6695 189.677 6.27625C195.512 10.883 199.182 17.5028 199.879 24.6794C200.576 31.8561 198.242 39.0016 193.392 44.5441L65.6543 190.016L189.105 335.488C192.6 339.472 194.819 344.323 195.502 349.467C196.184 354.612 195.301 359.834 192.956 364.517C190.611 369.199 186.903 373.146 182.27 375.889C177.638 378.633 172.274 380.059 166.815 379.998Z" />
        </svg>
    </div>
);

export default LeftControlIcon;