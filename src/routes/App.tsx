import "./App.css";
// import reactLogo from "../assets/react.svg";
// import viteLogo from "../assets/vite.svg";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <div className="app">
        {/* <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div> */}
        <h1>About Me</h1>
        <div className="card">
          <p>
            Hi, my name is{" "}
            <span style={{ color: "rgb(155, 40, 255)" }}>Daniel</span>, though
            some people know me as
            <span style={{ color: "rgb(155, 40, 255)" }}> Dread9182 </span>
            or
            <span style={{ color: "rgb(155, 40, 255)" }}> Cecilio</span>, I am a
            Computer Science student based in Medellín, Colombia. With a passion
            for software development, competitive programming and gaming, I
            strive to learn whilst having fun and creating meaningful
            relationships.
          </p>
          <p>
            I'm proficient in
            <span style={{ color: "rgb(236, 32, 37)" }}> Java</span>,
            <span style={{ color: "rgb(155, 40, 255)" }}> Python</span>,
            <span style={{ color: "rgb(247, 223, 30)" }}> JavaScript</span> and
            <span style={{ color: "rgb(49, 121, 199)" }}> TypeScript</span>, I
            also have knowledge in SQL and NoSQL databases, more specifically
            <span style={{ color: "rgb(50,99,147)" }}> PostgreSQL</span> and
            <span style={{ color: "rgb(7,160,76)" }}> MongoDB</span>, as well as
            REST APIs. Over the course of my studies, I have worked on several
            projects spanning different libraries and frameworks, such as:
          </p>
          <ul>
            {/* add colors */}
            <li>Spring Boot</li>
            <li>NestJs</li>
            <li>NextJs</li>
            <li>React</li>
          </ul>
          <p>
            If you are interested in checking out some of the projects I have
            done I would encourage you to check out the &nbsp;
            <Link to={`/projects`}>
              <span className="link-p"> projects </span>
            </Link>
            &nbsp; tab or my &nbsp;
            <a className="link-p" href="https://github.com/Dread9182">
              github
            </a>
            &nbsp; profile.
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </>
  );
}

export default App;
