import { Link } from "react-router-dom";
import { Instagram, MapPin, Clock, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="bg-foreground text-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <img src={logo} alt="Bikeoholics" className="h-10 w-auto mb-4" />
            <p className="text-muted-foreground text-sm">
              Taller especializado en MTB y suspensiones en Saltillo, Coahuila.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display text-lg mb-4 text-primary">Navegación</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:text-primary transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/taller" className="text-sm hover:text-primary transition-colors">
                  Taller y Servicios
                </Link>
              </li>
              <li>
                <Link to="/tienda" className="text-sm hover:text-primary transition-colors">
                  Tienda
                </Link>
              </li>
              <li>
                <Link to="/eventos" className="text-sm hover:text-primary transition-colors">
                  Eventos
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg mb-4 text-primary">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm">
                <MapPin size={16} className="text-primary mt-0.5 flex-shrink-0" />
                <span>Saltillo, Coahuila, México</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Clock size={16} className="text-primary flex-shrink-0" />
                <span>Lun - Sáb: 10:00 - 19:00</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Phone size={16} className="text-primary flex-shrink-0" />
                <span>Contactar vía formulario</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display text-lg mb-4 text-primary">Síguenos</h4>
            <a
              href="https://instagram.com/bikeoholics"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm hover:text-primary transition-colors"
            >
              <Instagram size={20} />
              @bikeoholics
            </a>
          </div>
        </div>

        <div className="border-t border-muted/20 mt-12 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} BIKEOHOLICS | Saltillo, Coahuila, México</p>
          <p className="mt-1">Todos los derechos reservados</p>
        </div>
      </div>
    </footer>
  );
}
