import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const navItems = [
  { label: "Inicio", path: "/" },
  { label: "Taller y Servicios", path: "/taller" },
  { label: "Tienda", path: "/tienda" },
  { label: "Eventos", path: "/eventos" },
  { label: "Contacto", path: "/contacto" },
  { label: "Instagram", path: "/instagram" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-foreground">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex-shrink-0">
            <img src={logo} alt="Bikeoholics" className="h-10 md:h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-semibold uppercase tracking-wide transition-colors ${
                  location.pathname === item.path
                    ? "text-primary"
                    : "text-card hover:text-primary"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button asChild>
              <Link to="/contacto">Reservar cita</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-card p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-muted/20">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`py-3 px-4 text-sm font-semibold uppercase tracking-wide transition-colors ${
                    location.pathname === item.path
                      ? "text-primary bg-accent"
                      : "text-card hover:text-primary hover:bg-accent"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 px-4">
                <Button asChild className="w-full">
                  <Link to="/contacto" onClick={() => setIsMenuOpen(false)}>
                    Reservar cita
                  </Link>
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
