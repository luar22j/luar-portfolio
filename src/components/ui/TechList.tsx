import { delayStyle } from "../../utils/animation";

interface TechListProps {
  technologies: string[];
  /** When set, the badges fade in one after another starting at this delay. */
  animateFromMs?: number;
}

const STAGGER_MS = 100;

const TechList = ({ technologies, animateFromMs }: TechListProps) => {
  const isAnimated = animateFromMs !== undefined;

  return (
    <ul className="flex flex-wrap gap-3">
      {technologies.map((name, index) => (
        <li
          key={name}
          className={`py-1 px-4 rounded-full text-gray-200 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 shadow-lg shadow-purple-500/50${
            isAnimated ? " components-animation" : ""
          }`}
          style={
            isAnimated
              ? delayStyle(animateFromMs + index * STAGGER_MS)
              : undefined
          }
        >
          {name}
        </li>
      ))}
    </ul>
  );
};

export default TechList;
