import "./App.css";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import springLogo from "../assets/frameworks/spring-boot-logo.png";
import nextLogo from "../assets/frameworks/nextjs-logo.svg";
import nestLogo from "../assets/frameworks/nestjs-logo.svg";
import expressLogo from "../assets/frameworks/express-logo.png";
import reactLogo from "../assets/frameworks/react-logo.svg";
import Footer from "../components/footer/Footer";

function App() {
  const frameworks = [
    {
      name: "Spring Boot",
      color: "rgb(109,179,63)",
      logo: springLogo,
      url: "https://spring.io/projects/spring-boot",
    },
    {
      name: "NextJs",
      color: "rgba(255, 255, 255, 0.87)",
      logo: nextLogo,
      url: "https://nextjs.org",
    },
    {
      name: "NestJs",
      color: "rgb(224,34,78)",
      logo: nestLogo,
      url: "https://nestjs.com",
    },
    {
      name: "Express",
      color: "rgba(255, 255, 255, 0.87)",
      logo: expressLogo,
      url: "https://expressjs.com",
    },
    {
      name: "React",
      color: "rgba(0,204,255,255)",
      logo: reactLogo,
      url: "https://react.dev",
    },
  ];

  const usedTecnologies = frameworks.map((framework) => {
    return (
      <li key={framework.name}>
        <a href={framework.url} style={{ color: framework.color }}>
          {framework.name}
          <img src={framework.logo} alt={framework.name + " logo"} />
        </a>
      </li>
    );
  });

  return (
    <>
      <NavBar />
      <div className="app">
        <h1>About Me</h1>
        <div className="card">
          <p>
            Hi, my name is
            <span> Daniel</span>, though some people know me as
            <span> Cecilio0</span>, I am a Computer Science student based in
            Medellín, Colombia. With a passion for software development,
            competitive programming and gaming.
          </p>
          <p>
            I am proficient in
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
            <Link to={`/personal-webpage/projects`} className="link-p">
              projects
            </Link>
            &nbsp;tab or my&nbsp;
            <a className="link-p" href="https://github.com/Cecilio0">
              github
            </a>
            &nbsp;profile.
          </p>
          <p>
            I am a very curious person and enjoy learning and sharing knowledge
            with others. As such I was a student tutor for the programming
            fundamentals and data structures courses, and have also participated
            in several clubs, such as the competitive programming, cloud and
            game development clubs.
          </p>
          <p>
            If you are interested in contacting me you can go to the footer,
            which contains all of my public socials and contact information.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
