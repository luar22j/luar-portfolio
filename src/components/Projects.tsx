import { useEffect, useRef } from "react";
import projectsData from "../../public/data/projects.json";
import { useTranslation } from "../i18n/useTranslation";
import type { Localized } from "../i18n/config";
import "../assets/css/section.css";

interface Project {
  name: Localized<string>;
  description: Localized<string>;
  image: string;
  link?: string;
  tecnologies: string[];
}

export const Projects = () => {
  const { t, pick } = useTranslation();
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
        {t.projects.title}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        {Object.entries(projectsData as unknown as Record<string, Project>).map(
          ([key, { name, description, image, link, tecnologies }], index) => {
            const delay = `${index * 200}ms`;
            const isFeatured = index === 0;

            return (
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                key={key}
                className={`bg-section flex justify-start gap-5 transition-all rounded-lg group hover:shadow bg-purple-900 bg-opacity-25 hover:bg-opacity-45 w-full ${
                  isFeatured ? "md:col-span-2 p-7 md:p-8" : "p-7"
                }`}
              >
                <div
                  className={`flex gap-5 w-full ${
                    isFeatured ? "flex-col lg:flex-row lg:items-center" : "flex-col"
                  }`}
                >
                  <div
                    style={{ "--delay": delay } as React.CSSProperties}
                    className={`bg-section aspect-video relative overflow-hidden rounded-lg transition-all shadow-[1px_1px_3px_#4723a5] w-full ${
                      isFeatured ? "lg:w-1/2" : ""
                    }`}
                  >
                    <img
                      className="w-full h-full object-cover"
                      src={`./img/projects/${image}`}
                      alt={pick(name)}
                    />
                  </div>
                  <div className="flex flex-col flex-wrap gap-5">
                    <div
                      style={{ "--delay": delay } as React.CSSProperties}
                      className="text-animation flex items-center gap-3 flex-wrap"
                    >
                      {isFeatured && (
                        <span className="text-xs uppercase tracking-wide text-orange-200 bg-orange-500/20 border border-orange-300/30 rounded-full px-3 py-1">
                          {t.projects.featured}
                        </span>
                      )}
                      <h2 className="text-xl font-bold text-gray-200 break-words">
                        {pick(name)}
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
                      {pick(description)}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {tecnologies.map((tech, techIndex) => (
                        <button
                          key={techIndex}
                          className="components-animation py-1 px-4 rounded-full text-gray-200 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 shadow-lg shadow-purple-500/50"
                          style={
                            {
                              "--delay": `${parseInt(delay) + techIndex * 100}ms`,
                            } as React.CSSProperties
                          }
                        >
                          {tech}
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

export default Projects;
