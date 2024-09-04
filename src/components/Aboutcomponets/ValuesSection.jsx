import React from "react";

const ValuesSection = () => {
  return (
    <section className="max-w-4xl lg:rounded-lg bg-primary mx-auto px-4 py-12 mt-12">
      <h2 className="text-2xl font-bold mb-6 text-center text-white">
        CONHEÇA NOSSOS VALORES
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white border rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4 text-secondary">
            CLAREZA
          </h3>
          <p className="text-lg text-secondary">
            Adotamos uma linguagem fácil, intuitiva e sem complicação para que
            qualquer pessoa se sinta confortável com nossa plataforma,
            independente de idade ou área de atuação.
          </p>
        </div>
        <div className="bg-white border rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4 text-secondary">
            LIBERDADE
          </h3>
          <p className="text-lg text-secondary">
            Somos questionadores e não aceitamos aquilo que nos é imposto,
            diariamente buscamos novas soluções e valorizamos quem pensa fora
            da caixa!
          </p>
        </div>
        <div className="bg-white border rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4 text-secondary">
            TEMPO É PRECIOSO
          </h3>
          <p className="text-lg text-secondary">
            Não gostamos de perder tempo e buscamos oferecer o que tem de
            melhor o mais rápido possível aos nossos clientes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
