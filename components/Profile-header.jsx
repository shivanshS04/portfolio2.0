import { ProfileAvatar } from "@/components/profile-avatar";

export default function ProfileHeader() {
    return (<div className="flex justify-start flex-row items-center h-full gap-2 p-3">
        <ProfileAvatar />
        <div className="flex flex-col items-start">
            <h3 className="scroll-m-20 text-xl tracking-tight " >Shivansh Srivastava</h3>
            <p className=" text-zinc-500 ">Frontend Developer</p>
        </div>
    </div>)
}