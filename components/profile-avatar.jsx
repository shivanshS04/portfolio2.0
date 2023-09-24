import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"

export function ProfileAvatar() {
    return (
        <Avatar>
            <AvatarImage src="" />
            <AvatarFallback>SS</AvatarFallback>
        </Avatar>
    )
}
