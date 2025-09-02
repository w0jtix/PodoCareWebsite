import { AnimatePresence, motion, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

export interface GradualSpacingProps {
    text:string;
    onAnimationComplete?: () => void;
}

export function GradualSpacing({ text = 'Gradual Spacing', onAnimationComplete }: GradualSpacingProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

   const totalDuration = text.length * 0.03 + 0.2;
  
  useEffect(() => {
    if (isInView && onAnimationComplete) {
      const timer = setTimeout(() => {
        onAnimationComplete();
      }, totalDuration * 1000);
      
      return () => clearTimeout(timer);
    }
  }, [isInView, onAnimationComplete, totalDuration]);

  return (
    <div className="header-h1 flex">
      <AnimatePresence>
        {text.split('').map((char, i) => (
          <motion.p
            ref={ref}
            key={i}
            initial={{ opacity: 0, x: -18 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            exit="hidden"
            transition={{ duration: 0.2, delay: i * 0.03 }}
            className="header-h1-motion m-0"
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.p>
        ))}
      </AnimatePresence>
    </div>
  );
}