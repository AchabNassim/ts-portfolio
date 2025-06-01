import InfiniteScroll from "./InfiniteScroll";

const SkillSection = () => {
    return (
        <div id="skillSection" className="h-auto lg:h-[58%] w-full modern-glass">
            <div className="h-[60%]"></div>
            <InfiniteScroll />
        </div>
    );
};

export default SkillSection;