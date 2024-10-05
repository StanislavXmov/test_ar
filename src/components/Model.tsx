import { useGLTF } from '@react-three/drei';
import { Mesh, MeshStandardMaterial } from 'three';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
import { usePosition } from '../store/position.store';

interface CharacterGLTF extends GLTF {
  nodes: {
    Cube001: Mesh;
    Cube001_1: Mesh;
  }
  materials: {
    'Material': MeshStandardMaterial;
    'Material2': MeshStandardMaterial;
  }
};

export function Model() {
  const x = usePosition(s => s.x);
  const z = usePosition(s => s.z);
  const y = usePosition(s => s.y);
  const { nodes, materials } = useGLTF('./1.glb') as CharacterGLTF;
  
  return (
    <group dispose={null} position={[x, 0, z]} rotation={[0, y, 0]}>
      <mesh castShadow receiveShadow geometry={nodes.Cube001.geometry} material={materials.Material2} />
      <mesh castShadow receiveShadow geometry={nodes.Cube001_1.geometry} material={materials.Material} />
    </group>
  )
}

useGLTF.preload('./1.glb')