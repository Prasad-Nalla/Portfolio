import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi2";
export const contactInfo = [
  {
    title: "Email",
    // value: "yourmail@gmail.com",
    icon: MdEmail,
    link: "mailto:nallaprasad1212@gmail.com",
  },
  {
    title: "GitHub",
    // value: "github.com/yourusername",
    icon: FaGithub,
    link: "https://github.com/Prasad-Nalla",
  },
  {
    title: "LinkedIn",
    // value: "linkedin.com/in/yourusername",
    icon: FaLinkedin,
    link: "https://www.linkedin.com/in/nalla-prasad?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },
  {
    title: "Resume",
    value: "Download Resume",
    icon: HiDocumentText,
    link: "./resume.pdf?v=1.0.1",
  },
];