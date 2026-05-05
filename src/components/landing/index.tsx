import Image from "next/image";
import {
  Cloud,
  Gift,
  Heart,
  MessageCircle,
  ShieldCheck,
  Smile,
  Sparkles,
  Star,
  Sun,
  Truck,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { INSTAGRAM_URL, LOGO_SRC, MAPS_URL, WHATSAPP_URL } from "./constants";

const benefits = [
  { icon: Heart, color: "bg-primary/20", text: "Feito com amor", desc: "Cada peça com carinho" },
  { icon: Truck, color: "bg-accent/40", text: "Entrega rapidinha", desc: "Para o Mato Grosso do Sul" },
  { icon: ShieldCheck, color: "bg-secondary/60", text: "Tecidos seguros", desc: "Macios e hipoalergênicos" },
  { icon: Gift, color: "bg-tertiary/60", text: "Embalagem fofa", desc: "Pronta para presente" },
];

const collections = [
  { img: "/assets/collection-baby.jpg", title: "Bebês", subtitle: "0 - 24 meses", color: "bg-peach", rotate: "-rotate-2" },
  { img: "/assets/collection-girls.jpg", title: "Meninas", subtitle: "2 - 10 anos", color: "bg-primary/30", rotate: "rotate-1" },
  { img: "/assets/collection-boys.jpg", title: "Meninos", subtitle: "2 - 10 anos", color: "bg-accent", rotate: "-rotate-1" },
  { img: "/assets/collection-teen-girls.png", title: "Meninas", subtitle: "12 - 18 anos", color: "bg-secondary/60", rotate: "rotate-2" },
  { img: "/assets/collection-teen-boys.png", title: "Meninos", subtitle: "12 - 18 anos", color: "bg-tertiary/60", rotate: "-rotate-2" },
];

const testimonials = [
  { name: "Amanda S.", meta: "Campo Grande - MS", text: "Chegou rapidinho e as peças são lindas! Tecido macio, acabamento perfeito e as cores são ainda mais bonitas ao vivo." },
  { name: "Bruna R.", meta: "Dourados - MS", text: "Atendimento maravilhoso no WhatsApp e a embalagem é uma fofura. Minha filha amou e ficou super confortável." },
  { name: "Carla M.", meta: "Três Lagoas - MS", text: "Qualidade excelente! Já lavei algumas vezes e continua perfeito. Vou comprar de novo com certeza." },
  { name: "Débora P.", meta: "Corumbá - MS", text: "Modelagem ótima e confortável. Meu filho corre o dia inteiro e as peças não incomodam nada." },
  { name: "Elaine T.", meta: "Campo Grande - MS", text: "Amei a variedade e as estampas! Dá pra montar looks lindos e ainda assim práticos pro dia a dia." },
  { name: "Fernanda L.", meta: "Naviraí - MS", text: "Chegou bem embaladinho e com cheirinho gostoso. Dá pra ver o capricho em cada detalhe!" },
  { name: "Gabi N.", meta: "Sidrolândia - MS", text: "O tecido é muito macio e não desbota. Minha bebê ficou uma fofura com o conjuntinho." },
  { name: "Helena V.", meta: "Aquidauana - MS", text: "Compra fácil, atendimento rápido e entrega certinha. Virou minha loja favorita pra moda infantil." },
  { name: "Isabela C.", meta: "Nova Andradina - MS", text: "Qualidade e preço justo. Já indiquei pras amigas e todo mundo elogiou as peças!" },
];

export function Header() {
  return (
    <header className="relative z-20">
      <nav className="container mx-auto flex items-center justify-between py-6 px-4">
        <a href="#" className="flex items-center gap-2">
          <div className="h-16 w-16 rounded-full bg-background shadow-soft overflow-hidden flex items-center justify-center animate-bounce-soft">
            <Image src={LOGO_SRC} alt="Cantinho da Ro - Moda Infantil" width={160} height={160} className="h-full w-full object-contain" priority />
          </div>
        </a>
        <div className="hidden md:flex items-center gap-8 font-display font-medium">
          <a href="#colecoes" className="hover:text-primary transition-colors">Coleções</a>
          <a href="#sobre" className="hover:text-primary transition-colors">Sobre</a>
          <a href="#beneficios" className="hover:text-primary transition-colors">Vantagens</a>
          <a href="#depoimentos" className="hover:text-primary transition-colors">Depoimentos</a>
        </div>
        <Button asChild className="rounded-full bg-primary hover:bg-primary/90 font-display shadow-soft transition-all active:scale-95">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            <MessageCircle className="w-4 h-4" />
            <span>Comprar Via WhatsApp</span>
          </a>
        </Button>
      </nav>
    </header>
  );
}

export function HeroSection() {
  return (
    <section className="relative pt-8 pb-24">
      <div className="absolute top-20 left-10 w-16 h-16 rounded-full bg-secondary animate-float opacity-70" />
      <div className="absolute top-40 right-20 w-20 h-20 rounded-full bg-accent animate-float opacity-70" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-20 left-1/4 w-12 h-12 rounded-full bg-tertiary animate-float opacity-70" style={{ animationDelay: "2s" }} />
      <Star className="absolute top-32 right-1/3 w-8 h-8 text-secondary fill-secondary animate-wiggle" />
      <Sparkles className="absolute bottom-32 right-10 w-10 h-10 text-primary animate-wiggle" style={{ animationDelay: "1.5s" }} />
      <Cloud className="absolute top-24 left-1/3 w-12 h-12 text-sky fill-sky animate-float" style={{ animationDelay: "0.5s" }} />

      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-6 text-center md:text-left">
          <div className="inline-flex items-center gap-2 bg-secondary/60 px-4 py-2 rounded-full font-display font-semibold text-sm">
            <Sun className="w-4 h-4 text-primary" fill="currentColor" />
            Novidades coloridas chegaram!
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight text-balance">
            Vestindo crianças com{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-primary">conforto</span>
              <span className="absolute bottom-2 left-0 w-full h-3 bg-secondary -z-0 rounded-full" />
            </span>{" "}
            e muita{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-accent-foreground">alegria</span>
              <span className="absolute bottom-2 left-0 w-full h-3 bg-accent -z-0 rounded-full" />
            </span>
            !
          </h1>
          <p className="text-lg text-muted-foreground max-w-md mx-auto md:mx-0">
            Roupinhas fofas, divertidas e cheias de cor para os pequenos brincarem, sonharem e crescerem felizes. ✨
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <Button asChild size="lg" className="rounded-full bg-primary hover:bg-primary/90 font-display text-base shadow-bubble hover:translate-y-1 hover:shadow-none transition-all">
              <a href="#colecoes"><Heart className="w-5 h-5" fill="currentColor" /> Ver Coleção</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full border-2 border-primary text-primary hover:bg-primary/10 font-display text-base">
              <a href="#sobre"><Smile className="w-5 h-5" /> Nossa História</a>
            </Button>
          </div>
          <div className="flex items-center gap-6 justify-center md:justify-start pt-4">
            <div className="flex -space-x-3">
              <div className="w-10 h-10 rounded-full bg-primary border-2 border-background" />
              <div className="w-10 h-10 rounded-full bg-secondary border-2 border-background" />
              <div className="w-10 h-10 rounded-full bg-accent border-2 border-background" />
              <div className="w-10 h-10 rounded-full bg-tertiary border-2 border-background flex items-center justify-center font-display text-xs font-bold">+</div>
            </div>
            <div className="text-sm">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-secondary fill-secondary" />)}
              </div>
              <p className="text-muted-foreground">+2.000 famílias felizes</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -top-8 -left-8 w-72 h-72 bg-secondary rounded-full blur-3xl opacity-40" />
          <div className="absolute -bottom-8 -right-8 w-72 h-72 bg-primary rounded-full blur-3xl opacity-40" />
          <div className="relative rounded-[3rem] overflow-hidden shadow-playful border-8 border-background rotate-2 hover:rotate-0 transition-transform duration-500">
            <Image src="/assets/hero-kids.jpg" alt="Crianças felizes vestindo roupas coloridas e confortáveis do Cantinho da Ro" width={1280} height={1280} className="w-full h-auto" priority />
          </div>
          <div className="absolute -top-4 -right-4 bg-accent rounded-full p-4 shadow-soft animate-bounce-soft">
            <Sparkles className="w-8 h-8 text-accent-foreground" />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-tertiary rounded-2xl px-4 py-3 shadow-soft font-display font-bold rotate-[-6deg]">
            <span className="text-2xl">100%</span>
            <p className="text-xs">algodão macio</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function BenefitsSection() {
  return (
    <section id="beneficios" className="py-16 bg-gradient-soft">
      <div className="container mx-auto px-4 grid sm:grid-cols-2 md:grid-cols-4 gap-6">
        {benefits.map((item) => (
          <div key={item.text} className="bg-card rounded-3xl p-6 text-center shadow-soft hover:scale-105 transition-transform">
            <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
              <item.icon className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-display font-bold text-lg">{item.text}</h3>
            <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function CollectionsSection() {
  return (
    <section id="colecoes" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-tertiary/60 px-4 py-2 rounded-full font-display font-semibold text-sm">
            <Sparkles className="w-4 h-4" /> Nossas Coleções
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Para cada <span className="text-primary">pequeno</span> tem um <span className="text-accent-foreground">cantinho</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Do bebê recém-nascido aos pequenos exploradores, temos roupinhas que combinam com cada fase.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {collections.map((collection) => (
            <div key={`${collection.title}-${collection.subtitle}`} className={`group ${collection.rotate} hover:rotate-0 transition-transform duration-500`}>
              <div className={`${collection.color} rounded-[2.5rem] p-6 shadow-soft hover:shadow-playful transition-shadow`}>
                <div className="rounded-3xl overflow-hidden mb-4 bg-background">
                  <Image src={collection.img} alt={`Coleção ${collection.title}`} width={800} height={1000} loading="lazy" className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-display text-2xl font-bold">{collection.title}</h3>
                    <p className="text-sm opacity-80">{collection.subtitle}</p>
                  </div>
                  <Button asChild size="icon" className="rounded-full bg-background text-foreground hover:bg-background/90 shadow-soft">
                    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label={`Comprar coleção ${collection.title}`}>
                      <Heart className="w-5 h-5" fill="currentColor" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AboutSection() {
  return (
    <section id="sobre" className="py-24 bg-gradient-rainbow relative overflow-hidden">
      <Star className="absolute top-10 left-10 w-12 h-12 text-background/40 fill-background/40 animate-wiggle" />
      <Heart className="absolute bottom-10 right-10 w-16 h-16 text-background/40 fill-background/40 animate-float" />
      <Sparkles className="absolute top-1/2 right-20 w-10 h-10 text-background/40 animate-wiggle" />

      <div className="container mx-auto px-4 max-w-3xl text-center text-white">
        <div className="inline-flex items-center gap-2 bg-background/30 backdrop-blur-sm px-4 py-2 rounded-full font-display font-semibold text-sm mb-6">
          <Heart className="w-4 h-4" fill="currentColor" /> Nossa História
        </div>
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-balance">
          Um cantinho criado com muito amor pela Ro
        </h2>
        <p className="text-lg leading-relaxed opacity-95">
          O Cantinho da Ro nasceu do sonho de vestir as crianças com o mesmo carinho de uma mãe escolhendo a roupinha
          preferida do filho. Cada peça é pensada para acompanhar correrias no parque, sonecas gostosas e aquele abraço
          apertado no fim do dia. Conforto, qualidade e muita fofura em cada detalhe! 💕
        </p>
        <Button asChild size="lg" className="mt-8 rounded-full bg-background text-primary hover:bg-background/90 font-display text-base shadow-playful">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"><Smile className="w-5 h-5" /> Conhecer a Ro</a>
        </Button>
      </div>
    </section>
  );
}

function TestimonialCard({ name, meta, text }: { name: string; meta: string; text: string }) {
  return (
    <div className="bg-background/60 backdrop-blur-sm rounded-3xl p-7 shadow-[0_12px_32px_-18px_rgba(64,48,56,0.22)] transition-shadow h-full">
      <div className="flex items-center gap-1 mb-4">
        {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-secondary fill-secondary" />)}
      </div>
      <p className="text-sm md:text-base leading-relaxed text-foreground/90">“{text}”</p>
      <div className="mt-6 flex items-center justify-between">
        <div>
          <p className="font-display font-bold">{name}</p>
          <p className="text-xs text-muted-foreground">{meta}</p>
        </div>
        <div className="h-10 w-10 rounded-2xl bg-accent/60 flex items-center justify-center">
          <Heart className="w-5 h-5 text-accent-foreground" fill="currentColor" />
        </div>
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section id="depoimentos" className="py-24">
      <div className="container mx-auto px-4">
        <div className="bg-card rounded-[3rem] p-12 md:p-16 shadow-[0_18px_50px_-18px_rgba(64,48,56,0.18)] relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary rounded-full opacity-50" />

          <div className="relative">
            <div className="text-center mb-10 space-y-3">
              <div className="inline-flex items-center gap-2 bg-secondary/60 px-4 py-2 rounded-full font-display font-semibold text-sm">
                <Star className="w-4 h-4 text-secondary fill-secondary" />
                Depoimentos
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold">
                Quem compra, <span className="text-primary">se apaixona</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Um pedacinho do carinho que a gente recebe das famílias que vestem os pequenos com o Cantinho da Ro.
              </p>
            </div>

            <div className="md:hidden">
              <Carousel opts={{ align: "start", loop: true }} autoplayInterval={3500}>
                <CarouselContent className="-ml-4">
                  {testimonials.map((testimonial) => (
                    <CarouselItem key={testimonial.name} className="pl-4 basis-[88%]">
                      <TestimonialCard name={testimonial.name} meta={testimonial.meta} text={testimonial.text} />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
              <p className="text-center text-xs text-muted-foreground mt-4">Deslize para ver mais</p>
            </div>

            <div className="hidden md:grid md:grid-cols-3 gap-6">
              {testimonials.slice(0, 6).map((testimonial) => (
                <TestimonialCard key={testimonial.name} name={testimonial.name} meta={testimonial.meta} text={testimonial.text} />
              ))}
            </div>

            <div className="mt-10 flex justify-center">
              <Button asChild size="lg" className="rounded-full bg-primary hover:bg-primary/90 font-display shadow-bubble hover:translate-y-1 hover:shadow-none transition-all">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  <span>Quero comprar também</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
        <div>
          <div className="bg-background rounded-2xl p-3 inline-block mb-4">
            <Image src={LOGO_SRC} alt="Cantinho da Ro" width={160} height={160} className="h-20 w-auto" />
          </div>
          <p className="text-sm opacity-70">Moda infantil feita com amor, conforto e muita alegria.</p>
        </div>

        <div>
          <h4 className="font-display font-bold mb-3">Navegue</h4>
          <ul className="space-y-2 text-sm opacity-70">
            <li><a href="#colecoes" className="hover:opacity-100">Coleções</a></li>
            <li><a href="#sobre" className="hover:opacity-100">Sobre nós</a></li>
            <li><a href="#depoimentos" className="hover:opacity-100">Depoimentos</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold mb-3">Fale com a gente</h4>
          <div className="space-y-3">
            <p className="text-sm opacity-70">
              📱 WhatsApp: <a href="https://wa.me/556792360111" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 underline-offset-2 hover:underline font-medium">+55 67 9236-0111</a>
            </p>
            <p className="text-sm opacity-70">
              📸 Instagram: <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:opacity-100 underline-offset-2 hover:underline font-medium">cantinhodaromodainfantil</a>
            </p>
            <p className="text-sm opacity-70 flex items-start gap-1">
              📍 <span>Endereço: <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="hover:opacity-100 underline-offset-2 hover:underline font-medium">R. da Garça, 36 - Conj. Hab. Estrela D'alva II, Campo Grande - MS, 79034-670</a></span>
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-8 pt-8 border-t border-background/10 text-center text-sm opacity-60">
        © {new Date().getFullYear()} Cantinho da Ro. Feito com 💕 para os pequenos.
      </div>
    </footer>
  );
}
