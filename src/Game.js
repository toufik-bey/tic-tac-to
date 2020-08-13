import React, {Component} from 'react';

import './App.css';


class Square extends React.Component {
 
  render() {
    return (
      <button
        className="square"
        onClick={() => {
          return this.props.onclick();
        }}
      >
        {this.props.value}
      </button>
    );
  }

};

class Board extends React.Component {

  constructor (props){
    super (props);
    this.state = {
      sequares : Array(9).fill(null), 
      xNext : true 
    }
  };


  handelClick (i) {

    const sequares = this.state.sequares.slice();
    if (calculateWinner(sequares)|| sequares[i]) {
      return ; 
    }
    sequares[i] = this.state.xNext ? 'X' : 'O'; 
    this.setState({

      sequares :sequares , 
      xNext : !this.state.xNext 

    });
  };

  renderSquare(i) {
    return (<Square value ={this.state.sequares[i]} 
             onclick = { () => this.handelClick(i)}
    />
    );
  }


  render() {
    const status = 'Next player: ' + (this.state.xNext ? 'X' : 'O') ;

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}
// main componnet 
class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}


function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default Game;