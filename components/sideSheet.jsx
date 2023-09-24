import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "./ui/sheet"
import ProfileHeader from "./Profile-header"
import NavLinks from "./NavLinks"
import { Menu } from "lucide-react"

export default function SideSheet() {

    return (
        <Sheet>
            <SheetTrigger>
                <Menu className="text-zinc-500 bg-zinc-800 p-1 rounded-sm" size={24} />
            </SheetTrigger>
            <SheetContent side='left' className='overflow-scroll h-full'>
                <SheetHeader>
                    <SheetTitle>
                        <ProfileHeader />
                    </SheetTitle>
                </SheetHeader>
                <NavLinks />
            </SheetContent>
        </Sheet>

    )
}