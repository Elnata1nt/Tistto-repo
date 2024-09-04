// sections/TestimonialsSection.jsx
import React from 'react';

const testimonials = [
  {
    name: 'Ana Souza',
    role: 'CEO, Marca X',
    feedback:
      'A Tistto mudou completamente a forma como gerenciamos a reputação da nossa marca. Agora, podemos identificar conteúdos negativos rapidamente e tomar medidas antes que se tornem um problema maior.',
    avatar: 'https://via.placeholder.com/80',
  },
  {
    name: "João Pereira",
    role: "Marketing Lead, Empresa Y",
    feedback: "O dashboard da Tistto se destacou pela sua interface intuitiva e fácil de usar. Ele proporciona uma visão detalhada e clara das atividades da nossa marca nas redes sociais, facilitando a análise das interações e o monitoramento do nosso desempenho online. Esta clareza é crucial para ajustarmos nossas estratégias de marketing e mantermos uma imagem positiva e consistente da marca. Agradecemos a equipe da Tistto por criar uma ferramenta tão eficiente e valiosa para nossas operações diárias.",
    avatar: "https://via.placeholder.com/80"
  }
  ,
  {
    name: 'Maria Oliveira',
    role: 'Gerente de Produto, Empresa Z',
    feedback:
      'Com a Tistto, ganhamos tempo e segurança ao monitorar as redes sociais. Os relatórios detalhados e o suporte excepcional nos ajudam a tomar decisões estratégicas com confiança.',
    avatar: 'https://via.placeholder.com/80',
  },
  {
    name: 'Carlos Lima',
    role: 'CFO, Corporação W',
    feedback:
      'A integração da Tistto com nossas redes sociais foi rápida e sem complicações. A ferramenta nos ajuda a monitorar a reputação da nossa marca em tempo real.',
    avatar: 'https://via.placeholder.com/80',
  },
  {
    name: 'Juliana Santos',
    role: 'Diretora de Marketing, Agência A',
    feedback:
      'Excelente serviço e suporte. A Tistto nos ajudou a reduzir o impacto de conteúdos negativos sobre a nossa marca.',
    avatar: 'https://via.placeholder.com/80',
  },
  {
    name: 'Juliana Santos',
    role: 'Diretora de Marketing, Agência A',
    feedback:
      'Excelente serviço e suporte. A Tistto nos ajudou a reduzir o impacto de conteúdos negativos sobre a nossa marca.',
    avatar: 'https://via.placeholder.com/80',
  },
];

const TestimonialsSection = () => {
  return (
    <section className="bg-blue-800 border-t-2 border-black py-16 text-center px-4 text-white">
      <div className="container mx-auto max-w-screen-xl px-4">
        <h3 className="text-3xl font-bold mb-12">O que nossos clientes dizem</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`relative p-6 rounded-xl shadow-lg bg-white text-secondary ${
                index === 0
                  ? 'lg:col-span-2 lg:row-span-1'
                  : index === 1
                  ? 'lg:col-span-1 lg:row-span-2'
                  : index === 2
                  ? 'lg:col-span-2 lg:row-span-1'
                  : 'lg:col-span-1 lg:row-span-1'
              }`}
              style={{
                minHeight: index % 2 === 0 ? '180px' : '160px',
              }}
            >
              <blockquote className="text-left italic text-lg mb-4 text-secondary">
                “{testimonial.feedback}”
              </blockquote>
              <div className="flex items-center mt-4">
                <img
                  src={testimonial.avatar}
                  alt={`Avatar de ${testimonial.name}`}
                  className="w-12 h-12 rounded-full mr-4 border-2 border-accent"
                />
                <div className="text-left">
                  <p className="font-semibold text-base">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
