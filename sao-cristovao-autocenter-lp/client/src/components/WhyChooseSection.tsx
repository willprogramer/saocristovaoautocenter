import { Award, Users, Zap } from 'lucide-react';

/**
 * Why Choose Us Section - Industrial Premium Design
 * Features: 3 key differentiators with icons and detailed descriptions
 * Design: Alternating layout with text and icon placement
 */
export default function WhyChooseSection() {
  const differentiators = [
    {
      number: '01',
      icon: Award,
      title: 'Experiência Comprovada',
      description:
        'Somos referência em qualidade automotiva na região. Nossa experiência garante serviços de excelência em cada atendimento.',
    },
    {
      number: '02',
      icon: Users,
      title: 'Equipe Profissional Certificada',
      description:
        'Nossa equipe é qualificada e experiente, garantindo atendimento de qualidade. Cada membro está preparado para oferecer soluções precisas e eficazes.',
    },
    {
      number: '03',
      icon: Zap,
      title: 'Tecnologia e Qualidade',
      description:
        'Utilizamos equipamentos modernos e peças de qualidade. Nossa abordagem combina tradição com inovação para oferecer o melhor resultado.',
    },
  ];

  return (
    <section className="section-spacing bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            POR QUE ESCOLHER
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Por que escolher a São Cristóvão Auto Center?
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Conheça os diferenciais que nos tornam a melhor escolha para cuidar do seu veículo.
          </p>
        </div>

        {/* Differentiators */}
        <div className="space-y-16">
          {differentiators.map((item, index) => {
            const Icon = item.icon;
            const isEven = index % 2 === 0;

            return (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Content */}
                <div className={isEven ? 'lg:order-1' : 'lg:order-2'}>
                  <div className="flex items-start gap-4 mb-6">
                    <div className="text-5xl font-bold text-accent/20">{item.number}</div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        {item.title}
                      </h3>
                      <p className="text-lg text-muted leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Icon */}
                <div className={isEven ? 'lg:order-2' : 'lg:order-1'}>
                  <div className="flex justify-center lg:justify-start">
                    <div className="w-32 h-32 bg-accent/10 rounded-sm flex items-center justify-center">
                      <Icon size={64} className="text-accent" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
