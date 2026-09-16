import { DestinationInformation } from "../destination/DestinationInformation";

export function MeteoInformation({ meteo }) {
  return (
    <section className="mx-auto mt-10 max-w-5xl rounded-2xl border bg-card p-8 shadow-sm">
      <h2 className="text-3xl font-bold">Météo actuelle</h2>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <DestinationInformation
          label="Température"
          value={`${meteo.current.temperature} °C`}
        />
        <DestinationInformation
          label="Humidité"
          value={`${meteo.current.humidity} %`}
        />
        <DestinationInformation
          label="Vent"
          value={`${meteo.current.wind} km/h`}
        />
      </div>
    </section>
  );
}
