import React, {Component} from 'react';
import ChangeColorButton from './ChangeColorButton';

class ColoredBlock extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            backgroundColor: "grey" ,
        };
        this.changeColor = this.changeColor.bind(this);
    }

    changeColor() {
        this.setState( (prevState) => {
            let newColor = prevState.backgroundColor === "grey" ? "black" : "grey";
            return {
                backgroundColor: newColor,
            };
        });
    }
    
    render() {
        return (
            <div style={{width: "100px", height: "100px", backgroundColor: this.state.backgroundColor}}>
                <ChangeColorButton onClick={this.changeColor} currentColor={this.state.backgroundColor} />
            </div>
        )
    }
}

export default ColoredBlock;