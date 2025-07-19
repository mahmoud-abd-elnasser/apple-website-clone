import React, { useRef } from "react";
import { chipImg, frameImg, frameVideo } from "../utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { animateWithGsap } from "../utils/animation";

import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


const HowitWorks = () => {
  const videoRef = useRef();

  useGSAP(() => {
    gsap.from(
      "#chip",
      {
        duration: 2,
        opacity: 0,
        scale: 2,
        ease: "power2.inOut",
      },
      {
        scrollTrigger: {
          trigger: "#chip",
          start: "bottom 20%",
        },
      }
    );
    animateWithGsap(".g_fadeIn", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.inOut",
    });
  }, []);
  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <div className="flex-center w-full my-20" id="chip">
          <img src={chipImg} alt="chip" width={180} height={180} />
        </div>
        <div className="flex flex-col items-center">
          <h2 className="hiw-title">
            A17 Pro chip.
            <br /> A monster win for gaming.
          </h2>
          <p className="hiw-subtitle">
            It ts here. The biggest redesign in the history of Apple GPUs.
          </p>
        </div>
        <div className="mt-10 md:mt-20 mb-14">
          <div className="relative h-full flex-center">
            <div className="overflow-hidden">
              <img
                src={frameImg}
                alt="frame"
                className="bg-transparent relative z-10"
              />
            </div>
            <div className="hiw-video">
              <video
                className="pointer-events-none"
                playsInline
                autoPlay
                muted
                preload="none"
                ref={videoRef}
              >
                <source src={frameVideo} type="video/mp4" />
              </video>
            </div>
          </div>
          <p className="text-gray-500 font-semibold text-center mt-3">
            Honkai: Star Rail
          </p>
          <div className="hiw-text-container mt-10">

          <div className=" opacity-0 translate-y-20 g_fadeIn mb-10 flex flex-1 justify-center flex-wrap">
            <p className="text-gray-500 text-lg">
              A17 Pro is an entirely new class of iPhone chip that delivers our{" "}
              <span className="text-white">
                best graphics performance by far.
              </span>
              <br />
            </p>
            <p className="text-gray-500 text-lg mt-5">
              Mobile{" "}
              <span className="text-white">
                games will look and feel so immersive
              </span>{" "}
              , with incredibly detailed environments and more realistic
              characters. And with industry-leading speed and efficiency, A17
              Pro takes fast and runs with it.
            </p>
          </div>
          <div className="flex-1 flex flex-col justify-center g_fadeIn">
            <p className="hiw-text">New</p>
            <p className="hiw-bigtext">Pro-class GPU</p>
            <p className="hiw-text">with 6 cores</p>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowitWorks;
