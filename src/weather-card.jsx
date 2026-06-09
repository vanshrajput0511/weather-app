import { Search, Wind, Droplets, Thermometer, MapPin, Eye, Gauge } from "lucide-react";

export function WeatherCard({ data, searchedCity }) {
    return (
        <div className="w-full max-w-md z-10">
            <div className="bg-white/10 backdrop-blur-2xl border border-white/15 rounded-3xl shadow-2xl shadow-black/40 overflow-hidden">


                <div className="px-6 pt-6 pb-4 border-b border-white/10 flex items-start justify-between">
                    <div>
                        <h2 className="text-2xl font-bold text-white tracking-tight">{searchedCity}</h2>
                        <p className="text-slate-400 text-sm mt-0.5">{data?.name}</p>
                    </div>
                    <div className="flex flex-col items-end">
                        <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 rounded-full px-3 py-1">Live</span>
                    </div>
                </div>
            </div>
        </div>    

            )
}