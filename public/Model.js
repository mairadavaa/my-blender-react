import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import GLTFLoader from "gltfjsx/src/bin/GLTFLoader";

export function Model(props) {
  const { scene } = useGLTF('./23blend.glb', true);

  const { nodes, materials } = useGLTF("/23blend.glb");
  return (
    
    <group {...props} dispose={null} object={scene}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Torus001.geometry}
        material={materials["Material.002"]}
        position={[0.11, 0.49, 0.06]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Torus002.geometry}
        material={materials["Material.001"]}
        position={[0.14, 0.59, 0.03]}
      />
    </group>
  );
}

useGLTF.preload("/23blend.glb");
  