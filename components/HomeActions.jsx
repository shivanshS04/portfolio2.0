'use client'
import { Copy } from "lucide-react";
import { Button } from "./ui/button";
import { useToast } from "./ui/use-toast";
import { Toaster } from "./ui/toaster";

export default function HomeActions() {
    const { toast } = useToast();
    function copyEmail() {
        navigator.clipboard.writeText('shivanshsri.04@gmail.com');

        toast({
            title: "Copied To Clipboard !",
        })
    }
    return (
        <div className="flex flex-row justify-start items-center gap-3 mt-4 lg:w-2/4">
            <Button asChild variant='secondary'>
                <a href="/Shivansh_Resume.pdf" download>Resume</a>
            </Button>
            <Button variant='outline' onClick={() => copyEmail()}><Copy size={16} className="mr-2" /> E-mail</Button>
            <Toaster />
        </div>
    )
}