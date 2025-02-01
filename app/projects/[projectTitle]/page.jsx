'use client'

import { projectsData } from "@/components/data";
import UpScroll from "@/components/scrollToTop";
import { usePathname } from "next/navigation";

export default function Page() {
    const path = usePathname().split('/')[2]
    const data = projectsData().filter(item => item.id == path)[0]
    return (
        <div className="lg:w-3/4 md:flex md:flex-col md:justify-center md:items-start lg:translate-x-40 w-full h-fit p-10 mb-6 "  >
            <h1 className="mb-7 scroll-m-20 text-4xl font-bold tracking-tight border-b lg:text-5xl">{data.title}</h1>

            <nav className="flex justify-evenly items-center w-full p-3 mb-4 bg-zinc-100 rounded-lg">
                <a href="#overview" className="p-2 bg-white rounded-lg">Overview</a>
                <a href="#features" className="p-2 bg-white rounded-lg">Features</a>
                <a href="#demo" className="p-2 bg-white rounded-lg">Demo</a>
            </nav>

            <section id="overview">
                <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                    Overview
                </h2>
                <blockquote className="mt-6 border-l-2 pl-6 italic">
                    {data.description}
                </blockquote>
            </section>
            <section id="features"></section>
            <section id="demo" className="mt-7">
                <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                    Demo
                </h2>
                
            </section>
            <UpScroll />
        </div>
    );
}