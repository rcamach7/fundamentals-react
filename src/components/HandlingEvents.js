import React from "react";
import "../styling/ComponentStyling.css";

class HandlingEvents extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rocket: false,
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            rocket: !this.state.rocket,
        })
    }

    render() {
        return (
            <div className="handlingEvents">
                <button onClick={this.handleClick}>
                    <p>Toggle Rocket Ship</p>
                </button>
                {this.state.rocket ? "ON" : "OFF"}
            </div>
        );
    }
}

export default HandlingEvents;