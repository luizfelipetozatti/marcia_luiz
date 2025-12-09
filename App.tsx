import React from 'react';
import { CheckCircle2, Star, ArrowRight, Lock, BookOpen, Quote, ShieldCheck } from 'lucide-react';
import Button from './components/Button';
import Accordion from './components/Accordion';
import { 
  HERO_HEADLINE, 
  HERO_SUBHEADLINE, 
  VIDEO_PLACEHOLDER_URL, 
  MARCIA_IMAGE_URL, 
  COURSE_MODULES, 
  KIT_ITEMS, 
  BENEFITS, 
  FAQS 
} from './constants';

const App: React.FC = () => {
  
  const scrollToPricing = () => {
    const element = document.getElementById('pricing');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen font-sans bg-brand-50 text-brand-900 overflow-x-hidden">
      
      {/* Hero Section */}
      <header className="relative pt-20 pb-20 lg:pt-32 lg:pb-28 px-4 overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-200 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-brand-300 rounded-full blur-3xl opacity-30"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-block px-5 py-2 mb-6 rounded-full border border-nobel-gold/50 bg-white/50 text-nobel-gold text-sm font-semibold tracking-wide uppercase">
            Para Neuro e Psicopedagogos
          </div>
          <h1 className="font-serif text-4xl md:text-6xl font-normal text-brand-900 leading-tight mb-6">
            {HERO_HEADLINE}
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-stone-700 font-light leading-relaxed mb-12">
            {HERO_SUBHEADLINE}
          </p>

          <div className="max-w-3xl mx-auto mb-12 shadow-2xl rounded-2xl overflow-hidden border-4 border-white">
            <div className="aspect-video bg-black relative flex items-center justify-center group cursor-pointer">
              {/* This represents the VSL */}
              <img src={VIDEO_PLACEHOLDER_URL} alt="Vídeo de Apresentação" className="w-full h-full object-cover opacity-80" />
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-20 h-20 bg-brand-500/90 rounded-full flex items-center justify-center pl-1 shadow-xl group-hover:scale-110 transition-transform">
                   <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[24px] border-l-white border-b-[12px] border-b-transparent"></div>
                 </div>
              </div>
            </div>
            <div className="bg-brand-800 text-brand-100 py-3 px-4 text-sm font-medium">
              🔊 Ligue o som para assistir à apresentação da Márcia
            </div>
          </div>

          <Button onClick={scrollToPricing} className="mx-auto shadow-brand-500/30">
            Quero Começar Agora
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </header>

      {/* Pain & Agitation */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="font-serif text-3xl md:text-4xl font-normal text-brand-900 mb-6">
                O diploma está na mão, mas o medo de começar te paralisa?
              </h2>
              <div className="space-y-4 text-brand-700 text-lg">
                <p>
                  Eu sei exatamente como é. Você estudou anos, se especializou, mas na hora de abrir a porta do consultório, surge a dúvida: 
                  <span className="italic font-medium text-brand-800"> "E se eu errar no contrato? E se eu não souber quanto cobrar?"</span>
                </p>
                <p>
                  Muitas profissionais adiam o sonho da clínica por pura insegurança burocrática. O medo da papelada vira um muro entre você e seus pacientes.
                </p>
                <div className="p-6 bg-brand-50 border-l-4 border-nobel-gold rounded-r-lg mt-8">
                  <p className="font-medium italic text-brand-800">
                    "O novo assusta, dá medo — mas não existe conquista sem partida. O Protocolo Essencial é a ponte segura que faltava."
                  </p>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 grid grid-cols-2 gap-4">
               {/* Visual representation of "Confusion" vs "Clarity" */}
               <div className="bg-brand-100 rounded-2xl p-6 h-64 flex flex-col justify-center items-center text-center transform translate-y-8">
                  <span className="text-4xl mb-4">😫</span>
                  <span className="font-serif font-medium text-brand-800">Insegurança</span>
                  <span className="text-sm text-brand-600 mt-2">Medo de errar juridicamente</span>
               </div>
               <div className="bg-brand-800 text-brand-50 rounded-2xl p-6 h-64 flex flex-col justify-center items-center text-center shadow-xl">
                  <span className="text-4xl mb-4 text-nobel-gold">✨</span>
                  <span className="font-serif font-medium text-white">Confiança</span>
                  <span className="text-sm text-brand-200 mt-2">Tudo pronto para atender</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution: Kit Burocracia Zero */}
      <section className="py-24 bg-brand-800 text-brand-50 relative overflow-hidden">
        {/* Background texture simulation */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="text-nobel-gold uppercase tracking-widest font-semibold text-sm">O Que Você Vai Receber</span>
            <h2 className="font-serif text-4xl md:text-5xl font-medium mt-3 mb-6 text-white">Kit Burocracia Zero</h2>
            <p className="text-xl text-brand-200 max-w-2xl mx-auto">
              Não perca tempo criando documentos do zero. Receba tudo pronto, testado e validado juridicamente.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {KIT_ITEMS.map((item, index) => (
              <div key={index} className="bg-brand-900/50 backdrop-blur-sm border border-brand-700 p-6 rounded-xl hover:bg-brand-700 transition-colors group">
                <CheckCircle2 className="w-8 h-8 text-nobel-gold mb-4 group-hover:scale-110 transition-transform" />
                <p className="font-medium font-serif text-lg leading-snug">{item}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 flex flex-col items-center space-y-4">
             <div className="inline-flex items-center gap-2 bg-brand-700 px-6 py-3 rounded-full text-brand-100 text-sm font-semibold border border-brand-600">
                <Star className="w-4 h-4 text-nobel-gold fill-nobel-gold" />
                Arquivos 100% editáveis (Word) + PDF pronto para imprimir
             </div>
             <Button variant="outline" className="text-white border-brand-200 hover:bg-brand-200 hover:text-brand-900">
               Quero Garantir Meu Kit
             </Button>
          </div>
        </div>
      </section>

      {/* Course Structure */}
      <section className="py-20 bg-brand-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-brand-900">Como Funciona o Curso</h2>
            <p className="text-brand-600 mt-2">Didática direta ao ponto. Sem enrolação.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {COURSE_MODULES.map((module) => (
              <div key={module.id} className="bg-white p-8 rounded-2xl shadow-sm border border-brand-100 flex gap-5 hover:shadow-lg transition-shadow">
                <div className="shrink-0 w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center text-brand-600">
                  {module.icon}
                </div>
                <div>
                  <h3 className="font-serif text-xl font-medium text-brand-800 mb-2">{module.title}</h3>
                  <p className="text-brand-600 leading-relaxed">{module.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Authority Section - Márcia Luiz */}
      <section className="py-24 bg-white relative">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-brand-100 rounded-[3rem] p-8 md:p-12 lg:p-20 relative overflow-hidden">
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 w-2/3 h-full bg-brand-200/50 transform skew-x-12 translate-x-32"></div>

            <div className="grid md:grid-cols-12 gap-12 items-center relative z-10">
              <div className="md:col-span-5 relative">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-4 border-nobel-gold transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                  {/* PLEASE REPLACE WITH ACTUAL IMAGE: marcia02.jpeg */}
                  <img src={MARCIA_IMAGE_URL} alt="Márcia Luiz" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-brand-800 text-white p-4 rounded-xl shadow-lg max-w-xs hidden md:block">
                  <p className="font-serif text-2xl font-medium text-nobel-gold">5+</p>
                  <p className="text-sm opacity-90">Livros publicados e premiados</p>
                </div>
              </div>
              
              <div className="md:col-span-7 space-y-6">
                <div className="flex items-center gap-3 mb-2">
                   <div className="h-px w-10 bg-nobel-gold"></div>
                   <span className="text-nobel-gold font-semibold tracking-wider uppercase text-sm">Sua Mentora</span>
                </div>
                <h2 className="font-serif text-4xl md:text-5xl font-medium text-brand-900">
                  Márcia Luiz
                </h2>
                <div className="space-y-4 text-brand-700 leading-relaxed">
                  <p>
                    Neuropsicopedagoga, Pedagoga, Escritora e Especialista em Gestão Escolar. Mas acima dos títulos, sou alguém que entende o medo de começar.
                  </p>
                  <p>
                    Quando comecei, não existia IA, nem modelos prontos. Construí minha prática clínica do zero, aprendendo na pele o que funciona e o que é perda de tempo.
                  </p>
                  <div className="bg-white/60 p-6 rounded-xl border-l-4 border-nobel-gold">
                    <p className="italic text-brand-800 font-medium mb-2">
                      "Minha missão é fortalecer psicopedagogos para que entrem no mercado com segurança. O conhecimento que funciona precisa ser compartilhado."
                    </p>
                  </div>
                  <h4 className="font-serif font-medium text-brand-900 pt-4">Por que meu método funciona?</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-nobel-gold mt-1 shrink-0" />
                      <span>Estratégia do <strong>Contrato de 8 Sessões</strong>: Previsibilidade financeira e resultados visíveis.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-nobel-gold mt-1 shrink-0" />
                      <span>Anamnese Gratuita como <strong>ferramenta de vendas</strong> infalível.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Icons Grid */}
      <section className="py-20 bg-brand-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {BENEFITS.map((benefit, idx) => (
              <div key={idx} className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow group">
                <div className="flex justify-center mb-4 text-nobel-gold bg-brand-50 w-20 h-20 mx-auto rounded-full items-center group-hover:bg-brand-100 transition-colors">
                  {benefit.icon}
                </div>
                <h3 className="font-serif font-medium text-xl text-brand-800 mb-2">{benefit.title}</h3>
                <p className="text-brand-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-brand-900 text-white relative">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-5xl font-medium mb-6">Comece sua carreira com o pé direito</h2>
          <p className="text-brand-200 text-xl mb-12">Todo o protocolo, documentos e mentoria que você precisa.</p>

          <div className="bg-white text-brand-900 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden max-w-2xl mx-auto border-8 border-brand-200/20">
            {/* Badge */}
            <div className="absolute top-0 right-0 bg-nobel-gold text-white text-xs font-bold px-4 py-2 rounded-bl-xl uppercase tracking-wider">
              Oferta Especial
            </div>

            <div className="mb-8">
               <p className="text-brand-500 font-semibold mb-2 line-through text-lg">De R$ 297,00</p>
               <div className="flex justify-center items-end gap-2">
                 <span className="text-2xl font-bold mb-4">Por apenas</span>
                 <span className="text-6xl md:text-7xl font-serif font-medium text-brand-800">12x R$ 14,90</span>
               </div>
               <p className="text-brand-600 font-medium mt-2">ou R$ 149,00 à vista</p>
            </div>

            <div className="space-y-4 mb-10 text-left max-w-sm mx-auto">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-nobel-gold w-5 h-5" />
                <span>Acesso Imediato ao Kit Burocracia Zero</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-nobel-gold w-5 h-5" />
                <span>Vídeos de Mentoria com Márcia Luiz</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-nobel-gold w-5 h-5" />
                <span>Acesso vitalício aos arquivos</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-nobel-gold w-5 h-5" />
                <span>Suporte na plataforma</span>
              </div>
            </div>

            <Button fullWidth className="text-xl shadow-xl shadow-brand-500/20 animate-pulse">
              QUERO O PROTOCOLO AGORA
            </Button>
            
            <p className="text-xs text-brand-400 mt-6 flex items-center justify-center gap-1">
              <Lock className="w-3 h-3" /> Pagamento 100% Seguro
            </p>
          </div>

          {/* Guarantee */}
          <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-6 max-w-2xl mx-auto bg-brand-800 p-6 rounded-xl border border-brand-700">
            <div className="shrink-0">
               <ShieldCheck className="w-16 h-16 text-brand-200" />
            </div>
            <div className="text-left">
              <h4 className="font-serif text-xl font-medium text-white mb-1">Garantia Incondicional de 7 Dias</h4>
              <p className="text-brand-300 text-sm">
                Se você sentir que este material não facilitou sua vida profissional, devolvemos 100% do seu dinheiro. Sem perguntas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-medium text-brand-900 mb-4">Perguntas Frequentes</h2>
            <p className="text-brand-600">Tire suas dúvidas e decida com segurança.</p>
          </div>
          <Accordion items={FAQS.map(f => ({ title: f.question, content: f.answer }))} />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-50 border-t border-brand-200 py-12 text-center">
        <div className="max-w-6xl mx-auto px-4">
           <h3 className="font-serif text-2xl font-medium text-brand-800 mb-4">Márcia Luiz</h3>
           <p className="text-brand-600 max-w-md mx-auto mb-8">
             Compartilhando experiência prática para formar profissionais seguros e realizados.
           </p>
           <p className="text-sm text-brand-400">
             © {new Date().getFullYear()} Protocolo Essencial. Todos os direitos reservados.
           </p>
        </div>
      </footer>
    </div>
  );
};

export default App;