import { CalendarIcon, BriefcaseIcon } from "lucide-react"

export function TimelineItem({ position, company, type, company_logo, from, to, duration, isLeft }) {
    return (
        <div
            className={`mb-8 flex justify-between items-center w-full
                    ${isLeft ? "md:flex-row-reverse" : "md:flex-row"}
                    flex-row`}
        >
            <div className="order-1 md:w-5/12 hidden md:block"></div>
            <div
                className="z-20 flex items-center justify-center order-1 bg-primary shadow-xl w-8 h-8 rounded-full
                      absolute left-1 md:static"
            >
                <div className="text-xs font-bold text-primary-foreground ">{from.slice(-4)}</div>
            </div>
            <div
                className="order-1 bg-background rounded-lg shadow-xl border
                      w-full sm:w-[85%] md:w-5/12 px-6 py-4 ml-8 md:ml-0"
            >
                <div className="flex items-center mb-4">
                    <img src={company_logo || "/placeholder.svg"} alt={company} className="w-12 h-12 rounded-full mr-4" />
                    <div>
                        <h3 className="font-bold text-lg text-foreground">{position}</h3>
                        <p className="text-sm text-muted-foreground">{company}</p>
                    </div>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2">
                    <CalendarIcon className="w-4 h-4" />
                    <span>
                        {from} - {to}
                    </span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2">
                    <BriefcaseIcon className="w-4 h-4" />
                    <span>{type}</span>
                </div>
                <p className="text-sm text-muted-foreground">{duration}</p>
            </div>
        </div>
    )
}

