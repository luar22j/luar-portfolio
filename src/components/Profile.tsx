import "../assets/css/portal.css";

export const Profile = () => {
  return (
    <div className="flex flex-col sm:gap-5 gap-10">
      <div className="flex sm:items-center items-start sm:flex-row flex-col flex-wrap justify-between sm:gap-[100px] gap-10">
        <h1
          className="flex order-2 sm:order-1 profile-animation text-gray-100 drop-shadow-[0_2px_10px_#4723a5] hover:drop-shadow-[0_2px_15px_#4723a5] text-5xl md:text-7xl font-bold cursor-pointer transition-all"
          style={{ "--delay": "0ms" } as React.CSSProperties}
        >
          Luar Jaén
        </h1>
        <div
          className="img-profile-animation relative flex order-1 sm:order-2 group duration-300 transition-all"
          style={{ "--delay": "100ms" } as React.CSSProperties}
        >
          <div className="absolute inset-0 z-0 group-hover:drop-shadow-[0_0_5px_#4723a5] duration-300 transition-all">
            {[1, 2, 3, 4, 5].map((index) => (
              <div key={index} className="portal"></div>
            ))}
          </div>
          <img
            className="relative z-10 min-h-40 min-w-40 h-40 w-40 md:h-52 md:w-52 shadow-[0_0_20px_#4723a5] rounded-full object-cover cursor-pointer"
            src="./img/profile.webp"
            alt="Luar"
          />
        </div>
      </div>
      <div className="md:text-justify flex flex-col gap-5">
        <h2
          className="profile-animation text-gray-300 md:text-3xl text-2xl font-bold transition-all"
          style={{ "--delay": "200ms" } as React.CSSProperties}
        >
          Desarrollador Full Stack
        </h2>
        <p
          className="profile-animation text-gray-400 md:text-lg text transition-all"
          style={{ "--delay": "300ms" } as React.CSSProperties}
        >
          I build pixel-perfect, engaging, and accessible digital experiences.
        </p>
      </div>
    </div>
  );
};

export default Profile;
