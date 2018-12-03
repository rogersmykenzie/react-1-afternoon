import React, { Component } from 'react';

class Sum extends Component {
    constructor() {
        super();
        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        let sum = parseInt(this.state.number1) + parseInt(this.state.number2);
        console.log(this.state.number1 + " " + this.state.number2);
        this.setState({sum});
    }
    render() {
        return(
            <div className="puzzleBox sumPB">
                <h4>Sum</h4>
                <input className="inputLine" onChange={(e) => this.setState({number1: e.target.value})}></input>
                <input className="inputLine" onChange={(e) => this.setState({number2: e.target.value})}></input>
                <button className="confirmationButton" onClick={this.handleClick}>Add</button>
                <span className="resultsBox">Sum: {this.state.sum}</span>
            </div>
        )
    }
}
export default Sum;