import { CloudSun, Map, Landmark, Heart } from "lucide-react";
import { TravelCardHome } from "./TravelCardHome";

const TravelHomes = [
  {
    icon: <CloudSun className="h-8 w-8" />,
    title: "Météo en temps réel",
    description: "Consultez les conditions météo de votre destination.",
  },

  {
    icon: <Map className="h-8 w-8" />,
    title: "Carte interactive",
    description: "Explorez les lieux importants autour de vous.",
  },

  {
    icon: <Landmark className="h-8 w-8" />,
    title: "Attractions touristiques",
    description: "Découvrez les meilleurs endroits à visiter.",
  },

  {
    icon: <Heart className="h-8 w-8" />,
    title: "Favoris",
    description: "Gardez vos destinations préférées.",
  },
];

export function TravelHome() {
  return (
    <section className="container mx-auto px-6 mt-40 py-1">
      <h2 className="mb-7 text-center text-3xl font-bold">
        Pourquoi Smart Travel ?
      </h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {TravelHomes.map((TravelHome) => (
          <TravelCardHome key={TravelHome.title} {...TravelHome} />
        ))}
      </div>
    </section>
  );
}
