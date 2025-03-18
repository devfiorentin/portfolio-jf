import { motion } from "framer-motion";


export default function AboutMe() {
  return (
    <motion.div
      id="aboutme"
      className="container mx-auto px-4 md:px-20 lg:px-40 pt-20 md:pt-44 pb-20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-auto ">
        <span className="text-withe text-2xl md:text-3xl font-bold text-white">
          Sobre mim
        </span>

        <section className="items-center justify-center flex mt-6 w-full ">
          <div className="line w-[14px] rounded-sm h-[180px] lg:h-[150px] md:h-[180px] bg-gradient-to-b from-[#0047AB] to-[#4169E1]"></div>
          <div className="w-full">
            <p className="text-[#E6E6E6] ml-5 text-base md:text-[20px]">
              Sou estudante de Desenvolvimento Web -{" "}
              <strong> Frontend / Backend</strong>, tenho 21 anos! <br /> Estou
              em busca de uma oportunidade de trabalho para poder aplicar meus
              conhecimentos e aprender mais. <br />
              <br /> Aberto para novos desafios e oportunidades!
            </p>
          </div>
        </section>
      </div>
    </motion.div>
  );
}
