import { LANGUAGES } from "../i18n/config";
import { useTranslation } from "../i18n/useTranslation";

const LanguageSwitcher = () => {
  const { language, setLanguage, t } = useTranslation();

  return (
    <div
      className="fixed top-4 right-4 z-50 flex items-center gap-1 bg-gray-800/50 backdrop-blur-sm border border-purple-500/30 rounded-full px-1 py-1"
      role="group"
      aria-label={t.switcher.label}
    >
      {LANGUAGES.map((lang) => (
        <button
          key={lang}
          onClick={() => setLanguage(lang)}
          aria-pressed={language === lang}
          className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 uppercase tracking-wide ${
            language === lang
              ? "bg-purple-600 text-white shadow-lg shadow-purple-500/40"
              : "text-gray-400 hover:text-gray-200"
          }`}
        >
          {lang}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
