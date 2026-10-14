import { useRevealOnScroll } from "../hooks/useRevealOnScroll";
import { useTranslation } from "../i18n/useTranslation";
import { revealClass } from "../utils/animation";

const Footer = () => {
  const { t } = useTranslation();
  const { ref, isVisible } = useRevealOnScroll<HTMLElement>();

  return (
    <footer ref={ref} className={revealClass(isVisible)}>
      <p className="text-animation text-white text-center drop-shadow-lg">
        {t.footer.text}
      </p>
    </footer>
  );
};

export default Footer;
