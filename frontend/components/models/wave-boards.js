import React, { useRef, useState } from 'react'
import { useGLTF }       from '@react-three/drei'
import { useFrame }      from '@react-three/fiber'

export default function Model(props) {

  const [hovered, setHover] = useState(false)
  const board1 = useRef()
  const board2 = useRef()
  const board3 = useRef()
  const board4 = useRef()
  const board5 = useRef()
  const board6 = useRef()
  const board7 = useRef()
  const board8 = useRef()
  const { nodes } = useGLTF('wave-boards.glb')
  const standard  = {
    scale: .5,
    castShadow: true,
    receiveShadow: true
  }

  useFrame((state, delta) => {
    board1.current.rotation.x -= 0.01 + state.mouse.y * .01
    board2.current.rotation.x += 0.01 + state.mouse.y * .01
    board3.current.rotation.x += 0.01 + state.mouse.y * .01
    board4.current.rotation.x -= 0.01 + state.mouse.y * .01
    board5.current.rotation.x -= 0.01 + state.mouse.y * .01
    board6.current.rotation.x += 0.01 + state.mouse.y * .01
    board7.current.rotation.x -= 0.01 + state.mouse.y * .01
    board8.current.rotation.x -= 0.01 + state.mouse.y * .01
    setHover(state.mouse.y > .8 ? true : false)
  })

  return (
    <group {...props} dispose={null}>
      <mesh {...standard} ref={board1}>
        <lineSegments>
          <edgesGeometry attach="geometry" args={[nodes.Cube.geometry]} />
          <lineBasicMaterial color={hovered ? 'orange' : 'white'} attach="material" />
        </lineSegments>
      </mesh>
      <mesh {...standard} ref={board2}>
        <lineSegments>
          <edgesGeometry attach="geometry" args={[nodes.Cube007.geometry]} />
          <lineBasicMaterial color={hovered ? 'orange' : 'white'} attach="material" />
        </lineSegments>
      </mesh>
      <mesh {...standard} ref={board3}>
        <lineSegments>
          <edgesGeometry attach="geometry" args={[nodes.Cube002.geometry]} />
          <lineBasicMaterial color={hovered ? 'orange' : 'white'} attach="material" />
        </lineSegments>
      </mesh>
      <mesh {...standard} ref={board4}>
        <lineSegments>
          <edgesGeometry attach="geometry" args={[nodes.Cube005.geometry]} />
          <lineBasicMaterial color={hovered ? 'orange' : 'white'} attach="material" />
        </lineSegments>
      </mesh>
      <mesh {...standard} ref={board5}>
        <lineSegments>
          <edgesGeometry attach="geometry" args={[nodes.Cube001.geometry]} />
          <lineBasicMaterial color={hovered ? 'orange' : 'white'} attach="material" />
        </lineSegments>
      </mesh>
      <mesh {...standard} ref={board6}>
        <lineSegments>
          <edgesGeometry attach="geometry" args={[nodes.Cube006.geometry]} />
          <lineBasicMaterial color={hovered ? 'orange' : 'white'} attach="material" />
        </lineSegments>
      </mesh>
      <mesh {...standard} ref={board7}>
        <lineSegments>
          <edgesGeometry attach="geometry" args={[nodes.Cube003.geometry]} />
          <lineBasicMaterial color={hovered ? 'orange' : 'white'} attach="material" />
        </lineSegments>
      </mesh>
      <mesh {...standard} ref={board8}>
        <lineSegments>
          <edgesGeometry attach="geometry" args={[nodes.Cube004.geometry]} />
          <lineBasicMaterial color={hovered ? 'orange' : 'white'} attach="material" />
        </lineSegments>
      </mesh>
    </group>
  )

}

useGLTF.preload('wave-boards2.glb')