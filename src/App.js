import './App.css';
import Board from './components/Board/Board';
import Header from './components/Header/Header';



function App() {
  return (
    <div className="App">
      <h1>Alchemy Tic-Tac-Toe</h1>
      <Header />
      <Board />
    </div>
  );
}

export default App;