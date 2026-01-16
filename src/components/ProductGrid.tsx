import { useState } from "react";
import { ProductCard } from "./ProductCard";
import { CategoryFilter } from "./CategoryFilter";
import { Slider } from "@/components/ui/slider";
import { SlidersHorizontal } from "lucide-react";

// Sample product data
const products = [
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
    id: "4",
    title: "Aparelho de Jantar 20 Peças Porcelana Schmidt",
    price: 189.9,
    rating: 4.3,
    reviewCount: 156,
    image: "https://images.unsplash.com/photo-1603199506016-b9a594b593c0?w=400&h=400&fit=crop",
    category: "Mesa",
    categoryId: "mesa",
    affiliateLink: "https://www.amazon.com.br/dp/B08WRQBJ8W?tag=mariamuamba04-20",
    isOffer: false,
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
    id: "6",
    title: "Organizador de Armário Multiuso Dobrável",
    price: 49.9,
    rating: 4.4,
    reviewCount: 789,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop",
    category: "Bazar",
    categoryId: "bazar",
    affiliateLink: "https://www.amazon.com.br/dp/B09V1B7YZH?tag=mariamuamba04-20",
    isOffer: false,
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
    id: "8",
    title: "Jogo Americano Bambu Natural Kit 6 Unidades",
    price: 79.9,
    rating: 4.5,
    reviewCount: 234,
    image: "https://images.unsplash.com/photo-1449247709967-d4461a6a6103?w=400&h=400&fit=crop",
    category: "Mesa",
    categoryId: "mesa",
    affiliateLink: "https://www.amazon.com.br/dp/B0BQXZ7TJR?tag=mariamuamba04-20",
    isOffer: false,
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
  {
    id: "12",
    title: "Faqueiro Inox 24 Peças com Estojo",
    price: 129.9,
    originalPrice: 199.9,
    rating: 4.5,
    reviewCount: 312,
    image: "https://images.unsplash.com/photo-1449247709967-d4461a6a6103?w=400&h=400&fit=crop",
    category: "Mesa",
    categoryId: "mesa",
    affiliateLink: "https://www.amazon.com.br/dp/B09Y5BQHTL?tag=mariamuamba04-20",
    isOffer: true,
    store: "amazon" as const,
  },
];

export function ProductGrid() {
  const [activeCategory, setActiveCategory] = useState("todos");
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = products.filter((product) => {
    const categoryMatch =
      activeCategory === "todos" ||
      (activeCategory === "ofertas" && product.isOffer) ||
      product.categoryId === activeCategory;
    const priceMatch =
      product.price >= priceRange[0] && product.price <= priceRange[1];
    return categoryMatch && priceMatch;
  });

  return (
    <section id="produtos" className="py-12 md:py-16 lg:py-20 bg-background">
      <div className="container-main">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Achadinhos Selecionados
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Transforme seu lar com um clique! Produtos escolhidos a dedo para
            facilitar seu dia a dia.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <CategoryFilter
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />

          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors md:ml-auto"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filtrar por preço
          </button>
        </div>

        {/* Price Filter */}
        {showFilters && (
          <div className="mb-8 p-4 bg-secondary/50 rounded-xl animate-fade-in">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium">Faixa de Preço</span>
              <span className="text-sm text-muted-foreground">
                R$ {priceRange[0]} - R$ {priceRange[1]}
              </span>
            </div>
            <Slider
              value={priceRange}
              onValueChange={setPriceRange}
              max={500}
              min={0}
              step={10}
              className="w-full"
            />
          </div>
        )}

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground">
              Nenhum produto encontrado nesta categoria.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
