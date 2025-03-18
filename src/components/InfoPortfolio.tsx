import { motion } from "framer-motion";
import SkillComponent from "./SkillComponent";


import pdfFile from "../assets/pdfFile/jean-fiorentin.pdf";

export default function InfoPortfolio() {
  
  return (
    <motion.div
      className="items-center  flex flex-col md:flex-row px-8 md:px-20 lg:px-40 pt-28 md:pt-48 text-white md:justify-between w-full gap-10 "
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="w-full items-left md:items-left text-left md:text-left">
        <span className="uppercase text-withe text-[16px] md:text-[20px] font-semibold">
          Desenvolvedor Web
        </span>
        <h1 className="weigth-600 bg-[linear-gradient(90deg,_#0047AB_0%,_#4169E1_100%)] bg-clip-text text-transparent text-[36px] md:text-[50px] mt-2 font-bold">
          Jean Fiorentin
        </h1>
        <p className="text-[#E6E6E6] md:text-[19px] mt-5 mb-10">
          Estudante de Desenvolvimento Web. <br />
          Atualmente, estou aprendendo{" "}
          <span className="font-semibold">
            React, Next.js, TypeScript, Tailwind CSS,{" "}
          </span>{" "}
          e mais...
          <br /> <br />
          Estou aberto a novas oportunidades!
        </p>

        <a
          href={pdfFile}
          download="pdfFile"
          className="mt-7 gap-4 bg-gradient-to-r from-[#007DB5] to-[#002180] px-6 md:px-9 py-2 md:py-3 rounded-[8px] text-left md:text-center text-base md:text-[18px] hover:opacity-90 transition-opacity"
        >
          Download CV
        </a>
      </section>

      <section className="flex justify-center md:justify-end w-full">
        <SkillComponent />

        {/*<img
          className="rounded-full w-[0px] h-[0px] md:w-[300px] md:h-[300px] shadow-xl"
          src={IMG}
          alt="Foto de perfil"
        /> */}
      </section>
    </motion.div>
  );
}
