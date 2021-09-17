import React, { Component } from 'react'; 
import img from "./img.jpg"
 
class App extends React.Component {
    state = {
      person: {
        'fullName': 'Zeramdini Wiem',
        'bio': 'xyz',
        'imgsrc': img,
        'profession': "etudinate"
      },
      'shows': false
    };
    
    render() {
      return (
        <div>
          <button onClick={() => this.setState({'shows' ? false : true})}>  Show profile </button>
          
          {this.state.shows ? [ <React.Fragment>
            <h1>{this.state.person.fullName}</h1>
            <p>{this.state.person.bio}</p>
            <img src={this.state.person.imgsrc} />
            <p>{this.state.person.imgsrc}</p>
            </React.Fragment>
           ] : null}
        </div>
      );
    }
  }

    export default App