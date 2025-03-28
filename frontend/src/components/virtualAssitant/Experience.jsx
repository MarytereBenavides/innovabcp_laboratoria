"use client";
import {
    CameraControls,
    Environment,
    Float,
    Gltf,
    Html,
    Loader,
    useGLTF,
  } from "@react-three/drei";
import { Canvas } from '@react-three/fiber';
import { Leva, button, useControls } from "leva";
import { Suspense, useEffect, useRef, useState } from "react";
import { degToRad } from "three/src/math/MathUtils";
import { Assistant } from './Assistant';
import { TypingBox } from './TypingBox';
import { MessagesList } from './MessageList';
import { useAITeacher } from "@/hooks/useAIAssistant";


const itemPlacement = {
    default: {
      classroom: {
        position: [0.2, -1.7, -2],
      },
      teacher: {
        position: [-1, -1.7, -3],
      },
      board: {
        position: [0.45, 0.382, -6],
      },
    }
  };

export const Experience = () => {   
    const teacher = useAITeacher((state) => state.teacher);
    const classroom = useAITeacher((state) => state.classroom);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
      }, []);

    
    if (!isMounted) {
       return <Loader />;
    }
    return(
        <>
            <div className="z-10 md:justify-center fixed bottom-4 left-4 right-4 flex gap-3 flex-wrap justify-stretch">
                <TypingBox />
            </div>
            <Leva hidden />
            <Loader />
            <Canvas 
            camera={{ position: [0, 0, 0.0001], fov: 50 }} 
           frameloop="demand"
           dpr={1}
           gl={{ powerPreference: "high-performance" }}
           performance={{ min: 0.1 }}
            shadows={false} >
                 <CameraManager />
                <Suspense fallback={null}>
                    <Float speed={0.5} floatIntensity={0.2} rotationIntensity={0.1}>
                        <Html transform {...itemPlacement[classroom].board} distanceFactor={1}>
                            <MessagesList />
                        </Html>
                        <Environment preset="sunset" />
                        <ambientLight intensity={0.3} color="pink" />
                        <Assistant assistant={teacher}    key={teacher}    {...itemPlacement[classroom].teacher} scale={1.5} rotation-y={degToRad(20)} />
                        <Gltf  src={`/models/classroom_${classroom}.glb`}   {...itemPlacement[classroom].classroom} dracoCompression receiveShadow={false} castShadow={false}  />
                    </Float>
                </Suspense>
              
               
            </Canvas>
        </>
    )
}

const CAMERA_POSITIONS = {
    default: [0, 6.123233995736766e-21, 0.0001],
    loading: [
      0.00002621880610890309, 0.00000515037441056466, 0.00009636414192870058,
    ],
    speaking: [0, -1.6481333940859815e-7, 0.00009999846226827279],
  };
  
  const CAMERA_ZOOMS = {
    default: 1,
    loading: 1.3,
    speaking: 2.1204819420055387,
  };

const CameraManager = () => {
    const controls = useRef();
    const loading = useAITeacher((state) => state.loading);
    const currentMessage = useAITeacher((state) => state.currentMessage);

     useEffect(() => {
    if (loading) {
      controls.current?.setPosition(...CAMERA_POSITIONS.loading, true);
      controls.current?.zoomTo(CAMERA_ZOOMS.loading, true);
    } else if (currentMessage) {
      controls.current?.setPosition(...CAMERA_POSITIONS.speaking, true);
      controls.current?.zoomTo(CAMERA_ZOOMS.speaking, true);
    }
    }, [loading, currentMessage]);

    useControls("Helper", {
        getCameraPosition: button(() => {
        const position = controls.current.getPosition();
        const zoom = controls.current.camera.zoom;
        console.log([...position], zoom);
        }),
    });

    return (
        <CameraControls 
            ref={controls}
            minZoom={1}
            maxZoom={3}
            polarRotateSpeed={-0.5} // Aumenta la velocidad para más respuesta
            azimuthRotateSpeed={-0.5} // Aumenta la velocidad para más respuesta
            smoothTime={0.05}
            mouseButtons={{
            left: 1, //ACTION.ROTATE
            wheel: 16, //ACTION.ZOOM
            }}
            touches={{
            one: 32, //ACTION.TOUCH_ROTATE
            two: 512, //ACTION.TOUCH_ZOOM
            }}
        />
    )
}
useGLTF.preload("/models/classroom_default.glb");