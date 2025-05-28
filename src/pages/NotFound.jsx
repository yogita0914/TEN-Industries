import React from "react";

export function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-900 to-gray-800 text-white px-4">
      <h1 className="text-7xl font-extrabold mb-4 text-orange-500">404</h1>
      <p className="text-xl text-gray-300 mb-8 max-w-md text-center">
        The page you are looking for cannot be found.
        <br />
        TEN-Industries is here to power your industrial innovation.
      </p>
      <a
        href="/"
        className="bg-orange-600 hover:bg-orange-700 transition-colors duration-300 text-white font-semibold py-3 px-6 rounded-full shadow-lg"
      >
        Return to Dashboard
      </a>
    </div>
  );
}
