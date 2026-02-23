import { Star } from 'lucide-react';

/**
 * Testimonials Section - Industrial Premium Design
 * Features: Customer testimonials with star ratings
 * Design: Cards with accent left border
 */
export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'João Silva',
      role: 'Proprietário de Frota',
      text: 'Confio na São Cristóvão há mais de 10 anos. O atendimento é excelente e os serviços sempre com qualidade garantida. Recomendo!',
      rating: 5,
    },
    {
      name: 'Maria Santos',
      role: 'Empresária',
      text: 'Levei meu carro para revisão e saiu impecável. A equipe é muito profissional e atenciosa. Voltarei com certeza!',
      rating: 5,
    },
    {
      name: 'Carlos Mendes',
      role: 'Motorista Profissional',
      text: 'Melhor auto center da região! Rápido, eficiente e com preços justos. Meu carro nunca esteve tão bem.',
      rating: 5,
    },
  ];

  return (
    <section id="depoimentos" className="section-spacing bg-card">
      <div className="container">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            DEPOIMENTOS
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Confira os depoimentos de clientes satisfeitos com nossos serviços.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 border-l-4 border-accent hover:shadow-lg transition-shadow duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={18} className="fill-accent text-accent" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-muted mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div>
                <p className="font-bold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
