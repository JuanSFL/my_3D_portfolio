import { Suspense, useEffect, useState} from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader'

const Computers = () => {
  const computer = useGLTF('./desktop_pc/scene.gltf')
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundcolor='black' />
      <pointLight intensity={1}/>
      <spotLight intensity={1} position={[-20,50,10]} angle={0.12} penumbra={1}/>
      <primitive object={computer.scene}
      scale={0.65}
      position={[0,-2.5,-1.5]}
      rotation={[-0.01,-0.2,-0.1]}/>
      
    </mesh>
  )
}

const ComputersCanvas = ()=>{

  const [isMobile,setIsMobile]=(useState)(false);
  useEffect(()=>{
    const mediaQuery = window.matchMedia(('max-width:500px'));

    setIsMobile(mediaQuery.matches)

    const handleMediaQueryChange = (event)=>{
      setIsMobile(event.matches)
    }
  },[])

  return (
    <Canvas frameLoop='demand' 
            shadows 
            camera={{position: [20, 3, 5], fov:25}} 
            gl={{ preserveDrawingBuffer: true}}
          >

      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls 
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
      <Computers/>
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas