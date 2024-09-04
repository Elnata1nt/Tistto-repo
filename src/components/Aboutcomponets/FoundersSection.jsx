import React from "react";

const FoundersSection = () => {
  return (
    <section className="max-w-4xl mx-auto px-4 py-12 mt-12">
      <h2 className="text-2xl font-bold mb-6 text-center">
        NOSSOS FUNDADORES
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <a
          href="https://www.linkedin.com/in/beatriz-ds/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white border rounded-lg shadow-md p-6 flex flex-col items-center"
        >
          <img
            src="public/assets/BeatrizD.png"
            alt="Beatriz"
            className="w-24 h-24 rounded-full mb-4 object-cover"
          />
          <h3 className="text-xl font-semibold mb-2">Beatriz Duarte</h3>
          <p className="text-lg text-secondary">
            Founder na Tistto, apaixonada por estratégias para negócios e
            tentando transformar o mundo em um lugar melhor através dos dados!
          </p>
        </a>
        <a
          href="https://www.linkedin.com/in/vitor-macield/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white border rounded-lg shadow-md p-6 flex flex-col items-center"
        >
          <img
            src="public/assets/VitorMaciel.png"
            alt="Vitor"
            className="w-24 h-24 rounded-full mb-4 object-cover"
          />
          <h3 className="text-xl font-semibold mb-2">Vitor Maciel</h3>
          <p className="text-lg text-secondary">
            Co-founder e COO na Tistto, aficcionado por inovação e
            desenvolvimento de negócios. Ajudo empresas a garantirem sua
            reputação na web.
          </p>
        </a>
      </div>
    </section>
  );
};

export default FoundersSection;
