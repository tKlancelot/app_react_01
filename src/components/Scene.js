import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'

import Model from './Model'
import CameraController from './CameraController'

export default function App() {

    

    return (
        <div style={{ width: "28vw", height: "28vw" }}>
        <Canvas camera={{position: [0, 7, 7], fov: 42}} flat linear>
            <CameraController />
            <Suspense fallback={null}>
                <ambientLight intensity={0.56} />
                <directionalLight intensity={2.4} color="#ccb16a" position={[0, 2, 6]} />
                <directionalLight intensity={2.4} color="#ccb16a" position={[0, -4, -2]} />
                <spotLight intensity={0.9} position={[2, 4, 24]} />
                <Model/>
            </Suspense>
        </Canvas>
        </div>
    )
}


