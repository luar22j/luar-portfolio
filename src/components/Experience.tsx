import { useEffect, useRef } from "react";
import informationData from "../../public/data/experience.json";
import "../assets/css/section.css";

interface InformationItem {
  title: string;
  description: string;
  years: string;
  technologies?: string[];
  link: string;
}

export const Experience = () => {
  const experienceRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("experience-visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    if (experienceRef.current) {
      observer.observe(experienceRef.current);
    }

    return () => {
      if (experienceRef.current) {
        observer.unobserve(experienceRef.current);
      }
    };
  }, []);

  return (
    <div ref={experienceRef} className="flex flex-col gap-8 experience-hidden">
      <h1 className="title-animation text-3xl font-bold drop-shadow-[0_2px_10px_#4723a5] text-gray-200">
        Experiencia
      </h1>
      <div className="flex flex-col gap-8 w-full">
        {Object.entries(informationData).map(([key, item], index) => {
          const { title, description, years, technologies, link } =
            item as InformationItem & { link: string };
          const delay = `${index * 200}ms`;

          return (
            <a
              key={key}
              className="bg-section flex flex-col gap-5 transition-all p-7 pl-5 rounded-lg group hover:shadow bg-purple-900 bg-opacity-25 hover:bg-opacity-45 cursor-pointer"
              style={{ "--delay": delay } as React.CSSProperties}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex text-gray-400">
                <p
                  className="text-animation text-center text-sm whitespace-nowrap"
                  style={{ "--delay": delay } as React.CSSProperties}
                >
                  {years}
                </p>
              </div>
              <div className="flex justify-center flex-col gap-5">
                <div className="text-animation flex items-center gap-3">
                  <h2
                    className="text-[#E0E0E0] font-bold transition-all"
                    style={{ "--delay": delay } as React.CSSProperties}
                  >
                    {title}
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

                <div className="flex flex-col gap-5">
                  <p
                    className="text-animation text-justify text-gray-300 text-sm"
                    style={{ "--delay": delay } as React.CSSProperties}
                  >
                    {description}
                  </p>
                  {technologies && (
                    <div
                      className="components-animation flex flex-wrap gap-3"
                      style={{ "--delay": delay } as React.CSSProperties}
                    >
                      {technologies.map((name, techIndex) => (
                        <button
                          key={techIndex}
                          className="technology-button py-1 px-4 rounded-full 
                        text-gray-200 bg-gradient-to-r 
                        from-purple-500 via-purple-600 
                        to-purple-700 shadow-lg 
                        shadow-purple-500/50"
                          style={
                            {
                              "--delay": `${
                                parseInt(delay) + techIndex * 100
                              }ms`,
                            } as React.CSSProperties
                          }
                        >
                          {name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
