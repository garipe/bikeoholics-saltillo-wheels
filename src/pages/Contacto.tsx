import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin, Clock, Instagram, CheckCircle } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";

const contactSchema = z.object({
  nombre: z.string().trim().min(1, "El nombre es requerido").max(100),
  telefono: z.string().trim().min(10, "Teléfono inválido").max(20),
  email: z.string().trim().email("Email inválido").max(255),
  servicio: z.string().min(1, "Selecciona un servicio"),
  mensaje: z.string().trim().max(1000).optional(),
  horario: z.string().trim().max(100).optional(),
});

export default function Contacto() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    email: "",
    servicio: "",
    mensaje: "",
    horario: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const validated = contactSchema.parse(formData);
      console.log("Form submitted:", validated);
      
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      setIsSubmitted(true);
      toast.success("¡Solicitud enviada! Te contactaremos pronto.");
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast.error(error.errors[0].message);
      } else {
        toast.error("Error al enviar. Intenta de nuevo.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <Layout>
        <section className="section-container min-h-[60vh] flex items-center justify-center">
          <div className="text-center max-w-md">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
              <CheckCircle size={48} className="text-primary" />
            </div>
            <h2 className="mb-4">¡Solicitud enviada!</h2>
            <p className="text-muted-foreground mb-8">
              Gracias por contactarnos. Te responderemos lo antes posible.
            </p>
            <Button onClick={() => setIsSubmitted(false)}>
              Enviar otra solicitud
            </Button>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <title>Contacto y Reservas | BIKEOHOLICS Saltillo</title>
      <meta
        name="description"
        content="Reserva tu cita en BIKEOHOLICS, taller de MTB en Saltillo. Servicio de suspensiones, mecánica completa y asesoría."
      />

      {/* Header */}
      <section className="bg-accent py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-accent-foreground mb-4">Contacto y Reserva</h1>
          <p className="text-accent-foreground/80 max-w-2xl mx-auto text-lg">
            Agenda tu cita o contáctanos para cualquier consulta.
          </p>
        </div>
      </section>

      <section className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="nombre">Nombre *</Label>
                  <Input
                    id="nombre"
                    value={formData.nombre}
                    onChange={(e) =>
                      setFormData({ ...formData, nombre: e.target.value })
                    }
                    placeholder="Tu nombre"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="telefono">Teléfono *</Label>
                  <Input
                    id="telefono"
                    type="tel"
                    value={formData.telefono}
                    onChange={(e) =>
                      setFormData({ ...formData, telefono: e.target.value })
                    }
                    placeholder="Tu teléfono"
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="tu@email.com"
                  required
                />
              </div>

              <div>
                <Label htmlFor="servicio">Servicio *</Label>
                <Select
                  value={formData.servicio}
                  onValueChange={(value) =>
                    setFormData({ ...formData, servicio: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona un servicio" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mecanica">Mecánica</SelectItem>
                    <SelectItem value="suspensiones">Suspensiones</SelectItem>
                    <SelectItem value="montaje">Montaje a la carta</SelectItem>
                    <SelectItem value="asesoria">Asesoría</SelectItem>
                    <SelectItem value="otro">Otro</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="mensaje">Mensaje (opcional)</Label>
                <Textarea
                  id="mensaje"
                  value={formData.mensaje}
                  onChange={(e) =>
                    setFormData({ ...formData, mensaje: e.target.value })
                  }
                  placeholder="Describe tu consulta o el servicio que necesitas..."
                  rows={4}
                />
              </div>

              <div>
                <Label htmlFor="horario">Día/horario preferido (opcional)</Label>
                <Input
                  id="horario"
                  value={formData.horario}
                  onChange={(e) =>
                    setFormData({ ...formData, horario: e.target.value })
                  }
                  placeholder="Ej: Sábado por la mañana"
                />
              </div>

              <Button type="submit" size="lg" disabled={isSubmitting}>
                {isSubmitting ? "Enviando..." : "Enviar solicitud"}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="card-workshop">
              <h3 className="mb-4">Información</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin size={20} className="text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Ubicación</p>
                    <p className="text-muted-foreground text-sm">
                      Saltillo, Coahuila, México
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Clock size={20} className="text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Horarios</p>
                    <p className="text-muted-foreground text-sm">
                      Lunes - Sábado: 10:00 - 19:00
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Domingo: Cerrado
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Instagram size={20} className="text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Instagram</p>
                    <a
                      href="https://instagram.com/bikeoholics"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary hover:underline text-sm"
                    >
                      @bikeoholics
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
