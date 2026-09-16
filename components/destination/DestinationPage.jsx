import { DestinationInformation } from "./DestinationInformation";
import { MeteoInformation } from "@/components/meteo/MeteoInformation";
import { Apimeteo } from "@/components/meteo/Apimeteo";
import { Carte } from "@/components/carte/carte";
import { FavorisButton } from "../favoris/favorisButton";

export async function DestinationPage({ destination }) {
  const meteo = await Apimeteo(destination.latitude, destination.longitude);
  return (
    <main className="mx-auto w-full max-w-7xl space-y-10 px-6 py-16">
      <section className="rounded-3xl border bg-white p-10 shadow-sm">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <p className="text-sm font-medium uppercase tracking-wider text-blue-600">
              Destination
            </p>
            <h1 className="mt-2 text-5xl font-bold text-gray-900">
              {destination.name}
            </h1>
            <p className="mt-3 text-xl text-gray-500">{destination.country}</p>
            <p className="mt-5 max-w-xl text-gray-600">
              Découvrez la météo, la localisation et les informations
              essentielles de cette destination.
            </p>
          </div>
          <div>
            <FavorisButton destination={destination} />
          </div>
        </div>
      </section>
      <section className="rounded-3xl border bg-white p-8 shadow-sm">
        <h2 className="mb-6 text-3xl font-bold">Informations générales</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          <DestinationInformation label="Pays" value={destination.country} />
          <DestinationInformation label="Région" value={destination.region} />
          <DestinationInformation
            label="Latitude"
            value={destination.latitude}
          />
          <DestinationInformation
            label="Longitude"
            value={destination.longitude}
          />
          <DestinationInformation
            label="Fuseau horaire"
            value={destination.timezone}
          />
        </div>
      </section>

      {meteo && (
        <section>
          <MeteoInformation meteo={meteo} />
        </section>
      )}

      <section className="rounded-3xl border bg-white p-6 shadow-sm">
        <h2 className="mb-6 text-3xl font-bold">Localisation</h2>
        <Carte
          latitude={destination.latitude}
          longitude={destination.longitude}
          name={destination.name}
        />
      </section>
    </main>
  );
}
