import OvercastIcon from "../../assets/images/icon-overcast.webp"


const HourlyForecastPanel = () => {
    return (
        <section className="h-full rounded-xl bg-white px-[clamp(1rem,0.5229rem+2.0356vw,1.5rem)] py-[clamp(1.25rem,1.0115rem+1.0178vw,1.5rem)] w-max dark:bg-[#272541]">
            <h3 className="text-lg text-[#312f4b] dark:text-[#d5d4d9]">Hourly forecast</h3>

            <div className="mt-7">
                <div className="flex items-center justify-between gap-2 rounded-lg bg-[#312F4B] py-2.5 pr-4 pl-3 text-white">
                    <div>
                        <img src={OvercastIcon} alt="Icon de Nuvem" />
                        <span>9 PM</span>
                    </div>
                    <div>
                        <span>22°</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HourlyForecastPanel