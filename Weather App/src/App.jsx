import CurrentWeatherCard from './components/CurrentWeatherCard'
import Header from './components/Header'
import SearchPlace from './components/SearchPlace'

function App() {
    return (
        <>
            <Header />
            <main>
                <SearchPlace />
                <div className='max-w-304 mx-auto px-6 mt-12 md:px-10'>
                    <CurrentWeatherCard />
                </div>
            </main>
        </>
    )
}

export default App
