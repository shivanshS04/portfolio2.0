import { DarkModeToggle } from "./DarkModeToggle";
import NavLinks from "./NavLinks";
import ProfileHeader from "./Profile-header";

export default function SideBar() {
    return (
        <div className="hidden lg:block min-h-screen h-fit w-1/5 bg-zinc-200 dark:bg-zinc-900 flex-col p-3 " >
            <ProfileHeader />
            <NavLinks />
            <div className="flex flex-row justify-between items-center text-zinc-500 p-3 bg-zinc-100 rounded-xl mt-3 dark:bg-zinc-800"            >
                <p>Select Theme  </p>
                <DarkModeToggle />
            </div>
        </div>
    )
}