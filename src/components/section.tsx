'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useSection } from '@/lib/hooks';
import { ANIMATION_DURATION, SECTIONS } from '@/lib/constants';
import { Direction } from '@/lib/types';
import { useEffect, useRef } from 'react';

export default function Section() {
 const { sectionIndex, navigationDirection } = useSection();
 const videoRef = useRef<HTMLVideoElement>(null);
 const prevSectionIndex = useRef(sectionIndex);

 // Play video once on initial load and when section changes
 useEffect(() => {
  if (videoRef.current) {
   // Reset video to beginning
   videoRef.current.currentTime = 0;
   
   // Play video
   videoRef.current.play().catch(error => {
    console.error("Video playback failed:", error);
   });
  }
  
  // Update previous section index
  prevSectionIndex.current = sectionIndex;
 }, [sectionIndex]);

 return (
  <div className="h-full flex items-center justify-center relative">
   {/* Video Background */}
   <video
    ref={videoRef}
    className="absolute top-0 left-0 w-full h-full object-cover -z-30"
    muted
    playsInline
   >
    <source src="/videos/home.mp4" type="video/mp4" />
   </video>
   
   {/* Dark overlay for better text readability without the purple tint */}
   <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 -z-20"></div>
   <AnimatePresence mode="wait" custom={navigationDirection}>
    <motion.main
     key={sectionIndex}
     variants={variants}
     initial="enter"
     animate="center"
     exit="exit"
     custom={navigationDirection}
     transition={{
      duration: ANIMATION_DURATION.MEDIUM,
      damping: 10,
      stiffness: 100,
     }}
     className="flex items-center justify-center h-full"
    >
     {SECTIONS[sectionIndex].content}
    </motion.main>
   </AnimatePresence>
  </div>
 );
}

const variants = {
 enter: (direction: Direction) => ({
  opacity: 0,
  y: direction === 'down' ? 50 : -50,
 }),
 center: { opacity: 1, y: 0 },
 exit: (direction: 'up' | 'down') => ({
  opacity: 0,
  y: direction === 'down' ? -50 : 50,
 }),
};
