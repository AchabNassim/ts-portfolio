import React from "react";

interface GmailIconProps {
    url: string;
    className?: string;
}

const GmailIcon: React.FC<GmailIconProps> = ({ url, className = "" }) => (
    <div className={`socialContainer h-[1.65rem] w-[1.65rem] md:h-[2rem] md:w-[2rem] ${className}`}>
        <a href={url} target="_blank" rel="noopener noreferrer" aria-label="Gmail address" title="Gmail">
            <svg
                className="fill-light-gray-100 hover:fill-gray-300 transition"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                id="emailSvg"
            >
                <path
                    d="M256 0C114.615 0 0 114.615 0 256s114.615 256 256 256 256-114.615 256-256S397.385 0 256 0zm156 353.5c0 20.193-16.37 36.562-36.562 36.562H136.562c-20.193 0-36.562-16.37-36.562-36.562v-195c0-20.193 16.37-36.562 36.562-36.562h238.875c20.193 0 36.562 16.37 36.562 36.562v195z"
                    className="color000000 svgShape"
                ></path>
                <path
                    d="M334.463 166.703 256 212.004l-78.463-45.301c-8.744-5.048-19.924-2.052-24.973 6.691-5.048 8.744-2.052 19.924 6.691 24.973l87.604 50.578.001-.002a18.383 18.383 0 0 0 9.139 2.448 18.367 18.367 0 0 0 9.139-2.448l.001.002 87.604-50.578c8.744-5.048 11.74-16.229 6.691-24.973-5.046-8.743-16.227-11.739-24.971-6.691z"
                    className="color000000 svgShape"
                ></path>
            </svg>
        </a>
    </div>
);

export default GmailIcon;