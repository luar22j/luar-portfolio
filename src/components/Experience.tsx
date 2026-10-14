import ExternalLinkIcon from "./ui/ExternalLinkIcon";
import SectionTitle from "./ui/SectionTitle";
import TechList from "./ui/TechList";
import { experience } from "../data/content";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";
import { useTranslation } from "../i18n/useTranslation";
import { delayStyle, revealClass } from "../utils/animation";

const ITEM_STAGGER_MS = 200;

const Experience = () => {
  const { t, pick } = useTranslation();
  const { ref, isVisible } = useRevealOnScroll<HTMLElement>();

  return (
    <section
      ref={ref}
      aria-labelledby="experience-title"
      className={`flex flex-col gap-8 ${revealClass(isVisible)}`}
    >
      <SectionTitle id="experience-title">{t.experience.title}</SectionTitle>
      <ul className="flex flex-col gap-8 w-full">
        {experience.map(
          ({ id, title, description, years, technologies, link }, index) => {
            const delay = index * ITEM_STAGGER_MS;

            return (
              <li key={id}>
                <a
                  className="bg-section flex flex-col gap-5 transition-all p-7 pl-5 rounded-lg group hover:shadow-sm bg-purple-900/25 hover:bg-purple-900/45 cursor-pointer"
                  style={delayStyle(delay)}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p
                    className="text-animation text-gray-400 text-sm whitespace-nowrap"
                    style={delayStyle(delay)}
                  >
                    {pick(years)}
                  </p>
                  <div
                    className="text-animation flex items-center gap-3"
                    style={delayStyle(delay)}
                  >
                    <h3 className="text-[#E0E0E0] font-bold transition-all">
                      {pick(title)}
                    </h3>
                    <ExternalLinkIcon />
                  </div>
                  <p
                    className="text-animation text-justify text-gray-300 text-sm"
                    style={delayStyle(delay)}
                  >
                    {pick(description)}
                  </p>
                  {technologies && (
                    <TechList
                      technologies={technologies}
                      animateFromMs={delay}
                    />
                  )}
                </a>
              </li>
            );
          },
        )}
      </ul>
    </section>
  );
};

export default Experience;
