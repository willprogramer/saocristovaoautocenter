import { Heart, TrendingUp, Infinity } from 'lucide-react';

/**
 * Values Section - Industrial Premium Design
 * Features: 3 core values with detailed descriptions
 * Design: Numbered cards with icon and text
 */
export default function ValuesSection() {
  const values = [
    {
      number: '01',
      icon: Heart,
      title: 'Qualidade',
      description:
        'Cada indivíduo é único. Acreditamos que o cuidado verdadeiro começa com a escuta atenta e a compreensão profunda de cada cliente. Nossos técnicos adotam uma postura profissional, focando em suas necessidades únicas para criar um plano de cuidados individual que realmente atenda seus objetivos.',
    },
    {
      number: '02',
      icon: TrendingUp,
      title: 'Aprimoramento Contínuo',
      description:
        'Estamos comprometidos em oferecer tratamentos de alta qualidade. Investimos constantemente no aprimoramento de nossas técnicas e na capacitação de nossa equipe de profissionais altamente qualificados. Nosso compromisso é oferecer a você serviços de excelência, baseados em práticas comprovadas.',
    },
    {
      number: '03',
      icon: Infinity,
      title: 'Integralidade',
      description:
        'Nossas terapias visam não apenas aliviar sintomas, mas também restabelecer a harmonia geral do seu veículo. Acreditamos que o tratamento eficaz deve considerar todos os aspectos. Nossas abordagens são cuidadosamente planejadas para atender a essa visão holística, buscando promover a conexão e o equilíbrio em todas as esferas.',
    },
  ];

  return (
    <section className="section-spacing bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            NOSSOS VALORES
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            O Alicerce da Nossa Abordagem
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Os valores que guiam cada decisão e ação da São Cristóvão Auto Center.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div key={index} className="bg-card p-8">
                {/* Number */}
                <p className="text-5xl font-bold text-accent/20 mb-4">{value.number}</p>

                {/* Icon */}
                <div className="w-16 h-16 bg-accent/10 rounded-sm flex items-center justify-center mb-4">
                  <Icon size={32} className="text-accent" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-foreground mb-4">{value.title}</h3>

                {/* Description */}
                <p className="text-muted leading-relaxed">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
