import { useRef } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  useAnimationFrame
} from 'framer-motion';
import { PERSONAL_INFO, SKILLS } from '../../data/portfolio';

const wrap = (min, max, v) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

const Marquee = ({ children, baseVelocity = 100 }) => {
  const baseX = useMotionValue(0);
  const directionFactor = useRef(1);

  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    // Constant movement, no scroll velocity factor
    if (baseVelocity > 0) {
      directionFactor.current = 1;
    } else {
      directionFactor.current = 1;
    }

    baseX.set(baseX.get() + moveBy);
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  return (
    <div className="overflow-hidden whitespace-nowrap flex">
      <motion.div className="flex gap-8" style={{ x }}>
        {children}
        {children}
        {children}
        {children}
      </motion.div>
    </div>
  );
};

const About = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section id="about" ref={containerRef} className="py-32 relative overflow-hidden">
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Column */}
          <motion.div
            style={{ y, opacity }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto aspect-square rounded-2xl overflow-hidden border border-white/10 bg-white/5">
              <img
                src={PERSONAL_INFO.image}
                alt={`Profile photo of ${PERSONAL_INFO.name}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-main/80 via-transparent to-transparent" />
            </div>

            {/* Decorative Elements */}
            <div className="absolute -z-10 top-10 -right-10 w-full h-full border border-primary-main/20 rounded-2xl" />
            <div className="absolute -z-10 -bottom-10 -left-10 w-full h-full border border-white/5 rounded-2xl" />
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-mono text-primary-main mb-4 tracking-widest uppercase">
              About Me
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold font-display mb-8 leading-tight">
              Crafting Digital <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">
                Masterpieces
              </span>
            </h3>

            <div className="space-y-6 text-text-secondary text-lg font-light leading-relaxed">
              <p>
                I'm a passionate Full Stack Developer based in {PERSONAL_INFO.location}, dedicated to building
                exceptional digital experiences that merge technical precision with artistic vision.
              </p>
              <p>
                With a deep understanding of modern web technologies, I specialize in creating
                scalable, high-performance applications that solve real-world problems while
                delighting users with intuitive interfaces.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-8 mt-12 border-t border-white/10 pt-8">
              <div>
                <div className="text-3xl font-bold text-white font-display mb-1">
                  {PERSONAL_INFO.experience}
                </div>
                <div className="text-xs text-text-muted font-mono uppercase tracking-wider">
                  Years Exp.
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white font-display mb-1">
                  {PERSONAL_INFO.projects}
                </div>
                <div className="text-xs text-text-muted font-mono uppercase tracking-wider">
                  Projects
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white font-display mb-1">
                  {PERSONAL_INFO.clients}
                </div>
                <div className="text-xs text-text-muted font-mono uppercase tracking-wider">
                  Clients
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Skills Marquee */}
      <div className="mt-32 border-y border-white/5 bg-white/[0.02] py-8">
        <Marquee baseVelocity={-5}>
          {SKILLS.map((skill) => (
            <span key={skill.name} className="mx-8 text-4xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-transparent">
              {skill.name}
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default About;