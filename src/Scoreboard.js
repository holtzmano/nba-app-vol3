import React from 'react';
import './App.css';


const Scoreboard = () => {
    const players = [
        { key: 1, name: 'Adam Tuil', scores: {playIn: 4, rnd1: 8, rnd2: 2, confFinals: 0, finals: 0} },
        { key: 2, name: 'Amit Ben Yacov', scores: {playIn: 4,rnd1: 8, rnd2: 0, confFinals: 0, finals: 0} },
        { key: 3, name: 'Carmel Hadar', scores: {playIn: 3,rnd1: 9, rnd2: 0, confFinals: 0, finals: 0} },
        { key: 4, name: 'Dan Medem', scores: {playIn: 3,rnd1: 7, rnd2: 0, confFinals: 0, finals: 0} },
        { key: 5, name: 'Dan Schapiro', scores: {playIn: 3,rnd1: 7, rnd2: 4, confFinals: 0, finals: 0} },
        { key: 6, name: 'Eran Efrima', scores: {playIn: 4,rnd1: 8, rnd2: 0, confFinals: 0, finals: 0} },
        { key: 7, name: 'Itay Shabtay', scores: {playIn: 4,rnd1: 7, rnd2: 0, confFinals: 0, finals: 0} },
        { key: 8, name: 'Matan Schapiro', scores: {playIn: 2,rnd1: 7, rnd2: 0, confFinals: 0, finals: 0} },
        { key: 9, name: 'Nir Schapiro', scores: {playIn: 3,rnd1: 7, rnd2: 2, confFinals: 0, finals: 0} },
        { key: 10, name: 'Omri Lux', scores: {playIn: 2,rnd1: 10, rnd2: 0, confFinals: 0, finals: 0} },
        { key: 11, name: 'Oren Holtzman', scores: {playIn: 4,rnd1: 10, rnd2: 2, confFinals: 0, finals: 0} },
        { key: 12, name: 'Roei Barkai', scores: {playIn: 3,rnd1: 10, rnd2: 0, confFinals: 0, finals: 0} },
        { key: 13, name: 'Tomer Schapiro', scores: {playIn: 2,rnd1: 10, rnd2: 0, confFinals: 0, finals: 0} },
        { key: 14, name: 'Tor Sadeh', scores: {playIn: 2,rnd1: 10, rnd2: 0, confFinals: 0, finals: 0} },
        { key: 15, name: 'Yinon Shirazi', scores: {playIn: 2,rnd1: 10, rnd2: 0, confFinals: 0, finals: 0} },
        { key: 16, name: 'Daniel Zimer', scores: {playIn: 2,rnd1: 10, rnd2: 2, confFinals: 0, finals: 0} },
    ];


    const calculateTotalScore = (player) => {
        const {playIn, rnd1, rnd2, confFinals, finals } = player.scores;
        return playIn + rnd1 + rnd2 + confFinals + finals;
    };

    const sortedPlayers = [...players].sort((a, b) => {
        return calculateTotalScore(b) - calculateTotalScore(a);
    });


    return (
        <div>
            <h2>Scoreboard</h2>
            <table className="score-table">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Play-In Score</th>
                    <th>1st Rnd Score</th>
                    <th>2nd Rnd Score</th>
                    <th>Conference Finals</th>
                    <th>Finals</th>
                    <th>Total Score</th>
                </tr>
                </thead>
                <tbody>
                {sortedPlayers.map((player) => (
                    <tr key={player.key}>
                        <td>{player.name}</td>
                        <td>{player.scores.playIn}</td>
                        <td>{player.scores.rnd1}</td>
                        <td>{player.scores.rnd2}</td>
                        <td>{player.scores.confFinals}</td>
                        <td>{player.scores.finals}</td>
                        <td>{calculateTotalScore(player)}</td>
                    </tr>
                ))}
                </tbody>

            </table>
        </div>
    );
};

export default Scoreboard;
