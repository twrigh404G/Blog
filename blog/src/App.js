import ButtonAppBar from './navbar'; 
import * as React from 'react';
import Blog from './blog';

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
      <Blog />
    </div>      
    );
  }
}

export default App;
