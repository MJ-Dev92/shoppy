import React from "react";

export default function Banner() {
  return (
    <section className="h-96 bg-yellow-900 relative">
      <div className="bg-banner w-full h-full bg-cover opacity-80"></div>
      <div className="absolute w-full top-32 text-center text-gray-50 drop-shadow-2xl">
        <h2 className="text-6xl">Shop With US</h2>
        <p className="text-2xl">Best Products,High Quality</p>
      </div>
    </section>
  );
}
