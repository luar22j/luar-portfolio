import type { ReactNode } from "react";
import "../assets/css/stars.css";

const STAR_COUNT = 50;

// Generated once at module load so a re-render never reshuffles the sky.
const stars = Array.from({ length: STAR_COUNT }, (_, id) => ({
  id,
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  animationDelay: `${Math.random() * 5}s`,
}));

interface BackgroundProps {
  children: ReactNode;
}

const Background = ({ children }: BackgroundProps) => (
  <>
    <div
      className="fixed inset-0 -z-10 h-full w-full [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"
      aria-hidden="true"
    >
      <div className="stars">
        {stars.map(({ id, ...position }) => (
          <div key={id} className="star" style={position} />
        ))}
      </div>
    </div>

    <div className="min-h-screen flex items-center justify-center p-8 overflow-y-auto">
      {children}
    </div>
  </>
);

export default Background;
