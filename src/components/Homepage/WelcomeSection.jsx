// sections/WelcomeSection.jsx
import React from 'react';

const WelcomeSection = () => {
  return (
    <section className="bg-black py-20 border-b-2 border-primary px-6 text-center relative overflow-hidden flex items-center justify-center min-h-screen">
      <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-50 -z-10"></div>
      <div className="relative max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
          A Tistto dá a você o poder de controlar sua marca e narrativa na internet, 
          identificando relatos falsos e conteúdos negativos em tempo real.
        </h1>
        <p className="text-base md:text-xl text-white mb-8">
          O Brasil é o terceiro maior consumidor de redes sociais no mundo. 89% dos brasileiros 
          verificam as redes sociais de uma empresa antes de fazer uma compra.
        </p>
        <button className="bg-primary text-white font-bold py-3 px-6 md:py-3 md:px-8 rounded-lg shadow-lg hover:bg-opacity-80 transition-all duration-300">
          Saiba Mais
        </button>
      </div>
    </section>
  );
};

export default WelcomeSection;
