import { ProductCard } from "./ProductCard";
import { Bath, Droplets } from "lucide-react";

// Produtos de Banho - Toalhas e Acessórios
const banhoProducts = [
  {
    id: "banho-1",
    title: "Kit Toalhas de Banho Luxo 100% Algodão",
    price: 129.9,
    originalPrice: 199.9,
    rating: 4.8,
    reviewCount: 567,
    image: "https://images.unsplash.com/photo-1616627561950-9f746e330187?w=400&h=400&fit=crop",
    category: "Banho",
    categoryId: "banho",
    affiliateLink: "https://amzn.to/4pFoMnW",
    isOffer: true,
    store: "amazon" as const,
  },
  {
    id: "banho-2",
    title: "Tapete de Banheiro Antiderrapante Premium",
    price: 79.9,
    originalPrice: 119.9,
    rating: 4.6,
    reviewCount: 432,
    image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=400&h=400&fit=crop",
    category: "Banho",
    categoryId: "banho",
    affiliateLink: "https://amzn.to/49XQckb",
    isOffer: true,
    store: "amazon" as const,
  },
  {
    id: "banho-3",
    title: "Roupão de Banho Microfibra Ultra Soft",
    price: 119.9,
    originalPrice: 179.9,
    rating: 4.7,
    reviewCount: 345,
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=400&fit=crop",
    category: "Banho",
    categoryId: "banho",
    affiliateLink: "https://amzn.to/4sCZTvL",
    isOffer: true,
    store: "amazon" as const,
  },
  {
    id: "banho-4",
    title: "Organizador de Box Multiuso com Ventosas",
    price: 49.9,
    originalPrice: 79.9,
    rating: 4.4,
    reviewCount: 289,
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400&h=400&fit=crop",
    category: "Banho",
    categoryId: "banho",
    affiliateLink: "https://amzn.to/4qRleQn",
    isOffer: true,
    store: "amazon" as const,
  },
  {
    id: "banho-5",
    title: "Espelho de Banheiro com LED Antiembaçante",
    price: 189.9,
    originalPrice: 299.9,
    rating: 4.8,
    reviewCount: 178,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    category: "Banho",
    categoryId: "banho",
    affiliateLink: "https://amzn.to/4b2ndNi",
    isOffer: true,
    store: "amazon" as const,
  },
  {
    id: "banho-6",
    title: "Porta Toalhas de Parede Inox Duplo",
    price: 69.9,
    originalPrice: 109.9,
    rating: 4.5,
    reviewCount: 234,
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&h=400&fit=crop",
    category: "Banho",
    categoryId: "banho",
    affiliateLink: "https://amzn.to/45QnsY7",
    isOffer: true,
    store: "amazon" as const,
  },
  {
    id: "banho-7",
    title: "Dispenser Sabonete Líquido Automático",
    price: 89.9,
    originalPrice: 139.9,
    rating: 4.6,
    reviewCount: 567,
    image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&h=400&fit=crop",
    category: "Banho",
    categoryId: "banho",
    affiliateLink: "https://amzn.to/49DBhdz",
    isOffer: true,
    store: "amazon" as const,
  },
  {
    id: "banho-8",
    title: "Cortina de Box Impermeável Estampada",
    price: 59.9,
    originalPrice: 89.9,
    rating: 4.3,
    reviewCount: 445,
    image: "https://images.unsplash.com/photo-1604709177225-055f99402ea3?w=400&h=400&fit=crop",
    category: "Banho",
    categoryId: "banho",
    affiliateLink: "https://amzn.to/3YI9qE8",
    isOffer: true,
    store: "amazon" as const,
  },
  {
    id: "banho-9",
    title: "Lixeira de Banheiro com Pedal Inox 5L",
    price: 79.9,
    originalPrice: 119.9,
    rating: 4.5,
    reviewCount: 312,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
    category: "Banho",
    categoryId: "banho",
    affiliateLink: "https://amzn.to/3YIf4pN",
    isOffer: true,
    store: "amazon" as const,
  },
  {
    id: "banho-10",
    title: "Suporte Papel Higiênico com Prateleira",
    price: 45.9,
    originalPrice: 69.9,
    rating: 4.4,
    reviewCount: 678,
    image: "https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?w=400&h=400&fit=crop",
    category: "Banho",
    categoryId: "banho",
    affiliateLink: "https://amzn.to/3LO2GSg",
    isOffer: true,
    store: "amazon" as const,
  },
];

