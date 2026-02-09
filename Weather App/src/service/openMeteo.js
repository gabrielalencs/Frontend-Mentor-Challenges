const GEOCODE_BASE = "https://geocoding-api.open-meteo.com/v1/search";
const FORECAST_BASE = "https://api.open-meteo.com/v1/forecast";

export async function geocodePlace(name) {
    const url = new URL(GEOCODE_BASE);
    url.search = new URLSearchParams({
        name,
        count: "1",
        language: "pt",
        format: "json",
    }).toString();

    const res = await fetch(url);
    if (!res.ok) throw new Error("Erro ao buscar localização");
    const data = await res.json();

    const place = data?.results?.[0];
    if (!place) return null;

    return {
        name: place.name,
        country: place.country,
        latitude: place.latitude,
        longitude: place.longitude,
        timezone: place.timezone,
    };
}

export async function searchPlaces(name, count = 8) {
    const url = new URL(GEOCODE_BASE);
    url.search = new URLSearchParams({
        name,
        count: String(count),
        language: "pt",
        format: "json",
    }).toString();

    const res = await fetch(url);
    if (!res.ok) throw new Error("Erro ao buscar localização");
    const data = await res.json();
    return data?.results ?? [];
}

export async function fetchForecast({
    latitude,
    longitude,
    units = {
        temperature_unit: "celsius",   // ou "fahrenheit"
        wind_speed_unit: "kmh",        // ou "mph"
        precipitation_unit: "mm",      // ou "inch"
    },
}) {
    const url = new URL(FORECAST_BASE);

    const params = new URLSearchParams({
        latitude: String(latitude),
        longitude: String(longitude),
        timezone: "auto",
        forecast_days: "7",

        current: [
            "temperature_2m",
            "apparent_temperature",
            "relative_humidity_2m",
            "wind_speed_10m",
            "precipitation",
            "weather_code",
        ].join(","),

        hourly: [
            "temperature_2m",
            "weather_code",
        ].join(","),

        daily: [
            "weather_code",
            "temperature_2m_max",
            "temperature_2m_min",
        ].join(","),

        temperature_unit: units.temperature_unit,
        wind_speed_unit: units.wind_speed_unit,
        precipitation_unit: units.precipitation_unit,
    });

    url.search = params.toString();

    const res = await fetch(url);
    if (!res.ok) throw new Error("Erro ao buscar previsão");
    return res.json();
}
