import { useEffect, useRef } from "react";

export const About = () => {
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
      { threshold: 0.2 }
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

  return (
    <div
      ref={aboutRef}
      className="flex flex-col gap-5 text-justify about-hidden"
    >
      <h1 className="title-animation drop-shadow-[0_2px_10px_#4723a5] text-3xl font-bold text-gray-200">
        Sobre Mí
      </h1>

      <div className="text-animation text-gray-200">
        Hola, soy Luar, desarrollador full stack con un año de experiencia en el
        sector, aunque actualmente me estoy especializando en el desarrollo
        front-end. Me apasiona construir, aprender y crecer continuamente en la
        industria tecnológica. Estoy dispuesto a asumir proyectos de todo tipo,
        sin importar su tamaño o complejidad, siempre con el objetivo de mejorar
        mis habilidades y ofrecer un trabajo de calidad. Mi meta es seguir
        avanzando en este campo en constante evolución, enfrentando nuevos
        desafíos y explorando ideas innovadoras. ¡Estoy listo para crear algo
        increíble juntos!
      </div>
    </div>
  );
};

export default About;
