import React, { Component } from 'react';
import './App.css';
import Profile from './Profile';
import img from "./img.jpg"
class App extends Component {
    constructor() {
        super();
        this.state = {
            fullName: "zeramdini wiem",
            profession: "etudiante",
            bio:"xyz",
            img,
            shows: true
        }
    };
    shows = () => {
        this.setState({ shows: !this.state.shows })
    };
    render() {
        return (
            <>
                { }
                {this.state.shows && 
                    (<div className='composants'>
                        <Profile src={this.state.img} fullName={this.state.fullName} profession={this.state.profession} bio={this.state.bio} />
                    </div>
                )}
                <button className={ this.state.shows ? 'success' : 'échec'} onClick={this.shows}>{this.state.shows ? 'hide me' : 'Show me'}
                </button>
            </>
        );
    }
};
export default App;