'use client'

import { projectsData } from "@/components/data";
import UpScroll from "@/components/scrollToTop";
import { usePathname } from "next/navigation";
import { ExternalLink, Github, ArrowLeft, ChevronLeft, ChevronRight, X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function Page() {
    const path = usePathname().split('/')[2]
    const allProjects = projectsData()
    const data = allProjects.find(item => item.id === path)
    const router = useRouter()

    const [selectedImageIndex, setSelectedImageIndex] = useState(null);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    // Find next project for "Other projects"
    const currentIndex = allProjects.findIndex(item => item.id === path);
    const nextProject = currentIndex !== -1 
        ? allProjects[(currentIndex + 1) % allProjects.length] 
        : allProjects[0];

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!isLightboxOpen) return;
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowRight') nextImage(e);
            if (e.key === 'ArrowLeft') prevImage(e);
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isLightboxOpen, data?.screenshots?.length]);

    if (!data) return <div className="p-10">Project not found.</div>

    const openLightbox = (index) => {
        setSelectedImageIndex(index);
        setIsLightboxOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setIsLightboxOpen(false);
        document.body.style.overflow = 'auto';
    };

    const nextImage = (e) => {
        if (e) e.stopPropagation();
        setSelectedImageIndex((prev) => (prev + 1) % data.screenshots.length);
    };

    const prevImage = (e) => {
        if (e) e.stopPropagation();
        setSelectedImageIndex((prev) => (prev - 1 + data.screenshots.length) % data.screenshots.length);
    };

    return (
        <>
        <div className="lg:w-3/4 md:flex md:flex-col md:justify-start md:items-start lg:translate-x-40 w-full h-full overflow-y-auto hidescrollbars p-10 pb-32">
            <button
                onClick={() => router.push('/projects')}
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
                    {data.url &&
                        <Link href={data.url} target="_blank" className="flex items-center gap-2 px-4 py-2 bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 rounded-lg font-medium hover:opacity-90 transition-opacity">
                            <ExternalLink size={18} /> Live Demo
                        </Link>
                    }
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
                <div className="w-full mt-4 mb-8">
                    <h3 className="text-2xl font-semibold tracking-tight mb-6 text-zinc-800 dark:text-zinc-200">
                        Gallery
                    </h3>
                    <div className={`grid gap-6 ${data.orientation === 'portrait' ? 'grid-cols-2 md:grid-cols-4' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-2'}`}>
                        {data.screenshots.map((src, index) => (
                            <div 
                                key={index} 
                                className="w-full overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm bg-zinc-100 dark:bg-zinc-800/50 cursor-pointer"
                                onClick={() => openLightbox(index)}
                            >
                                <img src={src} alt={`${data.title} screenshot ${index + 1}`} className="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-300" />
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Other Projects Button */}
            {nextProject && (
                <div className="w-full mt-6 mb-16 flex justify-center md:justify-end border-t border-zinc-200 dark:border-zinc-800 pt-8">
                    <button
                        onClick={() => router.push(`/projects/${nextProject.id}`)}
                        className="flex items-center gap-2 px-6 py-3 bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100 rounded-xl font-semibold hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-all border border-zinc-200 dark:border-zinc-700 hover:shadow-md group"
                    >
                        <span>View Next: {nextProject.title}</span>
                        <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            )}

            <UpScroll />
        </div>

        {/* Lightbox Modal */}
        {isLightboxOpen && data.screenshots && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm" onClick={closeLightbox}>
                <button 
                    className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors bg-black/50 p-2 rounded-full z-10"
                    onClick={closeLightbox}
                >
                    <X size={24} />
                </button>
                
                <button 
                    className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors bg-black/50 p-3 rounded-full hover:bg-black/80 z-10"
                    onClick={prevImage}
                >
                    <ChevronLeft size={32} />
                </button>
                
                <div className="w-full h-full p-4 md:p-12 flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
                    <img 
                        src={data.screenshots[selectedImageIndex]} 
                        alt={`Screenshot ${selectedImageIndex + 1}`} 
                        className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                    />
                </div>

                <button 
                    className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors bg-black/50 p-3 rounded-full hover:bg-black/80 z-10"
                    onClick={nextImage}
                >
                    <ChevronRight size={32} />
                </button>

                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 font-medium bg-black/50 px-4 py-1.5 rounded-full text-sm z-10">
                    {selectedImageIndex + 1} / {data.screenshots.length}
                </div>
            </div>
        )}
        </>
    );
}