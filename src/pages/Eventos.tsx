import { Layout } from "@/components/layout/Layout";
import { Calendar, MapPin, Users, AlertCircle } from "lucide-react";

const upcomingRides = [
  {
    title: "Rodada Dominical Saltillo",
    date: "Domingos 8:00 AM",
    location: "Punto de reunión por confirmar",
    level: "Todos los niveles",
    note: "Traer casco obligatorio",
  },
  {
    title: "Enduro Sierra de Zapalinamé",
    date: "Próximamente",
    location: "Cañón de San Lorenzo, Saltillo",
    level: "Intermedio - Avanzado",
    note: "Bicicleta de doble suspensión recomendada",
  },
  {
    title: "Visita a Monterrey",
    date: "Por confirmar",
    location: "Chipinque, Monterrey NL",
    level: "Intermedio",
    note: "Cupo limitado, inscripción previa",
  },
];

export default function Eventos() {
  return (
    <Layout>
      <title>Eventos y Rodadas MTB | BIKEOHOLICS Saltillo</title>
      <meta
        name="description"
        content="Rodadas y quedadas de mountain bike en Saltillo, Coahuila y Monterrey. Únete a nuestra comunidad ciclista."
      />

      {/* Header */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-secondary-foreground mb-4">Eventos y Rodadas</h1>
          <p className="text-secondary-foreground/80 max-w-2xl mx-auto text-lg">
            Rodadas y quedadas en Saltillo y Monterrey. ¡Únete a la comunidad
            Bikeoholics!
          </p>
        </div>
      </section>

      {/* Upcoming Rides */}
      <section className="section-container">
        <h2 className="text-center mb-12">Próximas quedadas</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {upcomingRides.map((ride) => (
            <div key={ride.title} className="card-workshop">
              <h3 className="mb-4 text-secondary">{ride.title}</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <Calendar size={18} className="text-primary flex-shrink-0" />
                  <span className="text-sm">{ride.date}</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{ride.location}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Users size={18} className="text-primary flex-shrink-0" />
                  <span className="text-sm">{ride.level}</span>
                </li>
                <li className="flex items-start gap-3 pt-2 border-t border-border">
                  <AlertCircle size={18} className="text-muted-foreground flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">
                    {ride.note}
                  </span>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Map */}
      <section className="bg-muted">
        <div className="section-container">
          <h2 className="text-center mb-8">Nuestra ubicación</h2>
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video rounded-lg overflow-hidden border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115392.50488372946!2d-101.05736799999999!3d25.421879999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x868812e6fcbb1d41%3A0x9d48a8b0e2e447fa!2sSaltillo%2C%20Coah.%2C%20Mexico!5e0!3m2!1sen!2sus!4v1705000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación BIKEOHOLICS Saltillo"
              />
            </div>
            <p className="text-center text-muted-foreground mt-4">
              Ubicación exacta por confirmar. Síguenos en Instagram para
              actualizaciones.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
