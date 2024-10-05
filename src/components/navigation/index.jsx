import { BtnList } from "@/app/data";
import { NavButton } from "./nav-button";

export const Navigation = () => {
  const angleIncrement = 360 / BtnList.length;
  return (
    <div className="fixed w-full h-screen flex items-center justify-center">
      <div className="w-max group flex items-center justify-center relative animate-spin-slow hover:pause">
        {BtnList.map((button, index) => {
          const angleRad = (index * angleIncrement * Math.PI) / 180;
          const radius = "calc(20vw - 1rem)";
          const x = `calc(${radius} * ${Math.cos(angleRad)})`;
          const y = `calc(${radius} * ${Math.sin(angleRad)})`;

          return <NavButton key={button.label} x={x} y={y} {...button} />;
        })}
      </div>
    </div>
  );
};
