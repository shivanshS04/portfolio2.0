import { TimelineItem } from "./TimelineItem"

export function Timeline({ items }) {
    return (
        <div className="container mx-auto w-full">
            <div className="relative wrap overflow-hidden p-4 lg:p-10">
                <div
                    className="border-2-2 absolute border-opacity-20 border-primary h-full border 
                        left-4 lg:left-1/2 hidden lg:block"
                ></div>
                <div
                    className="border-2-2 absolute border-opacity-20 border-primary h-full border 
                        left-4 lg:left-1/2 block lg:hidden"
                ></div>
                {items.map((item, index) => (
                    <TimelineItem key={index} {...item} isLeft={index % 2 === 0} />
                ))}
            </div>
        </div>
    )
}

