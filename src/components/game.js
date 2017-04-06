import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';

export default class Game extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            guesses: [],
            correctAnswer: Math.round(Math.random()*100),
            feedback: 'Make your guess!'
        };
    }

    resetGame(){
        this.setState({
            guesses: [],
            correctAnswer: Math.round(Math.random()*100),
            feedback: 'Make your guess!'
        });
    }
    
    guess(guess){
        guess = parseInt(guess, 10)
        if(isNaN(guess)) {
            this.setState({
                feedback: 'Please use a number'
            });
            return;
        }
        const comparison = Math.abs(guess - this.state.correctAnswer);
        if(comparison >= 50){
            this.setState({
                feedback: 'You are ice cold'
            });
        }
        else if(comparison >= 40) {
            this.setState({
                feedback: 'You are ice cold... slightly'
            });
        }
        else if(comparison >= 30) {
            this.setState({
                feedback: 'You are cold'
            });
        }
        else if(comparison >= 20) {
            this.setState({
                feedback: 'You are warm'
            });
        }
        else if(comparison >= 10) {
            this.setState({
                feedback: 'You are warmer'
            });
        }
        else if(comparison >= 1) {
            this.setState({
                feedback: 'You are super HOT'
            });
        }
        else{
            this.setState({
                feedback: 'You got it right!'
            });
        }
    }
    render(){
        return (
            <div>
                <Header aNewGame={() => this.resetGame() }/>
                <GuessSection feedback={this.state.feedback}
                    onGuess={(guess) => this.guess(guess)} />
                <GuessCount count={this.state.guesses.length} />
                <GuessList guesses={this.state.guesses} />
            </div>
        );
    }
}

