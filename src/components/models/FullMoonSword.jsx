"use client";

import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function FullMoonSwordModel(props) {
  const sword = useRef();
  const { nodes, materials } = useGLTF("/models/full-moon-sword.glb");
  useFrame((state, delta) => {
    sword.current.rotation.y += 0.005;
  });
  return (
    <group
      ref={sword}
      {...props}
      dispose={null}
      position={[0, -1.5, 0]}
      scale={[4, 4, 4]}
      rotation={[0, 0, 0]}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials["0material0_0"]}
        scale={0.01}
      />
    </group>
  );
}

useGLTF.preload("/models/full-moon-sword.glb");
