import React, { Component } from 'react';

export default class KaprekarsConstant extends Component {
    
    constructor() {
        super();
        this.state = {
            userInfo: null,
            constant: 0
        }
        this.calcConstant = this.calcConstant.bind(this);
    }

    calcConstant() {
        function sortNums(a,b) {
            return a-b;
        }
        var numTimes = 1;
        var num1 = this.state.userInfo.split('').sort(sortNums).reverse();
        var num2 = this.state.userInfo.split('').sort(sortNums);
        num1 = parseInt(num1.join(''));
        num2 = parseInt(num2.join(''));
        // console.log(num1-num2);
        while(true) {
            if(num1>num2){
                // console.log(num1);
                var num1 = num1-num2;
                // console.log(num1);   aS
                numTimes++;
                if(num1===6174) {
                    this.setState({constant: numTimes});
                    return;
                }
            } else {
                var num1 = num2-num1;
                if(num1 === 6174) {
                    this.setState({constant: numTimes});
                    return;
                }
            }
            if(numTimes > 10){
                return;
            }
            let temp = num1;
            num1 = (""+num1).split('').sort(sortNums).reverse();
            num2 = temp;
            num2 = (""+num2).split('').sort(sortNums);
            num1 = parseInt(num1.join(''));
            num2 = parseInt(num2.join(''));
            // console.log('num1 num2: ', num1, num2);
        }

        //console.log(`${num1} ${num2}`);

    }

    render() {
        return(
            <div className='puzzleBox sumPB'>
                <h4>Kaprekars Constant</h4>
                <input className='inputLine' onChange={(e) => this.setState({userInfo: e.target.value})}></input>
                <button className='confirmationButton' onClick={this.calcConstant}>Find Number of Times</button>
                <span className='resultsBox'>The Number of Times to Reach the Constant is: {this.state.constant}</span>
            </div>
        )
    }
}