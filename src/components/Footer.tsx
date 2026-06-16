import { useEffect, useRef } from "react";
import "../assets/css/global.css";
import { useTranslation } from "../i18n/useTranslation";

const Footer = () => {
  const { t } = useTranslation();
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("footer-visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
    <div ref={footerRef} className="footer-hidden">
      <p className="text-animation text-white text-center drop-shadow-lg">
        {t.footer.text}
      </p>
    </div>
  );
};

export default Footer;
