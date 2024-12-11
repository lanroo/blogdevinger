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
    <div className="max-w-4xl mx-auto px-4 py-12">
      <SEO 
        title="Contato" 
        description="Entre em contato conosco para dúvidas, sugestões ou parcerias."
        keywords="contato, mensagem, email, suporte"
      />
      
      <h1 className="text-3xl font-bold mb-8">Fale Conosco</h1>
      
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Nome
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            E-mail
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Mensagem
          </label>
          <textarea
            name="message"
            id="message"
            rows={4}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
        >
          Enviar Mensagem
        </button>
      </form>
    </div>
  );
};

export default Contact;