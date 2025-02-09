// React

import React, { useEffect, useState } from "react";

// React Router

import { Link } from "react-router";

// Images

import Logo from "@images/desktop/logo.svg";
import IconSun from "@images/desktop/icon-sun.svg";
import IconMoon from "@images/desktop/icon-moon.svg";

const Header: React.FC = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        return JSON.parse(localStorage.getItem("isDarkMode") || "false");
    });

    const toggleDarkMode = () => {
        setIsDarkMode((prev: boolean) => {
            const newMode = !prev;
            document.querySelector("html")?.classList.toggle("dark", newMode);
            localStorage.setItem("isDarkMode", JSON.stringify(newMode));
            return newMode;
        });
    };

    useEffect(() => {
        if (isDarkMode) {
            document.querySelector("html")?.classList.add("dark");
        }
    }, [isDarkMode]);

    return (
        <header className="bg-no-repeat bg-cover bg-[url('@/assets/images/mobile/bg-pattern-header.svg')] md:bg-bottom md:bg-[url('@/assets/images/tablet/bg-pattern-header.svg')] xl:bg-[url('@/assets/images/desktop/bg-pattern-header.svg')]">
            <div className="flex justify-between px-[5%] pt-11 pb-[85px] max-w-[1920px] mx-auto md:pb-20 xl:px-[10%]">
                <Link to="/" className="cursor-pointer">
                    <img src={Logo} alt="Logo DevJobs" />
                </Link>

                <div className="flex items-center gap-5">
                    <img src={IconSun} alt="Icon Sun" className="relative left-2" />

                    <div className="toggle-switch">
                        <input
                            className="toggle-input"
                            id="toggle"
                            type="checkbox"
                            checked={isDarkMode}
                            onChange={toggleDarkMode}
                        />
                        <label className="toggle-label" htmlFor="toggle"></label>
                    </div>

                    <img src={IconMoon} alt="Icon Moon" />
                </div>
            </div>
        </header >
    )
};

export default Header