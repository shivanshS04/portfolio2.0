'use client'
import { projectsData } from './data'
import Link from 'next/link'
import { ExternalLink } from 'lucide-react'
import { useRouter } from 'next/navigation'
export default function ProjectsDiv() {
    const data = projectsData()
    const router = useRouter()
    function handleProjectClick(id) {
        router.push(`/projects/${id}`)
    }

    return (
        <div className='w-full overflow-y-scroll h-5/6 mt-5 flex flex-col gap-3'>
            {
                data.map((item, index) => (
                    <div className='cursor-pointer w-full bg-zinc-100 dark:bg-zinc-800 p-4 rounded-lg ' key={index} onClick={() => handleProjectClick(item.id)}>
                        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                            {item.title}
                        </h2>
                        <div className=' flex flex-row gap-1 mt-3'>
                            <Link href={item.url} target='_blank' className="relative flex flex-row gap-4 justify-center items-center rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold bg-zinc-200 dark:bg-zinc-700">
                                Project <ExternalLink size={20} />
                            </Link>
                            <Link href={item.github} target='_blank' className="relative flex flex-row gap-4 rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold bg-zinc-200 dark:bg-zinc-700">
                                Github <ExternalLink size={20} />
                            </Link>
                        </div>

                        <div className='flex flex-row gap-3 m-2 ml-0 mr-0 max-sm:overflow-x-scroll'>
                            {
                                item.techStack.map((d, i) => (
                                    <div className='bg-zinc-400 text-white/80  font-semibold dark:bg-zinc-600 p-1 rounded-lg' key={i}>{d}</div>
                                ))
                            }
                        </div>

                        <p className='text-zinc-700 dark:text-zinc-300 font-medium whitespace-pre-line mb-3'>{item.description}</p>

                    </div>
                ))
            }
        </div>
    )
}