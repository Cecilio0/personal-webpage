import "./ProjectDiv.css";
import { Project } from "../../utils/projects";

function ProjectDiv(project: Project) {
  return (
    <div className="project-div">
      <h2>{project.name}</h2>
      {/* <p>{project.description}</p> */}
      {project.description.map((text, i) => {
        return <p key={i}>{text}</p>;
      })}

      <p style={{ padding: "1.5em 0 0 0", color: "" }}>Technologies used:</p>
      <ul>
        <li style={{ color: "rgba(255,255,255,0.87)" }}>•</li>
        {project.technologies.map((technology, i) => {
          return <li key={technology + "-" + i}>{technology}</li>;
        })}
      </ul>
      <a href={project.link} className="link-p">
        GitHub page
      </a>
      <hr />
    </div>
  );
}

export default ProjectDiv;
