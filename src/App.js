import './styling/App.css';
import React from "react";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(3).fill(null),
        }
    }
    // @TODO Pass this function to each individual square to call once they are clicked.
    handleClicked(i) {
        const squares = this.state.squares.slice();
        if (squares[i] === true) {
            alert("You lose, button clicked already");
        }
        squares[i] = true;
        this.setState({
            squares: squares,
        })
    }

    renderSquare(i) {
        return (
            <Square
                value={this.state.squares[i]}
                onClick={() => this.handleClicked(i)}
            />
        );
    }

    render() {
        return (
            <div className="app">
                {this.renderSquare(0)}
                {this.renderSquare(1)}
                {this.renderSquare(2)}
                <button onClick={() => console.table(this.state.squares)}>Print Status</button>
            </div>
        );
    }
}

function Square(props) {
    return (
        <button className="square" onClick={props.onClick}>
        </button>
    );
}

export default App;
