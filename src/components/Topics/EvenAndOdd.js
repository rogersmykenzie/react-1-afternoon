import React, { Component } from 'react';

class EvenAndOdd extends Component {
    constructor() {
        super();
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        }
        this.updateArray = this.updateArray.bind(this);
        //  this.formatOddArray = this.formatOddArray.bind(this);
    }
    updateArray(e) {
        let newArr = this.state.userInput.split(',');
        let oddArray = newArr.filter(val => val%2===1);
        let evenArray = newArr.filter(val => val%2===0);
        for(let i = this.state.evenArray.length; i >= 0; i--) {
            evenArray.unshift(this.state.evenArray[i]);
        }
        for(let i = this.state.oddArray.length; i>=0; i--) {
            oddArray.unshift(this.state.oddArray[i]);
        }
        this.setState({evenArray});
        this.setState({oddArray});
    }
    // formatOddArray() {
    //     let str = '';
    //     this.state.oddArray.forEach(val => str+= val + ', ');
    //     console.log(str);
    //     return str;
    // }
    render() {
        return(
            <div className="puzzleBox evenAndOddPB">
                <h4>Evens and Odds</h4>
                <input className='inputLine' onChange={(e) => {this.setState({userInput:e.target.value})}}/>
                <button className='confirmationButton' onClick={this.updateArray}>Split</button>
                <span className='resultsBox'>Evens:[{this.state.evenArray}]</span>
                <span className='resultsBox'>Odds:[{this.state.oddArray}]</span>
            </div>
        )
    }
}
export default EvenAndOdd