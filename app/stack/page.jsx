import StackDiv from "@/components/StackDiv";
import UpScroll from "@/components/scrollToTop";

export default function page() {
    return (
        <div className="lg:w-3/4 md:flex md:flex-col md:justify-center md:items-start lg:translate-x-40 w-full h-full p-10 mb-6 ">
            <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl">Stack</h1>
            <h4 className="leading-7 [&:not(:first-child)]:mt-6">Tools I use & love that you should definitely check out. 🪨⛏️</h4>
            <StackDiv />
            <UpScroll />
        </div>
    )
}