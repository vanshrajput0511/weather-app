import { Wind, Droplets, Thermometer, Eye, Gauge } from "lucide-react";

export function WeatherDetails({ data }) {

    return (
        <>
            <div className="px-6 py-6 flex items-center justify-between">
                <div>
                    <div className="flex items-start gap-1">
                        <span className="text-8xl font-black text-white leading-none tracking-tighter"
                            style={{ fontFamily: "'DM Sans', sans-serif", textShadow: "0 0 60px rgba(34,211,238,0.25)" }}>
                            {data?.main?.temp}
                        </span>
                        <span className="text-3xl font-light text-slate-300 mt-3">°C</span>
                    </div>
                    <p className="text-slate-300 text-lg font-medium mt-1">{data?.weather?.[0]?.description}</p>
                    <p className="text-slate-500 text-sm">High {data?.main?.temp_max} · Low {data?.main?.temp_min}</p>
                </div>


                <div className="relative flex flex-col items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-amber-300/30 to-yellow-400/10 border border-amber-300/20 flex items-center justify-center shadow-lg shadow-amber-400/10 backdrop-blur">
                        <svg width="52" height="52" viewBox="0 0 24 24" fill="none">
                            <circle cx="12" cy="12" r="5" fill="#FCD34D" opacity="0.9" />
                            <g stroke="#FCD34D" strokeWidth="2" strokeLinecap="round" opacity="0.7">
                                <line x1="12" y1="2" x2="12" y2="4" />
                                <line x1="12" y1="20" x2="12" y2="22" />
                                <line x1="2" y1="12" x2="4" y2="12" />
                                <line x1="20" y1="12" x2="22" y2="12" />
                                <line x1="4.93" y1="4.93" x2="6.34" y2="6.34" />
                                <line x1="17.66" y1="17.66" x2="19.07" y2="19.07" />
                                <line x1="4.93" y1="19.07" x2="6.34" y2="17.66" />
                                <line x1="17.66" y1="6.34" x2="19.07" y2="4.93" />
                            </g>
                        </svg>
                    </div>
                    {/* Cloud overlay */}
                    <div className="absolute bottom-1 right-0 w-10 h-7 rounded-full bg-gradient-to-br from-slate-300/50 to-slate-400/30 border border-white/20 backdrop-blur-sm shadow" />
                </div>
            </div>

            <div className="mx-6 border-t border-white/8" />

            <div className="px-6 py-5 grid grid-cols-3 gap-3">

                <div className="flex flex-col items-center justify-center bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-4 transition-all duration-200 group cursor-default">
                    <Droplets className="text-blue-400 mb-2 group-hover:scale-110 transition-transform duration-200" size={22} />
                    <span className="text-white font-bold text-lg leading-none">{data?.main?.humidity}<span className="text-sm font-normal text-slate-400">%</span></span>
                    <span className="text-slate-500 text-xs mt-1 font-medium">Humidity</span>
                </div>

                <div className="flex flex-col items-center justify-center bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-4 transition-all duration-200 group cursor-default">
                    <Wind className="text-teal-400 mb-2 group-hover:scale-110 transition-transform duration-200" size={22} />
                    <span className="text-white font-bold text-lg leading-none">{data?.wind?.speed}<span className="text-sm font-normal text-slate-400">kmph</span></span>
                    <span className="text-slate-500 text-xs mt-1 font-medium">Wind</span>
                </div>

                <div className="flex flex-col items-center justify-center bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-4 transition-all duration-200 group cursor-default">
                    <Thermometer className="text-orange-400 mb-2 group-hover:scale-110 transition-transform duration-200" size={22} />
                    <span className="text-white font-bold text-lg leading-none">{data?.main?.feels_like}<span className="text-sm font-normal text-slate-400">°C</span></span>
                    <span className="text-slate-500 text-xs mt-1 font-medium">Feels Like</span>
                </div>

            </div>

            <div className="mx-6 mb-6 grid grid-cols-2 gap-3">

                <div className="flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl px-4 py-3 transition-all duration-200 group cursor-default">
                    <div className="p-2 rounded-xl bg-violet-400/15">
                        <Eye className="text-violet-400 group-hover:scale-110 transition-transform duration-200" size={16} />
                    </div>
                    <div>
                        <p className="text-white font-semibold text-sm">{data?.visibility ? `${(data.visibility / 1000).toFixed(1)} km` : '--'}</p>
                        <p className="text-slate-500 text-xs">Visibility</p>
                    </div>
                </div>

                <div className="flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl px-4 py-3 transition-all duration-200 group cursor-default">
                    <div className="p-2 rounded-xl bg-rose-400/15">
                        <Gauge className="text-rose-400 group-hover:scale-110 transition-transform duration-200" size={16} />
                    </div>
                    <div>
                        <p className="text-white font-semibold text-sm">{data?.main?.pressure ?? '--'} hPa</p>
                        <p className="text-slate-500 text-xs">Pressure</p>
                    </div>
                </div>

            </div>

            {/* 5-Day Forecast Strip */}
            <div className="bg-black/20 border-t border-white/8 px-6 py-5">
                <p className="text-slate-400 text-xs uppercase tracking-widest font-semibold mb-4">5-Day Forecast</p>
                <div className="flex justify-between gap-1">
                    {[

                    ].map((item, i) => (
                        <div
                            key={i}
                            className={`flex-1 flex flex-col items-center gap-1.5 rounded-xl py-3 px-1 cursor-default transition-all duration-200
                    ${i === 0 ? "bg-cyan-500/15 border border-cyan-400/25" : "hover:bg-white/5 border border-transparent"}`}
                        >
                            <span className="text-slate-400 text-xs font-medium">{item.day}</span>
                            <span className="text-lg">{item.icon}</span>
                            <span className="text-white text-xs font-bold">{item.hi}°</span>
                            <span className="text-slate-600 text-xs">{item.lo}°</span>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )

}