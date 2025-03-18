export default function Header() {
  const scrollToProjetos = () => {
    const projetosSection = document.getElementById("projects");
    if (projetosSection) {
      projetosSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToAboutMe = () => {
    const aboutMeSection = document.getElementById("aboutme");
    if (aboutMeSection) {
      aboutMeSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContato = () => {
    const contatoSection = document.getElementById("contato");
    if (contatoSection) {
      contatoSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-[rgb(14,14,14)] w-full fixed top-0 left-0 right-0 z-50 shadow-lg">
      <header className="container mx-auto px-8 md:px-20 lg:px-40 py-4 md:py-8">
        <nav className="flex justify-between items-center">
          {/* Logo/Home no início */}
          <div>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-white hover:text-gray-300 transition-colors text-sm md:text-base cursor-pointer"
            >
              Home
            </button>
          </div>

          {/* Navegação no final */}
          <div className="flex items-center gap-4 md:gap-8">
            <button
              onClick={scrollToAboutMe}
              className="text-white hover:text-gray-300 transition-colors text-sm md:text-base cursor-pointer"
            >
              Sobre mim
            </button>

            <button
              onClick={scrollToProjetos}
              className="text-white hover:text-gray-300 transition-colors text-sm md:text-base cursor-pointer"
            >
              Projetos
            </button>
            <button
              onClick={scrollToContato}
              className="bg-gradient-to-r from-[#0047AB] to-[#4169E1] px-4 md:px-9 py-2 md:py-3 rounded-lg text-white hover:opacity-90 transition-opacity text-sm md:text-base cursor-pointer"
            >
              Contato
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
}

