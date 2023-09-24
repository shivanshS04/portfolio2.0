'use client'
import { Typewriter } from "react-simple-typewriter";

export default function IntroSection() {
    return (
        <div className="lg:w-2/4" >
            <h1 className="scroll-m-20 text-4xl  tracking-tight lg:text-5xl">नमस्कार ! 🙏</h1>
            <h1 className="scroll-m-20 font-bold text-4xl  tracking-tight lg:text-5xl">I'm Shivansh. </h1>
            <h1 className="scroll-m-20  text-4xl  tracking-tight lg:text-5xl">I Build <span className="text-zinc-500 font-bold"><Typewriter
                words={['Websites.', 'Apps.', 'Softwares.']}
                loop={0}
                cursor
                cursorStyle='_'
                cursorColor="gray"
            /></span> </h1>
            <p className="leading-7 [&:not(:first-child)]:mt-6 text-zinc-500 md:w-2/4 lg:w-full">Passionate about tech, coding, and continuous growth in software development. Thrive on diverse projects, tech exploration, and innovative collaboration. 🚀👨‍💻</p>
        </div>
    )
}