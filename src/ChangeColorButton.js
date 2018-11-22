import React, { Component } from 'react';

class ChangeColorButton extends Component {

    constructor(props) {
        super(props);
        this.state = {
            numberOfClick: 0,
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        // this.setState ({
        //     numberOfClick: this.state.numberOfClick + 1,
        // });
        console.log("i was clicked!");
        this.props.onClick();
    }

    

    render() {
        return (
            <button
                onClick={this.handleClick}
            >
            I don't like {this.props.currentColor}
            </button>
        );
    }
}

export default ChangeColorButton;