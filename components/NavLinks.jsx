'use client'

import { motion } from "framer-motion"
import { Briefcase, Compass, FolderKanban, Github, Instagram, Linkedin, Mail, ScrollText, UserCircle, Wrench } from "lucide-react"
import { usePathname, useRouter } from 'next/navigation'

export default function NavLinks({ setOpen }) {
    const pathname = usePathname();

    function handleClick() {
        if (setOpen) {
            setOpen(false)
        }
    }

    const routeList = [
        {
            name: 'Home',
            route: '/',
            icon: <Compass />
        },
        {
            name: "Experience",
            route: "/experience",
            icon: <Briefcase />,
        },
        {
            name: 'Projects',
            route: '/projects',
            icon: <FolderKanban />
        },
        {
            name: 'Certifications',
            route: '/certificates',
            icon: <ScrollText />
        },
        {
            name: "Stack",
            route: "/stack",
            icon: <Wrench />
        },
        {
            name: "About",
            route: "/about",
            icon: <UserCircle />
        },
        {
            name: "Contact",
            route: "/contact",
            icon: <Mail />
        }
    ]

    const socialsList = [
        {
            name: 'LinkedIn',
            icon: <Linkedin />,
            href: 'https://www.linkedin.com/in/shivanshs04/'
        },
        {
            name: 'Github',
            icon: <Github />,
            href: "https://www.github.com/shivanshS04/",
        },
        {
            name: 'Instagram',
            icon: <Instagram />,
            href: 'https://www.instagram.com/shivanshS04'
        }
    ]

    const listContainer = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.1,
                staggerChildren: 0.1
            }
        }
    };

    const listItem = {
        hidden: { x: -50, y: -20, opacity: 0 },
        visible: {
            x: 0,
            y: 0,
            opacity: 1
        }
    };

    return (
        <motion.ul
            variants={listContainer}
            initial="hidden"
            animate="visible" >

            {routeList.map((item, key) => {
                return (
                    <motion.a
                        key={key}
                        variants={listItem}
                        onClick={() => handleClick()}
                        href={item.route}
                        className={`flex flex-row justify-start items-center gap-2 p-3  ${item.route == pathname ? 'bg-zinc-100 dark:bg-zinc-800 text-black dark:text-white' : 'bg-zinc-300 dark:bg-zinc-900 text-zinc-500'} hover:text-black hover:dark:text-white rounded-md first:mt-10 mt-2 cursor-pointer `}
                    >
                        {item.icon} {item.name}
                    </motion.a>
                )
            })}

            <hr className="m-4 opacity-20" />

            <motion.span
                variants={listItem}
                className="text-lg text-zinc-500"
            >Follow</motion.span>

            {socialsList.map((item, key) => {
                return (
                    <motion.a
                        key={key}
                        variants={listItem}
                        href={item.href}
                        className={`flex flex-row justify-start items-center gap-2 p-3 text-zinc-500 hover:text-black hover:dark:text-white bg-zinc-300 dark:bg-zinc-950 rounded-md first:mt-10 mt-2 cursor-pointer `}
                    >
                        {item.icon} {item.name}
                    </motion.a>
                )
            })}

        </motion.ul>
    )
}
