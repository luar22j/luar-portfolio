import { useEffect, useRef } from "react";
import projectsData from "../../public/data/projects.json";
import "../assets/css/section.css";

interface Project {
  name: string;
  description: string;
  image: string;
  link?: string;
  tecnologies: string[];
}

export const Project = () => {
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("projects-visible");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      }
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
    };
  }, []);

  return (
    <div ref={projectsRef} className="flex flex-col gap-8 projects-hidden">
      <h1 className="title-animation text-3xl font-bold drop-shadow-[0_2px_10px_#4723a5] text-gray-200">
        Proyectos
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        {Object.entries(projectsData as unknown as Record<string, Project>).map(
          ([key, { name, description, image, link, tecnologies }], index) => {
            const delay = `${index * 200}ms`;

            return (
              <a
                href={link}
                target="_blank"
                key={key}
                className="bg-section flex justify-start gap-5 transition-all p-7 rounded-lg group hover:shadow bg-purple-900 bg-opacity-25 hover:bg-opacity-45 w-full"
              >
                <div className="flex flex-col gap-5 w-full">
                  <div
                    style={{ "--delay": delay } as React.CSSProperties}
                    className="bg-section aspect-video relative overflow-hidden rounded-lg transition-all shadow-[1px_1px_3px_#4723a5] w-full"
                  >
                    <img
                      className="w-full h-full object-cover"
                      src={`./img/projects/${image}`}
                      alt={name}
                    />
                  </div>
                  <div className="flex flex-col flex-wrap gap-5">
                    <div
                      style={{ "--delay": delay } as React.CSSProperties}
                      className="text-animation flex items-center gap-3"
                    >
                      <h2 className="text-xl font-bold text-gray-200 break-words">
                        {name}
                      </h2>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2.5}
                        stroke="#E0E0E0"
                        className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                        />
                      </svg>
                    </div>
                    <p
                      style={{ "--delay": delay } as React.CSSProperties}
                      className="text-animation text-gray-300 text-justify text-sm"
                    >
                      {description}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {tecnologies.map((name, index) => (
                        <button
                          key={index}
                          className="components-animation py-1 px-4 rounded-full text-gray-200 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 shadow-lg shadow-purple-500/50"
                          style={
                            {
                              "--delay": `${parseInt(delay) + index * 100}ms`,
                            } as React.CSSProperties
                          }
                        >
                          {name}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </a>
            );
          }
        )}
      </div>
    </div>
  );
};

export default Project;
