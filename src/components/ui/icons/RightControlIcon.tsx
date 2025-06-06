import React from "react";

interface RightControlIconProps {
    onClick?: () => void;
    className?: string;
}

const RightControlIcon: React.FC<RightControlIconProps> = ({ onClick, className }) => (
    <div
        onClick={onClick}
        className={`h-[1.65rem] w-[1.65rem] md:h-[1.6rem] md:w-[1.6rem]`}
        role={onClick ? "button" : undefined}
        tabIndex={onClick ? 0 : undefined}
        aria-label="Next"
    >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            width="100%"
            height="100%"
            fill="none"
            className={`fill-light-gray-100 hover:fill-gray-300 hover:cursor-pointer ${className} transition`}
        >
            <g fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: "normal" }}>
                <g transform="scale(8.53333,8.53333)">
                    <path d="M20,6.92773c-0.129,0 -0.25881,0.02417 -0.38281,0.07617c-0.374,0.154 -0.61719,0.51983 -0.61719,0.92383v4.07031h-15c-1.105,0 -2,0.895 -2,2v2c0,1.105 0.895,2 2,2h15v4.07227c0,0.404 0.24319,0.76983 0.61719,0.92383c0.374,0.156 0.80284,0.0692 1.08984,-0.2168l7.07031,-7.07227c0.391,-0.391 0.391,-1.02111 0,-1.41211l-7.07031,-7.07227c-0.191,-0.191 -0.44703,-0.29297 -0.70703,-0.29297z"></path>
                </g>
            </g>
        </svg>
    </div>
);

export default RightControlIcon;