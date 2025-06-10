import React from "react";

interface RightControlIconProps {
    onClick?: () => void;
    className?: string;
}

const RightControlIcon: React.FC<RightControlIconProps> = ({ onClick, className }) => (
    <div
        onClick={onClick}
        className={`h-[1.4rem] w-[1.4rem] md:h-[1.38rem] md:w-[1.38rem]`}
        role={onClick ? "button" : undefined}
        tabIndex={onClick ? 0 : undefined}
        aria-label="Next"
    >
        <svg
            width="100%"
            height="100%"
            viewBox="0 0 200 380"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`fill-light-gray-100 hover:fill-gray-300 hover:cursor-pointer ${className} transition`}
        >
            <path d="M28.3815 379.951C21.7618 379.963 15.3464 377.76 10.2492 373.722C7.38043 371.448 5.00902 368.656 3.27082 365.505C1.53262 362.354 0.461786 358.906 0.119657 355.359C-0.222473 351.812 0.170828 348.235 1.27702 344.833C2.38322 341.432 4.18055 338.272 6.56613 335.535L133.492 190.371L11.0992 44.9368C8.74582 42.1666 6.98836 38.979 5.92786 35.5574C4.86735 32.1358 4.52472 28.5475 4.91964 24.9989C5.31456 21.4503 6.43923 18.0113 8.22905 14.8795C10.0189 11.7477 12.4385 8.98499 15.3489 6.75005C18.2803 4.28452 21.7131 2.42481 25.432 1.28763C29.1509 0.150452 33.0755 -0.23964 36.9596 0.141818C40.8437 0.523276 44.6033 1.66806 48.0026 3.50432C51.4019 5.34059 54.3674 7.82868 56.7131 10.8125L193.555 173.309C197.722 178.155 200 184.234 200 190.507C200 196.78 197.722 202.858 193.555 207.704L51.8968 370.201C49.0546 373.479 45.4442 376.07 41.3585 377.764C37.2728 379.458 32.8269 380.207 28.3815 379.951Z"/>
        </svg>
    </div>
);

export default RightControlIcon;