// React

import { useState, useEffect } from "react";

// Components

import CountryCard from "../CountryCard";

// React Router

import { useLocation } from "react-router-dom";

// Styles

import "../../styles/layout/listCountries.scss";

// React Icons

import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { BiSad } from "react-icons/bi";


const ListCountries = ({ countrySearched, filterByRegion, setSearchCountries, setFilterByRegion }) => {

    const [countries, setCountries] = useState([]);
    const [loadingCountries, setLoadingCountries] = useState(true);

    const location = useLocation();

    useEffect(() => {
        setSearchCountries("");
        setFilterByRegion("All");
    }, [location]);

    useEffect(() => {
        const getListCountries = async () => {
            setLoadingCountries(true);

            const response = await fetch("https://restcountries.com/v3.1/all");
            const data = await response.json();

            setLoadingCountries(false);
            setCountries(data);
        };

        getListCountries();

    }, []);


    const applyFilters = () => {
        return countries.filter(country => {
            const matchesSearch = countrySearched
                ? Object.values(country.translations).some(
                    translation => translation.common?.toLowerCase().includes(countrySearched.toLowerCase())
                )
                : true;

            let matchesRegion = filterByRegion
                ? country.region.includes(filterByRegion)
                : true;

            if (filterByRegion == 'All') matchesRegion = countries;


            return matchesSearch && matchesRegion;
        });
    };

    const countriesToDisplay = applyFilters();


    return (
        <div className="countryListContainer">
            {loadingCountries ? (
                <div className="loaderContainer">
                    <AiOutlineLoading3Quarters className="loader" />
                </div>
            ) : (
                countriesToDisplay.length > 0 ? (
                    countriesToDisplay?.map(country => (
                        <CountryCard key={country.name.common} country={country} />
                    ))
                ) : (
                    countriesToDisplay.length === 0 && !loadingCountries && (
                        <p className="resultsFound">No Results Found <BiSad /></p>
                    )
                )
            )}
        </div>
    );
};

export default ListCountries;
