import axios from 'axios';
import Blog from 'blog'
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
      <h1>hello</h1>
      <Blog />
    </div>      
    );
  }
}

export default App;
