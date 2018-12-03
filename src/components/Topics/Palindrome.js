import React, { Component } from 'react'

class Palindrome extends Component {
    constructor() {
        super();
        this.state = {
            userInput: '',
            palindrome: ''
        }
        this.goTime = this.goTime.bind(this);
    }
    goTime() {
        let str = this.state.userInput;
        if(str.split(' ').join('').split('').reverse().join('') === str.split(' ').join('').split('').join(''))
            this.setState({palindrome: `${str} is a palindrome!`})
        else
            this.setState({palindrome: `${str} is not a palindrome!`})
    }
    render() {
        return(
            <div className="puzzleBox filterStringPB">
                <h4>Palindrome</h4>
                <input className="inputLine" onChange={e => this.setState({userInput: e.target.value})}></input>
                <button className="confirmationButton" onClick={this.goTime}>Palindrome Time</button>
                <span className="resultsBox">{this.state.palindrome}</span>
            </div>
        )
    }
}
export default Palindrome;