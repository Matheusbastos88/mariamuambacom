import { Star, ExternalLink, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

interface ProductCardProps {
  id: string;
  title: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  image: string;
  category: string;
  affiliateLink: string;
  isOffer?: boolean;
  store: "mercadolivre" | "amazon";
}

export function ProductCard({
  title,
  price,
  originalPrice,
  rating,
  reviewCount,
  image,
  category,
  affiliateLink,
  isOffer,
  store,
}: ProductCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const discount = originalPrice
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : 0;

  return (
    <article className="card-product group">
      {/* Image Container */}
      <div className="relative aspect-square bg-secondary overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {isOffer && (
            <Badge className="badge-offer">
              -{discount}% OFF
            </Badge>
          )}
          <Badge variant="secondary" className="text-xs">
            {category}
          </Badge>
        </div>

        {/* Favorite Button */}
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute top-3 right-3 w-9 h-9 rounded-full bg-card/90 backdrop-blur-sm flex items-center justify-center transition-all hover:scale-110"
        >
          <Heart
            className={`w-4 h-4 ${
              isFavorite ? "fill-accent text-accent" : "text-muted-foreground"
            }`}
          />
        </button>

        {/* Store Badge */}
        <div className="absolute bottom-3 right-3">
          <div className="px-2 py-1 rounded-md bg-card/90 backdrop-blur-sm text-xs font-medium text-muted-foreground">
            {store === "mercadolivre" ? "Mercado Livre" : "Amazon"}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Rating */}
        <div className="flex items-center gap-1 mb-2">
          <div className="flex items-center">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-3.5 h-3.5 ${
                  i < Math.floor(rating)
                    ? "fill-amber-400 text-amber-400"
                    : "text-muted"
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground ml-1">
            ({reviewCount})
          </span>
        </div>

        {/* Title */}
        <h3 className="font-medium text-foreground line-clamp-2 mb-3 group-hover:text-primary transition-colors">
          {title}
        </h3>

        {/* Price */}
        <div className="mb-4">
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through mr-2">
              R$ {originalPrice.toFixed(2)}
            </span>
          )}
          <span className="text-xl font-bold text-primary">
            R$ {price.toFixed(2)}
          </span>
        </div>

        {/* CTA */}
        <Button asChild className="w-full btn-teal group/btn">
          <a href={affiliateLink} target="_blank" rel="noopener noreferrer">
            {isOffer ? "Aproveitar Oferta" : "Ver na Loja"}
            <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
          </a>
        </Button>
      </div>
    </article>
  );
}
