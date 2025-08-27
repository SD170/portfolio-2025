'use client';

import { useCallback } from 'react';
import { loadFull } from 'tsparticles';
import Particles from 'react-tsparticles';

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine: unknown) => {
    // @ts-expect-error - tsparticles version mismatch
    await loadFull(engine);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          particles: {
            number: { value: 80 },
            color: { value: "#00ff41" },
            links: { enable: true, distance: 150, opacity: 0.4, width: 1, color: "#00ff41" },
            move: { enable: true, speed: 0.8, direction: "none", random: false, straight: false, outModes: "bounce" },
            opacity: { value: 0.7, random: false },
            size: { value: 2, random: { enable: true, minimumValue: 1 } },
            shape: { type: "circle" },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#00ff41",
              opacity: 0.4,
              width: 1
            }
          },
          interactivity: {
            detectsOn: "canvas",
            events: {
              onHover: { enable: true, mode: "repulse" },
              onClick: { enable: true, mode: "push" },
              resize: true
            },
            modes: {
              repulse: { distance: 100, duration: 0.4 },
              push: { particles_nb: 4 }
            }
          },
          retina_detect: true
        }}
      />
    </div>
  );
}
