import { Wrench, Zap, Paintbrush, Cog, Shield, Gauge } from 'lucide-react';

/**
 * Services Section - Industrial Premium Design
 * Features: 6 service cards with icons in grid layout
 * Design: Clean cards with left accent border
 */
export default function ServicesSection() {
  const services = [
    {
      icon: Wrench,
      title: 'Mecânica Geral',
      description: 'Manutenção preventiva e reparos mecânicos de qualidade com peças originais.',
    },
    {
      icon: Gauge,
      title: 'Diagnóstico Eletrônico',
      description: 'Equipamentos de ponta para diagnóstico preciso de problemas automotivos.',
    },
    {
      icon: Zap,
      title: 'Borracharia',
      description: 'Pneus de qualidade com balanceamento e alinhamento profissional.',
    },
    {
      icon: Paintbrush,
      title: 'Pintura e Funilaria',
      description: 'Serviços de lanternagem, funilaria e pintura com acabamento impecável.',
    },
    {
      icon: Cog,
      title: 'Acessórios Automotivos',
      description: 'Amplo catálogo de acessórios e peças automotivas de marcas confiáveis.',
    },
    {
      icon: Shield,
      title: 'Garantia de Qualidade',
      description: 'Todos os serviços com garantia e atendimento pós-venda de excelência.',
    },
  ];

  return (
    <section id="servicos" className="section-spacing bg-card">
      <div className="container">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            NOSSOS SERVIÇOS
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Soluções Completas para seu Veículo
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Oferecemos uma gama completa de serviços automotivos com profissionalismo e qualidade garantida.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 border-l-4 border-accent hover:shadow-lg transition-shadow duration-300"
              >
                <div className="mb-4">
                  <div className="w-14 h-14 bg-accent/10 rounded-sm flex items-center justify-center">
                    <Icon size={28} className="text-accent" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
