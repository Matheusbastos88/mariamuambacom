import heroBackground from "@/assets/hero-background.png";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBackground}
          alt="Interior de casa aconchegante"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-main py-16 md:py-24 lg:py-32">
        <div className="max-w-2xl animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Achadinhos selecionados para sua casa
          </div>

          {/* Heading */}
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
            Praticidade para você,{" "}
            <span className="text-primary">novidades</span> para o seu{" "}
            <span className="text-accent">lar</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
            Suas comprinhas fáceis e rápidas! Encontre os melhores produtos de
            cama, mesa, banho e bazar com preços incríveis.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="btn-teal group">
              Ver Ofertas do Dia
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary/20 hover:bg-primary/5">
              Explorar Categorias
            </Button>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center gap-6 mt-10 pt-10 border-t border-border/50">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 rounded-full bg-primary" />
              Frete Grátis em compras acima de R$199
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 rounded-full bg-accent" />
              Ofertas diárias exclusivas
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
