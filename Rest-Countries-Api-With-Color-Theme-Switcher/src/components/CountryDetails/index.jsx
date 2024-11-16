// React

import { useEffect, useRef, useState } from 'react';

// Styles

import '../../styles/layout/countryDetails.scss';


// React Router

import { useLocation, useNavigate } from 'react-router-dom';

// React Icon

import { FaArrowLeft } from "react-icons/fa";


const CountryDetails = () => {
    const navigate = useNavigate();
    const { state } = useLocation();
    const countryInformation = state.country;

    const countryDetailsContainer = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [borderCountriesData, setBorderCountriesData] = useState([]);


    const showInformationBorderingCountry = (country) => {
        setIsVisible(false);

        setTimeout(() => {
            navigate(`/country/${country.cca2}`, { state: { country } });
        }, 300); 
    };

    const backToListCountries = () =>  navigate("/", { replace: true });


    useEffect(() => {
        if (countryInformation?.borders) {
            const getCountriesBorderCountries = async () => {
                const results = await Promise.all(
                    countryInformation.borders.map(async (code) => {
                        const response = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);
                        return response.json();
                    })
                );

                setBorderCountriesData(results.flat());
            };

            getCountriesBorderCountries();
        }
    }, [countryInformation]);

    useEffect(() => {
        const container = countryDetailsContainer.current;

        if (container) {
            setIsVisible(false);

            setTimeout(() => {
                setIsVisible(true);
                window.scrollTo(0, 0);
            }, 10); 
        }
    }, [state.country]); 


    return (
        <div 
            className={`countryDetailsContainer ${isVisible ? 'showCountryDetailsContainer' : 'hideCountryDetailsContainer'}`}
            ref={countryDetailsContainer}
        >
            <div className='countryBackButton'>
                <button onClick={backToListCountries}>
                    <FaArrowLeft />
                    <span>Back</span>
                </button>
            </div>

            <div className='countryDetailsContent'>
                <div className='countryDetailsImage'>
                    <img src={countryInformation.flags.svg} alt={countryInformation.flags.alt} />
                </div>

                <div className='countryDetailsInformation'>
                    <h2 className='countryDetailsTitle'>
                        {countryInformation.name.common}
                    </h2>

                    <div className='countryDetailsContainerList'>
                        <ul className="countryDetailsList">
                            <li className='countryDetailsListItem'>
                                <span>Native Name: </span>
                                {Object.values(countryInformation.name.nativeName)[0]?.official}
                            </li>

                            <li className='countryDetailsListItem'>
                                <span>Population: </span>
                                {countryInformation.population}
                            </li>

                            <li className='countryDetailsListItem'>
                                <span>Region: </span>
                                {countryInformation.region}
                            </li>

                            <li className='countryDetailsListItem'>
                                <span>Sub Region: </span>
                                {countryInformation.subregion}
                            </li>

                            <li className='countryDetailsListItem'>
                                <span>Capital: </span>
                                {countryInformation.capital}
                            </li>
                        </ul>

                        <ul className="countryDetailsList">
                            <li className='countryDetailsListItem'>
                                <span>Top Level Domain: </span>
                                {countryInformation.tld}
                            </li>

                            <li className='countryDetailsListItem'>
                                <span>Currencies: </span>
                                {Object.values(countryInformation.currencies)[0]?.name}
                            </li>

                            <li className='countryDetailsListItem'>
                                <span>Languages: </span>
                                {Object.values(countryInformation.languages)[0]}
                            </li>
                        </ul>
                    </div>

                    {
                        borderCountriesData.length > 0 && (
                            <div className='countryDetailsContainerButtons'>
                                <h3>Border Countries:</h3>

                                <div className='countryDetailsListButtons'>
                                    {
                                        borderCountriesData && borderCountriesData.map(country => (
                                            <button
                                                key={country.cca2}
                                                className='countryDetailsButton'
                                                onClick={() => showInformationBorderingCountry(country)}
                                            >
                                                {country.name.common}
                                            </button>
                                        ))
                                    }
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default CountryDetails