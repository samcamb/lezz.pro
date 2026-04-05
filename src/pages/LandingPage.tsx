import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Bot,
  Briefcase,
  Building2,
  CheckCircle2,
  ClipboardList,
  Factory,
  FileBarChart,
  Gauge,
  Lock,
  MessageSquare,
  Search,
  Settings2,
  UserCog,
  Users,
  Workflow,
  X,
} from "lucide-react";

const GOLD_GRADIENT = "linear-gradient(135deg, #BF953F, #FCF6BA, #B38728)";
const GOLD_TEXT = "bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] bg-clip-text text-transparent";

function GoldButton({
  children,
  className = "",
  solid = false,
  pulse = false,
}: {
  children: React.ReactNode;
  className?: string;
  solid?: boolean;
  pulse?: boolean;
}) {
  if (solid) {
    return (
      <motion.button
        className={`relative px-8 py-4 font-bold text-black text-sm tracking-[0.18em] uppercase cursor-pointer overflow-hidden ${className}`}
        style={{ background: GOLD_GRADIENT, borderRadius: 0 }}
        animate={pulse ? { boxShadow: ["0 0 0 0 rgba(191,149,63,0.4)", "0 0 0 20px rgba(191,149,63,0)", "0 0 0 0 rgba(191,149,63,0.4)"] } : {}}
        transition={pulse ? { duration: 2, repeat: Infinity } : {}}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {children}
      </motion.button>
    );
  }

  return (
    <motion.button
      className={`group relative px-8 py-4 font-bold text-sm tracking-[0.18em] uppercase cursor-pointer overflow-hidden border ${className}`}
      style={{
        borderRadius: 0,
        borderColor: "#BF953F",
        background: "#000",
        boxShadow: "0 0 20px rgba(191,149,63,0.2)",
      }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <span
        className="absolute inset-0 transition-all duration-300 opacity-0 group-hover:opacity-100"
        style={{ background: GOLD_GRADIENT }}
      />
      <span className={`relative transition-all duration-300 ${GOLD_TEXT} group-hover:text-black group-hover:bg-none group-hover:[background:none] group-hover:[-webkit-text-fill-color:black]`}>
        {children}
      </span>
    </motion.button>
  );
}

function FadeInUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function GlassCard({ children, className = "", hoverGold = false }: { children: React.ReactNode; className?: string; hoverGold?: boolean }) {
  return (
    <motion.div
      className={`relative p-6 ${className}`}
      style={{
        background: "rgba(0,0,0,0.5)",
        backdropFilter: "blur(12px)",
        border: "1px solid rgba(191,149,63,0.15)",
        borderRadius: 0,
      }}
      whileHover={hoverGold
        ? {
            y: -4,
            borderColor: "rgba(191,149,63,0.7)",
            boxShadow: "0 0 24px rgba(191,149,63,0.25)",
          }
        : { y: -2 }}
      transition={{ duration: 0.25 }}
    >
      {children}
    </motion.div>
  );
}

export default function LandingPage() {
  const areaCards = [
    {
      icon: <Briefcase className="w-7 h-7" />,
      title: "Comercial",
      desc: "Qualificação, follow-up, organização de CRM, recuperação de oportunidades e apoio ao fechamento.",
    },
    {
      icon: <MessageSquare className="w-7 h-7" />,
      title: "Atendimento",
      desc: "Resposta rápida, triagem inicial, organização de demandas, agendamento e aceleração do primeiro contato.",
    },
    {
      icon: <Factory className="w-7 h-7" />,
      title: "Produção",
      desc: "Acompanhamento de etapas, alertas, checagem de pendências e mais previsibilidade do fluxo produtivo.",
    },
    {
      icon: <Workflow className="w-7 h-7" />,
      title: "Operação",
      desc: "Organização de rotinas, cobrança de movimentações, avisos internos e menos dependência de controle manual.",
    },
    {
      icon: <ClipboardList className="w-7 h-7" />,
      title: "Administrativo",
      desc: "Processos internos, documentação, controles, acompanhamentos e tarefas operacionais do dia a dia.",
    },
    {
      icon: <FileBarChart className="w-7 h-7" />,
      title: "Relatórios e análises",
      desc: "Consolidação de dados, relatórios programados, resumos operacionais e apoio à tomada de decisão.",
    },
  ];

  const commercialPillars = [
    {
      icon: <Bot className="w-8 h-8" />,
      title: "Resposta imediata",
      desc: "Um funcionário de IA responde em segundos e evita que oportunidades esfriem enquanto a equipe está ocupada.",
    },
    {
      icon: <UserCog className="w-8 h-8" />,
      title: "Qualificação inteligente",
      desc: "Triagem inicial, filtros de orçamento e organização de leads antes que o vendedor perca tempo com curiosos.",
    },
    {
      icon: <Settings2 className="w-8 h-8" />,
      title: "Organização comercial",
      desc: "CRM mais limpo, follow-up mais consistente e negociações menos dependentes da memória ou da cobrança do dono.",
    },
    {
      icon: <Gauge className="w-8 h-8" />,
      title: "Recuperação de oportunidades",
      desc: "Leads antigos, contatos esquecidos e oportunidades perdidas podem voltar para o jogo com muito menos esforço humano.",
    },
  ];

  const productionOpsItems = [
    "Acompanhamento de etapas e status em tempo real.",
    "Cobrança automática de movimentações e pendências.",
    "Avisos internos e organização de rotina operacional.",
    "Mais clareza para agir onde o processo está travando.",
  ];

  const reportsItems = [
    "Consolidação automática de indicadores.",
    "Relatórios programados para rotina da liderança.",
    "Resumo operacional com gargalos e prioridades.",
    "Mais velocidade para decidir com base em informação útil.",
  ];

  const processSteps = [
    "Diagnóstico da operação e entendimento dos gargalos mais caros.",
    "Escolha do primeiro setor onde a IA deve gerar impacto real.",
    "Desenho do funcionário de IA, papel, tarefas e metas.",
    "Treinamento, integrações e conexão com o processo da empresa.",
    "Implantação acompanhada dentro da rotina real do negócio.",
    "Ajustes, refinamento e evolução conforme a operação amadurece.",
  ];

  const fitYes = [
    "Empresas com demanda e rotina operacional pesada.",
    "Equipes sobrecarregadas com atendimento, processo ou acompanhamento manual.",
    "Negócios que querem aplicar IA com critério e utilidade real.",
    "Empresas que precisam de mais velocidade sem aumentar a desorganização.",
  ];

  const fitNo = [
    "Quem busca mágica de IA sem rever processo.",
    "Quem quer automação solta sem objetivo operacional claro.",
    "Quem não quer priorizar por etapas e tentar implementar tudo de uma vez.",
    "Quem quer apenas seguir tendência sem aplicação prática no negócio.",
  ];

  return (
    <div className="min-h-screen" style={{ background: "#121212", color: "#fff", fontFamily: "Inter, sans-serif" }}>
      <section className="relative min-h-screen flex items-center px-6 py-24 overflow-hidden" style={{ background: "#121212" }}>
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/bg-hero.png')", opacity: 0.28 }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(18,18,18,0.72) 0%, rgba(18,18,18,0.55) 45%, rgba(18,18,18,0.88) 100%)" }} />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute w-[620px] h-[620px] rounded-full opacity-10"
            style={{ background: "radial-gradient(circle, #BF953F 0%, transparent 70%)", top: "-10%", right: "-15%", filter: "blur(80px)" }}
            animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute w-[420px] h-[420px] rounded-full opacity-8"
            style={{ background: "radial-gradient(circle, #B38728 0%, transparent 70%)", bottom: "10%", left: "-10%", filter: "blur(80px)" }}
            animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(191,149,63,0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(191,149,63,0.3) 1px, transparent 1px)
              `,
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-[1.12fr_0.88fr] gap-12 lg:gap-16 items-center">
          <motion.div initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: "easeOut" }}>
            <div className="mb-5 flex items-center gap-3 text-xs tracking-[0.35em] uppercase" style={{ color: "#BF953F" }}>
              <span>Lezz.pro</span>
              <span style={{ color: "rgba(255,255,255,0.25)" }}>•</span>
              <span>Funcionários de IA</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.02] mb-7" style={{ letterSpacing: "-0.04em" }}>
              <span className="text-white block">Funcionários de IA para áreas</span>
              <span className={`block ${GOLD_TEXT}`}>estratégicas e operacionais</span>
              <span className="text-white block">da sua empresa.</span>
            </h1>

            <p className="text-lg md:text-[1.35rem] max-w-3xl mb-10 leading-relaxed" style={{ color: "#b8b8b8" }}>
              A Lezz cria, treina e implanta agentes especialistas para comercial, atendimento,
              produção, operação, administrativo e análises — ajudando sua empresa a reduzir
              trabalho operacional, ganhar velocidade, organizar melhor a rotina e tomar decisões melhores.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-7">
              <GoldButton solid className="text-xs md:text-sm">
                [ AGENDAR DIAGNÓSTICO DA OPERAÇÃO ]
              </GoldButton>
              <GoldButton className="text-xs md:text-sm">
                [ DESCOBRIR QUAL AGENTE IMPLEMENTAR PRIMEIRO ]
              </GoldButton>
            </div>

            <div className="flex items-start gap-3 text-sm max-w-2xl" style={{ color: "#888" }}>
              <Lock className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#BF953F" }} />
              <span>
                Começamos entendendo sua operação e identificando onde a IA pode gerar mais
                impacto primeiro — sem promessas mágicas e sem tentar automatizar tudo de uma vez.
              </span>
            </div>
          </motion.div>

          <FadeInUp delay={0.25}>
            <GlassCard hoverGold className="p-8 lg:p-10">
              <p className="text-xs tracking-[0.35em] uppercase mb-5" style={{ color: "#BF953F" }}>
                Estrutura Lezz
              </p>
              <div className="space-y-5 md:space-y-6">
                {[
                  "Funcionário de IA para comercial e atendimento.",
                  "Agentes para produção, operação e administrativo.",
                  "Relatórios programados e análises mais rápidas para decisão.",
                  "Implantação guiada com diagnóstico, priorização e evolução por etapas.",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: "#BF953F" }} />
                    <p style={{ color: "#cfcfcf" }}>{item}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t" style={{ borderColor: "rgba(191,149,63,0.12)" }}>
                <p className="text-sm uppercase tracking-[0.22em] mb-3" style={{ color: "#777" }}>
                  Braço mais forte hoje
                </p>
                <p className="text-xl font-bold text-white">Funcionário de IA para Comercial e Atendimento</p>
              </div>
            </GlassCard>
          </FadeInUp>
        </div>
      </section>

      <section className="py-28 px-6" style={{ background: "#171717" }}>
        <div className="max-w-5xl mx-auto text-center">
          <FadeInUp>
            <p className="text-xs tracking-[0.35em] uppercase mb-4" style={{ color: "#BF953F" }}>
              Nova lógica operacional
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-8">
              Sua empresa não precisa depender de <span className={GOLD_TEXT}>trabalho manual para tudo.</span>
            </h2>
            <p className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed" style={{ color: "#b7b7b7" }}>
              Em muitas empresas, tarefas operacionais, acompanhamentos, controles e análises ainda
              dependem demais de pessoas para acontecer. Isso gera lentidão, retrabalho,
              desorganização e informação chegando tarde para decidir.
            </p>
            <p className="mt-8 text-xl md:text-2xl italic font-bold leading-relaxed" style={{ color: "#FCF6BA" }}>
              Não para substituir pessoas. Para liberar o time humano para o que realmente exige julgamento, relacionamento e decisão.
            </p>
          </FadeInUp>
        </div>
      </section>

      <section className="py-28 px-6 relative overflow-hidden" style={{ background: "#121212" }}>
        <div className="absolute inset-0" style={{ background: "rgba(18,18,18,0.86)" }} />
        <div className="relative z-10 max-w-6xl mx-auto">
          <FadeInUp className="text-center mb-16">
            <p className="text-xs tracking-[0.35em] uppercase mb-4" style={{ color: "#BF953F" }}>
              Áreas de atuação
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-5">
              Funcionários de IA para setores que ainda <span className={GOLD_TEXT}>consomem tempo demais</span> da sua equipe.
            </h2>
            <p className="text-lg max-w-3xl mx-auto" style={{ color: "#8f8f8f" }}>
              Cada empresa tem um gargalo diferente. Em algumas, o vazamento está no comercial. Em outras,
              na produção, na operação, no administrativo ou na falta de relatórios rápidos para decidir melhor.
            </p>
          </FadeInUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
            {areaCards.map((card, index) => (
              <FadeInUp key={card.title} delay={index * 0.08}>
                <GlassCard hoverGold className="h-full min-h-[230px]">
                  <div className="mb-4" style={{ color: "#BF953F" }}>{card.icon}</div>
                  <h3 className="text-lg font-bold mb-3 text-white">{card.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#8f8f8f" }}>{card.desc}</p>
                </GlassCard>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6" style={{ background: "#1A1A1A" }}>
        <div className="max-w-6xl mx-auto">
          <FadeInUp className="text-center mb-14">
            <p className="text-xs tracking-[0.35em] uppercase mb-4" style={{ color: "#BF953F" }}>
              Braço mais forte da Lezz
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-5 leading-[1.08]">
              O primeiro funcionário de IA que mais gera impacto nas empresas: <span className={GOLD_TEXT}>comercial e atendimento.</span>
            </h2>
            <p className="text-lg max-w-3xl mx-auto" style={{ color: "#8f8f8f" }}>
              Em muitas operações, o maior prejuízo não está na falta de demanda. Está na lentidão para responder,
              na falta de qualificação, no follow-up inconsistente e na desorganização comercial.
            </p>
          </FadeInUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-7">
            {commercialPillars.map((card, index) => (
              <FadeInUp key={card.title} delay={index * 0.1}>
                <GlassCard hoverGold className="h-full min-h-[230px]">
                  <div className="mb-4" style={{ color: "#BF953F" }}>{card.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-white">{card.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#8f8f8f" }}>{card.desc}</p>
                </GlassCard>
              </FadeInUp>
            ))}
          </div>

          <FadeInUp delay={0.45}>
            <p className="mt-12 text-center text-xl md:text-2xl italic font-bold leading-relaxed" style={{ color: "#FCF6BA" }}>
              Tudo isso que hoje muitas empresas tentam resolver com mais gente, mais cobrança e mais planilha pode começar a ser reorganizado com um funcionário de IA bem implantado.
            </p>
          </FadeInUp>
        </div>
      </section>

      <section className="py-28 px-6" style={{ background: "#121212" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          <FadeInUp>
            <GlassCard className="h-full p-8 lg:p-10 shadow-[0_0_50px_rgba(0,0,0,0.18)]" hoverGold>
              <div className="mb-5" style={{ color: "#BF953F" }}><Factory className="w-9 h-9" /></div>
              <h2 className="text-3xl md:text-4xl font-black mb-5 leading-tight">
                A IA também pode ajudar onde a rotina trava, o processo atrasa e ninguém tem <span className={GOLD_TEXT}>visibilidade clara.</span>
              </h2>
              <p className="text-base md:text-lg leading-relaxed mb-7" style={{ color: "#9a9a9a" }}>
                Nem todo problema está na venda. Em muitas empresas, o gargalo está dentro da operação.
                Quando tarefas, etapas e atualizações dependem demais de acompanhamento humano manual,
                a empresa perde velocidade, cria ruído interno e toma decisão com menos clareza.
              </p>
              <div className="space-y-4">
                {productionOpsItems.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: "#BF953F" }} />
                    <p style={{ color: "#cfcfcf" }}>{item}</p>
                  </div>
                ))}
              </div>
            </GlassCard>
          </FadeInUp>

          <FadeInUp delay={0.15}>
            <GlassCard className="h-full p-8 lg:p-10" hoverGold>
              <div className="mb-5" style={{ color: "#BF953F" }}><BarChart3 className="w-9 h-9" /></div>
              <h2 className="text-3xl md:text-4xl font-black mb-5 leading-tight">
                Mais velocidade para entender o negócio e <span className={GOLD_TEXT}>decidir melhor.</span>
              </h2>
              <p className="text-base md:text-lg leading-relaxed mb-7" style={{ color: "#9a9a9a" }}>
                Além de executar e organizar rotinas, a Lezz também cria agentes para consolidar dados,
                resumir a operação e gerar relatórios programados com mais velocidade.
              </p>
              <div className="space-y-4">
                {reportsItems.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: "#BF953F" }} />
                    <p style={{ color: "#cfcfcf" }}>{item}</p>
                  </div>
                ))}
              </div>
            </GlassCard>
          </FadeInUp>
        </div>
      </section>

      <section className="py-28 px-6 relative overflow-hidden" style={{ background: "#171717" }}>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `linear-gradient(rgba(191,149,63,0.45) 1px, transparent 1px), linear-gradient(90deg, rgba(191,149,63,0.45) 1px, transparent 1px)`, backgroundSize: "40px 40px" }} />
        <div className="relative z-10 max-w-5xl mx-auto">
          <FadeInUp className="text-center mb-14">
            <p className="text-xs tracking-[0.35em] uppercase mb-4" style={{ color: "#BF953F" }}>
              Método de implantação
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-5">
              Tudo começa com uma <span className={GOLD_TEXT}>análise da sua operação.</span>
            </h2>
            <p className="text-lg max-w-3xl mx-auto" style={{ color: "#8f8f8f" }}>
              Antes de criar qualquer agente, a Lezz precisa entender o que faz sentido implementar primeiro.
              Cada empresa tem prioridades diferentes — por isso começamos com diagnóstico, priorização e desenho do primeiro funcionário de IA.
            </p>
          </FadeInUp>

          <div className="space-y-5">
            {processSteps.map((step, index) => (
              <FadeInUp key={index} delay={index * 0.08}>
                <GlassCard hoverGold className="flex items-start gap-5 p-6 md:p-7">
                  <div className="w-11 h-11 flex items-center justify-center text-sm font-black flex-shrink-0" style={{ background: GOLD_GRADIENT, color: "#000" }}>
                    {index + 1}
                  </div>
                  <p className="text-base md:text-lg leading-relaxed" style={{ color: "#d4d4d4" }}>{step}</p>
                </GlassCard>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 px-6" style={{ background: "#121212" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          <FadeInUp>
            <GlassCard className="h-full p-8 lg:p-10" hoverGold>
              <div className="mb-5" style={{ color: "#BF953F" }}><Search className="w-9 h-9" /></div>
              <h2 className="text-3xl md:text-4xl font-black mb-5 leading-tight">
                A Lezz <span className={GOLD_TEXT}>não vende fantasia</span> de IA.
              </h2>
              <div className="space-y-4">
                {[
                  "Não automatizamos tudo sem critério.",
                  "Não vendemos milagre com um clique.",
                  "Não substituímos o julgamento humano.",
                  "Não enchemos sua operação de ferramentas soltas.",
                  "Não começamos sem entender o que faz sentido implementar primeiro.",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <X className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: "#c0392b" }} />
                    <p style={{ color: "#cfcfcf" }}>{item}</p>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-lg italic font-bold" style={{ color: "#FCF6BA" }}>
                IA boa não é a que impressiona no vídeo. É a que funciona no seu processo.
              </p>
            </GlassCard>
          </FadeInUp>

          <FadeInUp delay={0.15}>
            <GlassCard className="h-full p-8 lg:p-10" hoverGold>
              <div className="mb-5" style={{ color: "#BF953F" }}><Building2 className="w-9 h-9" /></div>
              <h2 className="text-3xl md:text-4xl font-black mb-5 leading-tight">
                Para quem a Lezz <span className={GOLD_TEXT}>faz sentido.</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm uppercase tracking-[0.22em] mb-4" style={{ color: "#BF953F" }}>Ideal para</p>
                  <div className="space-y-3">
                    {fitYes.map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: "#BF953F" }} />
                        <p style={{ color: "#cfcfcf" }}>{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.22em] mb-4" style={{ color: "#BF953F" }}>Não ideal para</p>
                  <div className="space-y-3">
                    {fitNo.map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <X className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: "#c0392b" }} />
                        <p style={{ color: "#cfcfcf" }}>{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </GlassCard>
          </FadeInUp>
        </div>
      </section>

      <section className="py-36 px-6 flex flex-col items-center justify-center text-center relative overflow-hidden" style={{ background: "#000" }}>
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/bg-footer.png')", opacity: 0.28 }} />
        <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.72)" }} />
        <div className="relative z-10 flex flex-col items-center w-full max-w-5xl mx-auto">
          <FadeInUp>
            <p className="text-sm tracking-[0.3em] uppercase mb-6" style={{ color: "#777" }}>
              Diagnóstico antes da implantação
            </p>
          </FadeInUp>

          <FadeInUp delay={0.15}>
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-black text-white max-w-4xl mx-auto leading-tight mb-8">
              Descubra qual <span className={GOLD_TEXT}>funcionário de IA</span> sua empresa deveria implementar primeiro.
            </h2>
          </FadeInUp>

          <FadeInUp delay={0.3}>
            <p className="text-base md:text-lg max-w-3xl mx-auto mb-12 leading-relaxed" style={{ color: "#9a9a9a" }}>
              Em uma reunião, entendemos sua operação, identificamos os gargalos mais caros e mapeamos onde a IA pode gerar mais impacto primeiro — seja no comercial, no atendimento, na produção, na operação ou nas análises para decisão.
            </p>
          </FadeInUp>

          <FadeInUp delay={0.45}>
            <GoldButton solid pulse className="text-xs md:text-sm mb-6">
              [ AGENDAR DIAGNÓSTICO ]
            </GoldButton>
            <p className="text-xs max-w-xl mx-auto leading-relaxed" style={{ color: "#616161" }}>
              A Lezz avalia cada cenário antes de desenhar a implantação. O objetivo não é automatizar por automatizar — é criar um funcionário de IA que faça sentido para a realidade do seu negócio.
            </p>
          </FadeInUp>

          <div className="mt-20 pt-8 border-t w-full max-w-sm" style={{ borderColor: "#2a2a2a" }}>
            <p className="text-xs tracking-widest" style={{ color: "#444" }}>
              © 2025 LEZZ.PRO — TODOS OS DIREITOS RESERVADOS
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
