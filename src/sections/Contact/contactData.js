import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi2";
export const contactInfo = [
  {
    title: "Email",
    value: "yourmail@gmail.com",
    icon: MdEmail,
    link: "mailto:yourmail@gmail.com",
  },
  {
    title: "GitHub",
    value: "github.com/yourusername",
    icon: FaGithub,
    link: "https://github.com/yourusername",
  },
  {
    title: "LinkedIn",
    value: "linkedin.com/in/yourusername",
    icon: FaLinkedin,
    link: "https://linkedin.com/in/yourusername",
  },
  {
    title: "Resume",
    value: "Download Resume",
    icon: HiDocumentText,
    link: "/resume.pdf",
  },
];