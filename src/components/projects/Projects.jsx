import React, { useState, useEffect } from 'react';
import { useContext } from 'react';
import { DataContext } from '../dataprovider/Dataprovider';
import Title from '../layouts/Title';
import ProjectCard from './ProjectCard';

function Projects() {
    const { data } = useContext(DataContext);
    const initialShowCount = 3; // Initial number of projects to show
    const [showCount, setShowCount] = useState(initialShowCount);

    useEffect(() => {
        // This effect runs once on mount and reset showCount when the component remounts
        setShowCount(initialShowCount);
    }, []); // Empty dependency array means this effect runs on mount only

    if (!data || !data.projects) return <p>Loading data...</p>;

    const sortedProjects = data.projects.filter(project => project.enabled).sort((a, b) => a.sequence - b.sequence);

    const viewMore = () => {
        setShowCount(sortedProjects.length); // Show all projects
    };

    return (
        <section id="projects" className="w-full py-20 border-b-[1px] border-b-black">
            <div className="flex justify-center items-center text-center">
                <Title title="VISIT MY PROJECTS AND KEEP YOUR FEEDBACK" des="My Projects" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 gap-6 lgl:gap-14 my-10">
                {sortedProjects.slice(0, showCount).map((project) => (
                    <ProjectCard key={project._id} projects={project} />
                ))}
            </div>
            {showCount < sortedProjects.length && (
                <div className="flex justify-center">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={viewMore}
                    >
                        View More
                    </button>
                </div>
            )}
        </section>
    );
}

export default Projects;
