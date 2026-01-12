import { Bed, Coffee, Bath, ShoppingBasket, Sparkles, LayoutGrid } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CategoryFilterProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const categories = [
  { id: "todos", name: "Todos", icon: LayoutGrid },
  { id: "cama", name: "Cama", icon: Bed },
  { id: "mesa", name: "Mesa", icon: Coffee },
  { id: "banho", name: "Banho", icon: Bath },
  { id: "bazar", name: "Bazar", icon: ShoppingBasket },
  { id: "ofertas", name: "Ofertas", icon: Sparkles },
];

export function CategoryFilter({
  activeCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 md:gap-3">
      {categories.map((category) => {
        const Icon = category.icon;
        const isActive = activeCategory === category.id;
        const isOffers = category.id === "ofertas";

        return (
          <Button
            key={category.id}
            variant={isActive ? "default" : "outline"}
            size="sm"
            onClick={() => onCategoryChange(category.id)}
            className={`
              gap-2 rounded-full px-4 transition-all duration-200
              ${isActive && !isOffers ? "btn-teal" : ""}
              ${isActive && isOffers ? "btn-coral" : ""}
              ${!isActive && isOffers ? "border-accent text-accent hover:bg-accent/10" : ""}
              ${!isActive && !isOffers ? "border-border hover:border-primary/30 hover:text-primary" : ""}
            `}
          >
            <Icon className="w-4 h-4" />
            <span className="hidden sm:inline">{category.name}</span>
          </Button>
        );
      })}
    </div>
  );
}
