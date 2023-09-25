import { DarkModeToggle } from "./DarkModeToggle";
import NavLinks from "./NavLinks";
import ProfileHeader from "./Profile-header";
import { useRef } from "react";

export default function SideBar() {
    const toggleBtn = useRef()
    return (
        <div className="hidden lg:block w-1/5 bg-zinc-200 dark:bg-zinc-900 flex-col p-3  " >
            <ProfileHeader />
            <NavLinks />
            <div className="flex flex-row justify-between items-center text-zinc-500 p-3 bg-zinc-100 rounded-xl mt-5 dark:bg-zinc-800"            >
                <p>Select Theme  </p>
                <DarkModeToggle ref={toggleBtn} />
            </div>
        </div>
    )
}