// React

import { useState } from 'react';

// Styles

import '../../styles/layout/countrySearch.scss';

// React Icons

import { IoIosArrowDown } from "react-icons/io";
import { IoSearch } from "react-icons/io5";


const CountrySearch = ({ setSearchCountry, setFilterByRegion }) => {

    const [isDropdownRegion, setIsDropdownRegion] = useState(false);
    const listRegions = ['All', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

    const toggleSelectRegion = () => {
        setIsDropdownRegion(!isDropdownRegion);
    };

    const selectedRegion = (event) => {
        setIsDropdownRegion(false);
        setFilterByRegion(event.target.textContent);
    }

    const handleSearchInput = (event) => setSearchCountry(event.target.value);


    return (
        <div className='countrySearchContainer'>
            <div className='searchInput'>
                <IoSearch />
                <input
                    type="search"
                    placeholder="Search for a country..."
                    onChange={handleSearchInput}
                />
            </div>

            <div className='selectRegionContainer' onClick={toggleSelectRegion}>
                <div className='selectRegion'>
                    <span>Filter by Region</span>
                    <IoIosArrowDown />
                </div>

                <div className='selectRegionOptions'>
                    <ul className={`${isDropdownRegion ? 'showSelectRegion' : 'hiddenSelectRegion'}`}>
                        {listRegions.map(region => (
                            <li key={region} onClick={selectedRegion}>{region}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CountrySearch