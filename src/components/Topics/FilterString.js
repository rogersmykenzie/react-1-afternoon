import React, { Component } from 'react';

class FilterString extends Component{
    constructor() {
        super();
        this.state = {
            unfilteredArray: [
                "What's wrong with your faaaaaace? ",
                "I'll let you decide...but the answer is yes. ",
                "Star Wars: The Phantom Menace was the most disappointing thing since my son. ",
                "Pro tah gon ist. ",
                "George Lucas didn't ruin my childhood - polio did. "
            ],
            userInput: '',
            filteredArray:[]
        }
        this.updateFilteredArray = this.updateFilteredArray.bind(this);
    }
    updateFilteredArray() {
        const temp = this.state.unfilteredArray;
        const filteredArray = temp.filter(val => val.includes(this.state.userInput));
        this.setState({filteredArray});
    }
    render() {
        return(
            <div className='puzzleBox filterStringPB'>
                <h4>Filter String</h4>
                <span className='puzzleText'>Original: {this.state.unfilteredArray}</span>
                <input className='inputLine' onChange={(e) => this.setState({userInput: e.target.value})}></input>
                <button className='confirmationButton' onClick={this.updateFilteredArray}>Filter String</button>
                <span className='resultsBox filterStringRB'>Filtered: {this.state.filteredArray}</span>
            </div>
        )
    }
}
export default FilterString;