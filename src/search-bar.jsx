import { MapPin } from "lucide-react";

export function SearchBar({ city, setCity, GetWeather, Get_location }) {
    return(
        
         <div className="w-full max-w-md z-10 mb-8">
        <div className="flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-white/15 rounded-2xl px-4 py-3 shadow-2xl shadow-black/30 focus-within:border-cyan-400/60 transition-all duration-300">
          <MapPin className="text-cyan-400 shrink-0" size={18} />
          <input
            type="text"
            placeholder="Search city or location..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="flex-1 bg-transparent text-white placeholder-slate-400 text-sm outline-none font-medium"
          />
          <button
            onClick={GetWeather}
            className="bg-cyan-500 hover:bg-cyan-400 active:scale-95 text-white rounded-xl px-4 py-2 flex items-center gap-1.5 text-sm font-semibold transition-all duration-200 shadow-lg shadow-cyan-500/30"
          >Search</button>
          
        </div>
      </div>


    )
}