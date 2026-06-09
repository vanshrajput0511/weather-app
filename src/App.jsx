import { Search, Wind, Droplets, Thermometer, MapPin, Eye, Gauge } from "lucide-react";
import { useState, useEffect } from "react";
import Get_location from './get-location.js'
import { SearchBar } from "./search-bar.jsx";
import { WeatherCard } from "./weather-card.jsx";
import { WeatherDetails } from "./weather-details.jsx";

export default function App() {
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY

  const [city, setCity] = useState('')
  const [data, setData] = useState(null)
  const [searchedCity, setSearchedCity] = useState('')

  const GetWeather = async () => {
    console.log(city)
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`

    const response = await fetch(url)
    const data = await response.json()
    setData(data)
    setSearchedCity(city)


  }

  const GetWeatherByLocation = async (lat, lon) => {

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
    const response = await fetch(url)
    const weatherData = await response.json()
    console.log(weatherData)

    setData(weatherData)
    setSearchedCity(weatherData.name)
  }

  const handleLocationWeather = () => {
    Get_location((lat, lon) => {
      GetWeatherByLocation(lat, lon)
    })
  }

  useEffect(() => {
    handleLocationWeather()
  }, [])

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 flex flex-col items-center justify-center px-4 py-10 font-sans relative overflow-hidden">

      {/* Ambient background orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-900/10 rounded-full blur-3xl pointer-events-none" />



      {/* App Title */}
      <div className="mb-8 text-center z-10">
        <h1 className="text-4xl font-extrabold tracking-tight text-white drop-shadow-lg" style={{ fontFamily: "'DM Sans', sans-serif", letterSpacing: "-0.02em" }}>
          Sky<span className="text-cyan-400">Cast</span>
        </h1>
        <p className="text-slate-400 text-sm mt-1 tracking-widest uppercase font-medium">Real-time weather intelligence</p>
      </div>


      {/* Search Bar */}
      <SearchBar
        city={city}
        setCity={setCity}
        GetWeather={GetWeather}
        Get_location={handleLocationWeather}
      />
      {/* Main Weather Card */}
      <div className="w-full max-w-md z-10">
        <div className="bg-white/10 backdrop-blur-2xl border border-white/15 rounded-3xl shadow-2xl shadow-black/40 overflow-hidden">


          <WeatherCard
            data={data}
            searchedCity={searchedCity}
          />


          {/* Main Temp + Condition */}
          <WeatherDetails
            data={data}
          />
        </div>

        {/* Footer credit */}
        <p className="text-center text-slate-600 text-xs mt-5">SkyCast · Weather data powered by OpenWeather</p>
      </div>

    </div>
  );
}