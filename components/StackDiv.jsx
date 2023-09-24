'use client'
import { motion } from 'framer-motion'
export default function StackDiv() {
    const techStackData = [
        {
            name: 'React js',
            description: 'JS Library',
            img: 'https://www.doubleklickdesigns.com/wp-content/uploads/2020/07/reactjs-300x267.png'
        },
        {
            name: 'Next js',
            description: 'Web Dev Framework',
            img: 'https://seeklogo.com/images/N/next-js-icon-logo-EE302D5DBD-seeklogo.com.png'
        },
        {
            name: 'Appwrite',
            description: 'Backend Server',
            img: 'https://cdn.icon-icons.com/icons2/2699/PNG/512/appwriteio_logo_icon_167836.png',
        },

        {
            name: 'Flutter',
            description: 'Cross Platform Development Kit',
            img: 'https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_1080,q_100,w_1080/v1/gcs/platform-data-dsc/events/flutter-logo-5086DD11C5-seeklogo.com.png'
        },
        {
            name: 'Python',
            description: 'Programming Language',
            img: 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/267_Python_logo-512.png'
        },
        {
            name: 'C++',
            description: 'Programming Language',
            img: 'https://www.freeiconspng.com/uploads/c--logo-icon-0.png'
        },
        {
            name: 'Firebase',
            description: 'Backend Service',
            img: 'https://s.gravatar.com/avatar/48965da2c75390e8c486058c282b35cd?size=496&default=retro'
        },
        {
            name: 'MySQL',
            description: 'Database',
            img: 'https://pngimg.com/uploads/mysql/mysql_PNG19.png'
        },
        {
            name: 'Figma',
            description: 'Design Tool',
            img: 'https://brandlogos.net/wp-content/uploads/2022/05/figma-logo_brandlogos.net_6n1pb.png'
        }
    ]
    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-3 mt-5">
            {
                techStackData.map((item, key) => {
                    return (
                        <motion.div
                            initial={{
                                y: 50,
                                opacity: 0
                            }}
                            animate={{
                                y: 0,
                                opacity: 1
                            }}
                            transition={{
                                delay: 0.1,
                                type: 'tween'
                            }}
                            key={key}
                            className="overflow-hidden flex flex-row items-center gap-3 m-3 md:hover:bg-zinc-800 p-3 rounded-md hover:transition-all hover:duration-500 ">
                            <div className="w-12 bg-transparent">
                                <img src={item.img} />
                            </div>
                            <div className="flex flex-col justify-center items-start" >
                                <h3 className="scroll-m-20 text-xl font-semibold tracking-tight" key={key} > {item.name}</h3>
                                <p className="leading-7 text-zinc-500 " >{item.description} </p>
                            </div>
                        </motion.div>
                    )
                })
            }
        </div>
    )
}