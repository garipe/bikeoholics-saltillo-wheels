import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  Circle,
  Disc,
  Settings,
  ShieldCheck,
  Wrench,
  Shirt,
  Hammer,
  HardHat,
} from "lucide-react";

const categories = [
  { icon: Circle, name: "Llantas y neumáticos" },
  { icon: Disc, name: "Frenos" },
  { icon: Settings, name: "Transmisión" },
  { icon: Wrench, name: "Suspensiones" },
  { icon: ShieldCheck, name: "Protecciones" },
  { icon: Hammer, name: "Herramientas" },
  { icon: HardHat, name: "Cascos" },
  { icon: Shirt, name: "Ropa y accesorios" },
];

export default function Tienda() {
  return (
    <Layout>
      <title>Tienda de componentes MTB | BIKEOHOLICS Saltillo</title>
      <meta
        name="description"
        content="Accesorios y componentes para bicicletas de montaña. Consulta disponibilidad en nuestra tienda de Saltillo."
      />

      {/* Header */}
      <section className="bg-accent py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-accent-foreground mb-4">Tienda</h1>
          <p className="text-accent-foreground/80 max-w-2xl mx-auto text-lg">
            Accesorios y componentes. Consulta disponibilidad en tienda o por
            mensaje.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="section-container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category) => (
            <div
              key={category.name}
              className="card-workshop text-center group hover:border-primary"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 mb-4 group-hover:bg-primary/10 transition-colors">
                <category.icon
                  size={32}
                  className="text-secondary group-hover:text-primary transition-colors"
                />
              </div>
              <h3 className="text-lg">{category.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-muted">
        <div className="section-container text-center">
          <h2 className="mb-4">¿Buscas algo específico?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Contáctanos para consultar disponibilidad y precios de componentes.
          </p>
          <Button asChild size="xl">
            <Link to="/contacto">Consultar disponibilidad</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
