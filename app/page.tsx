import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-6 text-center">
      
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold mb-12 text-gray-900">
        Welcome to Cien-Fuegos
      </h1>

      {/* Two Option Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">

        {/* Option 1 — Human Potential */}
        <a
          href="https://humanpotential.netlify.app"
          className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-200"
        >
          <img className="my-8" src={"../images/forest city in contrast with normal city.jpeg"} />
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-yellow-500 transition">
            The Human Potential Project
          </h2>
          <p className="text-gray-600">
            Explore thoughts, ideas, and visions about who we are and who we can become.
          </p>
        </a>

        {/* Option 2 — Dancing School */}
        <a
          href="https://dance.cien-fuegos.at"
          className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-200"
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-yellow-500 transition">
            Dancing School
          </h2>
          <p className="text-gray-600">
            A future space dedicated to movement, expression, and creativity.
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
