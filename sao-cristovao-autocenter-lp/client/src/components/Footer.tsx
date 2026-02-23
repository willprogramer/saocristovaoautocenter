import { Facebook, Instagram, MessageCircle } from 'lucide-react';

/**
 * Footer Component - Industrial Premium Design
 * Features: Company info, social links, copyright
 * Design: Dark background with accent accents
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Facebook,
      href: 'https://www.facebook.com/SAOCRISTOVAOSERVICECAR/?locale=pt_BR',
      label: 'Facebook',
    },
    {
      icon: Instagram,
      href: 'https://www.instagram.com/saocristovao_autocenter/',
      label: 'Instagram',
    },
    {
      icon: MessageCircle,
      href: 'https://wa.me/5511998939799',
      label: 'WhatsApp',
    },
  ];

  return (
    <footer className="bg-foreground text-white">
      <div className="container py-12">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-accent rounded-sm flex items-center justify-center">
                <span className="text-white font-bold text-lg">SC</span>
              </div>
              <h3 className="text-lg font-bold">São Cristóvão Auto Center</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Cuidando do seu carro com a qualidade que você merece desde 1994.
            </p>
            <p className="text-gray-400 text-sm mb-2">
              R. José Manuel de Almeida, 128 - Jardim Europa<br />
              Vargem Grande Paulista - SP, 06733-208
            </p>
            <p className="text-gray-400 text-sm">
              (11) 99893-9799
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#home" className="hover:text-accent transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-accent transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-accent transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-accent transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Siga-nos</h4>
            <div className="flex gap-4">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-accent/20 rounded-sm flex items-center justify-center hover:bg-accent hover:text-white transition-colors"
                    aria-label={link.label}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 mb-8" />

        {/* Copyright */}
        <div className="text-center text-gray-400 text-sm">
          <p>
            &copy; {currentYear} São Cristóvão Auto Center. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
