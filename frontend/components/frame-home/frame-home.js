import React, { Suspense } from 'react'
import { Canvas }          from '@react-three/fiber'
import Model               from '../models/wave-boards'

const FrameHome = () => 
  <Canvas concurrent>
    <ambientLight />
    <pointLight position={[10, 10, 10]} />
    <Suspense fallback={null}>
      <Model />
    </Suspense>
  </Canvas>

export default FrameHome