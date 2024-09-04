import React from 'react';

const AboutPage = () => {
  return (
    <div className=" bg-white text-secondary">
      <section className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">E se você pudesse remediar uma crise antes mesmo que ela aconteça?</h1>
        <p className="text-lg mb-6">
          Foi para isso que a Tistto nasceu! A história da Tistto começa muito antes do negócio, surgimos como fruto de uma dor vivida pela nossa fundadora. Em 2020, após ter seus dados usados por um terceiro na internet, nossa fundadora começou a estudar sobre a relação das plataformas sociais versus a privacidade de dados, e através dessa busca, entendeu que todos estão expostos a serem vítimas de um relato falso na internet.
        </p>
        <p className="text-lg mb-6">
          Pensando em como oferecer mais segurança na internet, em Março de 2023, a Tistto oficialmente surgiu. Nossa plataforma identifica relatos falsos em tempo real, através do monitoramento constante das principais plataformas sociais e Google. Dessa forma, proporcionamos aos nossos clientes que eles consigam gerar um plano de crise e solicitar a remoção do relato antes mesmo que ele viralize na internet, evitando prejuízos financeiros e de imagem.
        </p>
        {/* Aqui você pode adicionar uma imagem descritiva */}
      </section>

      
      <section className="max-w-4xl  mx-auto mt-12">
        <h2 className="text-2xl font-bold mb-4">CONHEÇA NOSSOS VALORES</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold">CLAREZA</h3>
            <p className="text-lg">
              Adotamos uma linguagem fácil, intuitiva e sem complicação para que qualquer pessoa se sinta confortável com nossa plataforma, independente de idade ou área de atuação.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">LIBERDADE</h3>
            <p className="text-lg">
              Somos questionadores e não aceitamos aquilo que nos é imposto, diariamente buscamos novas soluções e valorizamos quem pensa fora da caixa!
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">TEMPO É PRECIOSO</h3>
            <p className="text-lg">
              Não gostamos de perder tempo e buscamos oferecer o que tem de melhor o mais rápido possível aos nossos clientes.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
