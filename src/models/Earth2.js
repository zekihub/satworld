import React, { useRef, useState, Suspense } from 'react'
import { Canvas, useFrame } from 'react-three-fiber'
import { useGLTF } from '@react-three/drei'

export default function Earth2(props) {
    const { nodes, materials } = useGLTF('/earth.glb')

    // This reference will give us direct access to the mesh
    const group = useRef()
    // Set up state for the hovered and active state
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    // Rotate mesh every frame, this is outside of React without overhead
    useFrame(() => {
        group.current.rotation.x = group.current.rotation.y += 0.01
    })



    return (
        <group ref={group} {...props} dispose={null}>

            <mesh material={materials['Earth Material']} geometry={nodes.Sphere.geometry} scale={[2, 2, 2]} />

        </group>

    )
}



useGLTF.preload('/earth.glb')