"use client"
import { Timeline } from "../../components/Timeline"
import { experienceData } from "@/components/data"

export default function ExperiencePage() {
    return (
        <div className="bg-background w-screen lg:w-full  max-h-screen overflow-y-scroll overflow-x-hidden ">
            <div className="max-w-7xl mx-auto py-8 px-4 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
                <div className="text-start">
                    <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl">Experience</h1>
                    <h4 className="leading-7 [&:not(:first-child)]:mt-6">Real-world Applications Demonstrating My Expertise and Professional Growth 🌟💼🚀</h4>

                </div>
                <div className="mt-12">
                    <Timeline items={experienceData()} />
                </div>
            </div>
        </div>
    )
}

