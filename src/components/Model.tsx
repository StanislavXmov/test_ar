import { useGLTF } from '@react-three/drei';
import { Mesh, MeshStandardMaterial } from 'three';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
import { usePosition } from '../store/position.store';

interface ModelGLTF extends GLTF {
  nodes: {
    Curve_1: Mesh;
    Curve_2: Mesh;
    Curve: Mesh;
    Cube001: Mesh;
    Cube001_1: Mesh;
  }
  materials: {
    'Material.001': MeshStandardMaterial;
    'Material.002': MeshStandardMaterial;
    'Material': MeshStandardMaterial;
    'Material2': MeshStandardMaterial;
  }
};

export function ModelTag() {
  const x = usePosition(s => s.x);
  const z = usePosition(s => s.z);
  const y = usePosition(s => s.y);
  const { nodes, materials } = useGLTF('./tag.glb') as unknown as ModelGLTF;
  console.log(nodes, materials);
  
  return (
    <group dispose={null} position={[x, 0, z]} rotation={[0, y, 0]}>
      <mesh castShadow receiveShadow geometry={nodes.Curve_1.geometry} material={materials['Material.001']} />
      <mesh castShadow receiveShadow geometry={nodes.Curve_2.geometry} material={materials['Material.002']} />
    </group>
  )
}

export function ModelTest() {
  const x = usePosition(s => s.x);
  const z = usePosition(s => s.z);
  const y = usePosition(s => s.y);
  const { nodes, materials } = useGLTF('./1.glb') as unknown as ModelGLTF;
  
  return (
    <group dispose={null} position={[x, 0, z]} rotation={[0, y, 0]}>
      <mesh castShadow receiveShadow geometry={nodes.Cube001.geometry} material={materials.Material2} />
      <mesh castShadow receiveShadow geometry={nodes.Cube001_1.geometry} material={materials.Material} />
    </group>
  )
}

export function ModelZhaba() {
  const x = usePosition(s => s.x);
  const z = usePosition(s => s.z);
  const y = usePosition(s => s.y);
  const { nodes, materials } = useGLTF('./zh.glb') as unknown as ModelGLTF;
  console.log(nodes, materials);
  
  
  return (
    <group dispose={null} position={[x, 0, z]} rotation={[0, y, 0]}>
      <mesh castShadow receiveShadow geometry={nodes.Curve.geometry} material={materials['Material.001']} />
    </group>
  )
}

useGLTF.preload('./tag.glb');
useGLTF.preload('./1.glb');
useGLTF.preload('./zh.glb');