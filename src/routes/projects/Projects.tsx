import "./Projects.css";
import NavBar from "../../components/NavBar";
import ProjectDiv from "../../components/github-card/ProjectDiv";
import { projects } from "../../utils/projects";
import Footer from "../../components/footer/Footer";

function Projects() {
  return (
    <>
      <NavBar />
      <div className="projects">
        {projects.map((project, i) => {
          return (
            <ProjectDiv
              key={i}
              name={project.name}
              description={project.description}
              technologies={project.technologies}
              link={project.link}
            />
          );
        })}
      </div>
      <Footer />
    </>
  );
}

export default Projects;
