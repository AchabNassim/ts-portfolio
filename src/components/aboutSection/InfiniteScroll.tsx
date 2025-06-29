import { useState } from "react";

const InfiniteScroll = () => {
    const [isHovered, setIsHovered] = useState(false);

    const tech : Array<string> = ['html', 'css', 'javascript', 'typescript', 'react', 'zustand', 'tailwind', 'nodejs', 'express', 'postgresql', 'mongodb', 'redis', 'jest', 'php', 'mariadb', 'wordpress', 'c', 'c++', 'docker', 'linux', 'nginx', 'git', 'figma', 'jwt', 'web_component', 'web_socket'];
    const liItems = tech.map((value: string, index: number) =>
    <li className="w-10 lg:w-11 h-full mx-2" key={index}>
            <img
                className="max-w-none h-full w-full text-gray-400"
                src={`./assets/images/tech/${value}.svg`}
                alt={value}
            />
        </li>
    );

    return (
        <div className="h-full w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_140px,_black_calc(100%-140px),transparent_100%)]"
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)} 
        >
            <ul className={`flex items-center justify-center md:justify-start animate-horizontal-scroll ${isHovered ? "pause" : ""}`}>
                {liItems}
            </ul>
            <ul className={`flex items-center justify-center md:justify-start animate-horizontal-scroll ${isHovered ? "pause" : ""}`} aria-hidden={true}>
                {liItems}
            </ul>
        </div>
    );
};

export default InfiniteScroll;