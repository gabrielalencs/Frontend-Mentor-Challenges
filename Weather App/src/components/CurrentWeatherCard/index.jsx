import SunnyIcon from "../../assets/images/icon-sunny.webp";
import BgTodaySmall from "../../assets/images/bg-today-small.svg";
import BgTodayLarge from "../../assets/images/bg-today-large.svg";

import { formatOpenMeteoDateLabel } from "../../utils/formatDate";

const CurrentWeatherCard = ({ place, current, units, data }) => {
    const currentTemperature = Math.round(current?.temperature_2m) || 0;

    const dateLabel = formatOpenMeteoDateLabel({
        timeIso: current?.time,
        timezone: data?.timezone,
        utcOffsetSeconds: data?.utc_offset_seconds,
        locale: "en-US",
    });

    console.log(data);

    return (
        <section
            style={{
                "--bg-small": `url(${BgTodaySmall})`,
                "--bg-large": `url(${BgTodayLarge})`,
            }}
            className="
                bg-(image:--bg-small) lg:bg-(image:--bg-large)
                bg-no-repeat bg-cover bg-center
                rounded-2xl p-10
                text-white
                text-center
                flex flex-col lg:flex-row lg:items-center lg:text-left lg:justify-between lg:py-16
            "
        >
            <div>
                <h3 className="font-bold text-3xl md:text-4xl">{place?.admin1 || place?.country || '--'}, {place?.country || '--'}</h3>
                <span className="mt-2 inline-block text-zinc-200 text-md md:text-lg">{dateLabel}</span>
            </div>

            <div className="flex items-center justify-center gap-8 lg:gap-1 mt-3">
                <img
                    src={SunnyIcon}
                    alt="Icone de Sol"
                    className="w-32 md:w-40"
                />
                <span className="text-8xl font-bold italic lg:text-9xl">{currentTemperature}°</span>
            </div>
        </section>
    );
};

export default CurrentWeatherCard;
