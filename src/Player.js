import './App.css';


function Player({ key, name, src }) {
    return (
        <div className="player">
            <h4>{name}</h4>
            <img className="player-image" src={src} />
        </div>
    );
}

export default Player;
