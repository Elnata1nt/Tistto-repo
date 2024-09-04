// src/components/Layout/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Links Section */}
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
          <a
            href="https://www.linkedin.com/company/tistto/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
            aria-label="LinkedIn da Tistto"
          >
            LinkedIn
          </a>
          <a
            href="https://www.instagram.com/tistto.br?igsh=MWdrNnhyNzUxd2ZrNA=="
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
            aria-label="Instagram da Tistto"
          >
            Instagram
          </a>
          <a
            href="https://cnpja.com/office/55750535000171"
            target="_blank"
            className="hover:underline text-blue-800"
            aria-label="CNPJ"
          >
            CNPJ:55.750.535/0001-71
          </a>
          <a
            href="https://maps.app.goo.gl/7DsHtXgQzjzazJjAA"
            target="_blank"
            className="hover:underline text-blue-800"
            aria-label="Endereço"
          >
            Avenida Paulista, 1106, São Paulo / SP
          </a>
        </div>
        {/* Copyright Section */}
        <p className="text-center md:text-left text-sm">
          &copy; 2024 Tistto. Todos os direitos reservados.{" "}
          <a
            href="/terms-of-service"
            className="text-blue-800 font-barlow hover:underline"
          >
            Termos de Serviço
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
