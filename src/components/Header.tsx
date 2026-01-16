import { useState } from "react";
import { Search, Menu, X, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const categories = [
  { name: "Cama", href: "#produtos", filter: "cama" },
  { name: "Mesa", href: "#produtos", filter: "mesa" },
  { name: "Banho", href: "#produtos", filter: "banho" },
  { name: "Bazar", href: "#produtos", filter: "bazar" },
  { name: "Ofertas do Dia", href: "#ofertas-do-dia", isHighlight: true },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <div className="container-main">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 shrink-0">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
              <ShoppingBag className="w-5 h-5 text-primary" />
            </div>
            <span className="font-heading text-xl font-bold">
              <span className="text-primary">Maria</span>
              <span className="text-accent">Muamba</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {categories.map((category) => (
              <a
                key={category.name}
                href={category.href}
                className={`nav-link text-sm ${
                  category.isHighlight
                    ? "text-accent font-semibold after:bg-accent"
                    : ""
                }`}
              >
                {category.name}
              </a>
            ))}
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Buscar achadinhos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="input-search pl-11 w-full"
              />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </Button>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden pb-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Buscar achadinhos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="input-search pl-11 w-full"
            />
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden pb-4 animate-fade-in">
            <div className="flex flex-col gap-2">
              {categories.map((category) => (
                <a
                  key={category.name}
                  href={category.href}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    category.isHighlight
                      ? "bg-accent/10 text-accent font-semibold"
                      : "hover:bg-secondary"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {category.name}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
