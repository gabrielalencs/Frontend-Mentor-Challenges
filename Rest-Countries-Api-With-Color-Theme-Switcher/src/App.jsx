// React

import { useState } from 'react';

// React Router

import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Styles

import './styles/base/reset.scss';

// Components

import Header from './components/Header';
import CountrySearch from './components/CountrySearch';
import ListCountries from './components/ListCountries';
import CountryDetails from './components/CountryDetails';


const App = () => {

    const [searchCountries, setSearchCountries] = useState('');
    const [filterByRegion, setFilterByRegion] = useState('');


    return (
        <>
            <BrowserRouter>
            <Header />
            <main className='container'>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <CountrySearch
                                    setSearchCountry={setSearchCountries}
                                    filterByRegion={filterByRegion}
                                    setFilterByRegion={setFilterByRegion}
                                />
                                <ListCountries
                                    countrySearched={searchCountries}
                                    filterByRegion={filterByRegion}
                                    setSearchCountries={setSearchCountries}
                                    setFilterByRegion={setFilterByRegion}
                                />
                            </>
                        }
                    />
                    <Route path="/country/:id" element={<CountryDetails />} />
                </Routes>
            </main>
        </BrowserRouter>
        </>
    )
};

export default App