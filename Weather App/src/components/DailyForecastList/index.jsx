import OvercastIcon from '../../assets/images/icon-overcast.webp';

const DailyForecastList = () => {
    return (
        <section>
            <h3 className='text-white font-semibold text-xl'>Daily forecast</h3>

            <div className='mt-6 flex gap-4 flex-wrap'>
                <div className='relative flex flex-col items-center rounded-xl p-5 inset-ring bg-[#272541] inset-ring-[#3d3b5e] flex-1'>
                    <span className='text-xl text-[#d5d4d9] font-medium'>Tue</span>
                    <img src={OvercastIcon} alt="" className='w-16 lg:w-20' />

                    <div className='flex items-center justify-between w-full max-w-50 mx-auto'>
                        <span className='text-lg font-medium text-white'>68°</span>
                        <span className='text-lg font-medium text-zinc-400'>57°</span>
                    </div>
                </div>

                <div className='relative flex flex-col items-center rounded-xl p-5 inset-ring bg-[#272541] inset-ring-[#3d3b5e] flex-1'>
                    <span className='text-xl text-[#d5d4d9] font-medium'>Tue</span>
                    <img src={OvercastIcon} alt="" className='w-16 lg:w-20' />

                    <div className='flex items-center justify-between w-full max-w-50 mx-auto'>
                        <span className='text-lg font-medium text-white'>68°</span>
                        <span className='text-lg font-medium text-zinc-400'>57°</span>
                    </div>
                </div>

                <div className='relative flex flex-col items-center rounded-xl py-5 px-4 inset-ring bg-[#272541] inset-ring-[#3d3b5e] flex-1'>
                    <span className='text-xl text-[#d5d4d9] font-medium'>Tue</span>
                    <img src={OvercastIcon} alt="" className='w-16 lg:w-20' />

                    <div className='flex items-center justify-between w-full max-w-32 mx-auto'>
                        <span className='text-lg font-medium text-white'>68°</span>
                        <span className='text-lg font-medium text-zinc-400'>57°</span>
                    </div>
                </div>

                <div className='relative flex flex-col items-center rounded-xl py-5 px-4 inset-ring bg-[#272541] inset-ring-[#3d3b5e] flex-1'>
                    <span className='text-xl text-[#d5d4d9] font-medium'>Tue</span>
                    <img src={OvercastIcon} alt="" className='w-16 lg:w-20' />

                    <div className='flex items-center justify-between w-full max-w-32 mx-auto'>
                        <span className='text-lg font-medium text-white'>68°</span>
                        <span className='text-lg font-medium text-zinc-400'>57°</span>
                    </div>
                </div>

                <div className='relative flex flex-col items-center rounded-xl py-5 px-4 inset-ring bg-[#272541] inset-ring-[#3d3b5e] flex-1'>
                    <span className='text-xl text-[#d5d4d9] font-medium'>Tue</span>
                    <img src={OvercastIcon} alt="" className='w-16 lg:w-20' />

                    <div className='flex items-center justify-between w-full max-w-32 mx-auto'>
                        <span className='text-lg font-medium text-white'>68°</span>
                        <span className='text-lg font-medium text-zinc-400'>57°</span>
                    </div>
                </div>

                <div className='relative flex flex-col items-center rounded-xl py-5 px-4 inset-ring bg-[#272541] inset-ring-[#3d3b5e] flex-1'>
                    <span className='text-xl text-[#d5d4d9] font-medium'>Tue</span>
                    <img src={OvercastIcon} alt="" className='w-16 lg:w-20' />

                    <div className='flex items-center justify-between w-full max-w-32 mx-auto'>
                        <span className='text-lg font-medium text-white'>68°</span>
                        <span className='text-lg font-medium text-zinc-400'>57°</span>
                    </div>
                </div>

                <div className='relative flex flex-col items-center rounded-xl py-5 px-4 inset-ring bg-[#272541] inset-ring-[#3d3b5e] flex-1'>
                    <span className='text-xl text-[#d5d4d9] font-medium'>Tue</span>
                    <img src={OvercastIcon} alt="" className='w-16 lg:w-20' />

                    <div className='flex items-center justify-between w-full max-w-32 mx-auto'>
                        <span className='text-lg font-medium text-white'>68°</span>
                        <span className='text-lg font-medium text-zinc-400'>57°</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DailyForecastList