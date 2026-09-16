import { useEffect, useState } from "react";
import { getFavoris, removeFavoris } from "./favorisLocalStorage";

export function FavorisList() {
  const [favoris, setFavoris] = useState([]);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setFavoris(getFavoris());
      setReady(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  function handleRemove(name) {
    removeFavoris(name);
    setFavoris(getFavoris());
  }
  if (!ready) {
    return <p className="text-center">Chargement</p>;
  }
  if (favoris.length === 0) {
    return (
      <p className="text-center text-muted-foreground">
        Aucun favori enregistré.
      </p>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {favoris.map((item) => (
        <article
          key={item.name}
          className="
          rounded-2xl
          border
          bg-white
          p-6
          shadow-sm
          transition
          hover:shadow-lg
          "
        >
          <h2 className="text-2xl font-bold">{item.name}</h2>
          <p className="mt-2 text-gray-600">{item.country}</p>
          <div className="mt-6 flex gap-3">
            <button
              onClick={() => handleRemove(item.name)}
              className="
              rounded-lg
              border
              px-4
              py-2
              text-white
              bg-red-700
              hover:bg-red-900
              "
            >
              Supprimer
            </button>
          </div>
        </article>
      ))}
    </div>
  );
}
