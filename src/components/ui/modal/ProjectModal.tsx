import React, { useState } from "react";
import CloseIcon from "../icons/CloseIcon";
import GithubIcon from "../icons/GithubIcon";

type Project = {
    name: string
    category: string
    url: string
    technologies: Array<string>
    shortDescription: string
    description: string
    videoSource: string | null
    poster: string | undefined
};

type ProjectModalProps = {
    className?: string, 
    project: Project,
    onClick: () => void;
};

const ProjectModal: React.FC<ProjectModalProps> = ({ className, project, onClick }) => {
    const [mediaLoaded, setMediaLoaded] = useState(false);

    return (
        <>
            {/* Blur background overlay */}
            <div className={`fixed inset-0 bg-black/40 backdrop-blur-md z-[1000] ${className}`} />
            {/* Modal wrapper for centering and scrolling */}
            <div
                className="fixed inset-0 z-[1001] flex items-center justify-center p-2"
                onClick={onClick}
            >
                <div
                    id="modal"
                    className="w-[95vw] lg:w-[70vw] max-w-3xl h-[90vh] bg-glass shadow-2xl rounded-2xl flex flex-col p-4 overflow-auto relative animate-fade-in"
                    onClick={e => e.stopPropagation()}
                >
                    {/* Close Icon */}
                    <div
                        onClick={onClick}
                        className="absolute top-1 right-2 z-10 text-gray-400 hover:text-gray-700 transition-colors"
                    >
                        <CloseIcon onClick={onClick} className="w-12 h-12" />
                    </div>

                    <div className="w-full mb-6 relative flex justify-center items-center h-[40vh] max-h-[40vh]">
                        {!mediaLoaded && (
                            <div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-xl animate-pulse z-10">
                                <span className="text-gray-400">Loading...</span>
                            </div>
                        )}
                        {project.videoSource ? (
                            <video
                                src={project.videoSource}
                                poster={project.poster}
                                controls
                                onLoadedData={() => setMediaLoaded(true)}
                                className={`w-full max-h-[40vh] rounded-xl object-contain bg-gray-200 transition-opacity duration-500 ${mediaLoaded ? "animate-fade-in" : "opacity-0"}`}
                            />
                        ) : (
                            <img
                                src={project.poster}
                                alt={project.name}
                                onLoad={() => setMediaLoaded(true)}
                                className={`w-full max-h-[40vh] rounded-xl object-contain bg-gray-200 transition-opacity duration-500 ${mediaLoaded ? "animate-fade-in" : "opacity-0"}`}
                            />
                        )}
                    </div>

                    {/* Header: Name, Line, GitHub */}
                    <div className="flex flex-row items-center w-full mb-6" id="projectName">
                        <p className="text-3xl font-semibold whitespace-nowrap" style={{ color: "var(--color-light-gray-100)" }}>
                            {project.name}
                        </p>
                        <div className="flex-1 mx-4">
                            <div className="modern-divider w-full"></div>
                        </div>
                        <GithubIcon url={project.url} />
                    </div>
                    {/* Technologies */}
                    <ul className="flex items-center gap-2 mb-6" id="technologiesList">
                        {project.technologies.map((technology, index) => (
                            <li className="technologiesLi" key={index}>
                                <img
                                    className="h-10 w-10"
                                    src={`./assets/images/tech/${technology.toLowerCase()}.svg`}
                                    height={30}
                                    width={30}
                                    alt={technology}
                                    title={technology}
                                />
                            </li>
                        ))}
                    </ul>
                    {/* Description */}
                    <p
                        className="text-lg leading-relaxed"
                        style={{ color: "var(--color-light-gray-100)" }}
                    >
                        {project.description}
                    </p>
                </div>
            </div>
        </>
    );
};

export default ProjectModal;