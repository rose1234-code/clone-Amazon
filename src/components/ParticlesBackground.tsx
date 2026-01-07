"use client";

import { useEffect, useMemo, useState } from "react";
import type { ISourceOptions } from "tsparticles-engine";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const options = useMemo<ISourceOptions>(
    () => ({
      fullScreen: {
        enable: false, // respecte le conteneur
      },

      background: {
        color: "transparent",
      },

      fpsLimit: 60,

      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "attract",
          },
          resize: true,
        },
        modes: {
          attract: {
            distance: 120,
            duration: 0.4,
          },
        },
      },

      particles: {
        number: {
          value: 70,
          density: {
            enable: true,
          },
        },

        color: {
          value: ["#f5e7e0", "#e6cfa7", "#ffffff"], // palette premium
        },

        shape: {
          type: "circle",
        },

        opacity: {
          value: { min: 0.15, max: 0.35 },
        },

        size: {
          value: { min: 1, max: 4 },
        },

        move: {
          enable: true,
          speed: 0.3,
          direction: "none",
          random: false,
          straight: false,
          outModes: {
            default: "out",
          },
        },

        links: {
          enable: true,
          distance: 120,
          color: "#f5e7e0",
          opacity: 0.08,
          width: 1,
        },
      },

      detectRetina: true,
    }),
    []
  );

  if (!init) return null;

  return (
    <Particles
      id="ecommerce-particles"
      options={options}
      className="absolute inset-0 z-0"
    />
  );
};

export default ParticlesBackground;
