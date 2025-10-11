"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

export default function AnimalImage() {
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.from(imageRef.current, {
      scale: 0.8,
      opacity: 0,
      duration: 1.2,
      delay: 0.5,
      ease: "power3.out",
    });
  }, []);

  return (
    <div ref={imageRef} style={{ overflow: "hidden" }}>
      <Image
        src="/portada.jpg"
        alt="Animales felices"
        width={500}
        height={400}
        priority
        className="animal-image"
      />
    </div>
  );
}
