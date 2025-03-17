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

import React, { useRef, useState } from "react";

export default function SkillComponent() {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (sliderRef.current?.offsetLeft || 0));
    setScrollLeft(sliderRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (sliderRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (sliderRef.current) {
      sliderRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - (sliderRef.current?.offsetLeft || 0));
    setScrollLeft(sliderRef.current?.scrollLeft || 0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - (sliderRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (sliderRef.current) {
      sliderRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <div className="container mx-auto px-4 md:px-20 lg:px-40 pt-20 md:pt-44 pb-20">
      <div className="w-full">
        <div className="flex items-center gap-4 mb-8">
          <span className="text-3xl md:text-4xl font-bold text-white relative">
            Skills
          </span>
        </div>

        {/* Slider com scroll azul personalizado */}
        <section
          className="mt-6 overflow-x-scroll whitespace-nowrap cursor-grab active:cursor-grabbing relative bg-blue-500/10 rounded-xl p-8 backdrop-blur-sm border border-gray-700/50 scrollbar-custom"
          ref={sliderRef}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="inline-flex">
            <div className="flex items-center justify-start gap-12 text-white px-0">
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
                <div key={index} className="group relative">
                  <Icon className="w-[50px] h-[50px] md:w-[80px] md:h-[80px] transition-all duration-300 transform group-hover:scale-110" />
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-current rounded-full scale-0 group-hover:scale-100 transition-transform"></div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

  
      
    </div>
  );
}
