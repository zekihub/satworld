import ReactDOM from 'react-dom'
import React, { useRef } from 'react'
import { Canvas, useFrame, extend, useThree, useUpdate } from 'react-three-fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

extend({ OrbitControls })

const Controls = () => {
    const controls = useRef()
    const { camera, gl } = useThree()
    useFrame(() => controls.current.update())
    return <orbitControls ref={controls} args={[camera, gl.domElement]} enableDamping dampingFactor={0.1} rotateSpeed={0.5} />
}

const OrbitLine = ({ radius = 5 }) => {
    const lineRef = useUpdate(line => {
        console.log("lineRef", line)
        //line.rotation.x = Math.PI * 0.5
    }, [])

    /* const geoRef = useUpdate(line => {
        console.log("georef", line)
        line.morphTargetsRelative = true
        //line.vertices.shift()
    }, []) */

    const geoRef = useRef()
    React.useLayoutEffect(() => {
        console.log("geoRef", geoRef)

    }
    )

    return (
        <line ref={lineRef}>
            <circleGeometry attach="geometry" args={[radius, 50]} ref={geoRef} />
            <lineDashedMaterial attach="material" color="hotpink" />
        </line>
    )
}

const Scene = () => (
    <>
        {/* <Controls /> */}
        <OrbitLine />
        <OrbitLine radius={10} />
    </>
)

export default Scene;