//PageNotFound.jsx

import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-950 text-gray-100">
      <div className="text-center space-y-4">
        <h1 className="text-8xl font-extrabold tracking-widest text-red-500 animate-pulse">
          404
        </h1>
        <p className="text-2xl md:text-3xl font-light text-gray-300">
          Sorry, this page does not exist.
        </p>
        <p className="text-sm text-gray-500">
          You’ve reached the edge of the universe.
        </p>
        <Link
          to="/"
          className="inline-block mt-6 px-6 py-2 border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-colors duration-300 rounded"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
