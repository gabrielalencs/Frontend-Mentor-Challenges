import { useEffect, useState } from "react";

import CurrentWeatherCard from "./components/CurrentWeatherCard";
import DailyForecastList from "./components/DailyForecastList";
import Header from "./components/Header";
import HourlyForecastPanel from "./components/HourlyForecastPanel";
import MetricsRow from "./components/MetricsRow";
import SearchPlace from "./components/SearchPlace";
import { fetchForecast, searchPlaces } from "./service/openMeteo";

function App() {
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        const fetchBerlin = async () => {
            const data = await fetchForecast({
                latitude: 52.52,
                longitude: 13.419998,
                units: {
                    temperature_unit: 'celsius',
                    wind_speed_unit: 'kmh',
                    precipitation_unit: 'mm',
                },
            });

            const results = await searchPlaces('Berlim', 3);
            const place = results[0];

            setWeather({ place, data });
        }

        fetchBerlin();
    }, []);
    
    return (
        <>
            <Header />

            <main className="mb-72">
                <SearchPlace onResult={setWeather} />

                <div className="max-w-329 mx-auto px-6 md:px-10 mt-16 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
                    <div className="flex flex-col gap-7 lg:col-span-8">
                        <CurrentWeatherCard
                            place={weather?.place}
                            current={weather?.data?.current}
                            units={weather?.data?.current_units}
                            data={weather?.data}
                        />

                        <MetricsRow
                            current={weather?.data?.current}
                            units={weather?.data?.current_units}
                        />

                        <DailyForecastList
                            daily={weather?.data?.daily}
                            units={weather?.data?.daily_units}
                        />
                    </div>

                    <div className="lg:col-span-4 order-2 lg:order-0">
                        <HourlyForecastPanel
                            hourly={weather?.data?.hourly}
                            units={weather?.data?.hourly_units}
                        />
                    </div>
                </div>
            </main>
        </>
    );
}

export default App;
