const Resume = () => {
  return (
    <a
      className="block social-media-icon"
      href="/cv"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Ver CV en PDF"
      title="Ver CV en PDF"
    >
      <img
        src="/cv.svg"
        alt="Ícono de CV"
        className="h-6 w-6 transition-transform duration-200 ease-in-out scale-125 hover:scale-150 drop-shadow-[0_2px_1px_#4723a5] hover:drop-shadow-[0_2px_2px_#4723a5] brightness-0 invert object-contain"
        width="24"
        height="24"
      />
    </a>
  );
};

export default Resume;
