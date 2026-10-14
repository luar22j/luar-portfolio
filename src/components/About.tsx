import SectionTitle from "./ui/SectionTitle";
import { skills } from "../data/skills";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";
import { useTranslation } from "../i18n/useTranslation";
import { revealClass } from "../utils/animation";

const About = () => {
  const { t } = useTranslation();
  const { ref, isVisible } = useRevealOnScroll<HTMLElement>();

  return (
    <section
      ref={ref}
      aria-labelledby="about-title"
      className={`flex flex-col gap-8 text-justify ${revealClass(isVisible)}`}
    >
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-[200px] xl:gap-8">
        <div className="flex flex-col gap-8">
          <SectionTitle id="about-title">{t.about.title}</SectionTitle>
          <div className="text-animation text-gray-200 flex flex-col gap-3 text-base">
            {t.about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <SectionTitle id="skills-title">{t.about.skillsTitle}</SectionTitle>
          <ul
            aria-labelledby="skills-title"
            className="text-animation grid grid-cols-2 gap-4"
          >
            {skills.map(({ name, icon: Icon, color }) => (
              <li
                key={name}
                className="bg-gray-800/50 backdrop-blur-sm border border-purple-500/30 rounded-lg p-4 flex items-center gap-3 hover:border-purple-500/60 hover:bg-gray-800/70 transition-all duration-300"
              >
                <Icon className="text-3xl" style={{ color }} aria-hidden="true" />
                <span className="text-gray-200 font-medium">{name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
