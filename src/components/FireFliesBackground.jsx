"use client";

import { useState, useEffect } from "react";

const createFireFly = () => ({
  id: Math.random(),
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  animationDuration: `${Math.random() * 5 + 5}s`,
});

export const FireFliesbackground = () => {
  const [FireFlies, setFireFlies] = useState([]);

  useEffect(() => {
    const addNewFireFlyPeriodically = () => {
      const newFireFly = createFireFly();
      setFireFlies((prev) => [...prev.slice(-14), newFireFly]);
    };
    const interval = setInterval(addNewFireFlyPeriodically, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
      {FireFlies.map((firefly) => {
        return (
          <div
            key={firefly.id}
            className="absolute rounded-full w-[10px] h-[10px] bg-firefly-radial"
            style={{
              top: firefly.top,
              left: firefly.left,
              animation: `move ${firefly.animationDuration} infinite alternate`,
            }}
          ></div>
        );
      })}
    </div>
  );
};
