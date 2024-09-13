"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Rellax from "rellax";
import styles from "./ParallaxSection.module.css";
import parallaxImage from "../public/images/kubespaces.png";

const ParallaxSection = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    // Initialize Rellax on the image reference
    if (imageRef.current) {
      new Rellax(imageRef.current, {
        speed: -2, // Adjust the speed value to control the parallax effect
        center: false, // Adjust the centering of the image
        round: true, // Determines whether the animation rounds pixel values
        vertical: true, // Enable vertical parallax
        horizontal: false, // Disable horizontal parallax
      });
    }
  }, []);

  return (
    <div className={styles.parallaxContainer}>
      <Image
        src={parallaxImage}
        alt="Parallax Background"
        fill
        quality={100}
        ref={imageRef}
        className={`${styles.parallaxImage} rellax`} // Add the rellax class for initialization
      />
    </div>
  );
};

export default ParallaxSection;
