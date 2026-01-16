import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { OffersSection } from "@/components/OffersSection";
import { BanhoSection } from "@/components/BanhoSection";
import { ProductGrid } from "@/components/ProductGrid";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* SEO Meta handled in index.html */}
      <Header />
      <main className="flex-1">
        <Hero />
        <OffersSection />
        <BanhoSection />
        <ProductGrid />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
