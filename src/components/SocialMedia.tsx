import { socialLinks } from "../data/content";
import { useTranslation } from "../i18n/useTranslation";
import type { SocialLink as SocialLinkData } from "../types/content";
import { delayStyle } from "../utils/animation";

const STAGGER_MS = 100;

const ICON_SHADOW =
  "drop-shadow-[0_2px_1px_theme(colors.brand)] hover:drop-shadow-[0_2px_2px_theme(colors.brand)]";

const SocialLink = ({ label, href, viewbox, path }: SocialLinkData) => (
  <a
    className="block social-media-icon"
    href={href}
    target="_blank"
    rel="noreferrer noopener"
    aria-label={label}
    title={label}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewbox}
      fill="#E0E0E0"
      className={`h-6 w-6 transition-transform duration-200 ease-in-out hover:scale-125 ${ICON_SHADOW}`}
      aria-hidden="true"
    >
      <path d={path}></path>
    </svg>
  </a>
);

const SocialMedia = () => {
  const { t } = useTranslation();

  return (
    <div className="flex h-[100px] sticky py-5 items-center justify-between gap-5">
      <ul className="flex space-x-7">
        {socialLinks.map((link, index) => (
          <li key={link.id} style={delayStyle(index * STAGGER_MS)}>
            <SocialLink {...link} />
          </li>
        ))}
        <li style={delayStyle(socialLinks.length * STAGGER_MS)}>
          <a
            className="block social-media-icon"
            href={t.cv.href}
            aria-label={t.cv.label}
            title={t.cv.label}
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              src="/cv.svg"
              alt=""
              className={`h-6 w-6 transition-transform duration-200 ease-in-out scale-125 hover:scale-150 brightness-0 invert object-contain ${ICON_SHADOW}`}
              width="24"
              height="24"
            />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialMedia;
