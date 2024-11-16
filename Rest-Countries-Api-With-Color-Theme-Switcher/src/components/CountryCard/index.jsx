// React Router

import { useNavigate } from 'react-router-dom';


const CountryCard = ({ country }) => {

    const navigate = useNavigate();

    const handleClick = () => navigate(`/country/${country.cca2}`, { state: { country } });


    return (
        <div 
            className="countryContainer" 
            key={country.name.common}
            onClick={handleClick}
        >
            <div className="countryImage">
                <img src={country.flags.svg} alt={country.name.common} />
            </div>

            <div className="countryContent">
                <h3 className="countryTitle">{country.name.common}</h3>

                <ul className="countryInformation">
                    <li>
                        <span>Population:</span> {country.population}
                    </li>
                    <li>
                        <span>Region:</span> {country.region}
                    </li>
                    <li>
                        <span>Capital:</span> {country.capital}
                    </li>
                </ul>
            </div>
        </div>
    )
};

export default CountryCard