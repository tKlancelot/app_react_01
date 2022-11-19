import React, { useState } from 'react';
import { Suspense } from 'react'
import CameraController from './CameraController'
import { Canvas } from '@react-three/fiber'
import Phone3D from './Phone3D'
import Modal from './Modal';


export default function MyScene() {

    const [state, setState] = useState({modale : false});
    
    const handleModale = () => {
        setState({
            modale : !state.modale
        })
    }

    return (
        <div>
            <Canvas id="email3dButton" style={{width:'600px',height:'300px'}} camera={{position: [-2, 4, 5], fov: 36}} flat onDoubleClick={handleModale}>
                <CameraController />
                <Suspense fallback={null}>
                    <ambientLight intensity={0.72} />
                    <pointLight position={[2, 10, 4]} intensity={2.4} />
                    <directionalLight intensity={2} color="#e4e4e4" position={[0, 4, 12]} />
                    <directionalLight intensity={2} color="#e2e2e2" position={[-10, -2, -8]} />
                    <spotLight intensity={0.9} position={[2, 4, 24]} />
                    <Phone3D/>                    
                </Suspense>
            </Canvas>
            {(state.modale === true) && <Modal modaleState={state.modale} updateModaleState={setState}/>}
        </div>
    )
}


