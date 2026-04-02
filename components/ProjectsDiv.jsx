'use client'
import { projectsData } from './data'
import Link from 'next/link'
import { ExternalLink } from 'lucide-react'
import { useRouter } from 'next/navigation'
export default function ProjectsDiv() {
    const data = projectsData()
    const router = useRouter()

    return (
        <div className='w-full mt-5 grid grid-cols-1 md:grid-cols-2 gap-6'>
            {
                data.map((item, index) => (
                    <div
                        className='w-full bg-zinc-100 dark:bg-zinc-800/80 p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col justify-between border border-zinc-200 dark:border-zinc-700/50'
                        key={index}
                        onClick={() => router.push(`/projects/${item.id}`)}
                    >
                        <div>
                            <h2 className="text-2xl font-bold tracking-tight mb-3">
                                {item.title}
                            </h2>
                            <p className='text-zinc-600 dark:text-zinc-400 text-sm line-clamp-3 mb-4'>
                                {item.description}
                            </p>
                            <div className='flex flex-wrap gap-2 mb-4'>
                                {
                                    item.techStack.slice(0, 3).map((d, i) => (
                                        <span className='px-2 py-1 text-xs font-semibold bg-zinc-200 dark:bg-zinc-700/50 text-zinc-700 dark:text-zinc-300 rounded-md' key={i}>{d}</span>
                                    ))
                                }
                                {item.techStack.length > 3 && (
                                    <span className='px-2 py-1 text-xs font-semibold bg-zinc-200 dark:bg-zinc-700/50 text-zinc-700 dark:text-zinc-300 rounded-md'>+{item.techStack.length - 3}</span>
                                )}
                            </div>
                        </div>

                        <div className="flex items-center text-sm font-medium text-gray-600 dark:text-gray-400 group underline underline-offset-2 ">
                            View Details
                            <ExternalLink size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
                        </div>
                    </div>
                ))
            }
        </div>
    )
}