interface CloseIconProps {
    onClick: () => void;
    className?: string;
}

const CloseIcon: React.FC<CloseIconProps> = ({ onClick, className }) => (
    <div onClick={onClick} className="w-[2.5rem] h-[2.5rem]">
        <svg
            className={`fill-light-gray-100 hover:fill-gray-300 hover:cursor-pointer ${className} transition`}
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0,0,256,256"
            fillRule="nonzero"
        >
            <g
                fillRule="nonzero"
                stroke="none"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                strokeMiterlimit="10"
                strokeDasharray=""
                strokeDashoffset="0"
                fontFamily="none"
                fontWeight="none"
                fontSize="none"
                textAnchor="none"
                style={{ mixBlendMode: "normal" }}
            >
                <g transform="scale(8,8)">
                    <path d="M16,4c-6.61558,0 -12,5.38443 -12,12c0,6.61557 5.38442,12 12,12c6.61558,0 12,-5.38443 12,-12c0,-6.61557 -5.38442,-12 -12,-12zM16,6c5.5347,0 10,4.46531 10,10c0,5.53469 -4.4653,10 -10,10c-5.5347,0 -10,-4.46531 -10,-10c0,-5.53469 4.4653,-10 10,-10zM12.70703,11.29297l-1.41406,1.41406l3.29297,3.29297l-3.29297,3.29297l1.41406,1.41406l3.29297,-3.29297l3.29297,3.29297l1.41406,-1.41406l-3.29297,-3.29297l3.29297,-3.29297l-1.41406,-1.41406l-3.29297,3.29297z"></path>
                </g>
            </g>
        </svg>
    </div>
);

export default CloseIcon;