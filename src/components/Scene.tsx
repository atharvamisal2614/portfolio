"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

function Stars() {
    const group = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (group.current) {
            group.current.rotation.y = state.clock.getElapsedTime() * 0.05; // Very slow rotation
        }
    });

    return (
        <group ref={group}>
            {Array.from({ length: 200 }).map((_, i) => (
                <mesh
                    key={i}
                    position={[
                        (Math.random() - 0.5) * 40,
                        (Math.random() - 0.5) * 40,
                        (Math.random() - 0.5) * 20
                    ]}
                    scale={Math.random() * 0.03 + 0.01}
                >
                    <sphereGeometry args={[1, 8, 8]} />
                    <meshBasicMaterial color={Math.random() > 0.5 ? "#00f3ff" : "#bc13fe"} transparent opacity={Math.random() * 0.5 + 0.2} />
                </mesh>
            ))}
        </group>
    );
}

export default function Scene() {
    return (
        <Canvas
            className="h-full w-full"
            camera={{ position: [0, 0, 5] }}
            frameloop="always"
            gl={{
                preserveDrawingBuffer: false,
                powerPreference: "high-performance"
            }}
        >
            <ambientLight intensity={0.5} />
            <Stars />
        </Canvas>
    );
}








