"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { BookingModal } from "@/components/booking-modal";

export default function Hero() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const openBookingModal = () => {
    setIsBookingModalOpen(true);
  };

  return (
    <section className="relative h-[80vh] sm:h-[70vh] flex items-center justify-center overflow-hidden">
      <Image
        src="/placeholder.svg?height=1080&width=1920"
        alt="Malerische Landschaft von Hof unter den Eichen"
        layout="fill"
        objectFit="cover"
        priority
        className="absolute inset-0"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30"></div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
          Willkommen im Hof unter den Eichen
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Erleben Sie Ruhe und Gemütlichkeit in unseren charmanten
          Ferienwohnungen inmitten der Natur
        </p>
        <Button
          className="bg-amber-600 hover:bg-amber-700 text-white text-lg px-6 py-3 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105"
          onClick={openBookingModal}
        >
          Jetzt Buchen
        </Button>
      </motion.div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-amber-50 to-transparent"></div>

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        apartments={[
          { id: "eichenhof-suite", name: "Eichenhof Suite" },
          { id: "waldblick-loft", name: "Waldblick Loft" },
        ]}
      />
    </section>
  );
}
