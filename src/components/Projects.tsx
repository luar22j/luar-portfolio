import ExternalLinkIcon from "./ui/ExternalLinkIcon";
import SectionTitle from "./ui/SectionTitle";
import TechList from "./ui/TechList";
import { projects } from "../data/content";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";
import { useTranslation } from "../i18n/useTranslation";
import { delayStyle, revealClass } from "../utils/animation";

const ITEM_STAGGER_MS = 200;

const Projects = () => {
  const { t, pick } = useTranslation();
  const { ref, isVisible } = useRevealOnScroll<HTMLElement>({
    threshold: 0.1,
    rootMargin: "50px",
  });

  return (
    <section
      ref={ref}
      aria-labelledby="projects-title"
      className={`reveal-fade flex flex-col gap-8 ${revealClass(isVisible)}`}
    >
      <SectionTitle id="projects-title">{t.projects.title}</SectionTitle>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        {projects.map(
          ({ id, name, description, image, link, technologies }, index) => {
            const delay = index * ITEM_STAGGER_MS;
            const isFeatured = index === 0;

            return (
              <li key={id} className={isFeatured ? "md:col-span-2" : undefined}>
                <a
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  className={`bg-section flex justify-start gap-5 transition-all rounded-lg group hover:shadow-sm bg-purple-900/25 hover:bg-purple-900/45 w-full h-full ${
                    isFeatured ? "p-7 md:p-8" : "p-7"
                  }`}
                >
                  <div
                    className={`flex gap-5 w-full ${
                      isFeatured
                        ? "flex-col lg:flex-row lg:items-center"
                        : "flex-col"
                    }`}
                  >
                    <div
                      style={delayStyle(delay)}
                      className={`bg-section aspect-video relative overflow-hidden rounded-lg transition-all shadow-[1px_1px_3px_var(--color-brand)] w-full ${
                        isFeatured ? "lg:w-1/2" : ""
                      }`}
                    >
                      <img
                        className="w-full h-full object-cover"
                        src={`/img/projects/${image}`}
                        alt={pick(name)}
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <div className="flex flex-col flex-wrap gap-5">
                      <div
                        style={delayStyle(delay)}
                        className="text-animation flex items-center gap-3 flex-wrap"
                      >
                        {isFeatured && (
                          <span className="text-xs uppercase tracking-wide text-orange-200 bg-orange-500/20 border border-orange-300/30 rounded-full px-3 py-1">
                            {t.projects.featured}
                          </span>
                        )}
                        <h3 className="text-xl font-bold text-gray-200 wrap-break-word">
                          {pick(name)}
                        </h3>
                        <ExternalLinkIcon />
                      </div>
                      <p
                        style={delayStyle(delay)}
                        className="text-animation text-gray-300 text-justify text-sm"
                      >
                        {pick(description)}
                      </p>
                      <TechList
                        technologies={technologies}
                        animateFromMs={delay}
                      />
                    </div>
                  </div>
                </a>
              </li>
            );
          },
        )}
      </ul>
    </section>
  );
};

export default Projects;
