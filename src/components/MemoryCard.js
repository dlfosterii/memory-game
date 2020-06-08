import React, { Component } from 'react';
import './MemoryCard.css';
import Logo from '../logo-wrench-white.png';



class MemoryCard extends Component {
    render() {

        return (
            <div className="MemoryCard">
                <img src={Logo}></img>                
            </div>
            
        )
    }
}

export default MemoryCard;