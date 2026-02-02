import Logo from '../../assets/images/logo.svg';
import ConfigIcon from '../../assets/images/icon-units.svg';
import DropdownIcon from '../../assets/images/icon-dropdown.svg';
import { useState } from 'react';

const Header = () => {
    const [showUnits, setShowUnits] = useState(false);

    const toggleUnits = () => {
        setShowUnits(prev => !prev);
    };


    return (
        <header className='flex items-center justify-between p-6 md:py-8 md:px-10 relative'>
            <div>
                <img src={Logo} alt='Logo Weather Now' />
            </div>

            <div className='relative z-50'>
                <button onClick={toggleUnits} className='bg-[#272541] w-full flex items-center gap-3 px-3 py-2 rounded-lg text-white text-sm md:text-lg cursor-pointer'>
                    <img src={ConfigIcon} alt='Icone de Configurações' />
                    <span>Units</span>
                    <img src={DropdownIcon} alt='Icone de Dropdown' />
                </button>
            </div>

            <div className={`absolute right-10 bg-[#272541] duration-300 ${showUnits ? 'top-20 opacity-100 z-20' : 'top-8 opacity-0'} mt-2 p-2 w-52 border border-[#312f4b] rounded-lg shadow-lg `}>
                <button className='text-white text-left px-2 py-1 rounded-lg cursor-pointer hover:bg-[#312f4b] w-full'>Switch to Imperial</button>

                <div className='flex flex-col border-b border-[#3d3b5e]'>
                    <h3 className='text-sm text-[#a1a1a1] p-1'>Temperature</h3>
                    <ul className='pb-2'>
                        <li className='w-full hover:bg-[#312f4b] px-2 py-1 rounded-md cursor-pointer text-white'>Celsius (°C)</li>
                        <li className='w-full hover:bg-[#312f4b] px-2 py-1 rounded-md cursor-pointer text-white'>Fahrenheit (°F)</li>
                    </ul>
                </div>

                <div className='flex flex-col border-b border-[#3d3b5e] mt-2'>
                    <h3 className='text-sm text-[#a1a1a1] p-1'> Wind Speed</h3>
                    <ul className='pb-2'>
                        <li className='w-full hover:bg-[#312f4b] px-2 py-1 rounded-md cursor-pointer text-white'>km/h</li>
                        <li className='w-full hover:bg-[#312f4b] px-2 py-1 rounded-md cursor-pointer text-white'>mph</li>
                    </ul>
                </div>

                <div className='flex flex-col mt-2'>
                    <h3 className='text-sm text-[#a1a1a1] p-1'>Precipitation</h3>
                    <ul className='pb-2'>
                        <li className='w-full hover:bg-[#312f4b] px-2 py-1 rounded-md cursor-pointer text-white'>Millimeters (mm)</li>
                        <li className='w-full hover:bg-[#312f4b] px-2 py-1 rounded-md cursor-pointer text-white'>Inches (in)</li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header;