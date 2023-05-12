import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Scoreboard from "./Scoreboard";
import FunFacts from "./FunFacts";
import Home from "./Home";
import Rules from "./Rules";
import Bets from "./Bets";
import Chat from "./Chat";
import Players from "./Players";


function App() {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/players" element={<Players />}></Route>
          <Route path="/rules" element={<Rules />}></Route>
          <Route path="/bets" element={<Bets />}></Route>
          <Route path="/chat" element={<Chat />}></Route>
          <Route path="/scoreboard" element={<Scoreboard />}></Route>
          <Route path="/funfacts" element={<FunFacts />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
