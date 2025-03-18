import SpanLinguagens from "./SpanLinguagens";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <motion.div
      id="projects"
      className="container mx-auto px-4 md:px-20 lg:px-40 py-20 md:py-40"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full">
        <motion.h2
          className="text-white text-2xl md:text-3xl font-bold mb-8 md:mb-12 px-2 md:px-0"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Projects
        </motion.h2>

        {/* Contêiner para os projetos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-2 md:px-0">
          {/* Projeto 1 */}
          <motion.div
            className="flex flex-col bg-zinc-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 h-[300px] md:h-[450px]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            whileHover={{ scale: 1.02 }}
          >
            <div
              className={`bg-[url('/img/mindflow.png')] bg-cover bg-center h-[450px] md:h-[550px] rounded-t-lg`}
            ></div>
            <div className="h-[3px] bg-[#4169E1]"></div>
            <div className="p-4 md:p-6 flex flex-col h-[400px]">
              <h3 className="text-black text-lg md:text-xl uppercase font-medium mb-3 md:mb-4">
                LANDING PAGE
              </h3>
              <div className="flex flex-wrap gap-2 mb-3 md:mb-4">
                <SpanLinguagens linguagem="NEXT JS" />
                <SpanLinguagens linguagem="TYPESCRIPT" />
                <SpanLinguagens linguagem="TAILWIND CSS" />
              </div>
              <p className="text-gray-700 text-sm md:text-base flex-grow">
                Landing Page, desenvolvida com Next JS, utilizando Tailwind CSS
                e TypeScript. <br />
              </p>
              <a
                className="text-blue-500 mt-2 break-all"
                href="https://mindflow-landing-page.vercel.app/"
                target="_blank"
              >
                https://mindflow-landing-page.vercel.app/
              </a>
            </div>
          </motion.div>

          {/* Projeto 2 */}
          <motion.div
            className="flex flex-col bg-zinc-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 h-[300px] md:h-[450px]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.4 }}
            whileHover={{ scale: 1.02 }}
          >
            <div
              className={`bg-[url('/img/previsao.png')] bg-cover bg-center h-[450px] md:h-[550px] rounded-t-lg`}
            ></div>
            <div className="h-[3px] bg-[#4169E1]"></div>
            <div className="p-4 md:p-6 flex flex-col h-[400px]">
              <h3 className="text-black text-lg md:text-xl uppercase font-medium mb-3 md:mb-4">
                PREVISÃO DO TEMPO
              </h3>
              <div className="flex flex-wrap gap-2 mb-3 md:mb-4">
                <SpanLinguagens linguagem="REACT" />
                <SpanLinguagens linguagem="JSX" />
                <SpanLinguagens linguagem="TAILWIND CSS" />
              </div>
              <p className="text-gray-700 text-sm md:text-base flex-grow">
                Projeto desenvolvido com React, JSX, Tailwind CSS e HTML. <br />
                Como estudo de caso, fiz um app de previsão do tempo. <br />
              </p>
              <a
                className="text-blue-500 mt-2 break-all"
                href="https://previsaodotempo-blond.vercel.app/"
                target="_blank"
              >
                https://previsaodotempo-blond.vercel.app/
              </a>
            </div>
          </motion.div>

          {/* Projeto 3 */}
          <motion.div
            className="flex flex-col bg-zinc-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 h-[300px] md:h-[450px]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.5 }}
            whileHover={{ scale: 1.02 }}
          >
            <div
              className={`bg-[url('/img/gerenciamento.png')] bg-cover bg-center h-full md:h-[550px] rounded-t-lg`}
            ></div>
            <div className="h-[3px] bg-[#4169E1]"></div>
            <div className="p-4 md:p-6 flex flex-col h-[400px]">
              <h3 className="text-black text-lg md:text-xl uppercase font-medium mb-3 md:mb-4">
                GERENCIADOR TAREFAS
              </h3>
              <div className="flex flex-wrap gap-2 mb-3 md:mb-4">
                <SpanLinguagens linguagem="REACT" />
                <SpanLinguagens linguagem="JSX" />
                <SpanLinguagens linguagem="TAILWIND CSS" />
              </div>
              <p className="text-gray-700 text-sm md:text-base flex-grow">
                A partir de uma video aula do canal do youtube{" "}
                <a
                  className="text-[#4169E1] font-bold"
                  href="https://www.youtube.com/watch?v=2RWsLmu8yVc&t=4808s&ab_channel=FelipeRocha%E2%80%A2FullStackClub"
                  target="_blank"
                >
                  Felipe Rocha - Full Stack Club
                </a>
                , fiz um gerenciador de tarefas. <br />
                Começo dos meus estudos com React. <br />
              </p>
              <a
                className="text-blue-500 mt-2 break-all"
                href="https://aula-react-hazel.vercel.app/"
                target="_blank"
              >
                https://aula-react-hazel.vercel.app/
              </a>
            </div>
          </motion.div>

          {/* Projeto 4 */}
          <motion.div
            className="flex flex-col bg-zinc-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 h-[300px] md:h-[450px] "
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.6 }}
            whileHover={{ scale: 1.02 }}
          >
            <div
              className={`bg-[url('/img/tradutor.png')] bg-cover bg-center h-[450px] md:h-[550px]  rounded-t-lg`}
            ></div>
            <div className="h-[3px] bg-[#4169E1] "></div>
            <div className="p-4 md:p-6 flex flex-col h-[400px] ">
              <h3 className="text-black text-lg md:text-xl uppercase font-medium mb-3 md:mb-4">
                TRADUTOR COM FLASK
              </h3>
              <div className="flex flex-wrap gap-2 mb-3 md:mb-4 ">
                <SpanLinguagens linguagem="PYTHON" />
                <SpanLinguagens linguagem="FLASK" />
                <SpanLinguagens linguagem="HTML" />
                <SpanLinguagens linguagem="CSS" />
                <SpanLinguagens linguagem="DEEP TRANSLATOR" />
              </div>
              <p className="text-gray-700 text-sm md:text-base flex-grow">
                Um simples site usando Flask e DeepTranslator para traduzir
                texto. <br />
              </p>
              <a
                className="text-blue-500 mt-2 break-all"
                href="https://github.com/devfiorentin/translator_flask"
                target="_blank"
              >
                https://github.com/devfiorentin/translator_flask
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="text-center mt-8 md:mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <button className="bg-gradient-to-r from-[#0047AB] to-[#4169E1] px-6 md:px-8 py-2 md:py-3 rounded-lg text-base md:text-lg text-white font-medium hover:opacity-90 transition-opacity duration-300">
            <a href="https://github.com/devfiorentin" target="_blank">
              Ver Todos Os Projetos
            </a>
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}
