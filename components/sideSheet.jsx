import {
    Sheet,
    SheetContent,
    SheetClose,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "./ui/sheet"
import ProfileHeader from "./Profile-header"
import NavLinks from "./NavLinks"
import { Menu } from "lucide-react"
import { useState } from "react"

export default function SideSheet() {
    const [open, setOpen] = useState(false)
    return (
        <Sheet open={open} onOpenChange={setOpen} >
            <SheetTrigger>
                <Menu className="text-zinc-500 bg-zinc-300 dark:bg-zinc-800 p-1 rounded-sm" size={24} />
            </SheetTrigger>
            <SheetContent side='left' className='overflow-scroll h-full '>
                <SheetHeader>
                    <SheetTitle>
                        <ProfileHeader setOpen={setOpen} />
                    </SheetTitle>
                </SheetHeader>
                <NavLinks setOpen={setOpen} />
            </SheetContent>
        </Sheet>

    )
}