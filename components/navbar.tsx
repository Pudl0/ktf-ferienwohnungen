"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMenuOpen(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-amber-100/80 backdrop-blur-sm py-4 px-6 sticky top-0 z-50 shadow-md transition-all duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold text-amber-800 hover:text-amber-600 transition-colors duration-300"
        >
          Hof unter den Eichen
        </Link>
        <Button
          variant="ghost"
          className="md:hidden text-amber-800 hover:text-amber-600 transition-colors duration-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
        <AnimatePresence>
          {(isMenuOpen || window.innerWidth >= 768) && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className={`md:flex flex-col md:flex-row gap-4 absolute md:relative top-full left-0 right-0 md:top-auto bg-amber-100/95 md:bg-transparent p-4 md:p-0 shadow-md md:shadow-none`}
            >
              {["description", "apartments", "contact"].map((section) => (
                <Button
                  key={section}
                  variant="ghost"
                  className="text-amber-800 hover:text-amber-600 hover:bg-amber-200/50 transition-all duration-300"
                  onClick={() => scrollToSection(section)}
                >
                  {section === "description"
                    ? "Über uns"
                    : section === "apartments"
                    ? "Ferienwohnungen"
                    : "Kontakt"}
                </Button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
