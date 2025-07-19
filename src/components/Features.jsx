import { useGSAP } from "@gsap/react";
import { animateWithGsap } from "../utils/animation";
import { explore1Img, explore2Img, exploreVideo } from "../utils/index";
import { useRef } from "react";
import gsap from "gsap";

const Features = () => {
  const videoRef = useRef();
  useGSAP(() => {
    gsap.to("#exploreVideo", {
      scrollTrigger: {
        trigger: "#exploreVideo",
        toggleActions: "play pause reverse restart",
        start: "-10% buttom ",
      },
      onComplete: () => {
        videoRef.current.play();
      },
    }),
      animateWithGsap("#feature-title", { opacity: 1, duration: 1, y: 0 });
    animateWithGsap(
      ".g_grow",
      { opacity: 1, scale: 1, ease: "power1" },
      { scrub: 5.5 }
    );
    animateWithGsap(".g_text", {
      opacity: 1,
      duration: 1,
      ease: "power2.inOut",
      y: 0,
    });
  }, []);
  return (
    <section className="h-full common-padding bg-zinc-800 relative overflow-hidden">
      <div className="screen-max-width">
        <div className="mb-12 w-full">
          <h1 id="feature-title" className="section-heading">
            Explore the full story
          </h1>
        </div>
        <div className="flex justify-center items-center flex-col overflow-hidden">
          <div className="mt-32 mb-24 pl-24">
            <h2 className="text-5xl lg:text-7xl font-semibold">iPhone.</h2>
            <h2 className="text-5xl lg:text-7xl font-semibold">
              Forged in titainium
            </h2>
          </div>
          <div className="flex justify-center items-center flex-col sm:px-10">
            <div className="relative w-full h-[50vh] flex items-center">
              <video
                autoPlay
                muted
                playsInline
                id="exploreVideo"
                className="w-full h-full object-cover object-center"
                preload="none"
                ref={videoRef}
                loop
              >
                <source src={exploreVideo} type="video/mp4" />
              </video>
            </div>
            <div className="flex flex-col w-full relative">
              <div className="feature-video-container">
                <div className="flex-1 overflow-hidden h-[50vh]">
                  <img
                    src={explore1Img}
                    alt="titainium"
                    className="feature-video g_grow "
                  />
                </div>
                <div className="flex-1 overflow-hidden h-[50vh]">
                  <img
                    src={explore2Img}
                    alt="titainium"
                    className="feature-video g_grow "
                  />
                </div>
              </div>
              <div className="feature-text-container">
                <div className="flex-1 flex justify-center items-center">
                  <p className=" text-gray-400/50 max-w-md text-lg md:text-xl font-semibold opacity-0 translate-y-[100px] g_text">
                    iPhone 16 Pro is{" "}
                    <span className=" text-white">
                      the first iPhone to feature an aerospace-grade titanium
                      design{" "}
                    </span>
                    , using the same alloy that spacecrafts use for missions to
                    Mars.{" "}
                  </p>
                </div>
                <div className="flex-1 flex justify-center items-center">
                  <p className=" text-gray-400/50 max-w-md text-lg md:text-xl font-semibold opacity-0 translate-y-[100px] g_text">
                    Titanium has one of the best strength-to-weight ratios of
                    any metal, making these our{" "}
                    <span className="text-white">
                      lightest Pro models ever. 
                    </span>
                     <span> </span>You'll notice the difference the moment you pick one up.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
