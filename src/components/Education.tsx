import { useEffect, useRef } from "react";
import educationData from "../../public/data/education.json";
import "../assets/css/section.css";

interface EducationItem {
  title: string;
  description: string;
  years: string;
  technologies?: string[];
  link: string;
}

const Education = () => {
  const educationRef = useRef<HTMLDivElement>(null);

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

    if (educationRef.current) {
      observer.observe(educationRef.current);
    }

    return () => {
      if (educationRef.current) {
        observer.unobserve(educationRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={educationRef}
      className="flex flex-col gap-8 text-justify about-hidden"
    >
      <h1 className="title-animation drop-shadow-[0_2px_10px_#4723a5] text-3xl font-bold text-gray-200">
        Educación
      </h1>

      <div className="flex flex-col gap-8 w-full">
        {Object.entries(educationData).map(([key, item], index) => {
          const { title, description, years, technologies, link } =
            item as EducationItem & { link: string };
          const delay = `${index * 200}ms`;

          return (
            <div
              key={key}
              className="text-animation flex flex-col gap-4"
              style={{ "--delay": delay } as React.CSSProperties}
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                <h2 className="text-[#E0E0E0] font-bold text-xl">{title}</h2>
                <div className="flex flex-col md:text-right">
                  <span className="text-gray-400 text-sm">{years}</span>
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 transition-colors text-sm"
                  >
                    Más información
                  </a>
                </div>
              </div>

              <p className="text-gray-200">{description}</p>

              {technologies && (
                <div className="flex flex-wrap gap-3">
                  {technologies.map((name, techIndex) => (
                    <span
                      key={techIndex}
                      className="py-1 px-4 rounded-full 
                        text-gray-200 bg-gradient-to-r 
                        from-purple-500 via-purple-600 
                        to-purple-700 shadow-lg 
                        shadow-purple-500/50"
                    >
                      {name}
                    </span>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Education;
