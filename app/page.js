import { TravelHome } from "@/components/home/TravelHome";
import { RechercheDestination } from "@/components/home/RechercheDestination";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <section className="container mx-auto flex flex-col items-center justify-center px-6 py-15 text-center">
        <h1 className="max-w-4xl text-2xl font-extrabold tracking-tight md:text-5xl">
          Planifiez votre prochain voyage intelligemment
        </h1>
        <p className="mt-6 max-w-2xl text-lg ">
         Découvrez les informations essentielles,
          la météo et les lieux incontournables
          de vos prochaines destinations.
        </p>
      </section>
      <RechercheDestination />
      <TravelHome />
    </div>
  );
}
