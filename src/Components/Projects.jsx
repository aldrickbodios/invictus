import { projects } from "../data/projects.js"
import { images } from "../assets/images.js"

const Projects = () => {
    const getDurationText = (months) => {
        if (months < 12) {
            return `${months} month${months > 1 ? 's' : ''}`;

        } else {
            const years = months / 12;
            if ((years * 10) % 10 >= 5) {
                return `${Math.floor(years)}.5 years`;
            }
            return `${Math.floor(years)} year${Math.floor(years) > 1 ? 's' : ''}`;
        }
    };

    return (
        <section id="projects" className="section">
            <h2 className="text-(length:--text-h2) font-semibold mb-5">Featured Projects</h2>
            <p className="text-(length:--text-base) mb-10 text-(--text-muted)">Showcasing our commitment to engineering excellence</p>
            <ul className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-5">
                {projects.map((project) => (
                    <li key={project.title} 
                    className="bg-white rounded-xl h-100 shadow-md hover:shadow-xl 
                    transition-all duration-300 ease-in-out">
                        <div className="relative rounded-t-xl w-1/1 h-1/2 overflow-hidden">
                            <img src={project.image || images.project_placeholder} alt={project.title} 
                            className="w-1/1 h-1/1 object-cover filter-[brightness(70%)] hover:scale-105
                            transition-all duration-300 ease-in-out"/>
                            <span className="absolute top-5 left-5 f bg-(--primary) text-white text-xs px-2.5 py-1.5 rounded-2xl">{project.category}</span>
                            <h2 className="absolute bottom-5 left-5 text-left text-white text-base font-medium mx-2">{project.title}</h2>
                        </div>
                        <div className="text-sm p-5 text-left">
                            <p>{project.description}</p>
                            <div className="mt-2.5 flex gap-10">
                                <p>Duration<br /> <strong>{getDurationText(project.duration)}</strong></p>
                                <p>Budget<br /> <strong>{project.budget}</strong></p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
            {projects.length > 4 && (
                <a href="#"
                className="inline-block text-left my-5 no-underline
                transition-all duration-300 ease-in-out text-(--primary-lighter) hover:text-(--primary)">Show more...</a>
            )}
        </section>
    )
}

export default Projects