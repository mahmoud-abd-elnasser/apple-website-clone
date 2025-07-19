import { useGSAP } from "@gsap/react";
import { heroVideo, smallHeroVideo } from "../utils";
import { useEffect, useState } from "react";
import { animateWithGsap } from "../utils/animation";

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 760 ? smallHeroVideo : heroVideo
  );
  const handleVideoSet = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo);
    } else {
      setVideoSrc(heroVideo);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", handleVideoSet);
    return () => {
      window.removeEventListener("resize", handleVideoSet);
    };
  }, []);
  useGSAP(() => {
    animateWithGsap("#hero", {
      opacity: 1,
      delay: 1.5,
    });
    animateWithGsap("#cta", {
      opacity: 1,
      delay: 1.5,
      y: 50,
    });
  }, []);
  return (
    <section className="w-full nav-height bg-black relative">
      <div className="h-5/6 w-full flex-col flex justify-center items-center">
        <p id="hero" className="hero-title">
          Iphone 16 Pro
        </p>
        <div className="md:w-10/12 w-9/12">
          <video
            className="pointer-events-none"
            autoPlay
            muted
            playsInline={true}
            key={videoSrc}
          >
            <source src={videoSrc} />
          </video>
        </div>
        <div
          id="cta"
          className="flex flex-col items-center opacity-0 translate-y-20"
        >
          <a href="#highlight" className="btn transition-all bg-blue-500">
            Buy
          </a>
          <p>From $199/month or $999</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
