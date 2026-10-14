import type { Localized } from "../i18n/config";

/** An entry of the experience or education timelines. */
export interface TimelineEntry {
  id: string;
  title: Localized<string>;
  description: Localized<string>;
  years: Localized<string>;
  technologies?: string[];
  link: string;
}

export interface Project {
  id: string;
  name: Localized<string>;
  description: Localized<string>;
  /** File name inside `public/img/projects`. */
  image: string;
  link: string;
  technologies: string[];
}

export interface SocialLink {
  id: string;
  label: string;
  href: string;
  viewbox: string;
  path: string;
}
