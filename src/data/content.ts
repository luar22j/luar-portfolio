import type { Project, SocialLink, TimelineEntry } from "../types/content";
import educationJson from "./education.json";
import experienceJson from "./experience.json";
import projectsJson from "./projects.json";
import socialMediaJson from "./social-media.json";

// Annotating each constant makes the compiler validate the JSON shape.
export const experience: TimelineEntry[] = experienceJson;
export const education: TimelineEntry[] = educationJson;
export const projects: Project[] = projectsJson;
export const socialLinks: SocialLink[] = socialMediaJson;
