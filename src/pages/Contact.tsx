import { useRef, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';
import SEO from '../components/SEO';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    try {
      await emailjs.sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        formRef.current,
        'YOUR_PUBLIC_KEY'
      );

      toast.success('Mensagem enviada com sucesso!');
      formRef.current.reset();
    } catch (error) {
      toast.error('Erro ao enviar mensagem. Tente novamente.');
    }
  };

  return (
    <div className="bg-background text-foreground min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <SEO 
        title="Contato" 
        description="Entre em contato conosco para dúvidas, sugestões ou parcerias."
        keywords="contato, mensagem, email, suporte"
      />

      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6 text-primary">Fale Conosco</h1>
        <p className="text-muted mb-8">
          Entre em contato preenchendo o formulário abaixo. Retornaremos o mais breve possível!
        </p>
      </div>

      <form 
        ref={formRef} 
        onSubmit={handleSubmit} 
        className="max-w-3xl mx-auto bg-[#1e1e30] rounded-lg p-8 shadow-glow border border-gray-700 space-y-6"
      >
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-foreground">
            Nome
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            className="mt-2 block w-full rounded-md bg-background border border-gray-700 p-3 text-foreground placeholder-muted shadow-sm focus:border-primary focus:ring-primary"
            placeholder="Seu nome completo"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-foreground">
            E-mail
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            className="mt-2 block w-full rounded-md bg-background border border-gray-700 p-3 text-foreground placeholder-muted shadow-sm focus:border-primary focus:ring-primary"
            placeholder="seuemail@exemplo.com"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-foreground">
            Mensagem
          </label>
          <textarea
            name="message"
            id="message"
            rows={4}
            required
            className="mt-2 block w-full rounded-md bg-background border border-gray-700 p-3 text-foreground placeholder-muted shadow-sm focus:border-primary focus:ring-primary"
            placeholder="Escreva sua mensagem aqui"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-primary text-background py-3 px-6 rounded-md font-medium hover:bg-primary-light transition-colors"
        >
          Enviar Mensagem
        </button>
      </form>
    </div>
  );
};

export default Contact;
