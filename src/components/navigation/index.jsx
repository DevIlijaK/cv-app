"use client";

import { BtnList } from "@/app/data";
import { NavButton } from "./nav-button";
import useScreenSize from "../hooks/useScreenSize";
import ResponsiveCompoent from "../responsive-component";
import { motion } from "framer-motion";

const container = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

export const Navigation = () => {
  const angleIncrement = 360 / BtnList.length;
  const size = useScreenSize();

  const isLarge = size >= 1024;
  const isMedium = size >= 768;
  return (
    <div className="fixed w-full h-screen flex items-center justify-center">
      <ResponsiveCompoent>
        {({ size }) => {
          return size && size >= 480 ? (
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="w-max group flex items-center justify-center relative animate-spin-slow hover:pause"
            >
              {BtnList.map((button, index) => {
                const angleRad = (index * angleIncrement * Math.PI) / 180;
                const radius = isLarge
                  ? "calc(20vw - 1rem)"
                  : isMedium
                  ? "calc(30vw - 1rem)"
                  : "calc(40vw - 1rem)";
                const x = `calc(${radius} * ${Math.cos(angleRad)})`;
                const y = `calc(${radius} * ${Math.sin(angleRad)})`;

                return <NavButton key={button.label} x={x} y={y} {...button} />;
              })}
            </motion.div>
          ) : (
            <>
              <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="w-full px-2.5 xs:p-0 xs:w-max group space-y-4 flex flex-col items-start xs:items-center justify-center relative"
              >
                {BtnList.slice(0, BtnList.length / 2).map((button) => {
                  return (
                    <NavButton key={button.label} x={0} y={0} {...button} />
                  );
                })}
              </motion.div>

              <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="w-full px-2.5 xs:p-0 xs:w-max group space-y-4 flex flex-col items-end xs:items-center justify-center relative"
              >
                {BtnList.slice(BtnList.length / 2, BtnList.length).map(
                  (button) => {
                    return (
                      <NavButton
                        key={button.label}
                        x={0}
                        y={0}
                        {...button}
                        labelDirection="left"
                      />
                    );
                  }
                )}
              </motion.div>
            </>
          );
        }}
      </ResponsiveCompoent>
    </div>
  );
};
