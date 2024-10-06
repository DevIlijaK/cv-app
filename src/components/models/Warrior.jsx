"use client";

import { useRef, useEffect, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function WarriorModel(props) {
  const group = useRef();
  const test = useRef();
  const { nodes, materials, animations } = useGLTF("/models/warrior.glb");
  const { actions } = useAnimations(animations, group);
  const [isRunning, setIsRunning] = useState(false);

  console.log("akcije su: ", actions);

  useEffect(() => {
    if (!actions) return;

    const playAnimations = () => {
      actions.onehand_idle.reset().fadeIn(0.5).play();

      const introWaitTimeout = setTimeout(() => {
        actions.onehand_idle.fadeOut(0.5); // Smooth fade out
        actions.Intro_wait.reset().fadeIn(0.5).play();
      }, 3000);

      const runTimeout = setTimeout(() => {
        actions.Intro_wait.fadeOut(0.5);
        actions.Run.reset().fadeIn(0.5).play();
        setIsRunning(true);
      }, 6000);

      const selectedTimeout = setTimeout(() => {
        setIsRunning(false); // Stop running
        actions.Run.fadeOut(0.5);
        playAnimations(); // Loop back to the beginning of the animation cycle
      }, 9200); // Total cycle time

      // Cleanup function to clear timeouts when the component unmounts or re-renders
      return () => {
        clearTimeout(introWaitTimeout);
        clearTimeout(runTimeout);
        clearTimeout(selectedTimeout);
      };
    };

    // Start the animation cycle
    const cleanupTimeouts = playAnimations();

    // Cleanup on unmount or when actions change
    return cleanupTimeouts;
  }, [actions]);

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();
    if (isRunning) {
      group.current.rotation.y += delta * 2;
    } else {
      group.current.rotation.y = Math.sin(time * 2) * 0.05;
    }
    group.current.position.y = -3.5 + Math.sin(time) * 0.1;
  });
  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();
    test.current.position.y = -4 + Math.sin(time) * 0.1;
    test.current.rotation.y = Math.sin(time * 2) * 0.05;
  });
  // Event handlers for playing different animations
  const handleIntroWait = () => {
    actions.Intro_wait.reset().fadeIn(0.5).play();
  };

  const handleRun = () => {
    actions.Run.reset().fadeIn(0.5).play();
  };

  const handleSelected = () => {
    actions.Selected.reset().fadeIn(0.5).play();
  };

  const handleOneHandIdle = () => {
    actions.onehand_idle.reset().fadeIn(0.5).play();
  };

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      position={[0, -4, 0]}
      scale={[0.5, 0.5, 0.5]}
      rotation={[0.3, -0.1, 0]}
      onClick={(e) => actions.Intro_wait()}
    >
      <group name="Scene">
        <group
          name="warrior_m_4-1_0"
          position={[0, 7, 0]}
          rotation={[-Math.PI / 2, 0, -0.389]}
        >
          <group
            name="Bip01_1"
            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
            scale={0.032}
          >
            <group name="GLTF_created_0">
              <primitive object={nodes.GLTF_created_0_rootJoint} />
              <skinnedMesh
                name="Object_8"
                geometry={nodes.Object_8.geometry}
                material={materials["warrior_4-1_02"]}
                skeleton={nodes.Object_8.skeleton}
                position={[2.228, -12.208, -0.913]}
              />
              <skinnedMesh
                ref={test}
                name="Object_10"
                geometry={nodes.Object_10.geometry}
                material={materials.warrior_face_02}
                skeleton={nodes.Object_10.skeleton}
              />
            </group>
          </group>
        </group>
      </group>
      {/* Buttons or events to trigger different animations */}
      {/* <button onClick={handleIntroWait}>Play Intro_wait</button>
      <button onClick={handleRun}>Play Run</button>
      <button onClick={handleSelected}>Play Selected</button>
      <button onClick={handleOneHandIdle}>Play One-hand Idle</button> */}
    </group>
  );
}

useGLTF.preload("/models/warrior.glb");
