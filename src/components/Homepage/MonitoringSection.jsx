import React from 'react';
import { FaGoogle, FaInstagram, FaFacebook, FaTwitter, FaYoutube, FaLinkedin } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const MonitoringSection = () => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate('/login'); // Adjust the route as needed
  };

  return (
    <section className="bg-white py-16 text-center px-4">
      <h2 className="text-3xl font-bold text-secondary mb-6">
        MONITORAMOS AS PRINCIPAIS PLATAFORMAS
      </h2>
      <div className="flex justify-center space-x-4 mb-8">
        <FaGoogle className="text-4xl text-primary" />
        <FaInstagram className="text-4xl text-primary" />
        <FaFacebook className="text-4xl text-primary" />
        <FaTwitter className="text-4xl text-primary" />
        <FaYoutube className="text-4xl text-primary" />
        <FaLinkedin className="text-4xl text-primary" />
      </div>
      <p className="text-lg text-complementary mb-12">
        Aqui você pode incluir detalhes sobre as plataformas monitoradas e o visual do dashboard.
        Em 2023, empresas tiveram um prejuízo de R$58 Bi causados por desinformação e relatos falsos. 
        Por isso, utilizamos tecnologia para identificar conteúdos que podem causar danos à sua marca 
        em tempo real, prevenindo prejuízos financeiros e de imagem, antes que afetem sua reputação.
      </p>
      <div className="relative mx-auto max-w-7xl">
        <img src='/assets/dashboard.png' alt="Dashboard Mockup" className="rounded-lg" />
      </div>
      <button onClick={handleExploreClick} className="mt-8 bg-primary text-white py-2 px-6 rounded-md hover:bg-secondary transition-colors">
        Explore o Dashboard
      </button>
    </section>
  );
};

export default MonitoringSection;
