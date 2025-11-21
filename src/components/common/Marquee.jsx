import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const Marquee = ({ children, baseVelocity = 100, className = "" }) => {
    // Calculate duration based on velocity (higher velocity = lower duration)
    // Base duration for 1000px width at velocity 100 is 10s
    const duration = 1000 / baseVelocity;

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
                        duration: duration,
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

Marquee.propTypes = {
    children: PropTypes.node.isRequired,
    baseVelocity: PropTypes.number,
    className: PropTypes.string,
};

export default Marquee;
