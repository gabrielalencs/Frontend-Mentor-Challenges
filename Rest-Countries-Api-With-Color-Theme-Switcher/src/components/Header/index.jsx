// React

import { useEffect, useState } from 'react';

// Styles

import '../../styles/layout/header.scss';

// React Icons

import { IoMoonOutline } from "react-icons/io5";
import { IoMoonSharp } from "react-icons/io5";


const Header = () => {
    const [isLightMode, setIsLightMode] = useState(() => {
        return localStorage.getItem('isLightMode') === 'true';
    });

    const toggleDarkMode = () => {
        const newMode = !isLightMode;
        setIsLightMode(newMode);

        localStorage.setItem('isLightMode', newMode);

        document.body.classList.toggle('light-mode', newMode);
    };

    useEffect(() => {
        if (isLightMode) {
            document.body.classList.add('light-mode');
        }
    }, [isLightMode]);
    

    return (
        <header className="header">
            <div className="container">
                <div className="headerBrand">
                    <span>Where in the world?</span>
                </div>

                <div className="headerContainerDarkmode" onClick={toggleDarkMode}>
                    { isLightMode ? <IoMoonOutline /> : <IoMoonSharp /> }
                    <span>{isLightMode ? 'Light Mode' : 'Dark Mode'}</span>
                </div>
            </div>
        </header>
    )
}

export default Header