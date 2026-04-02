'use client'

import { projectsData } from "@/components/data";
import UpScroll from "@/components/scrollToTop";
import { usePathname } from "next/navigation";
import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Page() {
    const path = usePathname().split('/')[2]
    const data = projectsData().filter(item => item.id === path)[0]
    const router = useRouter()

    if (!data) return <div className="p-10">Project not found.</div>

    return (
        <div className="lg:w-3/4 md:flex md:flex-col md:justify-start md:items-start lg:translate-x-40 w-full h-full overflow-y-auto hidescrollbars p-10 pb-32">
            <button
                onClick={() => router.back()}
                className="mb-8 flex flex-row items-center gap-2 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                aria-label="Go back"
            >
                <ArrowLeft size={20} /> Back to Projects
            </button>

            {(!data.screenshots || data.screenshots.length === 0) && (
                <div className="w-full h-64 md:h-96 bg-zinc-200 dark:bg-zinc-800 rounded-xl flex items-center justify-center border border-zinc-300 dark:border-zinc-700 mb-8 overflow-hidden shadow-sm">
                    {data.img ? (
                        <img src={data.img} alt={data.title} className="w-full h-full object-cover" />
                    ) : (
                        <span className="text-zinc-400 dark:text-zinc-500 font-mono text-sm md:text-base">
                            [Insert High-Res Project Screenshot Here]
                        </span>
                    )}
                </div>
            )}

            <div className="w-full flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-8 border-b border-zinc-200 dark:border-zinc-800 pb-6 mt-4">
                <div>
                    <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl mb-4">
                        {data.title}
                    </h1>

                    {/* Stylized Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                        {data.techStack.map((tech, index) => (
                            <span
                                key={index}
                                className="px-3 py-1.5 text-sm font-semibold bg-gray-100 text-gray-700 dark:bg-zinc-800 dark:text-gray-300 rounded-full border border-gray-200 dark:border-zinc-700/80"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Actionable Buttons */}
                <div className="flex flex-row gap-3">
                    <Link href={data.url} target="_blank" className="flex items-center gap-2 px-4 py-2 bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 rounded-lg font-medium hover:opacity-90 transition-opacity">
                        <ExternalLink size={18} /> Live Demo
                    </Link>
                    {data.github && (
                        <Link href={data.github} target="_blank" className="flex items-center gap-2 px-4 py-2 bg-zinc-100 border border-zinc-300 dark:bg-zinc-800 dark:border-zinc-700 rounded-lg font-medium hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors">
                            <Github size={18} /> Source Code
                        </Link>
                    )}
                </div>
            </div>

            {/* Clean Description Layout */}
            <div className="w-full mb-10">
                <h3 className="text-2xl font-semibold tracking-tight mb-4 text-zinc-800 dark:text-zinc-200">
                    About this project
                </h3>
                <p className="leading-relaxed text-lg text-zinc-600 dark:text-zinc-400 whitespace-pre-line">
                    {data.description}
                </p>
            </div>

            {/* Screenshots Gallery at the bottom */}
            {data.screenshots && data.screenshots.length > 0 && (
                <div className="w-full mt-4 mb-16">
                    <h3 className="text-2xl font-semibold tracking-tight mb-6 text-zinc-800 dark:text-zinc-200">
                        Gallery
                    </h3>
                    <div className={`grid gap-6 ${data.orientation === 'portrait' ? 'grid-cols-2 md:grid-cols-4' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-2'}`}>
                        {data.screenshots.map((src, index) => (
                            <div key={index} className="w-full overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm bg-zinc-100 dark:bg-zinc-800/50">
                                <img src={src} alt={`${data.title} screenshot ${index + 1}`} className="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-300" />
                            </div>
                        ))}
                    </div>
                </div>
            )}

            <UpScroll />
        </div>
    );
}