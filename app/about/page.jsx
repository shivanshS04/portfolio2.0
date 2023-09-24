'use client'
import AboutActions from '@/components/AboutActions'
import UpScroll from '@/components/scrollToTop'
import { motion } from 'framer-motion'
export default function page() {

    return (
        <motion.div
            initial={{
                x: -75,
                opacity: 0
            }}
            animate={{
                opacity: 1,
                x: 0
            }}
            transition={{
                type: 'just'
            }}
            className="lg:w-3/4 md:flex md:flex-col md:justify-center md:items-start lg:translate-x-40 w-full h-full p-10 mb-6 ">

            <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl">About Me</h1>

            <h4 className="leading-7 [&:not(:first-child)]:mt-6">Self taught Frontend Developer who loves minimal design and a large cup of coffee ☕</h4>

            <AboutActions />

            <p className="leading-7 [&:not(:first-child)]:mt-6 text-zinc-500 md:w-2/4 lg:w-full">
                I have an unwavering passion for technology and coding that fuels my journey in the dynamic field of software development. Every day is an opportunity for me to delve deeper into the ever-evolving world of tech, learning and adapting to new concepts, languages, and frameworks. This drive for continuous growth is not just a career choice; it's a way of life. I find immense satisfaction in tackling complex problems and turning them into efficient solutions through the power of code.💪🧠
                <br />
                <br />
                Collaboration is at the core of my approach to software development. I firmly believe that the most innovative solutions are born when bright minds come together to brainstorm, design, and build. Whether it's working with a small, agile team or collaborating on large-scale projects, I value the power of collective creativity. My goal is not just to write code but to create meaningful and innovative solutions that have a positive impact on the world. Together with fellow tech enthusiasts, I'm committed to shaping the future through technology, one line of code at a time. 🕸️🧑‍💻
            </p>
            <UpScroll />
        </motion.div>
    )
}