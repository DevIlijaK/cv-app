"use client";

import { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function SuraModel(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models/sura.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (actions.Intro_wait) {
      actions.Intro_wait.play();
    }
  }, [actions]);

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      position={[0, -2, 0]}
      scale={[2, 2, 2]}
      rotation={[0, -1.5, 0]}
    >
      <group name="Sketchfab_Scene">
        <group
          name="sura_male_novice_intro_wait_0"
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <group
            name="Bip01_1"
            position={[0.00083679, 0.00200391, 1.02820003]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}
          >
            <group name="GLTF_created_0">
              <primitive object={nodes.GLTF_created_0_rootJoint} />
              <skinnedMesh
                name="Object_8"
                geometry={nodes.Object_8.geometry}
                material={materials.Object16_0}
                skeleton={nodes.Object_8.skeleton}
              />
              <skinnedMesh
                name="Object_10"
                geometry={nodes.Object_10.geometry}
                material={materials.face_0}
                skeleton={nodes.Object_10.skeleton}
              />
              <skinnedMesh
                name="Object_12"
                geometry={nodes.Object_12.geometry}
                material={materials.Object16_0}
                skeleton={nodes.Object_12.skeleton}
              />
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/scene-transformed.glb");
