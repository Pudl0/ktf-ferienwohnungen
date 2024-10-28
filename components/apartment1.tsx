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

export default function Apartment1() {
  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Eichenhof Suite</CardTitle>
        <CardDescription>
          Geräumige Wohnung mit Blick auf den Garten
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <Image
            src="/placeholder.svg?height=200&width=300"
            alt="Wohnbereich der Eichenhof Suite"
            width={300}
            height={200}
            className="rounded-lg object-cover w-full h-full"
          />
          <Image
            src="/placeholder.svg?height=200&width=300"
            alt="Schlafzimmer der Eichenhof Suite"
            width={300}
            height={200}
            className="rounded-lg object-cover w-full h-full"
          />
          <Image
            src="/placeholder.svg?height=200&width=300"
            alt="Aussicht vom Balkon der Eichenhof Suite"
            width={300}
            height={200}
            className="rounded-lg object-cover w-full h-full col-span-2"
          />
        </div>
        <p className="text-muted-foreground">
          Unsere Eichenhof Suite bietet großzügigen Wohnraum für bis zu 4
          Personen. Genießen Sie den atemberaubenden Blick auf unseren
          gepflegten Garten von Ihrem privaten Balkon aus.
        </p>
      </CardContent>
      <CardFooter>
        <Link href="/apartments/eichenhof-suite" passHref>
          <Button variant="outline">Mehr Details</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
