import { useGLTF } from "@react-three/drei"

export const Assistants=["Nanami"]

export const Assistant = ({assistant, ...props}) => {
    const {scene} = useGLTF(`/models/Assistant_${assistant}.glb`)
    return (
        <group {...props}>
            <primitive object={scene} />
        </group>
    )
}

Assistants.forEach((assistant) => {
    useGLTF.preload(`/models/Assitant_${assistant}.glb`)
})