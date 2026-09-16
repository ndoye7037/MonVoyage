export async function Apimeteo(latitude, longitude) {
  try {
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code&daily=temperature_2m_max,temperature_2m_min&timezone=auto`,
      {
        next: {
          revalidate: 3600,
        },
      },
    );

    if (!response.ok) {
      return null;
    }

    const data = await response.json();
    return {
      current: {
        temperature: data.current.temperature_2m,
        humidity: data.current.relative_humidity_2m,
        wind: data.current.wind_speed_10m,
        weatherCode: data.current.weather_code,
      },

      daily: {
        max: data.daily.temperature_2m_max,
        min: data.daily.temperature_2m_min,
      },
    };
  } catch (error) {
    console.error("Erreur Méteo API :", error);

    return null;
  }
}
