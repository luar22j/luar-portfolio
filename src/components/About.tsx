import { useEffect, useRef } from "react";

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
      className="flex flex-col gap-8 text-justify about-hidden"
    >
      <h1 className="title-animation drop-shadow-[0_2px_10px_#4723a5] text-3xl font-bold text-gray-200">
        Sobre Mí
      </h1>

      <div className="text-animation text-gray-200 flex flex-col gap-5 text-base">
        <p>
          ¡Hola! Soy Luar, un chico de 19 años que acaba de finalizar el ciclo
          de Técnico Superior en Desarrollo de Aplicaciones Web. Actualmente me
          dedico al desarrollo full stack, aunque cuento con más de un año de
          experiencia especializada en frontend, especialmente con tecnologías
          como React.
        </p>

        <p>
          Estoy dando mis primeros pasos como profesional, con muchas ganas de
          seguir aprendiendo, creciendo y mejorando cada día. Mi objetivo es
          claro: convertirme en un desarrollador senior sólido y con amplios
          conocimientos, capaz de aportar calidad, ideas y soluciones en cada
          proyecto en el que trabaje.
        </p>

        <p>
          Me considero una persona ágil programando, curiosa y con facilidad
          para aprender y adaptarse. Me gusta investigar, entender cómo
          funcionan las cosas por dentro y siempre busco formas de hacer mejor
          mi trabajo.
        </p>

        <p>
          Además, dispongo de carné de conducir y vehículo propio, lo que me da
          total disponibilidad para desplazarme si es necesario.
        </p>

        <p>
          Hablo español y catalán como lenguas nativas, y tengo un nivel
          intermedio de inglés, que sigo reforzando día a día.
        </p>
      </div>
    </div>
  );
};

export default About;
