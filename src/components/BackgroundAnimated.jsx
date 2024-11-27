
import { Stars } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { motion, useMotionTemplate, useMotionValue, animate } from 'framer-motion'
import { useEffect } from 'react';



const COLORS = ["#13ffaa", "#1e67c7", "#ce84cf", "#dd335c"];
const BackgroundAnimated = () => {

const color = useMotionValue(COLORS[0])
const backgroundImage = useMotionTemplate `radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;

useEffect(()=> {
  animate(color,COLORS ,{
    ease: 'easeInOut',
    duration: 10,
    repeat: Infinity,
    repeatType: "mirror"
  })
},)

return (
  <>
  <motion.body
  style={{
    backgroundImage,
  }}
  className="relative  inset-0 z-0 grid min-h-screen place-content-center overflow-hidden bg-black px-4 py-24 text-white-warm">

    <div className="absolute inset-0 z-0">
      <Canvas>
        <Stars  radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
      </Canvas>
    </div>


  </motion.body>
  
  
  </>
)
}

export default BackgroundAnimated