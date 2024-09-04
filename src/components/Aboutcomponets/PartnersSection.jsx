import React from "react";

const PartnersSection = () => {
  return (
    <section className="max-w-4xl mx-auto px-4 py-12 mt-12">
      <h2 className="text-2xl font-bold mb-6 text-center">
        PARCEIROS E APOIADORES
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <a
          href="https://brasilstartups.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white border rounded-lg shadow-md p-6 flex flex-col items-center"
        >
          <img
            src="/assets/brasilstartups.png"
            alt="Brasil Startups"
            className="w-32 h-32 object-contain mb-4"
          />
          <p className="text-lg text-secondary text-center">
            Brasil Startups
          </p>
        </a>
        <a
          href="https://www.antler.co/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white border rounded-lg shadow-md p-6 flex flex-col items-center"
        >
          <img
            src="/assets/Antlerfundo.svg"
            alt="Antler"
            className="w-32 h-32 object-contain mb-4"
          />
          <p className="text-lg text-secondary text-center">Antler</p>
        </a>
        <a
          href="https://startup.google.com/intl/pt-BR/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white border rounded-lg shadow-md p-6 flex flex-col items-center"
        >
          <img
            src="/assets/Googlestartups.webp"
            alt="Google Startups"
            className="w-32 h-32 object-contain mb-4"
          />
          <p className="text-lg text-secondary text-center">
            Google Startups
          </p>
        </a>
        <a
          href="https://www.linkedin.com/company/astella-invest/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white border rounded-lg shadow-md p-6 flex flex-col items-center"
        >
          <img
            src="/assets/astella_investimentos.jpeg"
            alt="astELLAS"
            className="w-32 h-32 object-contain mb-4"
          />
          <p className="text-lg text-secondary text-center">astELLAS</p>
        </a>
      </div>
    </section>
  );
};

export default PartnersSection;
