import SpanLinguagens from "./SpanLinguagens";
import { motion } from "framer-motion";

import PROJ1 from "../../public/img/mindflow.png";
import PROJ2 from "../../public/img/previsao.png";
import PROJ3 from "../../public/img/gerenciamento.png";
import PROJ4 from "../../public/img/tradutor.png";

export default function Projects() {
  return (
    <motion.div
      id="projects"
      className="container mx-auto px-4 md:px-20 lg:px-40 py-10 md:py-20"
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
          Projetos
        </motion.h2>

        {/* Contêiner para os projetos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-2 md:px-0">
          {/* Projeto 1 */}
          <motion.div
            className="flex flex-col bg-zinc-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            whileHover={{ scale: 1.02 }}
          >
            {/* IMAGEM PROJETO 1 */}
            <div className="h-auto md:h-[300px]">
              <img src={PROJ1} alt="" className="h-full w-full rounded-t-lg" />{" "}
            </div>

            <div className="p-4 md:p-6 flex flex-col">
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
              <div className="mt-2 rounded-xl h-1 bg-gradient-to-r from-[#0047AB] to-[#4169E1] w-27"></div>
              <a
                className="text-blue-500 mt-2 break-all"
                href="https://mindflow-landing-page.vercel.app/"
                target="_blank"
              >
               Acessar Projeto
              </a>
            </div>
          </motion.div>

          {/* Projeto 2 */}
          <motion.div
            className="flex flex-col bg-zinc-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.4 }}
            whileHover={{ scale: 1.02 }}
          >
            {/* IMAGEM PROJETO 2 */}
            <div className="h-auto md:h-[300px]">
              {" "}
              <img
                src={PROJ2}
                alt=""
                className="h-full w-full rounded-t-lg"
              />{" "}
            </div>

            <div className="p-4 md:p-6 flex flex-col ">
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
              <div className="mt-2 rounded-xl h-1 bg-gradient-to-r from-[#0047AB] to-[#4169E1] w-27"></div>
              <a
                className="text-blue-500 mt-2 break-all"
                href="https://previsaodotempo-blond.vercel.app/"
                target="_blank"
              >
                Acessar Projeto
              </a>
            </div>
          </motion.div>

          {/* Projeto 3 */}
          <motion.div
            className="flex flex-col bg-zinc-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.5 }}
            whileHover={{ scale: 1.02 }}
          >
            {/* IMAGEM PROJETO 3 */}
            <div className="h-auto md:h-[300px]">
              {" "}
              <img
                src={PROJ3}
                alt=""
                className="h-full w-full rounded-t-lg"
              />{" "}
            </div>

            <div className="p-4 md:p-6 flex flex-col">
              <h3 className="text-black text-lg md:text-xl uppercase font-medium mb-3 md:mb-4">
                GERENCIADOR TAREFAS
              </h3>
              <div className="flex flex-wrap gap-2 mb-3 md:mb-4">
                <SpanLinguagens linguagem="REACT" />
                <SpanLinguagens linguagem="JSX" />
                <SpanLinguagens linguagem="TAILWIND CSS" />
              </div>
              <p className="text-gray-700 text-sm md:text-base flex-grow">
                A partir de uma video aula do canal do youtube , fiz um
                gerenciador de tarefas.
              </p>
              <div className="mt-2 rounded-xl h-1 bg-gradient-to-r from-[#0047AB] to-[#4169E1] w-27"></div>
              <a
                className="text-blue-500 mt-2 break-all"
                href="https://aula-react-hazel.vercel.app/"
                target="_blank"
              >
                Acessar Projeto
              </a>
            </div>
          </motion.div>

          {/* Projeto 4 */}
          <motion.div
            className="flex flex-col bg-zinc-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.6 }}
            whileHover={{ scale: 1.02 }}
          >
            {/* IMAGEM PROJETO 4 */}
            <div className="h-auto md:h-[300px]">
              {" "}
              <img
                src={PROJ4}
                alt=""
                className="h-full w-full rounded-t-lg"
              />{" "}
            </div>

            <div className="p-4 md:p-6 flex flex-col ">
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
                Um simples site usando Flask (Python) e DeepTranslator para
                traduzir textos. <br />
              </p>
              <div className="mt-2 rounded-xl h-1 bg-gradient-to-r from-[#0047AB] to-[#4169E1] w-27"></div>
              <a
                className="text-blue-500 mt-2 break-all"
                href="https://github.com/devfiorentin/translator_flask"
                target="_blank"
              >
                Acessar Projeto
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
