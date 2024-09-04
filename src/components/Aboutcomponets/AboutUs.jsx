import React from "react";

const AboutUs = () => {
  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6 text-start">
        E se você pudesse remediar uma crise antes mesmo que ela aconteça?
      </h1>
      <h2 className="text-xl font-medium mb-6 text-blue-800 text-start">
      Foi para isso que a Tistto nasceu!
      </h2>
      <p className="text-lg mb-6">
        Foi para isso que a Tistto nasceu! A história da Tistto começa muito
        antes do negócio, surgimos como fruto de uma dor vivida pela nossa
        fundadora. Em 2020, após ter seus dados usados por um terceiro na
        internet, nossa fundadora começou a estudar sobre a relação das
        plataformas sociais versus a privacidade de dados, e através dessa
        busca, entendeu que todos estão expostos a serem vítimas de um relato
        falso na internet.
      </p>
      <p className="text-lg mb-6">
        Pensando em como oferecer mais segurança na internet, em Março de
        2023, a Tistto oficialmente surgiu. Nossa plataforma identifica
        relatos falsos em tempo real, através do monitoramento constante das
        principais plataformas sociais e Google. Dessa forma, proporcionamos
        aos nossos clientes que eles consigam gerar um plano de crise e
        solicitar a remoção do relato antes mesmo que ele viralize na
        internet, evitando prejuízos financeiros e de imagem.
      </p>
      {/* Adicione uma imagem descritiva aqui, se necessário */}
    </section>
  );
};

export default AboutUs;
