import ReactDOM from 'react-dom';
import { useState, useRef} from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

const Threehero = ( )=> {
    


    return(
        <Box sx={{
            width: 100,
            height: 400,
        }}>
            <Typography variant="h1">Header</Typography>
            <Canvas>
                <ambientLight intensity={0.1} />
                <directionalLight color="black" position={[3, 6, 5]} />
                <mesh>
                    <boxGeometry />
                    <meshStandardMaterial />
                </mesh>
            </Canvas>
        </Box>
        
        )
}

export default Threehero