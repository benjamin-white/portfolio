import React, { Suspense, useRef, useState }        from 'react'
import { Canvas, useLoader, useFrame  }   from '@react-three/fiber'
import { OBJLoader }                      from 'three/examples/jsm/loaders/OBJLoader'
import { useGLTF }                        from '@react-three/drei'
import { pointsFromObject }               from 'lib/utils'

const Model = (props) => {

  const TextureLoader = require('three/src/loaders/TextureLoader').TextureLoader
  const obj           = useLoader(OBJLoader, 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/40480/head.obj')
  const sprite        = useLoader(TextureLoader, 'disc.png')
  // const positions     = pointsFromObject(obj)
  const model         = useRef()
  const [prevMouse, setPrevMouse] = useState({x: 0, y: 0});
  
  const { nodes } = useGLTF('/ico_disp_revn.glb')
  const positions     = nodes?.Icosphere?.geometry.attributes.position.array
  
  useFrame((state, delta) => {

    model.current.rotation.x -= .001 * state.mouse.x
    model.current.rotation.y -= .001 * state.mouse.y

  })

  return (
    <group ref={model} dispose={null}>
      <mesh>
        <points scale={.2 * 40}>
          <bufferGeometry attach="geometry">
            <bufferAttribute attachObject={["attributes", "position"]} count={positions.length / 3} array={positions} itemSize={3} />
          </bufferGeometry>
          <pointsMaterial attach="material" size={.05} map={sprite} color={0x888888} />
        </points>
      </mesh>
      <mesh scale={.2 * 40}>
        <lineSegments>
          {/* <edgesGeometry attach="geometry" args={[obj?.children[0]?.geometry]} /> */}
          <edgesGeometry attach="geometry" args={[nodes?.Icosphere?.geometry]} />
          <lineBasicMaterial color={'white'} attach="material" />
        </lineSegments>
      </mesh>
    </group>
  )

}

const BGObjectPoints = () => {

  const root = useRef()

  return (
    <div className="u-edgeFadeY">
      <Canvas concurrent ref={root}>
        <Suspense fallback={null}>
          <Model parent={root} />
        </Suspense>
      </Canvas>
    </div>
  )

}

useGLTF.preload('/ico_disp_revn.glb')

export default BGObjectPoints