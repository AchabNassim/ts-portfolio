import React from "react";

interface ArrowRightProps {
    onClick?: () => void;
    className?: string;
};

const ArrowRight: React.FC<ArrowRightProps> = ({ onClick, className }) => (
    <div>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0,0,256,256"
            width="90px"
            height="90px"
            fillRule="nonzero"
            onClick={onClick}
            className={`fill-light-gray-200 hover:fill-gray-300 hover:cursor-pointer ${className} transition`}
        >
            <g fillRule="nonzero" stroke="none">
                <g transform="scale(3.55556,3.55556)">
                    <path d="M25.977,59.542c-1.04,0 -2.079,-0.403 -2.863,-1.207c-1.542,-1.581 -1.512,-4.114 0.069,-5.656l17.113,-16.698l-17.074,-16.66c-1.581,-1.542 -1.611,-4.075 -0.069,-5.656c1.544,-1.582 4.076,-1.612 5.657,-0.069l20.008,19.522c0.771,0.752 1.206,1.785 1.206,2.863c0,1.078 -0.435,2.11 -1.206,2.863l-20.047,19.56c-0.779,0.76 -1.787,1.138 -2.794,1.138z"></path>
                </g>
            </g>
        </svg>
    </div>
);

export default ArrowRight;
