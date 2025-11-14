import React from "react";
import { useState, useEffect } from 'react';

export default function Board() {
    const initialSquareState = [
        {
            boxID: 1,
            value: "",
            hasBeenClicked: false
        },
        {
            boxID: 2,
            value: "",
            hasBeenClicked: false
        },
        {
            boxID: 3,
            value: "",
            hasBeenClicked: false
        },
        {
            boxID: 4,
            value: "",
            hasBeenClicked: false
        },
        {
            boxID: 5,
            value: "",
            hasBeenClicked: false
        },
        {
            boxID: 6,
            value: "",
            hasBeenClicked: false
        },
        {
            boxID: 7,
            value: "",
            hasBeenClicked: false
        },
        {
            boxID: 8,
            value: "",
            hasBeenClicked: false
        },
        {
            boxID: 9,
            value: "",
            hasBeenClicked: false
        },
    ]

    const [currentTurn, setCurrentTurn] = useState("X");

    const [squares, setSquares] = useState(initialSquareState)

    const handleClick = (i) => {
        setSquares(prev => prev.map((sq, index) => 
            index === i
                ? {...sq, value: currentTurn === "X" ? "X" : "O" , hasBeenClicked: true}
                : sq
            )
        )
        if(currentTurn === "X"){
            setCurrentTurn("O")
        } else {
            setCurrentTurn("X")
        }
    }

    const resetGame = () => {
        setCurrentTurn("X")
        setSquares(initialSquareState)
    }

    return(
        <div id="tic-tac-toe">
            <h1>Tic Tac Toe</h1>
            <h2>Current Turn: {currentTurn}</h2>
            <div className="board">
                {squares.map(
                (e, i) => 
                <button 
                    key={squares[i].boxID} 
                    className="square"
                    disabled={squares[i].hasBeenClicked}
                    onClick={() => handleClick(i)}
                >
                    {squares[i].value}
                </button>)}
            </div>
            <button id="reset" onClick={resetGame}>Reset Game</button>
        </div>
    )
}