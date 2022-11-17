import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'


import CameraController from './CameraController'
import Phone3D from './Phone3D'
// import Email3D from './Email3D'

export default function App() {

    

    return (
        <div>
            <Canvas camera={{position: [-2, 4, 5], fov: 44}} flat>
                <CameraController />
                <Suspense fallback={null}>
                    <ambientLight intensity={0.72} />
                    <pointLight position={[2, 10, 4]} intensity={2.4} />
                    <directionalLight intensity={2} color="#e4e4e4" position={[0, 4, 12]} />
                    <directionalLight intensity={2} color="#e2e2e2" position={[-10, -2, -8]} />
                    <spotLight intensity={0.9} position={[2, 4, 24]} />
                    {/* <Email3D/> */}
                    <Phone3D/>
                    
                </Suspense>
            </Canvas>
        </div>
    )
}


