import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import ModelView from "./ModelView";
import { yellowImg } from "../utils";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";
import { models, sizes } from "../constants";
import { animateWithGsap, animateWithGsapTimeline } from "../utils/animation";

const Model = () => {
  const [size, setsize] = useState("small");
  const [model, setModel] = useState({
    title: "iphone 16 Pro in Natural Titainium",
    color: ["#8F8A81", "#FFE7B9", "#6F6C64"],
    img: yellowImg,
  });
  // Camera Control
  const cameraControlSmall = useRef();
  const cameraControlLarge = useRef();

  //model
  const small = useRef(new THREE.Group());
  const large = useRef(new THREE.Group());

  //rotation
  const [smallRotation, setSmallRotation] = useState(0);
  const [largeRotation, setLargeRotation] = useState(0);

  const tl = gsap.timeline();

  useEffect(() => {
    if (size === "large") {
      animateWithGsapTimeline(tl, small, smallRotation, "#view1", "#view2", {
        transform: "translateX(-100%)",
        duration: 2,
      });
    }

    if (size === "small") {
      animateWithGsapTimeline(tl, large, largeRotation, "#view2", "#view1", {
        transform: "translateX(0)",
        duration: 2,
      });
    }
  }, [size]);

  useGSAP(() => {
    animateWithGsap("#heading", {
      opacity: 1,
      duration: 1,
      y: 0,
    });
  }, []);
  return (
    <section className="common-padding ">
      <div className="screen-max-width">
        <h1 id="heading" className="section-heading">
          Take a closer look.
        </h1>
        <div className="flex flex-col items-center mt-5">
          <div className="w-full h-[75vh] md:h-[90vh] relative ">
            <ModelView
              index={1}
              item={model}
              size={size}
              groupRef={small}
              gsapType="view1"
              controlRef={cameraControlSmall}
              setRotation={setSmallRotation}
            />
            <ModelView
              index={2}
              item={model}
              size={size}
              groupRef={large}
              gsapType="view2"
              controlRef={cameraControlLarge}
              setRotation={setLargeRotation}
            />
            <Canvas
              className="w-full h-full"
              style={{
                position: "fixed",
                top: 0,
                bottom: 0,
                right: 0,
                left: 0,
                overflow: "hidden",
              }}
              eventSource={document.getElementById("root")}
            >
              <View.Port />
            </Canvas>
          </div>
          <div className="mx-auto w-full ">
            <p className="font-light text-sm text-center mb-5">{model.title}</p>

            <div className="flex justify-center items-center ">
              <ul className="flex items-center justify-center px-4 py-4 rounded-full bg-zinc-800/50 backdrop-blur mr-5">
                {models.map((item, i) => (
                  <li
                    key={i}
                    className="w-6 h-6 rounded-full mx-2 cursor-pointer"
                    style={{ backgroundColor: item.color[0] }}
                    onClick={() => setModel(item)}
                  />
                ))}
              </ul>
              <button className="flex items-center justify-center p-1 rounded-full bg-zinc-800/50 backdrop-blur ml-3 gap-1">
                {sizes.map(({ label, value }) => (
                  <span
                    key={label}
                    className="size-btn cursor-pointer font-semibold"
                    style={{
                      backgroundColor: size === value ? "white" : "transparent",
                      color: size === value ? "black" : "white",
                    }}
                    onClick={() => setsize(value)}
                  >
                    {label}
                  </span>
                ))}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Model;
