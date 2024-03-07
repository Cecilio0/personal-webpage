export interface Project {
  name: string;
  description: string[];
  technologies: string[];
  link: string;
}

export const projects: Project[] = [
  {
    name: "BTD6 API",
    description: [
      "This project consists of a REST API built on Spring Boot and with " +
        "jwt verification which allows users to obtain, create and update " +
        "information on BTD6 towers, heroes, maps and bloons. Certain types " +
        "of requests, such as record creation, may require a higher " +
        "security clearance ",
      "The API is also dockerized to allow for an easier deployment.",
      "Finally the documentation was built using Swagger and is available " +
        'at the "/swagger-ui/index.html" route when running the project.',
    ],
    technologies: [
      "Java",
      "Maven",
      "Spring Boot",
      "Spring Security",
      "MongoDB",
      "Swagger",
      "Docker",
    ],
    link: "https://github.com/Cecilio0/BTD6-API",
  },
  {
    name: "Personal Webpage",
    description: [
      "This project consists of a personal webpage developed using Vite + React " +
        "and is hosted on GitHub pages, which is the webpage you're seeing right now.",
      "The webpage mainly exists as a way to showcase some of the projects I have " +
        "done and talk a little bit about who I am and what I enjoy.",
      "Although I am no designer the webpage was built with the intention of it " +
        "having a rather minimalistic design while using colors I like or enjoy " +
        "aesthetically, such as purple or black.",
    ],
    technologies: [
      "React",
      "Vite",
      "HTML",
      "CSS",
      "TypeScript",
      "Node",
      "Github Workflows",
    ],
    link: "https://github.com/Cecilio0/personal-webpage",
  },
  {
    name: "Ningiri",
    description: [
      "This project consists of a short game developed using the Unity engine.",
      "The game is a 2d metroidvania that follows the story of an onigiri that" +
        "wants to prove his worth to the chef that once threw him in the trash.",
      "Currently the game consists of 2 levels. All of the character designs, " +
        "enemy designs and level layouts were made by us.",
    ],
    technologies: ["Unity", "C#"],
    link: "https://github.com/Cecilio0/Ningiri",
  },
  {
    name: "WIPCompany Backend",
    description: [
      "This project consists of a simple REST API built using Express and " +
        "TypeScript which was meant to allow users to register, login, " +
        "comment and manage saves on a particular webpage",
      "The API uses jwt as its main source of authentication",
      "Finally the documentation was built using Swagger and is available " +
        'at the "/swagger-ui/index.html" route when running the project.',
    ],
    technologies: ["Express", "TypeScript", "Node", "MongoDB"],
    link: "https://github.com/Cecilio0/WIPCompany-BackEnd",
  },
];
