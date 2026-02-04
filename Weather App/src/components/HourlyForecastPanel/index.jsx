import OvercastIcon from '../../assets/images/icon-overcast.webp'
import DropdownIcon from '../../assets/images/icon-dropdown.svg';
import { useState } from 'react';

const HourlyForecastPanel = () => {
    const [showDaysWeek, setShowDaysWeek] = useState(false);

    const toggleDaysWeek = () => {
        setShowDaysWeek(prev => !prev);
    };

    return (
        <section className='h-full rounded-xl bg-white p-6 dark:bg-[#272541]'>
            <div className='relative'>
                <div className='flex items-center justify-between'>
                    <h3 className='text-white font-semibold text-xl'>Hourly forecast</h3>
                    <button onClick={toggleDaysWeek} className='bg-[#3D3B5E] flex items-center gap-3 px-5 py-2 rounded-lg text-white text-sm md:text-lg cursor-pointer'>
                        <span>Monday</span>
                        <img src={DropdownIcon} alt='Icone de Dropdown' />
                    </button>
                </div>

                <div className={`absolute right-0 bg-[#272541] duration-300 ${showDaysWeek ? 'top-20 opacity-100 z-20' : 'top-8 opacity-0'} mt-2 p-2 w-52 border border-[#312f4b] rounded-lg shadow-lg `}>
                    <ul className='flex flex-col gap-2'>
                        <li className='w-full hover:bg-[#312f4b] px-2 py-2 rounded-md cursor-pointer text-white'>Monday</li>
                        <li className='w-full hover:bg-[#312f4b] px-2 py-2 rounded-md cursor-pointer text-white'>Tuesday</li>
                        <li className='w-full hover:bg-[#312f4b] px-2 py-2 rounded-md cursor-pointer text-white'>Wednesday</li>
                        <li className='w-full hover:bg-[#312f4b] px-2 py-2 rounded-md cursor-pointer text-white'>Thursday</li>
                        <li className='w-full hover:bg-[#312f4b] px-2 py-2 rounded-md cursor-pointer text-white'>Friday</li>
                        <li className='w-full hover:bg-[#312f4b] px-2 py-2 rounded-md cursor-pointer text-white'>Saturday</li>
                        <li className='w-full hover:bg-[#312f4b] px-2 py-2 rounded-md cursor-pointer text-white'>Sunday</li>
                    </ul>
                </div>
            </div>

            <div className='mt-7'>
                <div className='flex items-center justify-between gap-2 rounded-lg bg-[#312F4B] inset-ring inset-ring-[#3D3B5E] py-2.5 pr-4 pl-3 text-white'>
                    <div className='flex items-center gap-2'>
                        <img src={OvercastIcon} alt='Icon de Nuvem' className='w-16 lg:w-20' />
                        <span className='text-white font-medium text-xl'>9 PM</span>
                    </div>
                    <div>
                        <span className='font-medium text-xl'>22°</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HourlyForecastPanel