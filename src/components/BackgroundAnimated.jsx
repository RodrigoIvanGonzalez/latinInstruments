
import { Stars } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { motion, useMotionTemplate, useMotionValue, animate } from 'framer-motion';
import { useEffect } from 'react';

const COLORS = ["#13ffaa", "#1e67c7", "#ce84cf", "#dd335c"];

const BackgroundAnimated = () => {
  const color = useMotionValue(COLORS[0]);
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;

  useEffect(() => {
    animate(color, COLORS, {
      ease: 'easeInOut',
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  return (
    <motion.section
      style={{
        backgroundImage,
      }}
      className="fixed inset-0 z-[-1] overflow-hidden bg-black">
      <Canvas>
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
      </Canvas>
    </motion.section>
  );
};

export default BackgroundAnimated;