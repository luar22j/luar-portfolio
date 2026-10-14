import "../assets/css/portal.css";
import { useTranslation } from "../i18n/useTranslation";
import { delayStyle } from "../utils/animation";

const PORTAL_LAYERS = [1, 2, 3, 4, 5];

const Profile = () => {
  const { t } = useTranslation();

  return (
    <header className="flex flex-col sm:gap-5 gap-10">
      <div className="flex sm:items-center items-start sm:flex-row flex-col flex-wrap justify-between sm:gap-[100px] gap-10">
        <h1
          className="flex order-2 sm:order-1 profile-animation text-gray-100 drop-shadow-[0_2px_10px_theme(colors.brand)] hover:drop-shadow-[0_2px_15px_theme(colors.brand)] text-5xl md:text-7xl font-bold transition-all"
          style={delayStyle(0)}
        >
          Luar Jaén
        </h1>
        <div
          className="img-profile-animation relative flex order-1 sm:order-2 group duration-300 transition-all"
          style={delayStyle(100)}
        >
          <div
            className="absolute inset-0 z-0 group-hover:drop-shadow-[0_0_5px_theme(colors.brand)] duration-300 transition-all"
            aria-hidden="true"
          >
            {PORTAL_LAYERS.map((layer) => (
              <div key={layer} className="portal"></div>
            ))}
          </div>
          <img
            className="relative z-10 min-h-40 min-w-40 h-40 w-40 md:h-52 md:w-52 shadow-[0_0_20px_theme(colors.brand)] rounded-full object-cover"
            src="/img/profile.webp"
            alt="Luar"
          />
        </div>
      </div>
      <div className="md:text-justify flex flex-col gap-5">
        <p
          className="profile-animation text-gray-300 md:text-3xl text-2xl font-bold transition-all"
          style={delayStyle(200)}
        >
          {t.profile.role}
        </p>
        <p
          className="profile-animation text-gray-400 md:text-lg transition-all"
          style={delayStyle(300)}
        >
          {t.profile.tagline}
        </p>
      </div>
    </header>
  );
};

export default Profile;
