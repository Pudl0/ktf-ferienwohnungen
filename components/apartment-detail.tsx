"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Bed,
  Users,
  Wifi,
  Tv,
  CookingPot,
  Car,
  ChevronLeft,
} from "lucide-react";
import { Loader2 } from "lucide-react";

interface ApartmentProps {
  name: string;
  description: string;
  shortDescription: string;
  images: string[];
  maxGuests: number;
  bedrooms: number;
  amenities: string[];
  price: number;
}

export default function ApartmentDetail({
  name,
  description,
  shortDescription,
  images,
  maxGuests,
  bedrooms,
  amenities,
  price,
}: ApartmentProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader2 className="h-8 w-8 animate-spin text-amber-600" />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/" passHref>
        <Button
          variant="outline"
          className="mb-6 text-amber-800 border-amber-800 hover:bg-amber-100"
        >
          <ChevronLeft className="mr-2 h-4 w-4" /> Zurück zur Hauptseite
        </Button>
      </Link>

      <h1 className="text-4xl font-bold text-amber-800 mb-2">{name}</h1>
      <p className="text-xl text-amber-700 mb-8">{shortDescription}</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {images.slice(0, 3).map((src, index) => (
          <div
            key={index}
            className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-md"
          >
            <Image
              src={src}
              alt={`${name} - Bild ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-2 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-amber-800">
              Beschreibung
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {description}
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-amber-800">Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center space-x-3">
              <Users className="h-6 w-6 text-amber-600" />
              <span className="text-lg">Bis zu {maxGuests} Gäste</span>
            </div>
            <div className="flex items-center space-x-3">
              <Bed className="h-6 w-6 text-amber-600" />
              <span className="text-lg">{bedrooms} Schlafzimmer</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {amenities.map((amenity, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="text-sm px-3 py-1"
                >
                  {amenity}
                </Badge>
              ))}
            </div>
            <div className="text-3xl font-bold text-amber-800">
              €{price}{" "}
              <span className="text-lg font-normal text-amber-600">
                / Nacht
              </span>
            </div>
            <Button className="w-full text-lg py-6">Jetzt Buchen</Button>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-8 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl text-amber-800">Ausstattung</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center space-x-3">
              <Wifi className="h-6 w-6 text-amber-600" />
              <span className="text-lg">Kostenloses WLAN</span>
            </div>
            <div className="flex items-center space-x-3">
              <Tv className="h-6 w-6 text-amber-600" />
              <span className="text-lg">Flachbild-TV</span>
            </div>
            <div className="flex items-center space-x-3">
              <CookingPot className="h-6 w-6 text-amber-600" />
              <span className="text-lg">Voll ausgestattete Küche</span>
            </div>
            <div className="flex items-center space-x-3">
              <Car className="h-6 w-6 text-amber-600" />
              <span className="text-lg">Kostenloser Parkplatz</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
