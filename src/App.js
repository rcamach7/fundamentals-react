import './styling/App.css';
import React from "react";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(2).fill(null),
        }
    }
    // @TODO Pass this function to each individual square to call once they are clicked.
    handleClicked(i) {
        const squares = this.state.squares.slice();
        squares[i] = true;
        this.setState({
            squares: squares,
        })
    }

    renderSquare(i) {
        return (
            <Square value={this.state.squares[i]}/>
        );
    }

    render() {
        return (
            <div className="app">
                {this.renderSquare(1)}
                {this.renderSquare(1)}
                {console.table(this.state.squares)}
            </div>
        );
    }
}

function Square(props) {
    return (
        <button className="square">
            {props.value}
        </button>
    );
}

export default App;
