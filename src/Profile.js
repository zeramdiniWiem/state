import React, { Component } from 'react'

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            min: 0,
            sec: 0,
            counteur: () => setInterval(() => {
                this.setState({

                    sec: this.state.sec === 59 ? 0 : this.state.sec+ 1,
                    min: this.state.sec === 59 ? this.state.min+ 1 :this.state.min

                });
            }, 1000)
        }
        this.time = 0
    };

    componentDidMount() {
        this.time = this.state.counteur()
    }
    componentWillUnmount() {
        clearInterval(this.time)
    }
    render() {

        return (
            <div>
              <h1>{this.props.fullName}</h1>
              <h3>{this.props.profession}</h3>
              <h3>{this.props.bio}</h3>

                <img width= "300px" height="300px" src={this.props.src} alt='wiem' />
                <p>  {this.state.min} : {this.state.sec}</p>

            </div>
        )
    }
}