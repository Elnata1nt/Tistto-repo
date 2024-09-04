// src/pages/Auth/LoginPage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Validação simples
    if (!email || !password) {
      setError("Por favor, preencha todos os campos.");
      return;
    }

    setLoading(true);

    try {
      // Chamada simulada à API de login
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Credenciais inválidas.");
      }

      const data = await response.json();
      // Supondo que a resposta contenha um token
      localStorage.setItem("token", data.token); // Armazene o token no localStorage

      // Redirecionar para o dashboard ou outra página após login bem-sucedido
      navigate("/dashboard");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="lg:min-h-screen flex flex-col md:flex-row">
      {/* Lado do Texto Informativo */}
      <div className="flex items-center bg-primary justify-center w-full md:w-1/2 p-8 order-2 md:order-none">
        <div className="text-white max-w-sm text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4">Acesse Seu Dashboard</h2>
          <p className="text-lg font-light">
            Faça login com suas credenciais pessoais para acessar seu dashboard
            e explorar todas as funcionalidades. Se ainda não for cliente, entre
            em contato com nossa equipe de especialistas para iniciar o controle
            total sobre sua presença online hoje mesmo.
          </p>
        </div>
      </div>
      {/* Lado do Formulário */}
      <div className="flex items-center justify-center w-full md:w-1/2 py-16 px-8 order-1 md:order-none">
        <div className="bg-white w-full max-w-lg">
          <h2 className="text-secondary font-bold text-2xl text-center mb-6">
            Bem-vindo de volta!
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Exibição de Erro */}
            {error && (
              <div className="text-red-500 text-sm text-center mb-4">
                {error}
              </div>
            )}

            {/* Campo de E-mail */}
            <div className="relative">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-secondary mb-2"
              >
                E-mail
              </label>
              <input
                type="email"
                id="email"
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary-color"
                placeholder="Digite seu e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Campo de Senha */}
            <div className="relative">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-secondary mb-2"
              >
                Senha
              </label>
              <input
                type="password"
                id="password"
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary-color"
                placeholder="Digite sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {/* Botão de Login */}
            <button
              type="submit"
              className="w-full bg-primary text-white font-medium py-3 rounded-lg hover:bg-primarydark transition-colors shadow-lg hover:shadow-xl"
              disabled={loading}
            >
              {loading ? "Entrando..." : "Entrar"}
            </button>

            {/* Links Auxiliares */}
            <div className="flex justify-between items-center text-sm pt-4">
              <a href="#" className="text-black hover:underline transition-all">
                Esqueceu sua senha?
              </a>
              <a
                href="/register"
                className="text-primary hover:underline font-semibold transition-all"
              >
                Registrar-se
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
