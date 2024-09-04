import React, { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Nome é obrigatório.';
    if (!formData.email) newErrors.email = 'Email é obrigatório.';
    if (!formData.phone) newErrors.phone = 'Telefone é obrigatório.';
    if (!formData.message) newErrors.message = 'Mensagem é obrigatória.';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setIsSubmitting(true);

    try {
      // Aqui você pode fazer a chamada para a API ou servidor
      // Exemplo: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) });

      // Simulando uma espera
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Limpar o formulário após o envio
      setFormData({ name: '', email: '', phone: '', message: '' });
      setErrors({});
    } catch (error) {
      console.error('Erro ao enviar o formulário:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-black py-16 px-10 border-b-2 border-primary">
      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:justify-between">
        {/* Descrições */}
        <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
          <h4 className="text-3xl font-bold text-white mb-4 text-center lg:text-left">
            Tenha controle sobre seu nome na internet ainda hoje! Agende uma demonstração!
          </h4>
          <p className="text-lg text-white text-center lg:text-left">
            Preencha o formulário ao lado para que um de nossos consultores entre em contato, ou agende
            uma reunião pelo botão abaixo.
          </p>
        </div>

        {/* Formulário */}
        <div className="lg:max-w-3xl">
          <form className="space-y-4 bg-black p-6 rounded-lg border border-white" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Nome"
              className="w-full px-4 py-2 border border-white rounded-md bg-black text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-primary"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full px-4 py-2 border border-white rounded-md bg-black text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-primary"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Telefone"
              className="w-full px-4 py-2 border border-white rounded-md bg-black text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-primary"
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Mensagem"
              className="w-full px-4 py-2 border border-white rounded-md bg-black text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-primary"
            />
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}

            <button
              type="submit"
              className="w-full bg-primary text-white font-semibold py-2 px-6 rounded-md hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Enviando...' : 'Enviar'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
