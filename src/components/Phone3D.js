import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Phone3D(props) {

  const { nodes, materials } = useGLTF("gltf/phone.gltf");

  const boxRef = useRef();


  useFrame(() => {
    boxRef.current.rotation.y += 0.00750;
  });


  return (
    <group {...props} ref={boxRef} dispose={null}>
      <group
        position={[0, 0, 0]}
        rotation={[Math.PI / 2, -Math.PI / 2, 0]}
        scale={[1, 1.16, 1]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane_1.geometry}
          material={materials["PHONE-BODY"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane_2.geometry}
          material={materials["PHONE-SIDES"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane_3.geometry}
          material={materials["FRONT-GLASS"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane_4.geometry}
          material={materials["BORDER-FRONT"]}
        />
        <group
          position={[-1.09, -0.08, -0.33]}
          rotation={[-Math.PI, Math.PI / 2, 0]}
          scale={[0.1, 0.09, 0.1]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle_1.geometry}
            material={materials["PHONE-BODY"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle_2.geometry}
            material={materials.OBJECTIF}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle_3.geometry}
            material={materials.WINDOW}
          />
        </group>
        <group
          position={[-0.87, -0.08, -0.12]}
          rotation={[-Math.PI, Math.PI / 2, 0]}
          scale={[0.13, 0.12, 0.13]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle001_1.geometry}
            material={materials["PHONE-BODY"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle001_2.geometry}
            material={materials.OBJECTIF}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle001_3.geometry}
            material={materials.WINDOW}
          />
        </group>
        <group
          position={[-1.11, -0.08, -0.05]}
          rotation={[-Math.PI, Math.PI / 2, 0]}
          scale={0.06}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle002_1.geometry}
            material={materials["PHONE-BODY"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle002_2.geometry}
            material={materials.OBJECTIF}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle002_3.geometry}
            material={materials.WINDOW}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001.geometry}
          material={materials["PHONE-SIDES"]}
          position={[-0.96, -0.07, -0.2]}
          rotation={[-Math.PI, Math.PI / 2, 0]}
          scale={[0.27, 0.25, 0.27]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("gltf/phone.gltf");