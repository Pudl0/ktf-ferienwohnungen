import { notFound } from "next/navigation";
import ApartmentDetail from "@/components/apartment-detail";
import apartmentsData from "@/data/apartments.json";

export default function ApartmentPage({
  params,
}: {
  params: { name: string };
}) {
  const apartmentData =
    apartmentsData[params.name as keyof typeof apartmentsData];

  if (!apartmentData) {
    notFound();
  }

  return <ApartmentDetail {...apartmentData} />;
}

export function generateStaticParams() {
  return Object.keys(apartmentsData).map((name) => ({
    name: name,
  }));
}
