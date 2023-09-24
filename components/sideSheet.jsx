import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "./ui/sheet"
import { Button } from "./ui/button"
import ProfileHeader from "./Profile-header"
import NavLinks from "./NavLinks"
import { FiMenu } from 'react-icons/fi'

export default function SideSheet() {

    return (
        <Sheet>
            <SheetTrigger>
                <Button variant="secondary" >
                    <FiMenu className="text-zinc-500" />
                </Button>
            </SheetTrigger>
            <SheetContent side='left'>
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