import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Instagram as InstagramIcon, ExternalLink } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import heroMain from "@/assets/hero-main.jpg";
import workshopHero from "@/assets/workshop-hero.jpg";

const instagramImages = [
  { src: gallery1, alt: "Mountain bike en taller" },
  { src: gallery2, alt: "Componentes de bicicleta" },
  { src: gallery3, alt: "Suspensión FOX" },
  { src: heroMain, alt: "MTB frente a contenedores" },
  { src: workshopHero, alt: "Piezas de suspensión" },
  { src: gallery1, alt: "Bicicleta de montaña" },
];

export default function InstagramPage() {
  return (
    <Layout>
      <title>Instagram BIKEOHOLICS | MTB Saltillo</title>
      <meta
        name="description"
        content="Síguenos en Instagram para ver nuestros trabajos, rodadas y contenido de MTB en Saltillo."
      />

      {/* Header */}
      <section className="bg-foreground py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-card/10 mb-6">
            <InstagramIcon size={40} className="text-card" />
          </div>
          <h1 className="text-card mb-4">@bikeoholics</h1>
          <p className="text-card/80 max-w-xl mx-auto mb-8">
            Síguenos en Instagram para ver nuestros trabajos, rodadas y todo el
            contenido MTB.
          </p>
          <Button
            asChild
            variant="hero"
            size="xl"
            className="inline-flex items-center gap-2"
          >
            <a
              href="https://instagram.com/bikeoholics"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver Instagram
              <ExternalLink size={18} />
            </a>
          </Button>
        </div>
      </section>

      {/* Image Grid */}
      <section className="section-container">
        <h2 className="text-center mb-8">Últimas publicaciones</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
          {instagramImages.map((image, index) => (
            <a
              key={index}
              href="https://instagram.com/bikeoholics"
              target="_blank"
              rel="noopener noreferrer"
              className="aspect-square overflow-hidden group"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </a>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button asChild variant="outline" size="lg">
            <a
              href="https://instagram.com/bikeoholics"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              <InstagramIcon size={18} />
              Seguir en Instagram
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
