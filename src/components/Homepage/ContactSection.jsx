// sections/ContactSection.jsx
import React from 'react';

const ContactSection = () => {
  return (
    <section className="bg-black py-16 border-b-2 border-primary px-4 flex flex-col items-center">
      <h4 className="text-3xl font-bold text-white mb-4 text-center">
        Tenha controle sobre seu nome na internet ainda hoje! Agende uma demonstração!
      </h4>
      <p className="text-lg text-white mb-6 text-center">
        Preencha o formulário ao lado para que um de nossos consultores entre em contato, ou agende
        uma reunião pelo botão abaixo.
      </p>
      <form className="w-full max-w-md space-y-4">
        <input
          type="text"
          placeholder="Nome"
          className="w-full px-4 py-2 border border-white rounded-md"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 border border-white rounded-md"
        />
        <input
          type="tel"
          placeholder="Telefone"
          className="w-full px-4 py-2 border border-white rounded-md"
        />
        <textarea
          placeholder="Mensagem"
          className="w-full px-4 py-2 border border-white rounded-md"
        />
        <button className="bg-primary text-white font-semibold py-2 px-6 rounded-md hover:bg-opacity-90">
          Enviar
        </button>
      </form>
    </section>
  );
};

export default ContactSection;
