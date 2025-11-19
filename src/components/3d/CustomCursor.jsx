import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
    const cursorRef = useRef(null);
    const cursorOuterRef = useRef(null);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 700 };
    const cursorX = useSpring(mouseX, springConfig);
    const cursorY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const moveCursor = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener('mousemove', moveCursor);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
        };
    }, [mouseX, mouseY]);

    return (
        <>
            {/* Main Dot */}
            <motion.div
                ref={cursorRef}
                className="fixed top-0 left-0 w-4 h-4 bg-accent-cyan rounded-full pointer-events-none z-[9999] mix-blend-screen shadow-[0_0_20px_rgba(0,240,255,0.8)]"
                style={{
                    translateX: cursorX,
                    translateY: cursorY,
                    x: -8,
                    y: -8,
                }}
            />
            {/* Trailing Ring */}
            <motion.div
                ref={cursorOuterRef}
                className="fixed top-0 left-0 w-12 h-12 border border-accent-purple rounded-full pointer-events-none z-[9998] opacity-50"
                style={{
                    translateX: cursorX,
                    translateY: cursorY,
                    x: -24,
                    y: -24,
                }}
                transition={{
                    type: "spring",
                    damping: 50,
                    stiffness: 400,
                    mass: 0.8
                }}
            />
        </>
    );
};

export default CustomCursor;
