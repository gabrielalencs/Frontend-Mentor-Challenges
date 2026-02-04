import Logo from '../../assets/images/logo.svg';
import ConfigIcon from '../../assets/images/icon-units.svg';
import DropdownIcon from '../../assets/images/icon-dropdown.svg';
import CheckIcon from '../../assets/images/icon-checkmark.svg';

import { useEffect, useRef, useState } from 'react';

const Header = () => {
    const [showUnits, setShowUnits] = useState(false);
    const unitsRef = useRef(null);

    const [tempUnit, setTempUnit] = useState('C');      
    const [windUnit, setWindUnit] = useState('km/h');   
    const [precipUnit, setPrecipUnit] = useState('mm'); 
    const [system, setSystem] = useState('metric');     

    const toggleUnits = () => setShowUnits((prev) => !prev);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!showUnits) return;
            if (unitsRef.current && !unitsRef.current.contains(event.target)) {
                setShowUnits(false);
            }
        };

        document.addEventListener('pointerdown', handleClickOutside);
        return () => document.removeEventListener('pointerdown', handleClickOutside);
    }, [showUnits]);

    const optionBtnBase =
        "w-full flex items-center justify-between px-2 py-1 rounded-md cursor-pointer text-white hover:bg-[#312f4b]";

    const setImperial = () => {
        setSystem('imperial');
        setTempUnit('F');
        setWindUnit('mph');
        setPrecipUnit('in');
    };

    const setMetric = () => {
        setSystem('metric');
        setTempUnit('C');
        setWindUnit('km/h');
        setPrecipUnit('mm');
    };

    return (
        <header className="max-w-354 mx-auto flex items-center justify-between p-6 md:py-8 md:px-10 relative">
            <div>
                <img src={Logo} alt="Logo Weather Now" />
            </div>

            <div ref={unitsRef} className="relative z-50">
                <button
                    type="button"
                    onClick={toggleUnits}
                    aria-expanded={showUnits}
                    className="bg-[#272541] w-full flex items-center gap-3 px-3 py-2 rounded-lg text-white text-sm md:text-lg cursor-pointer"
                >
                    <img src={ConfigIcon} alt="Icone de Configurações" />
                    <span>Units</span>
                    <img src={DropdownIcon} alt="Icone de Dropdown" />
                </button>

                <div
                    className={[
                        "absolute right-0 mt-2 p-2 w-52 bg-[#272541] border border-[#312f4b] rounded-lg shadow-lg transition-all duration-300",
                        showUnits
                            ? "opacity-100 translate-y-0 pointer-events-auto"
                            : "opacity-0 -translate-y-2 pointer-events-none",
                    ].join(" ")}
                >
                    <button
                        type="button"
                        onClick={system === 'imperial' ? setMetric : setImperial}
                        className="w-full flex items-center justify-between text-white text-left px-2 py-1 rounded-lg cursor-pointer hover:bg-[#312f4b]"
                    >
                        <span>{system === 'imperial' ? 'Switch to Metric' : 'Switch to Imperial'}</span>
                        <img src={CheckIcon} alt="" className="w-4 h-4 opacity-80" />
                    </button>

                    <div className="flex flex-col border-b border-[#3d3b5e] mt-2">
                        <h3 className="text-sm text-[#a1a1a1] p-1">Temperature</h3>
                        <ul className="pb-2">
                            <li>
                                <button
                                    type="button"
                                    onClick={() => { setTempUnit('C'); setSystem('metric'); }}
                                    className={optionBtnBase}
                                >
                                    <span>Celsius (°C)</span>
                                    {tempUnit === 'C' && <img src={CheckIcon} alt="" className="w-4 h-4" />}
                                </button>
                            </li>
                            <li>
                                <button
                                    type="button"
                                    onClick={() => { setTempUnit('F'); setSystem('imperial'); }}
                                    className={optionBtnBase}
                                >
                                    <span>Fahrenheit (°F)</span>
                                    {tempUnit === 'F' && <img src={CheckIcon} alt="" className="w-4 h-4" />}
                                </button>
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col border-b border-[#3d3b5e] mt-2">
                        <h3 className="text-sm text-[#a1a1a1] p-1">Wind Speed</h3>
                        <ul className="pb-2">
                            <li>
                                <button
                                    type="button"
                                    onClick={() => setWindUnit('km/h')}
                                    className={optionBtnBase}
                                >
                                    <span>km/h</span>
                                    {windUnit === 'km/h' && <img src={CheckIcon} alt="" className="w-4 h-4" />}
                                </button>
                            </li>
                            <li>
                                <button
                                    type="button"
                                    onClick={() => setWindUnit('mph')}
                                    className={optionBtnBase}
                                >
                                    <span>mph</span>
                                    {windUnit === 'mph' && <img src={CheckIcon} alt="" className="w-4 h-4" />}
                                </button>
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col mt-2">
                        <h3 className="text-sm text-[#a1a1a1] p-1">Precipitation</h3>
                        <ul className="pb-2">
                            <li>
                                <button
                                    type="button"
                                    onClick={() => setPrecipUnit('mm')}
                                    className={optionBtnBase}
                                >
                                    <span>Millimeters (mm)</span>
                                    {precipUnit === 'mm' && <img src={CheckIcon} alt="" className="w-4 h-4" />}
                                </button>
                            </li>
                            <li>
                                <button
                                    type="button"
                                    onClick={() => setPrecipUnit('in')}
                                    className={optionBtnBase}
                                >
                                    <span>Inches (in)</span>
                                    {precipUnit === 'in' && <img src={CheckIcon} alt="" className="w-4 h-4" />}
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
