import { motion } from "framer-motion";


import { ImLinkedin2 } from "react-icons/im";
import { SiGmail } from "react-icons/si";
import { PiGithubLogoFill } from "react-icons/pi";

export default function Footer() {
  return (
    <motion.div
      id="contato"
      className="container mx-auto px-4 md:px-20 py-10"
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full">
        <span className="text-withe text-2xl md:text-3xl text-white font-bold">
          Redes Sociais
          
        </span>
        

        <section className="flex flex-wrap items-center justify-center md:justify-start p-4 md:p-10 pt-8 md:pt-14 gap-6 md:gap-10 text-white">
          <div>
            <a
              href="mailto:jeancordeiro.f@gmail.com"
              target="_blank"
              className="flex flex-col justify-center items-center hover:opacity-[50%] transition-all duration-200"
            >
              <SiGmail className=" text-withe w-8 md:w-10 h-8 md:h-10 text-center justify-center items-center" />
              <span className="mt-2">GMAIL</span>
            </a>
          </div>

          <div>
            <a
              href="https://www.linkedin.com/in/jean-carlos-b9b117356/"
              target="_blank"
              className="flex flex-col justify-center items-center hover:opacity-[50%] transition-all duration-200"
            >
              <ImLinkedin2 className="border-none text-withe w-8 md:w-10 h-8 md:h-10 text-center justify-center items-center" />

              <span className="mt-2 space-y-5">LINKEDIN</span>
            </a>
          </div>

          <div>
            <a
              href="https://github.com/devfiorentin"
              target="_blank"
              className="flex flex-col justify-center items-center hover:opacity-[50%] transition-all duration-200"
            >
              <PiGithubLogoFill className="border-none text-withe w-8 md:w-10 h-8 md:h-10 text-center justify-center items-center " />
              <span className="mt-2">GITHUB</span>
            </a>
          </div>
        </section>

        <div className="flex justify-center items-center text-center p-4 md:p-6">
          <span className="text-white text-base md:text-[18px]">
            Desenvolvido por Jean Fiorentin
          </span>
        </div>
      </div>
    </motion.div>
  );
}
