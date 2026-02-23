import { ArrowRight, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

/**
 * Hero Section - Industrial Premium Design
 * Features: Full-width hero with background image, overlay, and CTA
 * Design: Dark overlay with white text for contrast
 */
export default function HeroSection() {
  const heroImageUrl =
    'https://private-us-east-1.manuscdn.com/sessionFile/4LFUrQrf9Ghuzz9db5lto7/sandbox/bUvr6IL9boEP19CBvBJPvN-img-1_1771861206000_na1fn_aGVyby1vZmljaW5h.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvNExGVXJRcmY5R2h1eno5ZGI1bHRvNy9zYW5kYm94L2JVdnI2SUw5Ym9FUDE5Q0J2QkpQdk4taW1nLTFfMTc3MTg2MTIwNjAwMF9uYTFmbl9hR1Z5YnkxdlptbGphVzVoLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=mgEP5l4EnSp1qcZpH4yHVMk3HSxO4z4ID-qqh99Vp7nAGV0D4q3-DMH4wkuDeraP6FzfiqJ~cQ572dKUZo7blw4v6oRVOS0D7rFxbJ2epB8c9suqTL8VRk7AzD6eXXP-aA1xwNoxh82lUORVyoGpsMOT4hU545PvIPgEH1LknFuUm7o8fQw94AH-0~y8til7GHJv-KvWgu4ML6CDO-nrw8IuFE2a2Fh-dEeRBDkAgdNITqHH73DoacLIGpl5XnG6x1aY-9GTFfs1ggzJL8V6xbpPsINCiG9o3y~G280MdkL5dQ8tcpTB4IRB6ni0IVbXZIHZtVt0gDRk0-VSkeU93Q__';

  return (
    <section
      id="home"
      className="relative w-full h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${heroImageUrl}')`,
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container flex flex-col items-center justify-center text-center gap-6 px-4">
        {/* Tagline */}
        <p className="text-accent font-semibold text-sm md:text-base uppercase tracking-wider">
          
        </p>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-4xl">
          Cuidando do seu carro com a qualidade que você merece
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-gray-100 max-w-2xl">
          Somos o maior auto center da fronteira. Mecânica, borracharia, funilaria e muito mais com profissionalismo e experiência.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <a
            href="https://wa.me/5511998939799?text=Olá%20São%20Cristóvão%20Auto%20Center%20-%20Gostaria%20de%20informações"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-accent hover:bg-accent/90 text-white gap-2 px-8 py-6 text-base">
              <MessageCircle size={20} />
              Fale Conosco
            </Button>
          </a>
          <button
            onClick={() => {
              const element = document.querySelector('#servicos');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-6 border-2 border-white text-white font-semibold hover:bg-white hover:text-black transition-colors duration-300 flex items-center justify-center gap-2"
          >
            Conheça Nossos Serviços
            <ArrowRight size={20} />
          </button>
        </div>
      </div>


    </section>
  );
}
