import React, { Suspense, useRef }        from 'react'
import { Canvas, useLoader, useFrame  }   from '@react-three/fiber'
import { OBJLoader }                      from 'three/examples/jsm/loaders/OBJLoader'
import { pointsFromObject }               from 'lib/utils'

const Model = (props) => {

  const TextureLoader = require('three/src/loaders/TextureLoader').TextureLoader
  const obj           = useLoader(OBJLoader, 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/40480/head.obj')
  const sprite        = useLoader(TextureLoader, 'disc.png')
  const positions     = pointsFromObject(obj)
  const model         = useRef()
  
  useFrame((state, delta) => {
    model.current.rotation.y = Math.PI * (state.mouse.x  * .3)
    model.current.rotation.x = Math.PI * (state.mouse.y  * -.1)
  })

  return (
    <group ref={model} dispose={null}>
      <mesh>
        <points scale={.2 * 5}>
          <bufferGeometry attach="geometry">
            <bufferAttribute attachObject={["attributes", "position"]} count={positions.length / 3} array={positions} itemSize={3} />
          </bufferGeometry>
          <pointsMaterial attach="material" size={.03} map={sprite} color={0x888888} />
        </points>
      </mesh>
      <mesh scale={.2 * 5}>
        <lineSegments>
          <edgesGeometry attach="geometry" args={[obj?.children[0]?.geometry]} />
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

export default BGObjectPoints