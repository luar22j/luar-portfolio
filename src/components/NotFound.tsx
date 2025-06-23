import Background from "./Background";

const NotFound = () => (
  <Background noPadding>
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-gray-100 drop-shadow-[0_2px_10px_#4723a5] hover:drop-shadow-[0_2px_15px_#4723a5] text-5xl md:text-7xl font-bold mb-4">
        404
      </h1>
      <p className="text-2xl text-gray-300 mb-8">Página no encontrada</p>
      <a
        href="/"
        className="px-6 py-2 bg-[#4723a5] text-white rounded-lg shadow hover:bg-[#341a7c] transition"
      >
        Volver al inicio
      </a>
    </div>
  </Background>
);

export default NotFound;
