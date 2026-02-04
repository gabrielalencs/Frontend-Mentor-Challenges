import OvercastIcon from '../../assets/images/icon-overcast.webp'
import DropdownIcon from '../../assets/images/icon-dropdown.svg';
import { useEffect, useRef, useState } from 'react';

const HourlyForecastPanel = () => {
    const [showDaysWeek, setShowDaysWeek] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDaysWeek = () => setShowDaysWeek(prev => !prev);

    useEffect(() => {
        const handleOutside = (event) => {
            if (!showDaysWeek) return;
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowDaysWeek(false);
            }
        };

        document.addEventListener('pointerdown', handleOutside);
        return () => document.removeEventListener('pointerdown', handleOutside);
    }, [showDaysWeek]);


    return (
        <section className='h-full rounded-xl bg-white p-6 dark:bg-[#272541]'>
            <div ref={dropdownRef} className='relative'>
                <div className='flex items-center justify-between'>
                    <h3 className='text-white font-semibold text-xl'>Hourly forecast</h3>

                    <button
                        type="button"
                        onClick={toggleDaysWeek}
                        aria-expanded={showDaysWeek}
                        className='bg-[#3D3B5E] flex items-center gap-3 px-5 py-2 rounded-lg text-white text-sm md:text-lg cursor-pointer'
                    >
                        <span>Monday</span>
                        <img src={DropdownIcon} alt='Icone de Dropdown' />
                    </button>
                </div>

                <div
                    className={[
                        'absolute right-0 top-full mt-2 p-2 w-52 bg-[#272541] border border-[#312f4b] rounded-lg shadow-lg transition-all duration-300',
                        showDaysWeek
                            ? 'opacity-100 translate-y-0 pointer-events-auto z-20'
                            : 'opacity-0 -translate-y-2 pointer-events-none z-0',
                    ].join(' ')}
                >
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

export default HourlyForecastPanel;
