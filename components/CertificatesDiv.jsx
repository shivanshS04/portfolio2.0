'use client'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
export default function CertificatesDiv() {
    const techStackData = [
        {
            name: 'Introduction to Augmented Reality and ARCore',
            company: 'Google , Coursera',
            credentials: 'https://www.coursera.org/account/accomplishments/certificate/5R3HCA4GMSDM',
            img: 'https://cdn.iconscout.com/icon/free/png-512/coursera-3521364-2944808.png'
        },
        {
            name: "Responsive Web Design",
            company: 'FreeCodeCamp',
            credentials: 'https://freecodecamp.org/certification/fccecfaced6-a143-486c-8399-e851cbd68f67/responsive-web-design',
            img: 'https://freecodecamp.github.io/design-style-guide/downloads/fcc_primary_small.png'
        },
        {
            name: 'React (Basics)',
            company: 'HackerRank',
            credentials: 'https://cdn-1.webcatalog.io/catalog/hackerrank/hackerrank-icon.png',
            img: 'https://cdn-1.webcatalog.io/catalog/hackerrank/hackerrank-icon.png'
        },
        {
            name: 'SQL (Basics)',
            company: 'HackerRank',
            credentials: 'https://cdn-1.webcatalog.io/catalog/hackerrank/hackerrank-icon.png',
            img: 'https://cdn-1.webcatalog.io/catalog/hackerrank/hackerrank-icon.png'
        },
        {
            name: 'Getting Started with Cloud Computing',
            company: 'Infosys Springboard',
            img: 'https://www.infosys.com/content/dam/infosys-web/en/about/springboard/images/infosys-springboard.png'
        },
        {
            name: 'Progressive Web Applications',
            company: 'Infosys Springboard',
            img: 'https://www.infosys.com/content/dam/infosys-web/en/about/springboard/images/infosys-springboard.png'
        },
        {
            name: 'React Js Tutorial',
            company: 'Great Learning',
            credentials: 'https://verify.mygreatlearning.com/RTVZUTBD',
            img: 'https://s3-eu-west-1.amazonaws.com/tpd/logos/59c9e64b0000ff0005ac0dcd/0x0.png'
        },
        {
            name: 'UI/UX for beginners',
            company: 'Great Learning',
            credentials: 'https://verify.mygreatlearning.com/KRDATDJD',
            img: 'https://s3-eu-west-1.amazonaws.com/tpd/logos/59c9e64b0000ff0005ac0dcd/0x0.png'
        },
        {
            name: 'Javascript & JQuery',
            company: 'Udemy',
            credentials: 'https://www.udemy.com/certificate/UC-353d6192-612f-4909-887e-ea58e3335d03/',
            img: 'https://th.bing.com/th/id/OIP.RgZkr80Z5dXz39PrdpIJUgAAAA?pid=ImgDet&rs=1'
        },
        {
            name: 'Foundations of Git',
            company: 'GitKraken',
            credentials: 'https://learn.gitkraken.com/certificates/tbhlisldmn',
            img: 'https://media.licdn.com/dms/image/D560BAQH7kMFduqTX1Q/company-logo_200_200/0/1691785849994?e=1703721600&v=beta&t=94ORT05RfFYUwY5BGsO3jWquDczzOOHPtyUur7hpQYE'
        }

    ]

    const router = useRouter()
    function showCredentials(credentials) {
        router.push(credentials, 'push')
    }

    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-3 w-full overflow-y-scroll mt-10">
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