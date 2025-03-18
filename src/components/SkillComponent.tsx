
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaPython,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";

export default function SkillComponent() {
  return (
    <div className="container flex w-auto md:w-[90%] items-center justify-center">
      {/* Container Azul */}
      <div>
        {/* Grid Responsivo */}
        <div className="text-center items-center justify-center md:p-0 grid grid-cols-5 sm:grid-cols-5 lg:grid-cols-5 md:grid-cols-2 gap-12 sm:gap-x-[100px] md:gap-8 place-items-center p-4 ">
          {[
            { Icon: FaHtml5 },
            { Icon: FaCss3Alt },
            { Icon: DiJavascript1 },
            { Icon: SiTypescript },
            { Icon: FaPython },
            { Icon: FaReact },
            { Icon: FaNodeJs },
            { Icon: RiTailwindCssFill },
            { Icon: FaGitAlt },
            { Icon: FaGithub },
          ].map(({ Icon }, index) => (
            <div key={index} className="group flex justify-center">
              <Icon className="w-[40px] sm:w-[55px] md:w-[50px] h-[40px] sm:h-[55px] md:h-[55px] lg-w[100px] lg-h[100px] text-white transition-transform duration-300 group-hover:scale-110" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
