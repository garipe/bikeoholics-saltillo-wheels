import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Settings, Cog, Gauge, Package, CheckCircle } from "lucide-react";
import workshopHero from "@/assets/workshop-hero.jpg";

const services = [
  {
    icon: Cog,
    title: "Mecánica",
    items: [
      "Ajustes y mantenimiento general",
      "Frenos, transmisión, ruedas y rodamientos",
      "Revisión pre-salida / pre-carrera",
    ],
  },
  {
    icon: Settings,
    title: "Suspensiones (Especialidad)",
    items: [
      "Servicio y mantenimiento de suspensiones",
      "Diagnóstico y ajuste de funcionamiento",
      "Puesta a punto para rendimiento y seguridad",
    ],
  },
  {
    icon: Gauge,
    title: "Asesoría y Rendimiento",
    items: [
      "Asesoría para compra de bici (según uso y presupuesto)",
      "Recomendación de talla/geometría y ajustes",
      "Preparación para competencia (setup y mantenimiento)",
    ],
  },
  {
    icon: Package,
    title: "Montaje a la carta",
    items: [
      "Armado completo y selección de componentes",
      "Optimización por peso / resistencia / disciplina",
    ],
  },
];

export default function Taller() {
  return (
    <Layout>
      <title>Taller y Servicios MTB | BIKEOHOLICS Saltillo</title>
      <meta
        name="description"
        content="Servicio especializado de suspensiones, mecánica completa y montaje a la carta para bicicletas de montaña en Saltillo."
      />

      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
        <img
          src={workshopHero}
          alt="Piezas de suspensión en taller"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/70" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-card">Taller y Servicios</h1>
          <p className="text-card/80 mt-4 text-lg max-w-xl mx-auto">
            Especialistas en suspensiones y mecánica completa para MTB
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div key={service.title} className="card-workshop">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-full bg-secondary/10">
                  <service.icon size={28} className="text-secondary" />
                </div>
                <h3>{service.title}</h3>
              </div>
              <ul className="space-y-3">
                {service.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle
                      size={18}
                      className="text-primary mt-0.5 flex-shrink-0"
                    />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary">
        <div className="section-container text-center">
          <h2 className="text-secondary-foreground mb-4">
            ¿Listo para dejar tu bici al 100%?
          </h2>
          <p className="text-secondary-foreground/80 mb-8">
            Agenda tu cita y recibe atención personalizada.
          </p>
          <Button asChild size="xl">
            <Link to="/contacto">Reservar por formulario</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
