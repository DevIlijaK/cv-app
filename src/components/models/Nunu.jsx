"use client";

import React, { useEffect } from "react";
import { useGraph } from "@react-three/fiber";
import { useGLTF, useAnimations } from "@react-three/drei";
import { SkeletonUtils } from "three-stdlib";

export function NunuModel(props) {
  const group = React.useRef();
  const { scene, animations } = useGLTF("/models/nunu.glb");
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes, materials } = useGraph(clone);
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    console.log(actions);
    if (actions && actions["nunu_laugh.anm"]) {
      actions["nunu_laugh.anm"].play();
    }
    // Additional animation triggers can go here
    // if (actions && actions["nunu_attack01.anm"]) {
    //   actions["nunu_attack01.anm"].play();
    // }

    // if (actions && actions["nunu_dance_loop.anm"]) {
    //   actions["nunu_dance_loop.anm"].play();
    // }
  }, [actions]);
  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      position={[0, -1.5, 0]}
      scale={[0.02, 0.02, 0.02]}
      rotation={[0.3, -0.1, 0]}
    >
      <group name="Sketchfab_Scene">
        <primitive object={nodes.GLTF_created_0_rootJoint} />
        <skinnedMesh
          name="Object_6"
          geometry={nodes.Object_6.geometry}
          material={materials.Nunu_Base_Mat}
          skeleton={nodes.Object_6.skeleton}
        />
        <skinnedMesh
          name="Object_7"
          geometry={nodes.Object_7.geometry}
          material={materials.willump}
          skeleton={nodes.Object_7.skeleton}
        />
        <skinnedMesh
          name="Object_8"
          geometry={nodes.Object_8.geometry}
          material={materials.willump}
          skeleton={nodes.Object_8.skeleton}
        />
        <skinnedMesh
          name="Object_9"
          geometry={nodes.Object_9.geometry}
          material={materials.willump}
          skeleton={nodes.Object_9.skeleton}
        />
        <skinnedMesh
          name="Object_10"
          geometry={nodes.Object_10.geometry}
          material={materials.willump}
          skeleton={nodes.Object_10.skeleton}
        />
        <skinnedMesh
          name="Object_11"
          geometry={nodes.Object_11.geometry}
          material={materials.willump}
          skeleton={nodes.Object_11.skeleton}
        />
        <skinnedMesh
          name="Object_12"
          geometry={nodes.Object_12.geometry}
          material={materials.willump}
          skeleton={nodes.Object_12.skeleton}
        />
        {/*   <skinnedMesh
          name="Object_13"
          geometry={nodes.Object_13.geometry}
          material={materials.snowman}
          skeleton={nodes.Object_13.skeleton}
        /> */}
      </group>
    </group>
  );
}

useGLTF.preload("/models/nunu.glb");
