import { Canvas, useThree } from '@react-three/fiber';
import { Center, OrbitControls } from '@react-three/drei';
import { XROrigin, XR, createXRStore, XRDomOverlay } from '@react-three/xr';
import { Suspense, useState } from 'react';
import { ModelTag, ModelTest, ModelZhaba } from './components/Model';
import { Controls } from './components/Controls';

const store = createXRStore({ depthSensing: true, hand: false });

const App = () => {

  const [model, setModel] = useState<string>('test');

  return (
    <>
      <button
        className='arButton'
        onClick={() => store.enterAR()}
      >
        Enter AR
      </button>

      <select className='select' onChange={(e) => setModel(e.target.value)}>
        <option value="test">TEST</option>
        <option value="tag">TAG</option>
        <option value="zh">ZHABA</option>
      </select>
      <Canvas
        shadows
        camera={{ position: [4, 0, 6], fov: 35 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <XR store={store}>
          <XRDomOverlay className='overlay'>
            <Controls />
          </XRDomOverlay>
          <group position={[0, -0.75, 0]}>
            <Suspense>
              <Center top>
                {model === "tag" && <ModelTag />}
                {model === "test" && <ModelTest />}
                {model === "zh" && <ModelZhaba />}
              </Center>
            </Suspense>
            <directionalLight position={[1, 8, 1]} castShadow />
            <ambientLight />
            {/* <mesh
              receiveShadow
              rotation-x={-Math.PI / 2}
              scale={100}
            >
              <shadowMaterial opacity={0.7} />
              <planeGeometry />
            </mesh> */}
            <group position={[0, 1, 1]}>
              <XROrigin />
            </group>
          </group>
          <OrbitControls />
          {/* <Suspense>
            <Environment preset="dawn" blur={1} />
          </Suspense> */}
        </XR>
      </Canvas>
    </>
  )
}

export default App;
