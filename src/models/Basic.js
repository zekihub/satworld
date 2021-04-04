import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from 'react-three-fiber'

function Box(props) {

    const mesh = useRef()
    const group = useRef()

    useFrame(() => {
        group.current.rotation.z += 0.01
         
                  
    })
console.log("mesh",mesh)
    return (
        <group ref={group} quaternion={[0.3, 0.1, 0.1, 1]} >
            <group position={[0, 3, 0]}>
            <mesh
                //position={[0, 0, 0]}
                ref={mesh}
                //scale={[0.3, 0.3, 0.3]}
            >
                <boxBufferGeometry  />
                <meshStandardMaterial color={'hotpink'} />
            </mesh>
            </group>
        </group>
    )
}

export default function App() {
    return (
        <Box  />
    )
}
