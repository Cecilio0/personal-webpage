import "./Footer.css";
import { Contact, contacts } from "../../utils/contacts";

export default function Footer() {
  const socials = contacts.map((contact: Contact) => {
    return (
      <li key={contact.name}>
        <a href={contact.link}>
          <img src={contact.icon} alt={contact.name} />
        </a>
      </li>
    );
  });

  return (
    <footer className="footer">
      <ul>{socials}</ul>
    </footer>
  );
}
