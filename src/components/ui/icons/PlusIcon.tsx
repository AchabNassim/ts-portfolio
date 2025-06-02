import React from "react";

interface PlusIconProps {
    onClick: () => void;
    className?: string;
}

const PlusIcon: React.FC<PlusIconProps> = ({ onClick, className }) => (
    <div onClick={onClick} className="h-[1.65rem] w-[1.65rem] md:h-[2rem] md:w-[2rem]">
        <svg
            className={`fill-light-gray-100 hover:fill-gray-300 hover:cursor-pointer ${className} transition`}
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M13 0C5.83 0 0 5.83 0 13C0 20.17 5.83 26 13 26C20.17 26 26 20.17 26 13C26 5.83 20.17 0 13 0ZM18 14H14V18C14 18.552 13.552 19 13 19C12.448 19 12 18.552 12 18V14H8C7.448 14 7 13.552 7 13C7 12.448 7.448 12 8 12H12V8C12 7.448 12.448 7 13 7C13.552 7 14 7.448 14 8V12H18C18.552 12 19 12.448 19 13C19 13.552 18.552 14 18 14Z"
            />
        </svg>
    </div>
);

export default PlusIcon;