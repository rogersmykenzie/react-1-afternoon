import React, { Component } from 'react';

class FilterObject extends Component{
    constructor() {
        super();
        this.state = {
            unfilteredArray: [
                {
                name: 'Jimmy Joe',
                title: 'Hack0r',
                age: 12,
                },
                {
                name: 'Jeremy Schrader',
                age: 24,
                hairColor: 'brown'
                },
                {
                name: 'Carly Armstrong',
                title: 'CEO',
                }
            ],
            userInput: '',
            filteredArray: []
        }
        this.filterArray = this.filterArray.bind(this);
    }
    filterArray() {
        let filteredArray = this.state.unfilteredArray.filter(val => val.hasOwnProperty(this.state.userInput))
        this.setState({filteredArray});
    }
    render() {
        return(
            <div className='puzzleBox filterObjectPB'>
                <h4>Filter Object</h4>
                <span className='puzzleText'>Original Array: {JSON.stringify(this.state.unfilteredArray, null, 10)}</span>
                <input className='inputLine' onChange={(e) => this.setState({userInput: e.target.value})} />
                <button className='confirmationButton' onClick={this.filterArray}>Sort Boi</button>
                <span className='resultsBox filterObjectRB'>Updated Array: {JSON.stringify(this.state.filteredArray, null, 10)}</span>
            </div>
        )
    }
}
export default FilterObject