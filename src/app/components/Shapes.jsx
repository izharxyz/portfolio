"use client";

import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, Float, Environment } from "@react-three/drei";
import { Suspense, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function Shapes() {
    return (
        <div className="col-span-1 -mt-9 aspect-square md:mt-0">
            <Canvas
                className="z-0"
                shadows
                gl={{ antialias: false }}
                dpr={[1, 1.5]}
                camera={{ position: [0, 0, 25], fov: 30, near: 1, far: 40 }}
            >
                <Suspense fallback={null}>
                    <Geometries />
                    <ContactShadows
                        position={[0, -3.5, 0]}
                        opacity={0.65}
                        scale={40}
                        blur={1}
                        far={9}
                    />
                    <Environment preset="studio" />
                </Suspense>
            </Canvas>
        </div>
    );
}

function Geometries() {
    const geometries = [
        {
            position: [0, 0, 0],
            r: 0.3,
            geometry: new THREE.IcosahedronGeometry(3), // ocatal diamond in the middle
        },
        {
            position: [1, -0.75, 4],
            r: 0.4,
            geometry: new THREE.CapsuleGeometry(0.5, 1.6, 2, 16), // capsule
        },
        {
            position: [-1.4, 2, -4],
            r: 0.6,
            geometry: new THREE.DodecahedronGeometry(1.5), // dodecahedron
        },
        {
            position: [-0.8, -0.75, 5],
            r: 0.3,
            geometry: new THREE.TorusGeometry(0.6, 0.25, 16, 32) // donut
        },
        {
            position: [1.6, 1.6, -4],
            r: 0.7,
            geometry: new THREE.OctahedronGeometry(1.5), // diamond
        }
        
    ]

    const materials = [
        new THREE.MeshNormalMaterial(),
        new THREE.MeshStandardMaterial({ color: 0x2ecc71, roughness: 0, metalness: 0.1 }),
        new THREE.MeshStandardMaterial({ color: 0x3498db, roughness: 0.1, metalness: 0.2 }),
        new THREE.MeshStandardMaterial({ color: 0x9b59b6, roughness: 0.2, metalness: 0.4 }),
        new THREE.MeshStandardMaterial({ color: 0xe67e22, roughness: 0.4, metalness: 0.1 }),
        new THREE.MeshStandardMaterial({ color: 0xe74c3c, roughness: 0, metalness: 0.1 }),
        new THREE.MeshStandardMaterial({ color: 0xf1c40f, roughness: 0.1, metalness: 0.2 }),
        new THREE.MeshStandardMaterial({ color: 0x34495e, roughness: 0.2, metalness: 0.4 }),
        new THREE.MeshStandardMaterial({ color: 0x16a085, roughness: 0.4, metalness: 0.1 }),
    ]

    return geometries.map(({position, r, geometry}) => (
        <Geometry 
            key={position.toString()}
            position={position.map((p) => p * 2)}
            r={r}
            geometry={geometry}
            materials={materials}
         />
    ))
}

function Geometry({r, position, geometry, materials}) {
    const mesh_ref = useRef();
    const [visible, set_visible] = useState(true);

    const starting_material = gsap.utils.random(materials);
    function handle_click(e) {
        const mesh = e.object;
        gsap.to(mesh.rotation, {
            x: `+=${gsap.utils.random(0,2)}`,
            y: `+=${gsap.utils.random(0,2)}`,
            z: `+=${gsap.utils.random(0,2)}`,
            duration: 1.3,
            ease: "elastic.out(1, 0.3)",
            yoyo: true,
        });
        mesh.material = gsap.utils.random(materials);
    }

    const handle_pointer_over = () => {
        document.body.style.cursor = "pointer";
    }
    const handle_pointer_out = () => {
        document.body.style.cursor = "default";
    }

    useEffect(() => {
        let ctx = gsap.context(
            () => {
                set_visible(true)
                gsap.from(mesh_ref.current.scale, {
                    x: 0,
                    y: 0,
                    z: 0,
                    duration: 1,
                    ease: "elastic.out(1, 0.3)",
            });
        });
        return () => ctx.revert();
    }, [])

    return (
        <group position={position} ref={mesh_ref}>
            <Float speed={5 * r} rotationIntensity={6 * r} floatIntensity={5 * r}>
                <mesh
                    geometry={geometry}
                    material={starting_material}
                    onClick={handle_click}
                    onPointerOver={handle_pointer_over}
                    onPointerOut={handle_pointer_out}
                    visible={visible}
                />
            </Float>
        </group>
    )
}