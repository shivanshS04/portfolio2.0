'use client'
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";
import MessageForm from "@/components/MessageForm";
import { motion } from 'framer-motion'

export default function page() {

    const { toast } = useToast()
    function copyEmail() {
        navigator.clipboard.writeText('shivanshsri.04@gmail.com');

        toast({
            title: "Copied To Clipboard !",
        })
    }
    return (
        <motion.div initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                type: "just",
            }} className="lg:w-2/4 md:flex md:flex-col md:justify-center md:items-start w-full h-full p-10" >
            <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl">Contact</h1>
            <p className="leading-7 mb-4 [&:not(:first-child)]:mt-6 text-zinc-500 md:w-2/4 lg:w-full">I’m always looking to collaborate on interesting projects with great people. Need a supportive hand? I have two! 📱</p>
            <div className="flex flex-row gap-3 justify-start mb-8">
                <Button asChild variant='secondary'>
                    <a href="/Shivansh_Resume.pdf" download>Resume</a>
                </Button>
                <Button variant='outline' onClick={() => copyEmail()}><Copy size={16} className="mr-2" /> E-mail</Button>
            </div>
            <div>
                <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mb-4">
                    Send a Message
                </h3>
                <MessageForm />
            </div>

            <Toaster />
        </motion.div>
    )
}