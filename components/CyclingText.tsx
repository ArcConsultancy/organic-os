"use client";

import { useState, useEffect } from "react";
import { TextAnimate } from "@/components/ui/text-animate";

export default function CyclingText() {
  const phrases = [
    "No more guessing.",
    "No more 'I'll post tomorrow.'",
    "No more disappearing for 3 weeks and blaming the algorithm.",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [key, setKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setKey((prev) => prev + 1);
      setCurrentIndex((prev) => (prev + 1) % phrases.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [phrases.length]);

  return (
    <div className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed h-16 text-center">
      <TextAnimate
        key={key}
        animation="blurIn"
        by="character"
        delay={0}
        duration={0.3}
        className="block text-center"
        startOnView={false}
      >
        {phrases[currentIndex]}
      </TextAnimate>
    </div>
  );
}
