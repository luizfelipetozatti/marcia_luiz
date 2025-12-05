import React from 'react';
import { FileText, PlayCircle, Download, Award, Briefcase, TrendingUp, ShieldCheck, HeartHandshake } from 'lucide-react';
import { ModuleItem, FaqItem, BenefitItem } from './types';

export const HERO_HEADLINE = "Elimine a Insegurança e Comece a Atender em 7 Dias";
export const HERO_SUBHEADLINE = "O método definitivo para Neuro/Psicopedagogos recém-formados: Acabe com a burocracia, garanta segurança jurídica e conquiste sua independência profissional.";

export const VIDEO_PLACEHOLDER_URL = "https://picsum.photos/id/180/1280/720"; // Replace with actual video thumbnail/embed
export const MARCIA_IMAGE_URL = "/images/marcia02.jpeg";
export const LOGO_BG_URL = "https://picsum.photos/id/452/1920/1080"; // Placeholder for 'ML03.png' - Texture background

export const COURSE_MODULES: ModuleItem[] = [
  {
    id: 1,
    title: "Módulo 1: Comece Por Aqui",
    description: "Boas-vindas e alinhamento de expectativas. Entenda como o curso vai transformar sua carreira.",
    icon: <PlayCircle className="w-6 h-6" />
  },
  {
    id: 2,
    title: "Módulo 2: Pílulas de Mentoria",
    description: "Aulas estratégicas sobre posicionamento, precificação e atendimento inicial.",
    icon: <Award className="w-6 h-6" />
  },
  {
    id: 3,
    title: "Módulo 3: Baixe seus Documentos",
    description: "Acesso direto ao Kit Burocracia Zero. Arquivos editáveis em Word/PDF.",
    icon: <Download className="w-6 h-6" />
  },
  {
    id: 4,
    title: "Módulo Bônus: Aceleração de Carreira",
    description: "Conteúdos extras sobre Anamnese Estratégica e fidelização de pacientes.",
    icon: <TrendingUp className="w-6 h-6" />
  }
];

export const KIT_ITEMS = [
  "Modelo de Anamnese (Focada nos pais)",
  "Contrato de Prestação de Serviços (Modelo 8 Sessões)",
  "Modelo de Recibo e Nota Fiscal",
  "Relatório de Avaliação Neuro/Psicopedagógica",
  "Modelo de Encaminhamento Médico",
  "Questionário/Sondagem Escolar",
  "Atestado de Comparecimento",
  "Planilha Simples de Fluxo de Caixa"
];

export const BENEFITS: BenefitItem[] = [
  {
    title: "Segurança Jurídica",
    description: "Documentos validados para proteger você e seu paciente desde o primeiro dia.",
    icon: <ShieldCheck className="w-10 h-10 text-nobel-gold" />
  },
  {
    title: "Praticidade Total",
    description: "Pare de perder horas no Google procurando modelos ruins. Baixe, edite e use.",
    icon: <Briefcase className="w-10 h-10 text-nobel-gold" />
  },
  {
    title: "Método Validado",
    description: "Aprenda com quem vive a clínica na prática e já atendeu centenas de casos.",
    icon: <HeartHandshake className="w-10 h-10 text-nobel-gold" />
  },
  {
    title: "Retorno Rápido",
    description: "Estratégias para fechar contratos de 8 sessões e aumentar seu valor hora.",
    icon: <TrendingUp className="w-10 h-10 text-nobel-gold" />
  }
];

export const FAQS: FaqItem[] = [
  {
    question: "Para quem é este curso?",
    answer: "É ideal para Neuro/Psicopedagogos recém-formados ou que já atuam, mas sentem insegurança com a parte burocrática, contratual e organização do consultório."
  },
  {
    question: "Os documentos são editáveis?",
    answer: "Sim! Você receberá os arquivos em formato Word para colocar sua logo e seus dados, além de versões em PDF."
  },
  {
    question: "Por que focar em contratos de 8 sessões?",
    answer: "Este é o tempo mínimo ideal para observar evolução consistente na criança e criar uma previsibilidade financeira para o seu consultório, facilitando a renovação."
  },
  {
    question: "Como recebo o acesso?",
    answer: "Imediatamente após a confirmação do pagamento, você receberá um e-mail com seus dados de acesso à nossa plataforma de alunos."
  },
  {
    question: "Tenho garantia?",
    answer: "Sim. Se em até 7 dias você achar que o material não é para você, devolvemos 100% do seu investimento."
  }
];