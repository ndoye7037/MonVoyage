"use client";

import { FavorisList } from "@/components/favoris/favorisList";
export default function FavorisPage() {
  return (
    <main className="container mx-auto px-6 py-16">
      <section className="mb-12 text-center">
        <h1 className="text-4xl font-bold md:text-5xl">
          Mes destinations favorites
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-gray-600">
          Retrouvez ici les destinations que vous avez enregistrées pour
          préparer vos prochains voyages.
        </p>
      </section>

      <FavorisList />
    </main>
  );
}
