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
        Hola, soy Luar, un desarrollador full stack con 1 año de experiencia en
        el campo, aunque me estoy especializando más en el front-end. Me
        apasiona construir, aprender y crecer continuamente en la industria
        tecnológica. Estoy ansioso por asumir proyectos de todos los tamaños y
        complejidades, siempre con el objetivo de mejorar mis habilidades y
        entregar un trabajo de calidad. Mi meta es seguir avanzando en este
        campo en constante evolución, enfrentando nuevos desafíos y explorando
        ideas innovadoras. ¡Vamos a crear algo increíble juntos!
      </div>
    </div>
  );
};

export default About;
