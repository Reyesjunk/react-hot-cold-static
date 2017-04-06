import React from 'react';

import TopNav from './top-nav';
import InfoModal from './info-modal';

export default class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            showModal: false
        };
    }

    toggleModal(){
        this.setState({
            showModal: !this.state.showModal
        });
    }
    render() {
        let infoModal;
        if(this.state.showModal) {
            infoModal =<InfoModal onClose{() => this.toggleModal()};
        }
        return (
            <header>
                <TopNav />
                <InfoModal /> 
                <h1>HOT or COLD</h1>
            </header>
            );
        }
};
