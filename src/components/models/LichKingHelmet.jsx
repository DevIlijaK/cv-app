"use client ";
import React from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function LichKingHelmetModel(props) {
  const group = React.useRef();
  const { nodes, materials, animations } = useGLTF(
    "/models/lich-king-helmet.glb"
  );
  const { actions } = useAnimations(animations, group);

  useFrame((state, delta) => {
    group.current.rotation.y += 0.007;
  });
  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      position={[0, 1, 0]}
      scale={[0.03, 0.03, 0.03]}
      rotation={[0.2, 0, 0]}
    >
      <group name="Sketchfab_Scene">
        <group name="RootNode">
          <group
            name="Box002"
            position={[0, -33.874, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
          >
            <mesh
              name="Box002_Material_#33_0"
              geometry={nodes["Box002_Material_#33_0"].geometry}
              material={materials.Material_33}
            />
            <mesh
              name="Box002_Material_#67_0"
              geometry={nodes["Box002_Material_#67_0"].geometry}
              material={materials.Material_67}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/lich-king-helmet.glb");
