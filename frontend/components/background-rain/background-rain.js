import React, { useRef, useState, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { OrbitControls } from "@react-three/drei"

// renderer = new THREE.WebGLRenderer();
// scene.fog = new THREE.FogExp2(0x11111f, 0.002);
// renderer.setClearColor(scene.fog.color);

// lightning??

function Particles({ pointCount }) {


    // for(let i=0;i<400;i++) {
  //   points.push(new THREE.Vector3(
  //     Math.random() * 400 -200,
  //     Math.random() * 500 - 250,
  //     Math.random() * 400 - 200
  //   ));
  // }

  // inside USEFRAME
  // rainGeo.vertices.forEach(p => {
  //   p.velocity -= 0.1 + Math.random() * 0.1;
  //   p.y += p.velocity;
  //   if (p.y < -200) {
  //     p.y = 200;
  //     p.velocity = 0;
  //   }
  // });
  // rainGeo.verticesNeedUpdate = true;
  // rain.rotation.y +=0.002;

  const [positions, colors] = useMemo(() => {
    let positions = [],
      colors = []
    for (let i = 0; i < pointCount; i++) {
      // positions.push(5 - Math.random() * 10)
      // positions.push(5 - Math.random() * 10)
      // positions.push(5 - Math.random() * 10)
      positions.push(Math.random() * 400 -200)
      positions.push(Math.random() * 500 - 250)
      positions.push(Math.random() * 400 - 200)
      colors.push(1)
      colors.push(0.5)
      colors.push(0.5)
    }
    return [new Float32Array(positions), new Float32Array(colors)]
  }, [pointCount]);

  
  const attrib = useRef();
  useFrame((state, delta) => {
    positions.forEach((pos, index) => (positions[index] = pos - 0.1 + Math.random() * 0.1))
    attrib.current.needsUpdate = true;
  });
  // const hover = useCallback(e => {
  //   e.stopPropagation()
  //   attrib.current.array[e.index * 3] = 1
  //   attrib.current.array[e.index * 3 + 1] = 1
  //   attrib.current.array[e.index * 3 + 2] = 1
  //   attrib.current.needsUpdate = true
  // }, [])

  // const unhover = useCallback(e => {
  //   attrib.current.array[e.index * 3] = 1
  //   attrib.current.array[e.index * 3 + 1] = 0.5
  //   attrib.current.array[e.index * 3 + 2] = 0.5
  //   attrib.current.needsUpdate = true
  // }, [])

  return (
    <points ref={attrib}>
      <bufferGeometry attach="geometry">
        <bufferAttribute attachObject={["attributes", "position"]} count={positions.length / 3} array={positions} itemSize={3} />
        <bufferAttribute attachObject={["attributes", "color"]} count={colors.length / 3} array={colors} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial color="yellow" attach="material" vertexColors size={1.4} sizeAttenuation={false} />
    </points>
  )
}

  
const BackgroundRain = () => {

  return (
    <div style={{minHeight: '100vh', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <div style={{position: 'absolute', top: 0, right: 0, bottom: 0, left: 0}}>
        <Canvas camera={{fov: 60}}>
          <ambientLight color={0x555555} intensity={0.5} />
          <directionalLight color={0xffeedd} position={[0, 0, 1]} />
          <Particles pointCount={5000} />
          <OrbitControls />
        </Canvas>
      </div>
      <div style={{padding: '2rem', backdropFilter: 'blur(2px)'}}><h2>Making things</h2></div>
    </div>
  )

}

export default BackgroundRain