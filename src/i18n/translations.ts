import type { Language } from "./config";

export interface UIStrings {
  documentTitle: string;
  profile: {
    role: string;
    tagline: string;
  };
  about: {
    title: string;
    skillsTitle: string;
    paragraphs: string[];
  };
  experience: {
    title: string;
  };
  education: {
    title: string;
    moreInfo: string;
  };
  projects: {
    title: string;
    featured: string;
  };
  footer: {
    text: string;
  };
  cv: {
    label: string;
    href: string;
  };
  switcher: {
    label: string;
  };
}

export const ui: Record<Language, UIStrings> = {
  en: {
    documentTitle: "Luar Jaén - Portfolio",
    profile: {
      role: "Junior Full Stack Developer",
      tagline:
        "I build complete, robust, and scalable web applications, both on the frontend and backend.",
    },
    about: {
      title: "About Me",
      skillsTitle: "Technologies",
      paragraphs: [
        "Hi! I'm Luar, a 19-year-old who just completed a Higher Degree in Web Application Development. I currently work in full stack development, with over a year of specialised experience in frontend — particularly with technologies like React. I'm taking my first professional steps, eager to keep learning, growing, and improving every day.",
        "My goal is clear: to become a solid senior developer with broad knowledge, capable of contributing quality, ideas, and solutions to every project I work on. I consider myself an agile programmer, curious, and quick to learn and adapt. I enjoy digging into how things work under the hood and always look for ways to do my job better.",
        "I also hold a driving licence and have my own vehicle, giving me full availability to commute if needed. I speak Spanish and Catalan as native languages, and I have an intermediate level of English that I continue to strengthen every day.",
      ],
    },
    experience: {
      title: "Work Experience",
    },
    education: {
      title: "Education",
      moreInfo: "Learn more",
    },
    projects: {
      title: "Projects",
      featured: "Featured project",
    },
    footer: {
      text: "Designed by Luar. Built with React and Tailwind CSS.",
    },
    cv: {
      label: "Download CV",
      href: "/documents/Luar-Jaen-Sole-cv.pdf",
    },
    switcher: {
      label: "Switch to Spanish",
    },
  },

  es: {
    documentTitle: "Luar Jaén - Portfolio",
    profile: {
      role: "Desarrollador Full Stack Junior",
      tagline:
        "Desarrollo aplicaciones web completas, robustas y escalables, tanto en frontend como en backend.",
    },
    about: {
      title: "Sobre Mí",
      skillsTitle: "Tecnologías",
      paragraphs: [
        "¡Hola! Soy Luar, un chico de 19 años que acaba de finalizar el ciclo de Técnico Superior en Desarrollo de Aplicaciones Web. Actualmente me dedico al desarrollo full stack, aunque cuento con más de un año de experiencia especializada en frontend, especialmente con tecnologías como React. Estoy dando mis primeros pasos como profesional, con muchas ganas de seguir aprendiendo, creciendo y mejorando cada día.",
        "Mi objetivo es claro: convertirme en un desarrollador senior sólido y con amplios conocimientos, capaz de aportar calidad, ideas y soluciones en cada proyecto en el que trabaje. Me considero una persona ágil programando, curiosa y con facilidad para aprender y adaptarse. Me gusta investigar, entender cómo funcionan las cosas por dentro y siempre busco formas de hacer mejor mi trabajo.",
        "Además, dispongo de carné de conducir y vehículo propio, lo que me da total disponibilidad para desplazarme si es necesario. Hablo español y catalán como lenguas nativas, y tengo un nivel intermedio de inglés, que sigo reforzando día a día.",
      ],
    },
    experience: {
      title: "Experiencia Laboral",
    },
    education: {
      title: "Educación",
      moreInfo: "Más información",
    },
    projects: {
      title: "Proyectos",
      featured: "Proyecto destacado",
    },
    footer: {
      text: "Designed by Luar. Built with React and Tailwind CSS.",
    },
    cv: {
      label: "Descargar CV",
      href: "/documents/Luar-Jaen-Sole-CV-ES.pdf",
    },
    switcher: {
      label: "Cambiar a inglés",
    },
  },
};
