import "./App.css";
// import reactLogo from "../assets/react.svg";
// import viteLogo from "../assets/vite.svg";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";

function App() {
  const frameworks = [
    {
      name: "Spring Boot",
      color: "rgb(109,179,63)",
      url: "https://spring.io/projects/spring-boot",
    },
    {
      name: "NextJs",
      color: "rgba(255, 255, 255, 0.87)",
      url: "https://nextjs.org",
    },
    {
      name: "NestJs",
      color: "rgb(224,34,78)",
      url: "https://nestjs.com",
    },
    {
      name: "Express",
      color: "rgba(255, 255, 255, 0.87)",
      url: "https://expressjs.com",
    },
    {
      name: "React",
      color: "rgb(1,127,165)",
      url: "https://react.dev",
    },
  ];

  const usedTecnologies = frameworks.map((framework) => {
    return (
      <li key={framework.name}>
        <a
          href={framework.url}
          className="link-p"
          // style={{ color: "rgba(255, 255, 255, 0.87)" }}
        >
          {framework.name}
        </a>
      </li>
    );
  });

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
            Hi, my name is
            <span> Daniel</span>, though some people know me as
            <span> Dread9182 </span>
            or
            <span> Cecilio</span>, I am a Computer Science student based in
            Medellín, Colombia. With a passion for software development,
            competitive programming and gaming, I strive to learn whilst having
            fun and creating meaningful relationships.
          </p>
          <p>
            I'm proficient in
            <span> Java</span>,<span> Python</span>,&nbsp;
            <span>JavaScript</span>
            &nbsp;and
            <span> TypeScript</span>, I also have knowledge in <span>SQL</span>{" "}
            and <span>NoSQL </span>
            databases, more specifically
            <span> PostgreSQL</span> and
            <span> MongoDB</span>, as well as <span>REST APIs</span>. Over the
            course of my studies, I have worked on several projects spanning
            different libraries and frameworks, such as:
          </p>
          <ul>{usedTecnologies}</ul>
          <p>
            If you are interested in checking out some of the projects I have
            done I would encourage you to check out the&nbsp;
            <Link to={`/projects`}>
              <span className="link-p" style={{ color: "rgb(155,40,255" }}>
                projects
              </span>
            </Link>
            &nbsp;tab or my&nbsp;
            <a className="link-p" href="https://github.com/Dread9182">
              github
            </a>
            &nbsp;profile.
          </p>
          <p>
            If you are interested in contacting me you can go to the&nbsp;
            <Link to={`/contact`}>
              <span className="link-p" style={{ color: "rgb(155,40,255" }}>
                contact
              </span>
            </Link>
            &nbsp;tab, which contains all of my public socials and contact
            information.
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
