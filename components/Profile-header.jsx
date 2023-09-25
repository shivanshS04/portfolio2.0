'use client'
import { ProfileAvatar } from "@/components/profile-avatar";
import { useRouter } from "next/navigation";

export default function ProfileHeader({ setOpen }) {
    const router = useRouter();
    return (<div className="flex justify-start flex-row items-center gap-2 p-3 cursor-pointer" onClick={() => {
        if (setOpen) {
            setOpen(false)
        }
        router.push('/')
    }} >
        <ProfileAvatar />
        <div className="flex flex-col items-start">
            <h3 className="scroll-m-20 max-md:text-base lg:text-xl font-semibold tracking-tight max-sm:tracking-tighter " >Shivansh Srivastava</h3>
            <p className=" text-zinc-500 max-md:text-base tracking-tighter">Frontend Developer</p>
        </div>
    </div>)
}