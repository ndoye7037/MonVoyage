import Link from "next/link";

const destinations = [
  {
    ville: "Paris",
    pays: "France",
  },
  {
    ville: "Londres",
    pays: "Royaume-Uni",
  },
  {
    ville: "Tokyo",
    pays: "Japon",
  },
  {
    ville: "New York",
    pays: "États-Unis",
  },
  {
    ville: "Brazzaville",
    pays: "Congo",
  },
  {
    ville: "Rome",
    pays: "Italie",
  },
];

export function DestinationPopulaire() {
  return (
    <section className="mt-20 w-full px-2">
      <div className="mb-10">
        <h2 className="text-3xl font-bold">
          Destinations populaires
        </h2>
        <p className="mt-3 text-gray-600">
          Découvrez les villes les plus appréciées par les voyageurs.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {destinations.map((destination) => (
          <Link
            key={destination.ville}
            href={`/destination/${destination.ville.toLowerCase()}`}
            className="
              group
              rounded-2xl
              border
              bg-white
              p-6
              shadow-sm
              transition
              hover:-translate-y-1
              hover:shadow-lg
            "
          >
            <h3 className="text-2xl font-bold group-hover:text-blue-600">
              {destination.ville}
            </h3>
            <p className="mt-2 text-gray-600">
              {destination.pays}
            </p>
            <span className="mt-5 inline-block font-medium text-blue-600">
              Visualisez
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}