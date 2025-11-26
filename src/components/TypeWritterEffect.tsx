"use client";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

export function TypewriterEffectDemo() {
  const words = [
    {
      text: "Think",
      className:"text-6xl md:text-7xl font-black text-gray-900 "
    },
    {
      text: "Fast.",
      className:"text-6xl md:text-7xl font-black text-gray-900 "
    },
    {
      text: "Play.",
      className:"text-6xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"
    },
    {
      text: "Smart",
className:"text-6xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"      
}
  ];
  return (
      <TypewriterEffect words={words} />
  );
}
