import { CalendarIcon, BriefcaseIcon } from "lucide-react"

export function TimelineItem({ position, company, type, company_logo, from, to, duration, isLeft }) {
    return (
        <div
            className={`mb-12 flex justify-between items-center w-full
                    ${isLeft ? "md:flex-row-reverse" : "md:flex-row"}
                    flex-row`}
        >
            <div className="order-1 md:w-5/12 hidden md:block"></div>
            <div
                className="z-20 flex items-center justify-center order-1 bg-zinc-900 dark:bg-zinc-100 shadow-md ring-4 ring-white dark:ring-zinc-950 w-8 h-8 rounded-full
                      absolute left-1 md:static transition-transform duration-300 hover:scale-110"
            >
                <div className="text-xs font-bold text-white dark:text-zinc-900">{from.slice(-4)}</div>
            </div>
            <div
                className="order-1 bg-white dark:bg-zinc-900/60 rounded-2xl shadow-md border border-zinc-200 dark:border-zinc-800/80 backdrop-blur-sm
                      w-full sm:w-[85%] md:w-5/12 p-6 ml-8 md:ml-0 
                      transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-zinc-300 dark:hover:border-zinc-600 group relative overflow-hidden"
            >
                {/* Subtle gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-100/50 to-transparent dark:from-zinc-800/50 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div className="relative z-10">
                    <div className="flex items-center mb-5">
                        <div className="relative p-1 rounded-full bg-zinc-100 dark:bg-zinc-800 shadow-inner mr-4 group-hover:scale-105 transition-transform duration-300">
                            <img src={company_logo || "/placeholder.svg"} alt={company} className="w-12 h-12 rounded-full object-cover" />
                        </div>
                        <div>
                            <h3 className="font-bold text-xl text-zinc-900 dark:text-zinc-100 tracking-tight leading-tight">{position}</h3>
                            <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400 mt-1">{company}</p>
                        </div>
                    </div>
                    
                    <div className="flex flex-col gap-3">
                        <div className="flex items-center space-x-3 text-sm text-zinc-600 dark:text-zinc-400 bg-zinc-50 dark:bg-zinc-800/50 w-fit px-3 py-1.5 rounded-lg border border-zinc-100 dark:border-zinc-700/50 group-hover:bg-zinc-100 dark:group-hover:bg-zinc-800 transition-colors">
                            <CalendarIcon className="w-4 h-4 text-blue-500 dark:text-blue-400" />
                            <span className="font-medium">
                                {from} - {to} <span className="text-zinc-400 dark:text-zinc-500 mx-1">•</span> {duration}
                            </span>
                        </div>
                        <div className="flex items-center space-x-3 text-sm text-zinc-600 dark:text-zinc-400 bg-zinc-50 dark:bg-zinc-800/50 w-fit px-3 py-1.5 rounded-lg border border-zinc-100 dark:border-zinc-700/50 group-hover:bg-zinc-100 dark:group-hover:bg-zinc-800 transition-colors">
                            <BriefcaseIcon className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
                            <span className="font-medium capitalize">{type}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

