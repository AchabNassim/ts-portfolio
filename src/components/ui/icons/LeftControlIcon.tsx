import React from "react";

interface LeftControlIconProps {
    onClick?: () => void;
    className?: string;
}

const LeftControlIcon: React.FC<LeftControlIconProps> = ({ onClick, className }) => (
    <div
        onClick={onClick}
        className={`h-[1.75rem] w-[1.75rem] md:h-[1.6rem] md:w-[1.6rem]`}
        role={onClick ? "button" : undefined}
        tabIndex={onClick ? 0 : undefined}
        aria-label="Previous"
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
                    <path d="M10.16602,6.93359c-0.29189,-0.02794 -0.58748,0.07456 -0.80273,0.28906l-7.07031,7.07031c-0.391,0.391 -0.391,1.02306 0,1.41406l7.07031,7.07031c0.191,0.191 0.44703,0.29297 0.70703,0.29297c0.129,0 0.25881,-0.02322 0.38281,-0.07422c0.374,-0.154 0.61719,-0.51983 0.61719,-0.92383v-4.07227h15c1.105,0 2,-0.895 2,-2v-2c0,-1.105 -0.895,-2 -2,-2h-15v-4.07031c0,-0.404 -0.24319,-0.76983 -0.61719,-0.92383c-0.0935,-0.039 -0.18981,-0.06295 -0.28711,-0.07227z"></path>
                </g>
            </g>
        </svg>
    </div>
);

export default LeftControlIcon;