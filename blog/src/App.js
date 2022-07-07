import Blog from './blog'
import * as React from 'react';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  render() {
    return(
    <div>
      
      <Blog />
    </div>      
    );
  }
}

export default App;
