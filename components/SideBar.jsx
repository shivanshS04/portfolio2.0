import NavLinks from "./NavLinks";
import ProfileHeader from "./Profile-header";

export default function SideBar() {
    return (
        <div className="hidden lg:block w-1/5 bg-zinc-900 flex-col p-3  " >
            <ProfileHeader />
            <NavLinks />
        </div>
    )
}