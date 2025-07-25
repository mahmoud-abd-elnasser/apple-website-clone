import { useGSAP } from "@gsap/react";
import { rightImg, watchImg } from "../utils";
import VideoCarousel from "./VideoCarousel";
import { animateWithGsap } from "../utils/animation";

const Highlight = () => {
  useGSAP(() => {

    animateWithGsap("#title", {
      opacity: 1,
      y: 0,
    });
    animateWithGsap(".link", {
      opacity: 1,
      y: 0,
      duration: 1.25,
      stagger: 0.25,
    });
  }, []);
  return (
    <section
      id="highlight"
      className="w-screen h-full bg-zinc-900 common-padding"
    >
      <div className="screen-max-width">
        <div className="mb-12 w-full md:flex items-end justify-between">
          <div>
            <h1 id="title" className="section-heading">
              Get the highlights.
            </h1>
          </div>
          <div className="flex items-end gap-5 md:pb-5">
            <p className="link">
              Watch the film
              <img src={watchImg} alt="watch" className="ml-2" />
            </p>
            <p className="link">
              Watch the event
              <img src={rightImg} alt="right" className="ml-2" />
            </p>
          </div>
        </div>
        <VideoCarousel />
      </div>
    </section>
  );
};

export default Highlight;
