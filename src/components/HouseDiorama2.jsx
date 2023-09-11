/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 ./public/models/diorama_house2/diorama_house2.gltf -o ./src/components/HouseDiorama2.jsx -T --shadows 
Files: ./public/models/diorama_house2/diorama_house2.gltf [11.76KB] > diorama_house2-transformed.glb [1.31MB] (-11004%)
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function HouseDiorama2(props) {
  const { nodes, materials } = useGLTF("/models/diorama_house2.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["CABLEADO_Material_#20_0"].geometry}
        material={materials.Material_20}
        position={[9.416, 23.758, -1.35]}
        rotation={[-2.007, 0, 0]}
        scale={0.031}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["DETALLES_Material_#19_0"].geometry}
        material={materials.Material_19}
        position={[-1.378, -0.141, 15.273]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["ESTRUCTURA_Material_#16_0"].geometry}
        material={materials.Material_16}
        position={[2.074, -0.103, -3.343]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.137, 0.138, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["MADERAS_Material_#17_0"].geometry}
        material={materials.Material_17}
        position={[2.832, -5.329, -3.343]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.13, 0.149, 0.129]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["TEJAS_Material_#18_0"].geometry}
        material={materials.Material_18}
        position={[-3.178, 0.07, 10.138]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.015, 0.1, 0.1]}
      />
    </group>
  );
}

useGLTF.preload("/models/diorama_house2.glb");
