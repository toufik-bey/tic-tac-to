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
    const status = 'Next player: X';

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


export default Game;