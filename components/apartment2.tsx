import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Apartment2() {
  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Waldblick Loft</CardTitle>
        <CardDescription>
          Charmantes Loft mit Panoramablick auf den Wald
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <Image
            src="/placeholder.svg?height=200&width=300"
            alt="Offener Wohn- und Essbereich des Waldblick Lofts"
            width={300}
            height={200}
            className="rounded-lg object-cover w-full h-full"
          />
          <Image
            src="/placeholder.svg?height=200&width=300"
            alt="Gemütliche Schlafnische des Waldblick Lofts"
            width={300}
            height={200}
            className="rounded-lg object-cover w-full h-full"
          />
        </div>
        <p className="text-muted-foreground">
          Unser Waldblick Loft ist perfekt für Paare oder kleine Familien. Das
          offene Design und die großen Fenster bieten einen atemberaubenden
          Blick auf den umliegenden Wald und lassen Sie die Natur hautnah
          erleben.
        </p>
      </CardContent>
      <CardFooter>
        <Link href="/apartments/waldblick-loft" passHref>
          <Button variant="outline">Mehr Details</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
