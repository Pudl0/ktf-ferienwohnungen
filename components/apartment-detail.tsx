import Image from "next/image";
import { Carousel } from "@/components/ui/carousel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bed, Users, Wifi, Tv, CookingPot, Car } from "lucide-react";

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
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-amber-800 mb-4">{name}</h1>
      <p className="text-lg text-amber-700 mb-6">{shortDescription}</p>

      <Carousel className="mb-8">
        {images.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`${name} - Bild ${index + 1}`}
            width={800}
            height={600}
            className="rounded-lg object-cover"
          />
        ))}
      </Carousel>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Beschreibung</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{description}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-2">
              <Users className="h-5 w-5 text-amber-600" />
              <span>Bis zu {maxGuests} Gäste</span>
            </div>
            <div className="flex items-center space-x-2">
              <Bed className="h-5 w-5 text-amber-600" />
              <span>{bedrooms} Schlafzimmer</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {amenities.map((amenity, index) => (
                <Badge key={index} variant="secondary">
                  {amenity}
                </Badge>
              ))}
            </div>
            <div className="text-2xl font-bold text-amber-800">
              €{price} / Nacht
            </div>
            <Button className="w-full">Jetzt Buchen</Button>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Ausstattung</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center space-x-2">
              <Wifi className="h-5 w-5 text-amber-600" />
              <span>Kostenloses WLAN</span>
            </div>
            <div className="flex items-center space-x-2">
              <Tv className="h-5 w-5 text-amber-600" />
              <span>Flachbild-TV</span>
            </div>
            <div className="flex items-center space-x-2">
              <CookingPot className="h-5 w-5 text-amber-600" />
              <span>Voll ausgestattete Küche</span>
            </div>
            <div className="flex items-center space-x-2">
              <Car className="h-5 w-5 text-amber-600" />
              <span>Kostenloser Parkplatz</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
