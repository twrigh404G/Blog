import ReactDOM from 'react-dom';
import { useState, useRef} from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import Box from '@mui/material/Box';

const Threehero = () => {


    return(
        <Box sx={{
            width: 100,
            height: 400,
        }}>
            <Canvas>
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
            </Canvas>
        </Box>
        
        )
}

export default Threehero