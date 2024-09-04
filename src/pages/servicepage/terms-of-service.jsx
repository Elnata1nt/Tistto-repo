import React from 'react';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6 md:p-12">
      <div className="container mx-auto bg-white p-6 md:p-12 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">Termos de Serviço</h1>
        
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">1. Aceitação dos Termos</h2>
          <p>
            Ao acessar e utilizar o nosso site (www.tistto.com.br) ou adquirir qualquer um dos serviços prestados pela Tistto LTDA, inscrita no CNPJ sob o número 55.750.535/0001-71, com sede na cidade de São Paulo, Estado de São Paulo, você concorda em estar ciente, cumprir e estar vinculado aos seguintes Termos de Uso.
          </p>
        </section>
        
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">2. Descrição dos Serviços</h2>
          <p>
            A Tistto LTDA oferece serviços de mapeamento de relatos falsos na internet, através do monitoramento de redes sociais e análise de menções aos nossos clientes. Esses serviços podem incluir a coleta e análise de dados públicos e conteúdo disponível online.
          </p>
        </section>
        
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">3. Propriedade Intelectual</h2>
          <p>
            Todo o conteúdo do Site, incluindo textos, gráficos, logotipos e software, é de propriedade da Tistto LTDA ou de seus licenciadores e está protegido por leis de propriedade intelectual. Você não pode usar, reproduzir ou distribuir qualquer conteúdo sem a autorização prévia por escrito da Tistto LTDA.
          </p>
        </section>
        
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">4. Uso do Site</h2>
          <p>
            Você concorda em usar o Site de acordo com todas as leis e regulamentos aplicáveis, bem como os presentes Termos de Uso. É vedado o uso do Site para fins ilegais ou não autorizados, e é sua responsabilidade não comprometer a segurança ou o funcionamento do Site.
          </p>
        </section>
        
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">5. Isenção de Responsabilidade</h2>
          <p>
            O Site e os serviços são fornecidos “no estado em que se encontram”. A Tistto LTDA não garante, expressa ou implicitamente, a precisão, adequação ou resultados esperados dos serviços. A Tistto LTDA não se responsabiliza por danos diretos, indiretos, incidentais ou consequenciais resultantes do uso incorreto ou inadequado do Site e dos serviços.
          </p>
        </section>
        
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">6. Modificações dos Termos</h2>
          <p>
            A Tistto LTDA reserva-se o direito de modificar estes Termos de Uso a qualquer momento. Quaisquer alterações serão publicadas no Site e entrarão em vigor imediatamente após a publicação. Recomendamos que você revise periodicamente os Termos de Uso para estar ciente de quaisquer atualizações.
          </p>
        </section>
        
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">7. Lei Aplicável</h2>
          <p>
            Estes Termos de Uso são regidos pelas leis da República Federativa do Brasil. Qualquer disputa relacionada a estes termos será resolvida nos tribunais competentes da cidade de São Paulo, Estado de São Paulo.
          </p>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">8. Contato</h2>
          <p>
            Para quaisquer dúvidas ou questões sobre estes Termos de Uso, entre em contato conosco pelo e-mail <a href="mailto:contato@tistto.com.br" className="text-blue-600 hover:underline">contato@tistto.com.br</a>.
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsOfService;
