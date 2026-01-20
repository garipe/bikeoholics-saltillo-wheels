import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Award, Wrench, Trophy, Users } from "lucide-react";
import heroMain from "@/assets/hero-main.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";

const valueCards = [
  {
    icon: Wrench,
    title: "Servicio especializado en suspensiones",
    description: "Mantenimiento y reparación de horquillas y amortiguadores.",
  },
  {
    icon: Trophy,
    title: "Mecánica completa y montaje a la carta",
    description: "Armado personalizado y optimización de tu bicicleta.",
  },
  {
    icon: Users,
    title: "Experiencia en competencia y rodadas",
    description: "Preparación técnica para enduro, DH y XC.",
  },
];

export default function Index() {
  return (
    <Layout>
      {/* SEO */}
      <title>Taller y suspensiones MTB en Saltillo | BIKEOHOLICS</title>
      <meta
        name="description"
        content="Taller especializado en MTB y suspensiones en Saltillo, Coahuila. Mecánica completa, asesoría técnica y preparación para competencia."
      />

      {/* Hero Section */}
      <section className="hero-section">
        <img
          src={heroMain}
          alt="Mountain bike frente a contenedores coloridos"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="hero-overlay" />
        <div className="hero-content max-w-4xl mx-auto">
          <h1 className="text-card mb-6">
            Taller y suspensiones MTB en Saltillo
          </h1>
          <p className="text-lg md:text-xl text-card/90 mb-8 max-w-2xl mx-auto">
            Mecánica completa, asesoría técnica y preparación para competencia.
            Rodadas y comunidad en Saltillo y Monterrey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="hero" size="xl">
              <Link to="/contacto">Reservar cita</Link>
            </Button>
            <Button asChild variant="heroOutline" size="xl">
              <Link to="/taller">Ver servicios</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Badge */}
      <section className="bg-primary">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
            <Award size={48} className="text-primary-foreground" />
            <div>
              <h2 className="text-2xl md:text-3xl text-primary-foreground">
                Certificados por FOX
              </h2>
              <p className="text-primary-foreground/80">
                Especialistas en servicio y mantenimiento de suspensiones y
                amortiguadores.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Value Cards */}
      <section className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {valueCards.map((card) => (
            <div key={card.title} className="card-workshop text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 mb-4">
                <card.icon size={32} className="text-secondary" />
              </div>
              <h3 className="mb-2">{card.title}</h3>
              <p className="text-muted-foreground">{card.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-muted">
        <div className="section-container">
          <h2 className="text-center mb-12">Nuestro trabajo</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <img
              src={gallery1}
              alt="Mountain bike en taller"
              className="w-full h-64 md:h-80 object-cover rounded-lg"
            />
            <img
              src={gallery2}
              alt="Detalle de componentes"
              className="w-full h-64 md:h-80 object-cover rounded-lg"
            />
            <img
              src={gallery3}
              alt="Suspensión FOX"
              className="w-full h-64 md:h-80 object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-accent">
        <div className="section-container text-center">
          <h2 className="text-accent-foreground mb-4">
            ¿Listo para dejar tu bici al 100%?
          </h2>
          <p className="text-accent-foreground/80 mb-8 max-w-xl mx-auto">
            Agenda tu cita y deja tu bicicleta en manos de expertos.
          </p>
          <Button asChild size="xl">
            <Link to="/contacto">Reservar cita</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
