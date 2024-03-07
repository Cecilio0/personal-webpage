import githubLogo from "../assets/social-networks/github-mark-white.png";
import linkedInLogo from "../assets/social-networks/linked-in-white.png";
import whatsappLogo from "../assets/social-networks/whatsapp-white.png";

export interface Contact {
  name: string;
  icon: string;
  link: string;
}

export const contacts: Contact[] = [
  {
    name: "LinkedIn",
    icon: linkedInLogo,
    link: "https://linkedin.com/in/daniel-restrepo-q/",
  },
  {
    name: "GitHub",
    icon: githubLogo,
    link: "https://github.com/Cecilio0",
  },
  {
    name: "Whatsapp",
    icon: whatsappLogo,
    link: "https://api.whatsapp.com/send?phone=573116257519",
  },
];
