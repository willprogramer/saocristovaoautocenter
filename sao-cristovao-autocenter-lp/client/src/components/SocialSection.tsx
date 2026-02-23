import { Facebook, Instagram, MessageCircle } from 'lucide-react';

/**
 * Social Section - Industrial Premium Design
 * Features: Social media links with icons and descriptions
 * Design: Centered cards with hover effects
 */
export default function SocialSection() {
  const socialLinks = [
    {
      icon: Instagram,
      title: 'Instagram',
      description: 'Acompanhe nossos trabalhos e novidades',
      href: 'https://www.instagram.com/saocristovao_autocenter/',
      color: 'from-pink-500 to-purple-500',
    },
    {
      icon: Facebook,
      title: 'Facebook',
      description: 'Curta nossa página e fique por dentro',
      href: 'https://www.facebook.com/SAOCRISTOVAOSERVICECAR/?locale=pt_BR',
      color: 'from-blue-600 to-blue-800',
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      description: 'Envie mensagens direto para nós',
      href: 'https://wa.me/5511998939799',
      color: 'from-green-500 to-green-700',
    },
  ];

  return (
    <section className="section-spacing bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            SIGA-NOS
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Acompanhe nas Redes Sociais
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Fique por dentro de nossas novidades, promoções e trabalhos realizados.
          </p>
        </div>

        {/* Social Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="bg-card p-8 border-l-4 border-accent hover:shadow-lg transition-all duration-300 text-center">
                  <div className={`w-16 h-16 bg-gradient-to-br ${social.color} rounded-sm flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {social.title}
                  </h3>
                  <p className="text-muted mb-4">
                    {social.description}
                  </p>
                  <span className="inline-block text-accent font-semibold group-hover:translate-x-2 transition-transform">
                    Visite →
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
