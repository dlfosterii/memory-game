import React from 'react';
import './MemoryCard.css';
import Logo from '../logo-wrench-white.png';



class MemoryCard extends React.Component {
    constructor(props) {
        super();
        this.state = { isFlipped: false };

    }

    clickHandler = () => {
        this.setState({ isFlipped: !this.state.isFlipped }
            ,() => {
                console.log(this.state)
            });
        // alert('card clicked:', this);
    }



    render() {
        let innerClass = "MemoryCard_inner";
        if (this.state.isFlipped){
            innerClass += " Flipped"
        };      
        return (
            <div className="MemoryCard" onClick={this.clickHandler}>
                <div className={innerClass}>
                    <div className="MemoryCard_back">
                        <img src={Logo} alt=""></img>
                    </div>
                    <div className="MemoryCard_front">∆</div>
                </div>
            </div>
        )
    }
}

export default MemoryCard;