// Produtos Para o Banho - Higiene e Cuidados Pessoais
const paraOBanhoProducts = [
  {
    id: "para-banho-1",
    title: "Kit Esponja de Banho Natural Bucha Vegetal",
    price: 24.9,
    originalPrice: 39.9,
    rating: 4.7,
    reviewCount: 891,
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&h=400&fit=crop",
    category: "Para o Banho",
    categoryId: "para-banho",
    affiliateLink: "https://amzn.to/4pFqmWU",
    isOffer: true,
    store: "amazon" as const,
  },
  {
    id: "para-banho-2",
    title: "Escova de Banho Massageadora Silicone",
    price: 34.9,
    originalPrice: 54.9,
    rating: 4.6,
    reviewCount: 567,
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop",
    category: "Para o Banho",
    categoryId: "para-banho",
    affiliateLink: "https://amzn.to/4sIzFId",
    isOffer: true,
    store: "amazon" as const,
  },
  {
    id: "para-banho-3",
    title: "Touca de Banho Impermeável Kit 3 Unidades",
    price: 19.9,
    originalPrice: 34.9,
    rating: 4.4,
    reviewCount: 432,
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop",
    category: "Para o Banho",
    categoryId: "para-banho",
    affiliateLink: "https://amzn.to/4jRBsa8",
    isOffer: true,
    store: "amazon" as const,
  },
  {
    id: "para-banho-4",
    title: "Massageador Capilar Shampoo Silicone",
    price: 29.9,
    originalPrice: 49.9,
    rating: 4.8,
    reviewCount: 1023,
    image: "https://images.unsplash.com/photo-1599305090598-fe179d501227?w=400&h=400&fit=crop",
    category: "Para o Banho",
    categoryId: "para-banho",
    affiliateLink: "https://amzn.to/4sJZ6sX",
    isOffer: true,
    store: "amazon" as const,
  },
  {
    id: "para-banho-5",
    title: "Esfoliante Corporal Kit Luvas Banho",
    price: 27.9,
    originalPrice: 44.9,
    rating: 4.5,
    reviewCount: 678,
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&h=400&fit=crop",
    category: "Para o Banho",
    categoryId: "para-banho",
    affiliateLink: "https://amzn.to/3ZdMNHM",
    isOffer: true,
    store: "amazon" as const,
  },
  {
    id: "para-banho-6",
    title: "Porta Shampoo de Box Organizador Aço",
    price: 69.9,
    originalPrice: 99.9,
    rating: 4.6,
    reviewCount: 345,
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400&h=400&fit=crop",
    category: "Para o Banho",
    categoryId: "para-banho",
    affiliateLink: "https://amzn.to/49oiowx",
    isOffer: true,
    store: "amazon" as const,
  },
  {
    id: "para-banho-7",
    title: "Escova Limpa Costas Cabo Longo Ergonômico",
    price: 39.9,
    originalPrice: 59.9,
    rating: 4.5,
    reviewCount: 289,
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop",
    category: "Para o Banho",
    categoryId: "para-banho",
    affiliateLink: "https://amzn.to/4jHydBT",
    isOffer: true,
    store: "amazon" as const,
  },
  {
    id: "para-banho-8",
    title: "Pedra Pomes Natural com Cabo de Madeira",
    price: 22.9,
    originalPrice: 34.9,
    rating: 4.3,
    reviewCount: 445,
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&h=400&fit=crop",
    category: "Para o Banho",
    categoryId: "para-banho",
    affiliateLink: "https://amzn.to/49EHPca",
    isOffer: true,
    store: "amazon" as const,
  },
  {
    id: "para-banho-9",
    title: "Nécessaire Organizadora Viagem Impermeável",
    price: 49.9,
    originalPrice: 79.9,
    rating: 4.7,
    reviewCount: 567,
    image: "https://images.unsplash.com/photo-1589782182703-2aaa69037b5b?w=400&h=400&fit=crop",
    category: "Para o Banho",
    categoryId: "para-banho",
    affiliateLink: "https://amzn.to/4qVqIJW",
    isOffer: true,
    store: "amazon" as const,
  },
  {
    id: "para-banho-10",
    title: "Chinelo de Banho Antiderrapante Massageador",
    price: 34.9,
    originalPrice: 54.9,
    rating: 4.4,
    reviewCount: 312,
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop",
    category: "Para o Banho",
    categoryId: "para-banho",
    affiliateLink: "https://amzn.to/3YHKnRD",
    isOffer: true,
    store: "amazon" as const,
  },
  {
    id: "para-banho-11",
    title: "Dispensador Pasta de Dente Automático",
    price: 44.9,
    originalPrice: 69.9,
    rating: 4.6,
    reviewCount: 678,
    image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&h=400&fit=crop",
    category: "Para o Banho",
    categoryId: "para-banho",
    affiliateLink: "https://amzn.to/4qmTvXT",
    isOffer: true,
    store: "amazon" as const,
  },
  {
    id: "para-banho-12",
    title: "Porta Escova Dentes Esterilizador UV",
    price: 89.9,
    originalPrice: 139.9,
    rating: 4.8,
    reviewCount: 234,
    image: "https://images.unsplash.com/photo-1559575433-8c2b8d2fb1e5?w=400&h=400&fit=crop",
    category: "Para o Banho",
    categoryId: "para-banho",
    affiliateLink: "https://amzn.to/4qqeHN1",
    isOffer: true,
    store: "amazon" as const,
  },
  {
    id: "para-banho-13",
    title: "Kit Acessórios Banheiro 6 Peças Rose Gold",
    price: 129.9,
    originalPrice: 199.9,
    rating: 4.7,
    reviewCount: 445,
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&h=400&fit=crop",
    category: "Para o Banho",
    categoryId: "para-banho",
    affiliateLink: "https://amzn.to/4sJPCOy",
    isOffer: true,
    store: "amazon" as const,
  },
  {
    id: "para-banho-14",
    title: "Saboneteira Automática Espuma Recarregável",
    price: 79.9,
    originalPrice: 119.9,
    rating: 4.5,
    reviewCount: 567,
    image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&h=400&fit=crop",
    category: "Para o Banho",
    categoryId: "para-banho",
    affiliateLink: "https://amzn.to/3LPGLKv",
    isOffer: true,
    store: "amazon" as const,
  },
  {
    id: "para-banho-15",
    title: "Espelho de Aumento Iluminado Maquiagem",
    price: 99.9,
    originalPrice: 159.9,
    rating: 4.6,
    reviewCount: 312,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    category: "Para o Banho",
    categoryId: "para-banho",
    affiliateLink: "https://amzn.to/4qVimC2",
    isOffer: true,
    store: "amazon" as const,
  },
  {
    id: "para-banho-16",
    title: "Toalha Turbante Microfibra Secagem Rápida",
    price: 29.9,
    originalPrice: 49.9,
    rating: 4.8,
    reviewCount: 891,
    image: "https://images.unsplash.com/photo-1616627561950-9f746e330187?w=400&h=400&fit=crop",
    category: "Para o Banho",
    categoryId: "para-banho",
    affiliateLink: "https://amzn.to/4pCVfv1",
    isOffer: true,
    store: "amazon" as const,
  },
];

