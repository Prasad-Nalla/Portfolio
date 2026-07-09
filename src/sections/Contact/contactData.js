import {
  Mail,
  // Github,
  // Linkedin,
  FileText,
} from "lucide-react";

export const contactInfo = [
  {
    title: "Email",
    value: "yourmail@gmail.com",
    icon: Mail,
    link: "mailto:yourmail@gmail.com",
  },
  // {
  //   title: "GitHub",
  //   value: "github.com/yourusername",
  //   icon: Github,
  //   link: "https://github.com/yourusername",
  // },
  // {
  //   title: "LinkedIn",
  //   value: "linkedin.com/in/yourusername",
  //   icon: Linkedin,
  //   link: "https://linkedin.com/in/yourusername",
  // },
  {
    title: "Resume",
    value: "Download Resume",
    icon: FileText,
    link: "/resume.pdf",
  },
];