import './App.css';
import {Route} from "react-router-dom";
import Players from "./Players";
import Rules from "./Rules";
import Bets from "./Bets";
import Chat from "./Chat";
import Scoreboard from "./Scoreboard";
import FunFacts from "./FunFacts";
import {Link} from "react-router-dom";


function Home() {
    const buttons = [
        { label: 'Players', url: '/players', color: 'red' },
        { label: 'Fun Facts', url: '/funfacts', color: 'blue' },
        { label: 'Bets', url: '/bets', color: 'purple' },
        { label: 'Rules', url: '/rules', color: 'brown' },
        { label: 'Chat', url: '/chat', color: 'orange' },
        { label: 'Scoreboard', url: '/scoreboard', color: 'green' }
    ];

    return (
        <div className="home">
            <p>Home</p>
            <div className="button-layout">

                {buttons.map((button, index) => (
                    <Link key={index} to={button.url}>
                        <button style={{color: button.color} } className="medium-button">{button.label}</button>
                    </Link>
                ))}

            </div>
        </div>
    );
}

export default Home;
