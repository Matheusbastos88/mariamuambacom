import { ProductCard } from "./ProductCard";
import { Flame, Clock } from "lucide-react";

const offerProducts = [
  {
    id: "1",
    title: "Jogo de Lençol 4 Peças Microfibra Queen",
    price: 89.9,
    originalPrice: 149.9,
    rating: 4.5,
    reviewCount: 234,
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400&h=400&fit=crop",
    category: "Cama",
    categoryId: "cama",
    affiliateLink: "https://www.amazon.com.br/dp/B0D3K8XJVL?tag=mariamuamba04-20",
    isOffer: true,
    store: "amazon" as const,
  },
  {
    id: "2",
    title: "Kit 5 Toalhas de Banho 100% Algodão Premium",
    price: 119.9,
    originalPrice: 189.9,
    rating: 4.8,
    reviewCount: 567,
    image: "https://images.unsplash.com/photo-1616627561950-9f746e330187?w=400&h=400&fit=crop",
    category: "Banho",
    categoryId: "banho",
    affiliateLink: "https://www.amazon.com.br/dp/B09XKZJ8TH?tag=mariamuamba04-20",
    isOffer: true,
    store: "amazon" as const,
  },
  {
    id: "3",
    title: "Jogo de Panelas Antiaderente 7 Peças Tramontina",
    price: 259.9,
    originalPrice: 399.9,
    rating: 4.6,
    reviewCount: 891,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop",
    category: "Bazar",
    categoryId: "bazar",
    affiliateLink: "https://www.amazon.com.br/dp/B07DFXQXJY?tag=mariamuamba04-20",
    isOffer: true,
    store: "amazon" as const,
  },
  {
    id: "5",
    title: "Edredom King Plush Dupla Face Ultra Macio",
    price: 199.9,
    originalPrice: 299.9,
    rating: 4.7,
    reviewCount: 432,
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=400&fit=crop",
    category: "Cama",
    categoryId: "cama",
    affiliateLink: "https://www.amazon.com.br/dp/B0BXTJ6Q8M?tag=mariamuamba04-20",
    isOffer: true,
    store: "amazon" as const,
  },
  {
    id: "7",
    title: "Tapete de Banheiro Antiderrapante Kit 3 Peças",
    price: 69.9,
    originalPrice: 99.9,
    rating: 4.2,
    reviewCount: 345,
    image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=400&h=400&fit=crop",
    category: "Banho",
    categoryId: "banho",
    affiliateLink: "https://www.amazon.com.br/dp/B0C7TRXZ9Y?tag=mariamuamba04-20",
    isOffer: true,
    store: "amazon" as const,
  },
  {
    id: "9",
    title: "Cobertor Casal Manta Microfibra Soft",
    price: 79.9,
    originalPrice: 129.9,
    rating: 4.6,
    reviewCount: 1023,
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop",
    category: "Cama",
    categoryId: "cama",
    affiliateLink: "https://www.amazon.com.br/dp/B0CSLF8TQM?tag=mariamuamba04-20",
    isOffer: true,
    store: "amazon" as const,
  },
  {
    id: "10",
    title: "Escorredor de Louças Inox com Bandeja",
    price: 89.9,
    originalPrice: 139.9,
    rating: 4.4,
    reviewCount: 678,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop",
    category: "Bazar",
    categoryId: "bazar",
    affiliateLink: "https://www.amazon.com.br/dp/B0B5XJKRVQ?tag=mariamuamba04-20",
    isOffer: true,
    store: "amazon" as const,
  },
  {
    id: "11",
    title: "Roupão de Banho Microfibra Unissex",
    price: 99.9,
    originalPrice: 159.9,
    rating: 4.7,
    reviewCount: 445,
    image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=400&h=400&fit=crop",
    category: "Banho",
    categoryId: "banho",
    affiliateLink: "https://www.amazon.com.br/dp/B0CHGV5KQN?tag=mariamuamba04-20",
    isOffer: true,
    store: "amazon" as const,
  },
];

export function OffersSection() {
  return (
    <section id="ofertas-do-dia" className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-accent/5 to-background">
      <div className="container-main">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
            <Flame className="w-4 h-4" />
            Ofertas Imperdíveis
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            🔥 Ofertas do Dia
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto flex items-center justify-center gap-2">
            <Clock className="w-4 h-4" />
            Aproveite! Preços válidos por tempo limitado
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {offerProducts.map((product, index) => (
            <div
              key={product.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}