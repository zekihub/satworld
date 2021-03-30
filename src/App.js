import './styles.css';

import React, { useRef, useState, Suspense } from 'react'
import { Canvas, useFrame } from 'react-three-fiber'
import { OrbitControls } from '@react-three/drei'
import Earth from "./models/Earth2"
import Sat from "./models/Sat"

function App(props) {
  var x = 8;
  return (
    <main>
      <h1>Hello World</h1>
      <div class="earth-div">
        <Canvas>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <pointLight position={[-10, -10, -10]} />
          <gridHelper scale={[2,2,2]}/>
          <axesHelper scale={[3,3,3]}/>
          <OrbitControls />

          <Suspense fallback={null} >
            <Earth position={[0, 0, 0]} name="Earth" />
            <Sat position={[0, 0, 0]} quaternion={[0.7, 0, 0, 0.5]} scenePosition={[70, 0, 0]} name="Sat1" />
            <Sat position={[0, 0, 0]} quaternion={[0.7, 0, 0, 0.5]} scenePosition={[70, 0, 15]} name="Sat2" />
            <Sat position={[0, 0, 0]} quaternion={[0.7, 0, 0, 0.5]} scenePosition={[65, 0, 30]} name="Sat3" />
            <Sat position={[0, 0, 0]} quaternion={[0.7, 0, 0, 0.5]} scenePosition={[55, 0, 45]} name="Sat4" />
            <Sat position={[0, 0, 0]} quaternion={[0.7, 0, 0, 0.5]} scenePosition={[35, 0, 60]} name="Sat5" />

            <Sat position={[0, 0, 0]} quaternion={[0.1, 0, 0, 0.5]} scenePosition={[70, 0, 0]} name="Sat1" />
            <Sat position={[0, 0, 0]} quaternion={[0.1, 0, 0, 0.5]} scenePosition={[70, 0, 15]} name="Sat2" />
            <Sat position={[0, 0, 0]} quaternion={[0.1, 0, 0, 0.5]} scenePosition={[65, 0, 30]} name="Sat3" />
            <Sat position={[0, 0, 0]} quaternion={[0.1, 0, 0, 0.5]} scenePosition={[55, 0, 45]} name="Sat4" />
            <Sat position={[0, 0, 0]} quaternion={[0.1, 0, 0, 0.5]} scenePosition={[35, 0, 60]} name="Sat5" />
            
          </Suspense>

        </Canvas>
      </div>
    </main>
  )
}

export default App;
