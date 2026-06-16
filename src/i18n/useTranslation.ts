import { useLanguageContext } from "./LanguageProvider";
import { ui } from "./translations";
import type { Localized } from "./config";

export const useTranslation = () => {
  const { language, setLanguage } = useLanguageContext();

  const t = ui[language];

  const pick = <T,>(value: Localized<T>): T => value[language];

  return { language, setLanguage, t, pick };
};
