import socialMediaData from "../../public/data/social-media.json";

export const SocialMedia = () => {
  const svg = (
    key: string,
    href: string,
    label: string,
    title: string,
    viewbox: string,
    path: string
  ) => (
    <a
      className="block social-media-icon"
      href={href}
      key={key}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={label}
      title={title}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox={viewbox}
        fill="#E0E0E0"
        className="h-6 w-6 transition-transform duration-200 ease-in-out hover:scale-125 drop-shadow-[0_2px_1px_#4723a5] hover:drop-shadow-[0_2px_2px_#4723a5]"
        aria-hidden="true"
      >
        <path d={path}></path>
      </svg>
    </a>
  );

  return (
    <div className="flex h-[100px] sticky py-5 items-center justify-between gap-5">
      <ul className="flex space-x-7">
        {Object.entries(socialMediaData).map(([key, value], index) => {
          const delay = `${index * 100}ms`;

          return (
            <li key={key} style={{ "--delay": delay } as React.CSSProperties}>
              {svg(
                key,
                value.href,
                value.label,
                value.title,
                value.viewbox,
                value.path
              )}
            </li>
          );
        })}
        <li style={{ "--delay": "300ms" } as React.CSSProperties}>
          <a
            className="block social-media-icon"
            href="/documents/luar-jaen-sole-cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Descargar CV"
            title="Descargar CV"
          >
            <img
              src="/cv.svg"
              alt="CV"
              className="h-6 w-6 transition-transform duration-200 ease-in-out scale-125 hover:scale-150 drop-shadow-[0_2px_1px_#4723a5] hover:drop-shadow-[0_2px_2px_#4723a5] brightness-0 invert object-contain"
              style={{ width: "24px", height: "24px" }}
            />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialMedia;
