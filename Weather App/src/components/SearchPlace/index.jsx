import SearchIcon from '../../assets/images/icon-search.svg'
import RetryIcon from '../../assets/images/icon-retry.svg';
import { useEffect, useRef, useState } from 'react';
import { searchPlaces, fetchForecast } from '../../service/openMeteo.js';

const flagEmoji = (cc = "") =>
    cc
        .toUpperCase()
        .replace(/./g, (c) => String.fromCodePoint(127397 + c.charCodeAt(0)));

const SearchPlace = ({ onResult }) => {
    const [query, setQuery] = useState("");
    const [places, setPlaces] = useState([]);
    const [selectedPlace, setSelectedPlace] = useState(null);
    const [open, setOpen] = useState(false);
    const [loadingPlaces, setLoadingPlaces] = useState(false);
    

    const wrapperRef = useRef(null);

    useEffect(() => {
        const onOutside = (e) => {
            if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("pointerdown", onOutside);
        return () => document.removeEventListener("pointerdown", onOutside);
    }, []);

    useEffect(() => {
        const q = query.trim();

        if (q.length < 2) {
            setPlaces([]);
            setOpen(false);
            return;
        }

        setLoadingPlaces(true);

        const t = setTimeout(async () => {
            try {
                const results = await searchPlaces(q, 10);
                setPlaces(results);
                setOpen(true);
                setOpen(results.length > 0);
            } finally {
                setLoadingPlaces(false);
            }
        }, 300);

        return () => clearTimeout(t);
    }, [query]);


    const handleSelectPlace = (place) => {
        setSelectedPlace(place);
        setQuery(`${place.name}, ${place.country} (${place.country_code})`);
        setOpen(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const place = selectedPlace ?? places[0];
        if (!place) return;

        const data = await fetchForecast({
            latitude: place.latitude,
            longitude: place.longitude,
            units: {
                temperature_unit: 'celsius',
                wind_speed_unit: 'kmh',
                precipitation_unit: 'mm',
            },
        });

        onResult?.({ place, data });
    };


    return (
        <section className='mt-8'>
            <h1 className='font-["Bricolage_Grotesque",sans-serif] text-white font-bold text-center leading-14 text-5xl lg:text-6xl'>
                How&apos;s the <br className='sm:hidden' /> sky looking <br className='md:hidden' /> today?
            </h1>

            <form
                onSubmit={handleSubmit}
                className='mt-11 px-5 w-full flex flex-col sm:flex-row items-center justify-center gap-2 max-w-300 mx-auto'
            >
                <div ref={wrapperRef} className="relative w-full sm:w-1/2">
                    <div className='w-full flex items-center gap-2 py-3 px-5 duration-200 bg-[#272541] hover:bg-[#312f4b] rounded-lg'>
                        <img src={SearchIcon} alt="Icon Search" />
                        <input
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            onFocus={() => { if (places.length) setOpen(true); }}
                            placeholder='Search for a place...'
                            className='flex-1 text-white placeholder:text-[#aeaeb7] outline-none bg-transparent'
                        />
                    </div>

                    {/* Dropdown */}
                    {open && (
                        <div className="absolute left-0 right-0 mt-2 bg-[#272541] border border-[#312f4b] rounded-lg shadow-lg max-h-72 overflow-auto z-50">
                            {loadingPlaces && (
                                <div className="px-4 py-3 text-sm text-white flex items-center gap-3 ">
                                    <img src={RetryIcon} alt="" className='animate-spin' />
                                    Search in progress
                                </div>
                            )}

                            {!loadingPlaces && places.length === 0 && (
                                <div className="px-4 py-3 text-sm text-[#aeaeb7]">
                                    No results
                                </div>
                            )}

                            {!loadingPlaces && places.length > 0 && (
                                <ul className="p-2">
                                    {places.map((p) => (
                                        <li key={`${p.id}-${p.latitude}-${p.longitude}`}>
                                            <button
                                                type="button"
                                                onClick={() => handleSelectPlace(p)}
                                                className="w-full text-left px-3 py-2 rounded-md hover:bg-[#312f4b] text-white flex items-center gap-3"
                                            >
                                                <span className="text-lg leading-none">
                                                    {p.country_code ? flagEmoji(p.country_code) : "📍"}
                                                </span>
                                                <span className="text-sm">
                                                    {p.name}, {p.country} ({p.country_code})
                                                </span>
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    )}
                </div>

                <div className='w-full sm:w-auto'>
                    <button
                        type="submit"
                        className='bg-[#4455da] text-lg w-full text-white px-5 py-2 duration-200 rounded-lg mt-2 sm:mt-0 sm:ml-2 cursor-pointer hover:bg-blue-700'
                    >
                        Search
                    </button>
                </div>
            </form>
        </section>
    )
}

export default SearchPlace
