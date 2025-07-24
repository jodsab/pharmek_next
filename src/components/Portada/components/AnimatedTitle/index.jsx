"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function AnimatedTitle() {
  const titleRef = useRef(null);

  useEffect(() => {
    gsap.from(titleRef.current, {
      x: -100,
      opacity: 0,
      duration: 1,
      delay: 0.2,
      ease: "power2.out",
    });
  }, []);

  return (
    <h1 ref={titleRef} className="title">
      Cuidamos la salud de tus animales
    </h1>
  );
}
