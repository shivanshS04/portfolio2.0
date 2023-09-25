'use client'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { certificatesData } from './data'
export default function CertificatesDiv() {
    const data = certificatesData()
    const router = useRouter()
    function showCredentials(credentials) {
        router.push(credentials, 'push')
    }

    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-3 w-full overflow-y-scroll mt-10">
            {
                data.map((item, key) => {
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
                            onClick={() => showCredentials(item.credentials)}
                            className="overflow-hidden flex flex-row items-center gap-3 m-3 md:hover:bg-zinc-800 p-4 h-28 cursor-pointer rounded-md hover:transition-all hover:duration-500 ">
                            <div className="w-12 bg-transparent">
                                <img src={item.img} />
                            </div>
                            <div className="flex flex-col justify-center items-start" >
                                <h3 className="scroll-m-20 text-xl font-semibold tracking-tight" key={key} > {item.name}</h3>
                                <p className="leading-7 text-zinc-500 " >{item.company} </p>
                            </div>
                        </motion.div>
                    )
                })
            }
        </div>
    )
}