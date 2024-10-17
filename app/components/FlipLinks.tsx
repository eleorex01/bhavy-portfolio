import { motion } from "framer-motion";
import Link from 'next/link';
const DURATION = 0.25;
const STAGGER = 0.025;

const FlipLink = ({ children, href }: { children: string, href: string }) => {
    return (
        <Link href={href}
            className="relative block overflow-hidden whitespace-nowrap text-lg font-extralight uppercase sm:text-xl md:text-2xl lg:text-3xl xl:4xl"
        >
            <motion.div
                initial="initial"
                whileHover="hovered"
            >
                <div>
                    {children.split("").map((l, i) => (
                        <motion.span
                            variants={{
                                initial: {
                                    y: 0,
                                },
                                hovered: {
                                    y: "-100%",
                                },
                            }}
                            transition={{
                                duration: DURATION,
                                ease: "easeInOut",
                                delay: STAGGER * i,
                            }}
                            className="inline-block"
                            key={i}
                        >
                            {l}
                        </motion.span>
                    ))}
                </div>
                <div className="absolute inset-0">
                    {children.split("").map((l, i) => (
                        <motion.span
                            variants={{
                                initial: {
                                    y: "100%",
                                },
                                hovered: {
                                    y: 0,
                                },
                            }}
                            transition={{
                                duration: DURATION,
                                ease: "easeInOut",
                                delay: STAGGER * i,
                            }}
                            className="inline-block"
                            key={i}
                        >
                            {l}
                        </motion.span>
                    ))}
                </div>
            </motion.div>
        </Link>
    )
}

export default FlipLink;