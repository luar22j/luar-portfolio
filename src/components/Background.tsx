import "../assets/css/global.css";
import "../assets/css/stars.css";
interface BackgroundProps {
  children: React.ReactNode;
  handleClick?: () => void;
}

export const Background: React.FC<BackgroundProps> = ({ children }) => {
  return (
    <>
      <div className="fixed inset-0 -z-10 h-full w-full [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
        {/* Estrellas */}
        <div className="stars">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="star"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="min-h-screen flex items-center justify-center p-8 overflow-y-auto">
        {children}
      </div>
    </>
  );
};

export default Background;
