import Header from "./components/Header.jsx";
import InfoPortfolio from "./components/InfoPortfolio.jsx";
import AboutMe from "./components/AboutMe.jsx";
import Projects from "./components/Projects.js";
import Footer from "./components/Foooter.jsx";
import { motion } from "framer-motion";

export default function App() {
  return (
    <motion.div className="min-h-screen w-full overflow-x-hidden">
      <Header />
      <InfoPortfolio />
      <AboutMe />
      <Projects />
      <Footer />
    </motion.div>
  );
}
