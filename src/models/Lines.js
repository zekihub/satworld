import React, { useRef, useState, Suspense } from 'react'
import { Canvas, useFrame } from 'react-three-fiber'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'


export default function Lines(props) {


    const points = []
    points.push(new THREE.Vector3(0, 0, 0))
    points.push(new THREE.Vector3(-10, 0, 0))
    points.push(new THREE.Vector3(0, 10, 0))
    points.push(new THREE.Vector3(10, 0, 0))
    points.push(new THREE.Vector3(1, 2, 3))

    const lineGeometry = new THREE.BufferGeometry().setFromPoints(points)

    const curve = new THREE.SplineCurve([
        new THREE.Vector3(3, 0, 1),
        new THREE.Vector3(0, 3, 100),
        new THREE.Vector3(-3, 0, 0),
        new THREE.Vector3(0, -3, 0),
        new THREE.Vector3(1, 0, 0),
        new THREE.Vector3(1.5, 0, 0),
        new THREE.Vector3(2, 0, 0),
        new THREE.Vector3(2.5, 0, 10),
        new THREE.Vector3(3, 0, 0),
        
    ]);
    const points2 = curve.getPoints(500);
    const geometry = new THREE.BufferGeometry().setFromPoints(points2);

    const ref = React.useRef()
    console.log("line:i", ref)


     

    const orbitMaterial = new THREE.LineBasicMaterial({color: "red", opacity: 1.0, transparent: true });
    const orbitGeometry = new THREE.BufferGeometry().setFromPoints(points2);

    return (
        <group ref={ref} >
            <line geometry={orbitGeometry} material={orbitMaterial} >
                
                {/* <lineBasicMaterial color="white" /> */}
                 
            </line>

        </group>
    )
}

