import InfiniteScroll from "./InfiniteScroll";

const SkillSection = () => {
    return (
        <div id="skillSection" className="h-auto lg:h-[64%] xl:h-[58%] w-full modern-glass flex flex-col justify-around px-4 py-4">
            {/* About Header */}
            <div className="w-full flex items-center mb-2">
                <span className="blue-teal-highlight text-2xl lg:text-2xl xl:text-3xl font-semibold mr-4 mb-0.5">About</span>
                <div className="flex-1">
                    <div className="modern-divider w-full"></div>
                </div>
            </div>
            {/* About Text */}
            <p className="text-light-gray-200 text-lg lg:text-lg xl:text-xl leading-relaxed mb-4 text-balance">
                Software Engineering student at <span className="blue-highlight underline decoration-2 decoration-blue-600 hover:decoration-blue-500 transition"><a href="https://www.42network.org/" target="_blank"> 42 network</a></span>. If my head isn't glued to the computer's screen, I'm either playing chess or training calisthenics.
            </p>
            {/* Education */}
            <div className="w-full flex flex-col gap-3 mb-2.5">
                <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-gradient-to-tr from-blue-400 to-teal-400 shadow"></div>
                    <div>
                        <div className="text-md lg:text-base xl:text-large font-medium text-light-gray-100">1337, Capo Negro</div>
                        <div className="text-sm lg:text-sm xl:text-base text-light-gray-400">2022 – 2025 &middot; Computer Science (Ongoing)</div>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-gradient-to-tr from-blue-400 to-teal-400 shadow"></div>
                    <div>
                        <div className="text-md lg:text-base xl:text-large font-medium text-light-gray-100">OFPPT Solicode, Tangier</div>
                        <div className="text-sm lg:text-sm xl:text-base text-light-gray-400">2021 – 2022 &middot; Full-Stack Development (Completed)</div>
                    </div>
                </div>
            </div>
            {/* Skills Header */}
            <div className="w-full flex items-center mb-4 lg:mb-2 mt-2">
                <span className="blue-teal-highlight text-2xl lg:text-2xl xl:text-3xl font-semibold mr-4">Skills</span>
                <div className="flex-1">
                    <div className="modern-divider w-full"></div>
                </div>
            </div>
            {/* Skills Infinite Scroll in glassy bg */}
            <div className="w-full bg-glass px-2 py-3 rounded-xl">
                <InfiniteScroll />
            </div>
        </div>
    );
};

export default SkillSection;