import {
  FaJava,
  FaPython,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
  
} from "react-icons/fa6";

export default function Test() {
  return (
    <div className="min-h-screen bg-black text-white flex gap-8 items-center justify-center text-6xl">
      <FaJava />
      <FaPython />
      <FaReact />
      <FaHtml5 />
      <FaCss3Alt />
      <FaNodeJs />
      <FaGitAlt />
    </div>
  );
}