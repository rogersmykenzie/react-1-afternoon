import React, { Component } from 'react'
import EvenAndOdd from '../Topics/EvenAndOdd.js'
import FilterObject from '../Topics/FilterObject.js'
import FilterString from '../Topics/FilterString'
import Palindrome from '../Topics/Palindrome'
import Sum from '../Topics/Sum';
import KaprekarsConstant from '../Topics/KaprekarsConstant'


class TopicBrowser extends Component{
    constructor() {
        super();
    }
    render() {
        return(
            <div>
                <EvenAndOdd />
                <FilterObject />
                <FilterString />
                <Palindrome />
                <Sum />
                <KaprekarsConstant />
            </div>
        )
    }
}

export default TopicBrowser;