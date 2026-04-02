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
            className="md:mt-32 lg:mt-0 lg:w-3/4 md:flex md:flex-col md:justify-center md:items-start lg:translate-x-40 w-full h-full p-10 mb-6 ">

            <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl">About Me</h1>

            <AboutActions />

            <p className="leading-7 [&:not(:first-child)]:mt-6 text-zinc-500 md:w-3/4 lg:w-full pb-10">
                Hi, I'm Shivansh Srivastava , a passionate Full-Stack Developer and AI enthusiast currently pursuing my B.Tech in Computer Science at Manipal University Jaipur. I love building practical, scalable solutions that solve real-world problems—whether that's architecting a microservices backend to improve scalability or creating a university carpooling platform. My technical sweet spot lies in the MERN stack, building mobile apps with Kotlin or React Native, and weaving Generative AI tools like LangChain into functional applications. When I finally step away from VS Code, you'll probably find me exploring the city through the lens of my Canon DSLR or Sony digicam trying to capture the perfect vintage shot, or just kicking back and listening to some AP Dhillon or Eminem.
            </p>
            <UpScroll />
        </motion.div>
    )
}