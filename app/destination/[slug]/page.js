import { DestinationPage } from "@/components/destination/DestinationPage";
import { getDestinationByName } from "@/components/destination/Apidestination";

export default async function Page({ params }) {
  const { slug } = await params;
  const destination = await getDestinationByName(decodeURIComponent(slug));
  if (!destination) {
    return (
      <main className="container mx-auto py-20 text-center">
        <h1 className="text-3xl font-bold">Destination introuvable</h1>
      </main>
    );
  }

  return <DestinationPage destination={destination} />;
}

