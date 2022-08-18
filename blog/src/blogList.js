import * as React from 'react';
import Container from '@mui/material/Container';
import BlogCard from './components/card';
import axios from 'axios';

export default function Bloglist(){

    /*componenetDidMount(){
        axios.get('http://localhost:1337/uploads/275229002_3151154638538624_541697277896781263_n_af750abcaf.jpg')
        .then((res) => {console.log(res)})

    }*/
    
    return(
            <Container>
                <BlogCard />
            </Container>
        )
    
}

