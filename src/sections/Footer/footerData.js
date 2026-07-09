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
    link: "#",
  },
  {
    title: "LinkedIn",
    icon: FaLinkedin,
    link: "#",
  },
  {
    title: "Email",
    icon: MdEmail,
    link: "mailto:yourmail@gmail.com",
  },
  {
    title: "Resume",
    icon: HiDocumentText,
    link: "/resume.pdf",
  },
];