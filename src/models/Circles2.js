import * as THREE from "three";
import { Canvas } from "react-three-fiber";
import { useMemo } from "react";

export default function App() {
    return (
        <Line />
    );
}

function Line() {
    const geometry = useMemo(() => {
        const divisions = 20;
        const vertices = [];

        for (let i = 0; i <= divisions; i++) {
            const v = (i / divisions) * (Math.PI * 2);
            const x = Math.sin(v);
            const y = Math.cos(v);
            vertices.push(x, y, 0);
        }

        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute("position", new THREE.Float32BufferAttribute(vertices, 3)
        );

        return geometry;
    }, []);

    console.log("geometry:", geometry)

    return (
        <group quaternion={[0.11827949918886817, -0.8728936763273911, -0.26179762468552814, 0.3943711368854184]}>
            <line
                onUpdate={(line) => line.computeLineDistances()}
                geometry={geometry}
                scale={[3, 3, 3]}
            //quaternion={[0.11827949918886817, -0.8728936763273911, -0.26179762468552814, 0.3943711368854184]}
            //quaternion={[0.5,0,0,0.5]}

            >
                <lineBasicMaterial color="red" dashSize={0.1} gapSize={0.1} />
            </line>
        </group>
    );
}
