import React, { useEffect, useRef } from 'react';
import { useGLTF, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function Lcw(props) {
  const { nodes, materials } = useGLTF('/LCWv3.gltf')
  const group = useRef();

  // Guardamos las posiciones originales y las direcciones de desplazamiento
  useEffect(() => {
    const groupWorldPosition = new THREE.Vector3();
    group.current.getWorldPosition(groupWorldPosition);

    group.current.children.forEach((mesh) => {
      mesh.originalPosition = mesh.position.clone();  // Guardamos la posición original
      const meshWorldPosition = new THREE.Vector3();
      mesh.getWorldPosition(meshWorldPosition);

      mesh.directionVector = meshWorldPosition
        .clone()
        .sub(groupWorldPosition)
        .normalize();
      mesh.targetPosition = mesh.originalPosition
        .clone()
        .add(mesh.directionVector.clone().multiplyScalar(4)); // Aquí puedes cambiar la distancia del despiece
    });
  }, []);

  // Obtenemos el dato de desplazamiento del scroll
  const scrollData = useScroll();

  // Actualizamos las posiciones de las piezas en cada fotograma
  useFrame(() => {
    group.current.children.forEach((mesh) => {
      mesh.position.x = THREE.MathUtils.lerp(
        mesh.originalPosition.x,
        mesh.targetPosition.x,
        scrollData.offset // 0 al principio y 1 al final del scroll
      );
      mesh.position.y = THREE.MathUtils.lerp(
        mesh.originalPosition.y,
        mesh.targetPosition.y,
        scrollData.offset
      );
      mesh.position.z = THREE.MathUtils.lerp(
        mesh.originalPosition.z,
        mesh.targetPosition.z,
        scrollData.offset
      );
    });
  });

  return (
    <group {...props} dispose={null} ref={group}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials.plywood2}
        position={[-1.152, 1.196, 0.012]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002.geometry}
        material={materials.plywood2}
        position={[0.995, 0.822, 0.012]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube003.geometry}
        material={materials.plywood2}
        position={[0.844, 2.169, 0.066]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={materials.Poliigon_PlasticMoldDryBlast_7495_2K}
        position={[-1.029, 2.513, -0.131]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder001.geometry}
        material={materials.Poliigon_PlasticMoldDryBlast_7495_2K}
        position={[-1.029, 2.513, 0.297]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube004.geometry}
        material={materials.plywood2}
        position={[-0.577, 2.576, -0.068]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder002.geometry}
        material={materials.Poliigon_PlasticMoldDryBlast_7495_2K}
        position={[-0.151, 2.406, -0.131]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder003.geometry}
        material={materials.Poliigon_PlasticMoldDryBlast_7495_2K}
        position={[-0.151, 2.406, 0.297]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube005.geometry}
        material={materials.plywood2}
        position={[1.306, 3.652, 0.091]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder004.geometry}
        material={materials.Poliigon_PlasticMoldDryBlast_7495_2K}
        position={[1.397, 3.35, -0.131]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder005.geometry}
        material={materials.Poliigon_PlasticMoldDryBlast_7495_2K}
        position={[1.397, 3.35, 0.297]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bolt002.geometry}
        material={materials.Poliigon_MetalPaintedMatte_7037_2K}
        position={[1.497, 3.297, 0.31]}
        rotation={[0, 0, -1.906]}
        scale={0.015}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bolt003.geometry}
        material={materials.Poliigon_MetalPaintedMatte_7037_2K}
        position={[1.497, 3.297, -0.143]}
        rotation={[0, 0, -1.906]}
        scale={0.015}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bolt004.geometry}
        material={materials.Poliigon_MetalPaintedMatte_7037_2K}
        position={[-0.179, 2.297, 0.31]}
        rotation={[0, 0, 2.987]}
        scale={0.015}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bolt005.geometry}
        material={materials.Poliigon_MetalPaintedMatte_7037_2K}
        position={[-0.179, 2.297, -0.143]}
        rotation={[0, 0, 2.987]}
        scale={0.015}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bolt006.geometry}
        material={materials.Poliigon_MetalPaintedMatte_7037_2K}
        position={[-1.141, 2.265, 0.31]}
        rotation={[0, 0, 2.987]}
        scale={0.015}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bolt007.geometry}
        material={materials.Poliigon_MetalPaintedMatte_7037_2K}
        position={[-1.141, 2.265, -0.143]}
        rotation={[0, 0, 2.987]}
        scale={0.015}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bolt008.geometry}
        material={materials.Poliigon_MetalPaintedMatte_7037_2K}
        position={[-0.958, 2.251, 0.31]}
        rotation={[0, 0, 2.987]}
        scale={0.015}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bolt009.geometry}
        material={materials.Poliigon_MetalPaintedMatte_7037_2K}
        position={[-0.958, 2.251, -0.143]}
        rotation={[0, 0, 2.987]}
        scale={0.015}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bolt010.geometry}
        material={materials.Poliigon_MetalPaintedMatte_7037_2K}
        position={[0.738, 1.618, 0.31]}
        rotation={[0, 0, -3.028]}
        scale={0.015}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bolt011.geometry}
        material={materials.Poliigon_MetalPaintedMatte_7037_2K}
        position={[0.738, 1.618, -0.143]}
        rotation={[0, 0, -3.028]}
        scale={0.015}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bolt012.geometry}
        material={materials.Poliigon_MetalPaintedMatte_7037_2K}
        position={[0.962, 1.632, 0.31]}
        rotation={[0, 0, -3.028]}
        scale={0.015}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bolt013.geometry}
        material={materials.Poliigon_MetalPaintedMatte_7037_2K}
        position={[0.962, 1.632, -0.143]}
        rotation={[0, 0, -3.028]}
        scale={0.015}
      />
    </group>
  )
}

useGLTF.preload('/LCWv3.gltf')