export function BanhoSection() {
  return (
    <section id="banho" className="py-12 md:py-16 lg:py-20 bg-secondary/30">
      <div className="container-main">
        {/* Banho Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center gap-2 bg-teal/10 text-teal px-4 py-2 rounded-full mb-4">
            <Bath className="w-5 h-5" />
            <span className="font-medium">Banho</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Toalhas, Tapetes e Organização
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Renove seu banheiro com toalhas macias, tapetes antiderrapantes e acessórios que transformam sua rotina em um momento de bem-estar.
          </p>
        </div>

        {/* Banho Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-16">
          {banhoProducts.map((product, index) => (
            <div
              key={product.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>

        {/* Subseção Para o Banho */}
        <div id="para-o-banho" className="pt-8 border-t border-border/50">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center gap-2 bg-coral/10 text-coral px-4 py-2 rounded-full mb-4">
              <Droplets className="w-5 h-5" />
              <span className="font-medium">Para o Banho</span>
            </div>
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
              Higiene e Cuidados Pessoais
            </h3>
            <p className="text-muted-foreground max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
              Descubra os melhores acessórios para transformar seu banho em um ritual de autocuidado! 
              De esponjas naturais a massageadores capilares, organizadores práticos e itens de higiene 
              inovadores. Cuide do seu corpo com produtos que facilitam sua rotina e proporcionam 
              momentos de relaxamento no conforto do seu banheiro.
            </p>
          </div>

          {/* Para o Banho Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {paraOBanhoProducts.map((product, index) => (
              <div
                key={product.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
