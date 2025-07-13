import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticleBackground = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false }, // ✅ Important: Not full screen
        background: {
          color: {
            value: "#000000", // Optional: section bg color
          },
        },
        fpsLimit: 60,
        particles: {
          number: {
            value: 100, // Only from emitter
          },
          color: {
            value: "#ffffff",
          },
          shape: {
            type: "circle",
          },
          size: {
            value: 4,
          },
          move: {
            enable: true,
            speed: 2,
            direction: "none",
            outModes: {
              default: "destroy",
            },
          },
        },
        emitters: {
          direction: "none",
          life: {
            count: 0,
          },
          rate: {
            delay: 0.1,
            quantity: 2,
          },
          size: {
            width: 0,
            height: 0,
          },
          position: {
            x: 50,
            y: 50,
            mode: "percent",
          },
          particles: {
            move: {
              speed: 2,
              angle: {
                value: 360,
              },
              outModes: {
                default: "destroy",
              },
            },
          },
        },
      }}
    />
  );
};

export default ParticleBackground;
