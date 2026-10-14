import SectionTitle from "./ui/SectionTitle";
import TechList from "./ui/TechList";
import { education } from "../data/content";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";
import { useTranslation } from "../i18n/useTranslation";
import { delayStyle, revealClass } from "../utils/animation";

const ITEM_STAGGER_MS = 200;

const Education = () => {
  const { t, pick } = useTranslation();
  const { ref, isVisible } = useRevealOnScroll<HTMLElement>();

  return (
    <section
      ref={ref}
      aria-labelledby="education-title"
      className={`flex flex-col gap-8 text-justify ${revealClass(isVisible)}`}
    >
      <SectionTitle id="education-title">{t.education.title}</SectionTitle>

      <ul className="flex flex-col gap-8 w-full">
        {education.map(
          ({ id, title, description, years, technologies, link }, index) => (
            <li
              key={id}
              className="text-animation flex flex-col gap-4"
              style={delayStyle(index * ITEM_STAGGER_MS)}
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                <h3 className="text-[#E0E0E0] font-bold text-xl">
                  {pick(title)}
                </h3>
                <div className="flex flex-col md:text-right">
                  <span className="text-gray-400 text-sm">{pick(years)}</span>
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 transition-colors text-sm"
                  >
                    {t.education.moreInfo}
                  </a>
                </div>
              </div>

              <p className="text-gray-200">{pick(description)}</p>

              {technologies && <TechList technologies={technologies} />}
            </li>
          ),
        )}
      </ul>
    </section>
  );
};

export default Education;
