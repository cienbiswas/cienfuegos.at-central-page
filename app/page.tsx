import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-700 to-zinc-800 flex flex-col items-center justify-center px-6 text-center">
      
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold p-4 mb-12 text-gray-100">
        Welcome to <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-800 bg-clip-text text-transparent">Cienfuegos</span>
      </h1>

      {/* Two Option Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">

        {/* Option 1 — Human Potential */}
        <a
          href="https://humanpotential.netlify.app"
          className="group p-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-2xl shadow-lg hover:shadow-2xl transition-all"
        >
          <img className="my-8" src={"../images/forest city in contrast with normal city.jpeg"} />
          <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-white transition">
            Human Potential Is Big
          </h2>
          <p className="text-gray-900">
            A platform to explore visions, ideas, and projects that delve deep into the human potential.
          </p>
        </a>

        {/* Option 2 — Dancing School */}
        <a
          href="https://dance.cien-fuegos.at"
          className="group p-8 bg-gradient-to-l from-yellow-400 to-orange-400 rounded-2xl shadow-lg hover:shadow-2xl transition-all"
        >
          <img className="my-7" src={"../images/Dance Group.jpg"} />
          <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-white transition">
            Dancing School
          </h2>
          <p className="text-gray-900">
            A future space dedicated to movement, expression, and creativity through my contemporary dance school.
          </p>
        </a>
      </div>

      {/* Footer */}
      <p className="mt-16 text-gray-400 text-sm">
        © {new Date().getFullYear()} Cien-Fuegos
      </p>
    </div>
  );
}
