import React, {Component} from "react";
import './App.scss';

class Button extends Component {
    render() {
        return (
            <button className="btn" onClick={this.props.onClick} style={{backgroundColor: this.props.backgroundColor}}>
                {this.props.text}</button>
        )}   
}

export default Button;