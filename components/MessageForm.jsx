'use client'

import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { useState } from "react"
import { useToast } from "./ui/use-toast"
import { Toaster } from "./ui/toaster"

export default function MessageForm() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const { toast } = useToast()
    function sendMessage() {
        toast({
            title: 'message sent !',
            description: "message : " + message
        })
    }
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            sendMessage()
            setEmail('');
            setName('');
            setMessage('')
        }}>
            <div className="flex flex-row gap-1 w-full mb-2">
                <Input type='text' placeholder='Name' className='w-2/4' value={name} onChange={(e) => setName(e.target.value)} />
                <Input type='email' placeholder='Email' className='w-2/4' value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="grid w-full gap-2">
                <Textarea placeholder="Type your message here." value={message} onChange={(e) => setMessage(e.target.value)} />
                <Button type='submit'>Send message</Button>
            </div>
            <Toaster />
        </form>
    )
}