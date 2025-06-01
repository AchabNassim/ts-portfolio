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

    return (
        <>
            <div 
                id="projectSection"
                className="h-auto pb-4 lg:h-[38%] w-full modern-glass font-medium overflow-hidden"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onTouchStart={() => setIsHovered(true)}
                onTouchEnd={() => setIsHovered(false)}
            >
                <div id="projectContainer" className={`mt-2 h-full flex flex-col ${clickDirection === "left" ? "animate-appear-right" : "animate-appear-left"} ${isChanged ? `animate-disappear-${clickDirection}` : ""}`}>
                    {/* project info */}
                    <div id="infoContainer" className="h-50 w-[88%] lg:h-[90%] mx-auto flex flex-col gap-1">
                        <h1 className="text-3xl category-pill-text">Projects</h1>
                        <div className="flex flex-col gap-2">
                            <div className="flex flex-row items-center w-full" id="projectName">
                                <p className="text-2xl font-semibold text-gray-100 whitespace-nowrap drop-shadow-[0_1px_6px_rgba(20,40,80,0.12)]">{projects[index].name}</p>
                                <div className="flex-1 mx-4">
                                    <div className="modern-divider w-full"></div>
                                </div>
                                <div className="flex flex-nowrap justify-center items-center gap-1">
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
                            <p className="text-[1.25rem] text-gray-200 font-normal">{projects[index].shortDescription}</p>
                        </div>
                    </div> 

                    {/* Dots navigation */}
                    <div className="flex justify-center items-center gap-2.5 mb-1 xl:mb-3 mt-8 xl:mt-2">
                        {projects.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => changeIndex(idx)}
                                className={`project-dot ${idx === index ? "project-dot-active" : "project-dot-inactive"} ${!isHovered ? "animate-fade-out" : "animate-fade-in"}`}
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