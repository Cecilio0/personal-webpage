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
];
