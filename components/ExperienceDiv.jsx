'use client'
import experienceData from './data'
import Link from 'next/link'
import { ExternalLink } from 'lucide-react'
import { useRouter } from 'next/navigation'
export default function ProjectsDiv() {
    const data = experienceData()
    const router = useRouter()
    function handleProjectClick(id) {
        router.push(`/projects/${id}`)
    }

    return (
        <div className='w-full overflow-y-scroll h-5/6 mt-5 flex flex-wrap gap-3'>
            {
                data.map((item, index) => (
                    <div className='w-28 flex flex-col' key={index} >
                        <img src={item.company_logo} alt="company logo" />
                        <div>
                            <h2 className='text-2xl'>{item.company}</h2>
                            <p className='text-lg'>{item.position}</p>
                            <p className='text-lg'>{item.duration}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}