import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";
import { HiDocumentText } from "react-icons/hi2";

export const footerLinks = [
  {
    title: "GitHub",
    icon: FaGithub,
    link: "https://github.com/Prasad-Nalla",
  },
  {
    title: "LinkedIn",
    icon: FaLinkedin,
    link: "https://www.linkedin.com/in/nalla-prasad?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },
  {
    title: "Email",
    icon: MdEmail,
    link: "mailto:nallaprasad1212@gmail.com",
  },
  {
    title: "Resume",
    icon: HiDocumentText,
    link: "./resume.pdf?v=1.0.1",
  },
];