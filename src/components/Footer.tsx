import { ShoppingBag, Heart, Mail, Instagram, Facebook } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const footerLinks = {
  categorias: [
    { name: "Cama", href: "#cama" },
    { name: "Mesa", href: "#mesa" },
    { name: "Banho", href: "#banho" },
    { name: "Bazar", href: "#bazar" },
  ],
  sobre: [
    { name: "Sobre Nós", href: "#" },
    { name: "Como Funciona", href: "#" },
    { name: "Política de Privacidade", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="container-main py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="/" className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
                <ShoppingBag className="w-5 h-5 text-primary" />
              </div>
              <span className="font-heading text-xl font-bold">
                <span className="text-primary">Maria</span>
                <span className="text-accent">Muamba</span>
              </span>
            </a>
            <p className="text-sm text-muted-foreground mb-4">
              Praticidade para você, novidades para o seu lar. Encontre os
              melhores achadinhos para sua casa.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">
              Categorias
            </h4>
            <ul className="space-y-2">
              {footerLinks.categorias.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">
              Sobre
            </h4>
            <ul className="space-y-2">
              {footerLinks.sobre.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">
              Novidades por E-mail
            </h4>
            <p className="text-sm text-muted-foreground mb-4">
              Receba ofertas exclusivas e novos achadinhos!
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Seu e-mail"
                className="input-search flex-1"
              />
              <Button size="icon" className="btn-teal shrink-0">
                <Mail className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Affiliate Disclosure & Copyright */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-xs text-muted-foreground">
              © 2024 MariaMuamba. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span>Feito com</span>
              <Heart className="w-3 h-3 text-accent fill-accent" />
              <span>para facilitar seu dia a dia</span>
            </div>
          </div>
          <p className="mt-4 text-xs text-muted-foreground/70 text-center md:text-left">
            <strong>Aviso:</strong> Este site contém links de afiliado. Ao
            comprar através desses links, você apoia nosso trabalho sem custo
            adicional. Somos participantes dos programas de afiliados do Mercado
            Livre e Amazon.
          </p>
        </div>
      </div>
    </footer>
  );
}
