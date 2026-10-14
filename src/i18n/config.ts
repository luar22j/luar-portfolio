export type Language = "en" | "es";

export type Localized<T> = Record<Language, T>;

export const LANGUAGES: Language[] = ["en", "es"];

export const DEFAULT_LANGUAGE: Language = "en";

export const STORAGE_KEY = "portfolio-language";

export const isLanguage = (value: unknown): value is Language =>
  LANGUAGES.includes(value as Language);
