"use client";
import {Box, Environment, Gltf, OrbitControls, CameraControls} from '@react-three/drei';
import { Canvas,invalidate,useFrame   } from '@react-three/fiber';
import { Suspense, useRef } from 'react';

export const Experience = () => {   
    return(
        <>
            <Canvas 
            camera={{ position: [0, 0, 0.0001], fov: 50 }} 
            frameloop="demand"
            dpr={[1, 1.2]} 
            gl={{ powerPreference: "low-power" }}    
            performance={{ min: 0.5 }}  
            shadows={false} >
                <Suspense fallback={null}>
                    <Environment preset="sunset" />
                    <ambientLight intensity={0.5} color="pink" />
                    <GltfModel />
                </Suspense>
               <CameraManager />
               
            </Canvas>
        </>
    )
}

const GltfModel = () => {
    return <Gltf src="/models/classroom_default.glb" position={[0.2, -1.7, -2]} dracoCompression/>;
};

const CameraManager = () => {
    const cameraControlsRef = useRef();
    useFrame(() => {
        if (cameraControlsRef.current) {
          cameraControlsRef.current.update(0.1);
        }
      });
    return (
        <CameraControls 
            ref={cameraControlsRef}
            makeDefault
            minDistance={0.1} // Distancia mínima al hacer zoom
            maxDistance={0.5} // Distancia máxima al alejarse
            minZoom={0.1}
            maxZoom={3}
            zoomSpeed={1} // Velocidad del zoom con la rueda
            polarRotateSpeed={-0.3}
            azimuthRotateSpeed={-0.3}
            maxAzimuthAngle={Math.PI / 4} // Limita la rotación en azimut
            minPolarAngle={Math.PI / 4} // Evita que mire demasiado abajo
            maxPolarAngle={Math.PI / 2} // Evita que la cámara mire hacia abajo
            mouseButtons={{ left:1, wheel:16 }}
            touches={{ one:32, two:512 }}
        />
    )
}