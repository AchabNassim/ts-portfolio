import { lazy, Suspense, useState } from "react";
import projectData from './projects.json';
import GithubIcon from "../ui/icons/GithubIcon";
import PlusIcon from "../ui/icons/PlusIcon";
import Spinner from "../ui/spinner/Spinner";
const ProjectModal = lazy(() => import("../ui/modal/ProjectModal"));


type Project = {
    name: string
    category: Array<string>
    url: string
    technologies: Array<string>
    shortDescription: string
    description: string
    videoSource: string | null
    poster: string | undefined
}

const projects : Array<Project> = projectData.projects;

const Projects = () => {
    const [index, setIndex] = useState(0);
    const [isChanged, setIsChanged] = useState(false);
    const [clickDirection, setClickDirection] = useState("right");
    const [isHovered, setIsHovered] = useState(false);
    const [isClickedModal, setIsClickedModal] = useState(false);
    const [dotsRendered, setDotsRendered] = useState(false);

    const changeIndex = (idx: number) => {
        if (idx === index) return;

        setClickDirection(idx > index ? "right" : "left");
        setIsChanged(true);
        setTimeout(() => {
            setIsChanged(false);
            setIndex(idx);
        }, 450);
    }

    const toggleModal = () => {
        setIsClickedModal(!isClickedModal);
    }

    const handleOnHover = () => {
        setDotsRendered(true);
        setIsHovered(true);
    }

    const handleOnLeave = () => {
        setIsHovered(false);
    }

    return (
        <>
            <div 
                id="projectSection"
                className="h-auto lg:h-[30%] xl:h-[26%] w-full modern-glass flex flex-col justify-between px-4 pb-6 lg:pb-2"
                onMouseEnter={handleOnHover}
                onMouseLeave={handleOnLeave}
            >
                <div id="projectContainer" className={`mt-1 h-full flex flex-col justify-around gap-4 lg:gap-0 items-around ${clickDirection === "left" ? "animate-appear-right" : "animate-appear-left"} ${isChanged ? `animate-disappear-${clickDirection}` : ""}`}>
                    {/* project info */}
                    <div id="infoContainer" className="h-auto w-[100%] lg:h-[98%] mx-auto flex flex-col gap-2 xl:gap-4">
                        <div className="flex flex-col gap-2 xl:gap-4">
                            <div className="flex flex-row justify-between items-center w-full" id="projectName">
                                <span className="blue-teal-highlight text-2xl lg:text-2xl xl:text-3xl font-semibold mr-4">{projects[index].name}</span>
                                <div className="flex-1">
                                    <div className="modern-divider w-full"></div>
                                </div>
                                <div className="flex flex-nowrap justify-center items-center gap-1.5">
                                    <GithubIcon url={projects[index].url} />
                                    <PlusIcon onClick={toggleModal} />
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                {projects[index].category.map((category) => (
                                    <div key={category} className="category-pill">
                                    <span className="category-pill-text">{category}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* short description */}
                        <div id="shortDescription">
                            <p className="text-light-gray-200 text-lg lg:text-lg xl:text-xl leading-relaxed text-balance">{projects[index].shortDescription}</p>
                        </div>
                    </div> 

                    {/* Dots navigation */}
                    <div className={`flex justify-center items-center gap-3.5 lg:gap-2.5 mb-1 xl:mb-1 xl:mt-4 ${dotsRendered ? "lg:visible" : "lg:invisible"} ${!isHovered ? "lg:animate-fade-out" : "lg:animate-fade-in"}`}>
                        {projects.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => changeIndex(idx)}
                                className={`project-dot w-[0.9rem] h-[0.9rem] lg:w-[0.7rem] lg:h-[0.7rem] ${idx === index ? "project-dot-active" : "project-dot-inactive"}`}
                                aria-label={`Go to project ${idx + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
            {/* project modal */}
            {isClickedModal && (
                <Suspense fallback={<Spinner />}>
                    <ProjectModal project={projects[index]} onClick={toggleModal} />
                </Suspense>
            )}
            {/* tailwind compiler specifics */}
            <div className="animate-disappear-left animate-disappear-right hidden"></div>
        </>
    )
};

export default Projects;