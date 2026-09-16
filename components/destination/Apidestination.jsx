export async function getDestinationByName(destinationName) {
  try {
    const response = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
        destinationName
      )}&count=1&language=fr&format=json`
    );
    if (!response.ok) {
      return null;
    }
    const data = await response.json();
    if (!data.results || data.results.length === 0) {
      return null;
    }
    const destination = data.results[0];
    return {
      name: destination.name,
      country: destination.country,
      latitude: destination.latitude,
      longitude: destination.longitude,
      timezone: destination.timezone,
      region: destination.admin1 || "Non disponible",
    };

  } catch (error) {
    console.error(
      "Erreur Destination Service :",
      error
    );
    return null;
  }
}