// src/pages/Auth/RegisterPage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Validação simples
    if (!name || !email || !password || !confirmPassword) {
      setError("Por favor, preencha todos os campos.");
      return;
    }

    if (password !== confirmPassword) {
      setError("As senhas não coincidem.");
      return;
    }

    setLoading(true);

    try {
      // Chamada simulada à API de registro
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      if (!response.ok) {
        throw new Error("Erro ao criar a conta.");
      }

      const data = await response.json();
      localStorage.setItem("token", data.token || "");

      navigate("/login");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="lg:min-h-screen flex flex-col md:flex-row">
      {/* Lado do Formulário */}
      <div className="flex items-center justify-center w-full py-16 px-8 md:w-1/2 p-8 order-1 md:order-none">
        <div className="bg-white w-full max-w-lg">
          <h2 className="text-secondary font-bold text-2xl text-center mb-6">
            Crie sua conta
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Exibição de Erro */}
            {error && (
              <div className="text-red-500 text-sm text-center mb-4">
                {error}
              </div>
            )}

            {/* Campo de nome */}
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-secondary mb-2"
              >
                Nome
              </label>
              <input
                type="text"
                id="name"
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-800"
                placeholder="Digite seu nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-secondary mb-2"
              >
                E-mail
              </label>
              <input
                type="email"
                id="email"
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-800"
                placeholder="Digite seu e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-secondary mb-2"
              >
                Senha
              </label>
              <input
                type="password"
                id="password"
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-800"
                placeholder="Digite sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-secondary mb-2"
              >
                Confirmar Senha
              </label>
              <input
                type="password"
                id="confirmPassword"
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-800"
                placeholder="Confirme sua senha"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-800 text-white font-medium py-2 rounded-md hover:bg-secondary transition-colors"
              disabled={loading}
            >
              {loading ? "Registrando..." : "Registrar"}
            </button>
            <div className="text-center mt-4 text-sm">
              <p className="mb-2">
                Já tem uma conta?{" "}
                <a
                  href="/login"
                  className="text-blue-800 font-bold hover:underline"
                >
                  Faça login
                </a>
              </p>
              <p>
                Você concorda com nossos{" "}
                <a
                  href="/terms-of-service"
                  className="text-blue-800 font-semibold hover:underline"
                >
                  Termos de Serviço{"?"}
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>

      {/* Lado do Texto Informativo */}
      <div className="flex items-center bg-blue-800 justify-center w-full md:w-1/2 p-8 order-2 md:order-none">
        <div className="text-white max-w-sm text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4">
            Crie sua Conta e Transforme o Controle da Sua Marca!
          </h2>
          <p className="text-lg font-light">
            Acesse nosso dashboard exclusivo usando suas credenciais pessoais e
            descubra todas as funcionalidades que preparamos para você. Se ainda
            não é cliente, não se preocupe! Entre em contato com nosso time de
            especialistas e dê o primeiro passo para dominar sua presença
            online. Faça seu cadastro hoje mesmo e comece a aproveitar todas as
            vantagens que oferecemos para o crescimento da sua marca!
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
