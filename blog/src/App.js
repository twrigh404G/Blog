import * as React from 'react';
import ButtonAppBar from './navbar'; 
import Threehero from './Threehero'
import Blog from './blog';
import Footer from './footer';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      
    }
  }

  
  render() {
    return(
      <div>
        
        <ButtonAppBar />
        <Threehero />
        <Blog />
        <Footer />
      </div>
          
    );
  }
}

export default App;
