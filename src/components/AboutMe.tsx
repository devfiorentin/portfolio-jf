export default function AboutMe() {
  return (
    <div className="container mx-auto px-4 md:px-20 lg:px-40 pt-20 md:pt-44 pb-20">
      <div className="w-full ">
        <span className="text-withe text-2xl md:text-3xl font-bold text-white">
          About Me
        </span>

        <section className="items-center justify-center flex mt-6">
          <div className="line w-[14px] rounded-sm h-[130px] bg-gradient-to-b from-[#0047AB] to-[#4169E1]"></div>
          <div>
            <p className="text-[#E6E6E6] ml-5 text-base md:text-[20px]">
              Me chamo Jean! Sou estudante de desenvolvimento web -{" "}
              <strong> Frontend / Backend</strong>, tenho 21 anos e sou de
              Caçador - SC. Estou em busca de uma oportunidade de trabalho para
              poder aplicar meus conhecimentos e aprender mais.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
