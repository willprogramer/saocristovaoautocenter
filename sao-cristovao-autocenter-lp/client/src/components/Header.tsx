import { useState } from 'react';
import { Menu, X, MessageCircle, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsOpen } from '@/hooks/useIsOpen';

/**
 * Header Component - Industrial Premium Design
 * Features: Logo, Navigation Menu, WhatsApp CTA
 * Color Scheme: White background, Azul-Petróleo accent, Dark text
 * Mobile: Reduced height for better mobile UX
 */
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isOpen = useIsOpen();

  const navItems = [
    { label: 'INÍCIO', href: '#home' },
    { label: 'SOBRE', href: '#sobre' },
    { label: 'SERVIÇOS', href: '#servicos' },
    { label: 'DEPOIMENTOS', href: '#depoimentos' },
    { label: 'CONTATO', href: '#contato' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b border-border shadow-sm z-50">
      {/* Main Header - Reduced height on mobile */}
      <div className="container flex items-center justify-between h-14 sm:h-20 gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 sm:w-10 sm:h-10 bg-accent rounded-sm flex items-center justify-center flex-shrink-0">
            <span className="text-white font-bold text-base sm:text-lg">SC</span>
          </div>
          <div className="hidden sm:block">
            <h1 className="text-lg font-bold text-foreground leading-tight">
              São Cristóvão
            </h1>
            <p className="text-xs text-muted">Auto Center</p>
          </div>
        </div>

        {/* Status Badge - Desktop Only */}
        <div className={`hidden lg:flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold ${
          isOpen
            ? 'bg-green-100 text-green-700'
            : 'bg-red-100 text-red-700'
        }`}>
          <Clock size={14} />
          {isOpen ? 'Aberto Agora' : 'Fechado'}
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollToSection(item.href)}
              className="text-sm font-medium text-foreground hover:text-accent transition-colors duration-200"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* WhatsApp CTA - Desktop */}
        <div className="hidden lg:block">
          <a
            href="https://wa.me/5511998939799?text=Olá%20São%20Cristóvão%20Auto%20Center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-accent hover:bg-accent/90 text-white gap-2">
              <MessageCircle size={18} />
              Contato
            </Button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 hover:bg-muted rounded-sm transition-colors flex-shrink-0"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="lg:hidden bg-white border-t border-border">
          <div className="container py-3 flex flex-col gap-3">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-left text-sm font-medium text-foreground hover:text-accent transition-colors py-2"
              >
                {item.label}
              </button>
            ))}
            <a
              href="https://wa.me/5511998939799?text=Olá%20São%20Cristóvão%20Auto%20Center"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <Button className="w-full bg-accent hover:bg-accent/90 text-white gap-2 text-sm py-2">
                <MessageCircle size={16} />
                Contato via WhatsApp
              </Button>
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
