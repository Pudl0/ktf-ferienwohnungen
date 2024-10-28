"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

export default function Description() {
  return (
    <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
          <div className="md:grid md:grid-cols-2 gap-6">
            <div>
              <CardHeader>
                <CardTitle className="text-2xl sm:text-3xl text-amber-800">
                  Unser Hof unter den Eichen
                </CardTitle>
                <CardDescription className="text-lg text-amber-700">
                  Fliehen Sie in die Natur und entspannen Sie in Komfort
                </CardDescription>
              </CardHeader>
              <CardContent className="text-amber-900">
                <p className="mb-4">
                  Eingebettet im Herzen der malerischen Landschaft bieten unsere
                  Ferienwohnungen eine perfekte Mischung aus rustikalem Charme
                  und modernem Komfort. Umgeben von sanften Hügeln, üppigen
                  Wäldern und plätschernden Bächen finden Sie Frieden und
                  Erholung in unseren gemütlichen Unterkünften.
                </p>
                <p>
                  Ob Sie einen romantischen Kurzurlaub, ein Familienabenteuer
                  oder einfach eine Pause vom hektischen Stadtleben suchen,
                  unsere Apartments bieten die ideale Basis für Ihre
                  Landschaftserkundung. Genießen Sie die frische Landluft,
                  erkunden Sie malerische Wanderwege oder entspannen Sie einfach
                  auf unserer sonnigen Terrasse mit Blick auf die majestätischen
                  Eichen.
                </p>
              </CardContent>
            </div>
            <div className="grid grid-cols-2 gap-4 p-6">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Gemütliches Interieur unserer Ferienwohnung"
                width={300}
                height={300}
                className="rounded-lg object-cover w-full h-full"
              />
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Malerische Aussicht auf die umliegende Landschaft"
                width={300}
                height={300}
                className="rounded-lg object-cover w-full h-full"
              />
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Entspannende Terrasse mit Blick auf die Eichen"
                width={300}
                height={300}
                className="rounded-lg object-cover w-full h-full"
              />
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Idyllischer Wanderweg in der Nähe des Hofs"
                width={300}
                height={300}
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
          </div>
        </Card>
      </motion.div>
    </section>
  );
}
