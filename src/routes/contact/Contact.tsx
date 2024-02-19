import NavBar from "../../components/NavBar";
import "./Contact.css";
import githubLogo from "../../assets/github-mark-white.png";
import linkedInLogo from "../../assets/linked-in-white.png";
import gmailLogo from "../../assets/gmail-white.png";

function Contact() {
  const items = [
    {
      name: "GitHub",
      icon: githubLogo,
      user: "Cecilio0",
      link: "https://github.com/Cecilio0",
    },
    {
      name: "LinkedIn",
      icon: linkedInLogo,
      user: "Daniel Restrepo",
      link: "https://linkedin.com/in/daniel-restrepo-q/",
    },
    {
      name: "Email",
      icon: gmailLogo,
      user: "drones9182@gmail.com",
      link: "",
    },
  ];

  const listedItems = items.map((item) => {
    return (
      <li key={item.name}>
        <div className="social-media-div">
          <p>{item.name}&nbsp;</p>
          <img src={item.icon} alt={item.name + " icon"} />
        </div>
        <p>{item.user}</p>
        <a
          href={item.link}
          className="link-p"
          style={{ color: "rgb(155, 155, 155)", margin: "1em 0" }}
        >
          {item.link}
        </a>
      </li>
    );
  });

  return (
    <>
      <NavBar />
      <div className="contact">
        <ul>{listedItems}</ul>
      </div>
    </>
  );
}

export default Contact;
