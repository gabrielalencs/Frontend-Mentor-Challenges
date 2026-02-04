import CurrentWeatherCard from './components/CurrentWeatherCard'
import Header from './components/Header'
import HourlyForecastPanel from './components/HourlyForecastPanel'
import MetricsRow from './components/MetricsRow'
import SearchPlace from './components/SearchPlace'

function App() {
    return (
        <>
            <Header />
            <main className='mb-72'>
                <SearchPlace />
                <div className='max-w-304 mx-auto px-6 mt-16 md:px-10'>
                    <div className='flex flex-col gap-7'>
                        <CurrentWeatherCard />
                        <MetricsRow />
                    </div>
                    <div className='mt-10'>
                        <HourlyForecastPanel />
                    </div>
                </div>
            </main>
        </>
    )
}

export default App
