const FAVORIS_KEY = "Favoris-travel";

export function getFavoris() {
  if (typeof window === "undefined") {
    return [];
  }
  const data = localStorage.getItem(FAVORIS_KEY);
  return data ? JSON.parse(data) : [];
}

export function addFavoris(destination) {
  const favoris = getFavoris();
  const exists = favoris.some((item) => item.name === destination.name);

  if (!exists) {
    favoris.push(destination);
    localStorage.setItem(FAVORIS_KEY, JSON.stringify(favoris));
  }
}

export function removeFavoris(name) {
  const favoris = getFavoris();
  const updated = favoris.filter((item) => item.name !== name);
  localStorage.setItem(FAVORIS_KEY, JSON.stringify(updated));
}
