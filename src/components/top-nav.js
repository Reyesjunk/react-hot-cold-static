import React from 'react';

export default class TopNav extends React.Component {
    info(event) {
        if(this.props.info) {
            this.props.info();
        }
    }

    newGame(event) {
        console.log('reached it')
        if(this.props.newGame) {
            this.props.newGame();
        }
    }
    
    render() {
        return (
            <nav>
                <ul className="clearfix">
                    <li>
                        <a className="what" href="#" onClick={e => this.info(e)}>
                            What?
                        </a>
                    </li>
                    <li>
                        <a className="new" href="#" onClick={e => this.newGame()}>
                            + New Game
                        </a>
                    </li>
                </ul>
            </nav>
        );
    }
}

