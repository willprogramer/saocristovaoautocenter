/**
 * About Section - Industrial Premium Design
 * Features: Text + Image layout, company history and mission
 * Design: Alternating layout with generous whitespace
 */
export default function AboutSection() {
  const aboutImageUrl =
    'https://private-us-east-1.manuscdn.com/sessionFile/4LFUrQrf9Ghuzz9db5lto7/sandbox/bUvr6IL9boEP19CBvBJPvN-img-3_1771861206000_na1fn_ZXF1aXBlLXByb2Zpc3Npb25hbA.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvNExGVXJRcmY5R2h1eno5ZGI1bHRvNy9zYW5kYm94L2JVdnI2SUw5Ym9FUDE5Q0J2QkpQdk4taW1nLTNfMTc3MTg2MTIwNjAwMF9uYTFmbl9aWEYxYVhCbExYQnliMlpwYzNOcGIyNWhiQS5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=rTmb5M286YSue82IgsWhG1-8maLHe7F~Cmj4lL7ywl29~rokJxVYDuzXwlBX3qM3nbpL1rO5JSZAjrlZB8e3E5A~FHnGhj~PrOFww~3jZbKIp3U82TobtBvl6g2-j3K9vspovbwks28s5ND5WOj9R3jJWqigp7a7rpsA2jxkAQjRPLHbqW0HbCfe4LEVg4H02PoJlO-b6hfzEZjAlMpguQqzXKHGKcXPckyM0qzbrtRPGL2CX7s4dFosxr3zT9TA7XhiEVHyiSqzvBr0JHiO4l1iQ~2-jEYG7pwWncdL93gLDNo38NstVEkmRmbtGy5zMxyRipLmaUYzXS6Xo7dyZw__';

  return (
    <section id="sobre" className="section-spacing bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            SOBRE NÓS
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Conheça nossa história de excelência
          </h2>
          <div className="w-16 h-1 bg-accent" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">
                Confiança
              </h3>
              <p className="text-lg text-muted leading-relaxed">
                Desde 2015 a São Cristóvão Auto Center é referência em qualidade e profissionalismo na região. Nossa jornada começou com um compromisso simples: oferecer o melhor atendimento automotivo com excelência.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">
                Nossa Missão
              </h3>
              <p className="text-lg text-muted leading-relaxed">
                Transformar a experiência de manutenção automotiva através de serviços de alta qualidade, equipe qualificada e atendimento personalizado. Cuidamos do seu carro como se fosse nosso.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-4">
              <div className="bg-card p-6 border-l-4 border-accent">
                <p className="text-4xl font-bold text-accent mb-2">10+</p>
                <p className="text-sm text-muted font-semibold">Anos de Experiência</p>
              </div>
              <div className="bg-card p-6 border-l-4 border-accent">
                <p className="text-4xl font-bold text-accent mb-2">100%</p>
                <p className="text-sm text-muted font-semibold">Satisfação Garantida</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src={aboutImageUrl}
              alt="Equipe profissional da São Cristóvão Auto Center"
              className="w-full h-auto object-cover shadow-lg"
            />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent opacity-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
