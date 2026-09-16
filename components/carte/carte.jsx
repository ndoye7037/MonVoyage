export function Carte({ latitude, longitude, name }) {
  const url = `https://www.openstreetmap.org/export/embed.html?bbox=${longitude - 0.05},${latitude - 0.05},${longitude + 0.05},${latitude + 0.05}&layer=mapnik&marker=${latitude},${longitude}`;
  return (
    <section className="mx-auto mt-10 max-w-5xl overflow-hidden rounded-2xl border">
      <h2 className="p-5 text-2xl font-bold">Carte de {name}</h2>
      <iframe
        src={url}
        width="100%"
        height="400"
        loading="lazy"
        className="border-0"
      />
    </section>
  );
}
