'use client'
import { ArrowUp } from 'lucide-react';

export default function UpScroll() {
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }
    return (
        <ArrowUp className="fixed bottom-0 right-0 m-4 max-sm:block md:hidden text-zinc-500 bg-zinc-200 dark:bg-zinc-800 p-1 rounded-lg" size={35} onClick={() => scrollToTop()} />
    )
}