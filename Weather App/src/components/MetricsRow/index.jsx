const MetricsRow = () => {
    return (
        <section className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            <div className="relative flex h-29.5 flex-col justify-between rounded-xl p-5 inset-ring bg-[#272541] inset-ring-[#3d3b5e]">
                <h3 className="text-lg text-[#d5d4d9]">Feels Like</h3>
                <span className="text-3xl text-gray-900 dark:text-white">-12 °</span>
            </div>

            <div className="relative flex h-29.5 flex-col justify-between rounded-xl p-5 inset-ring dark:bg-[#272541] dark:inset-ring-[#3d3b5e]">
                <h3 className="text-lg text-[#d5d4d9]">Humidity</h3>
                <span className="text-3xl text-gray-900 dark:text-white">46%</span>
            </div>

            <div className="relative flex h-29.5 flex-col justify-between rounded-xl p-5 inset-ring dark:bg-[#272541] dark:inset-ring-[#3d3b5e]">
                <h3 className="text-lg text-[#d5d4d9]">Wind</h3>
                <span className="text-3xl text-gray-900 dark:text-white">9 mph</span>
            </div>
            
            <div className="relative flex h-29.5 flex-col justify-between rounded-xl p-5 inset-ring dark:bg-[#272541] dark:inset-ring-[#3d3b5e]">
                <h3 className="text-lg text-[#d5d4d9]">Precipitation</h3>
                <span className="text-3xl text-gray-900 dark:text-white">0 in</span>
            </div>
        </section>
    )
}

export default MetricsRow