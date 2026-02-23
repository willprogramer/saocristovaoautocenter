import { MessageCircle, Phone, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

/**
 * Contact Section - Industrial Premium Design
 * Features: Contact information, hours, and CTA
 * Design: Two-column layout with contact details and form
 */
export default function ContactSection() {
  const contactInfo = [
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      value: '(11) 99893-9799',
      href: 'https://wa.me/5511998939799',
    },
    {
      icon: Phone,
      title: 'Telefone',
      value: '(11) 99893-9799',
      href: 'tel:+5511998939799',
    },
    {
      icon: MapPin,
      title: 'Endereço',
      value: 'R. José Manuel de Almeida, 128 - Jardim Europa, Vargem Grande Paulista - SP',
      href: 'https://maps.google.com/?q=R.+José+Manuel+de+Almeida,+128,+Vargem+Grande+Paulista,+SP',
    },
    {
      icon: Clock,
      title: 'Horário',
      value: 'Seg-Sex: 08h às 18h',
      href: '#',
    },
  ];

  return (
    <section id="contato" className="section-spacing bg-secondary text-white">
      <div className="container">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            ENTRE EM CONTATO
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Vamos Conversar?
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Estamos prontos para atender você. Entre em contato conosco através dos canais abaixo.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <a
                key={index}
                href={info.href}
                target={info.href.startsWith('http') ? '_blank' : undefined}
                rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group"
              >
                <div className="bg-secondary/50 border border-white/10 p-6 hover:bg-accent/20 transition-colors duration-300">
                  <div className="w-12 h-12 bg-accent/20 rounded-sm flex items-center justify-center mb-4 group-hover:bg-accent/40 transition-colors">
                    <Icon size={24} className="text-accent" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{info.title}</h3>
                  <p className="text-gray-300">{info.value}</p>
                </div>
              </a>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="https://wa.me/5511998939799?text=Olá%20São%20Cristóvão%20Auto%20Center%20-%20Gostaria%20de%20agendar%20um%20serviço"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-accent hover:bg-accent/90 text-white gap-2 px-8 py-6 text-base">
              <MessageCircle size={20} />
              Agendar Serviço via WhatsApp
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
