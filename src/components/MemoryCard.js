import React from 'react';
import './MemoryCard.css';
import Logo from '../logo-wrench-white.png';



class MemoryCard extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = { isFlipped: false };
    // }

    // clickHandler = () => {
    //     this.setState({ isFlipped: !this.state.isFlipped }
    //         ,() => {
    //             console.log(this.state)
    //         });
    //     // alert('card clicked:', this);
    // }



    render() {
        let innerClass = "MemoryCard_inner";
        if (this.props.isFlipped){
            innerClass += " Flipped"
        };      
        return (
            <div className="MemoryCard" onClick={this.props.pickCard}>
                <div className={innerClass}>
                    <div className="MemoryCard_back">
                        <img src={Logo} alt=""></img>
                    </div>
        <div className="MemoryCard_front">{this.props.symbol}</div>
                </div>
            </div>
        )
    }
}

export default MemoryCard;