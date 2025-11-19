import { motion } from 'framer-motion';

const Marquee = ({ children, baseVelocity = 100, className = "" }) => {
    return (
        <div className={`overflow-hidden flex whitespace-nowrap ${className}`}>
            <motion.div
                className="flex gap-8"
                animate={{
                    x: [0, -1000],
                }}
                transition={{
                    x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 20,
                        ease: "linear",
                    },
                }}
            >
                {children}
                {children}
                {children}
                {children}
            </motion.div>
        </div>
    );
};

export default Marquee;
