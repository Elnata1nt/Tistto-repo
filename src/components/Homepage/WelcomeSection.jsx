// sections/WelcomeSection.jsx
import React from 'react';

const WelcomeSection = () => {
  return (
    <section className="relative flex items-center justify-center min-h-screen bg-black py-20 md:py-28 border-b-2 border-blue-800 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-accent to-blue-800 opacity-60 -z-10"></div>
      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-8 leading-tight">
          A Tistto dá a você o poder de controlar sua marca e narrativa na internet, 
          identificando relatos falsos e conteúdos negativos em tempo real.
        </h1>
        <p className="text-base md:text-lg lg:text-2xl text-white mb-12">
          O Brasil é o terceiro maior consumidor de redes sociais no mundo. 89% dos brasileiros 
          verificam as redes sociais de uma empresa antes de fazer uma compra.
        </p>
        <button className="bg-blue-800 text-white font-bold py-3 px-6 md:py-4 md:px-8 lg:py-5 lg:px-10 rounded-lg shadow-lg hover:bg-opacity-80 transition-all duration-300">
          Saiba Mais
        </button>
      </div>
    </section>
  );
};

export default WelcomeSection;
