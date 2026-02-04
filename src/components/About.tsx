import { useEffect, useRef } from "react";
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiLaravel,
  SiTailwindcss,
  SiGit,
  SiMysql,
  SiPostman,
} from "react-icons/si";

const About = () => {
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("about-visible");
          }
        });
      },
      { threshold: 0.2 },
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  const skills = [
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "SQL", icon: SiMysql, color: "#4479A1" },
    { name: "API REST", icon: SiPostman, color: "#FF6C37" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "Git", icon: SiGit, color: "#F05032" },
  ];

  return (
    <div
      ref={aboutRef}
      className="flex flex-col gap-8 text-justify about-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[200px] lg:gap-12">
        <div className="flex flex-col gap-8">
          <h1 className="title-animation drop-shadow-[0_2px_10px_#4723a5] text-3xl font-bold text-gray-200">
            Sobre Mí
          </h1>
          <div className="text-animation text-gray-200 flex flex-col gap-3 text-base">
            <p>
              ¡Hola! Soy Luar, un chico de 19 años que acaba de finalizar el
              ciclo de Técnico Superior en Desarrollo de Aplicaciones Web.
              Actualmente me dedico al desarrollo full stack, aunque cuento con
              más de un año de experiencia especializada en frontend,
              especialmente con tecnologías como React. Estoy dando mis primeros
              pasos como profesional, con muchas ganas de seguir aprendiendo,
              creciendo y mejorando cada día.
            </p>

            <p>
              Mi objetivo es claro: convertirme en un desarrollador senior
              sólido y con amplios conocimientos, capaz de aportar calidad,
              ideas y soluciones en cada proyecto en el que trabaje. Me
              considero una persona ágil programando, curiosa y con facilidad
              para aprender y adaptarse. Me gusta investigar, entender cómo
              funcionan las cosas por dentro y siempre busco formas de hacer
              mejor mi trabajo.
            </p>

            <p>
              Además, dispongo de carné de conducir y vehículo propio, lo que me
              da total disponibilidad para desplazarme si es necesario. Hablo
              español y catalán como lenguas nativas, y tengo un nivel
              intermedio de inglés, que sigo reforzando día a día.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <h1 className="title-animation drop-shadow-[0_2px_10px_#4723a5] text-3xl font-bold text-gray-200">
            Tecnologías
          </h1>
          <div className="text-animation grid grid-cols-2 gap-4">
            {skills.map((skill) => {
              const IconComponent = skill.icon;
              return (
                <div
                  key={skill.name}
                  className="bg-gray-800/50 backdrop-blur-sm border border-purple-500/30 rounded-lg p-4 flex items-center gap-3 hover:border-purple-500/60 hover:bg-gray-800/70 transition-all duration-300"
                >
                  <IconComponent
                    className="text-3xl"
                    style={{ color: skill.color }}
                  />
                  <span className="text-gray-200 font-medium">
                    {skill.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
