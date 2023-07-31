import './App.css';
import GamePanel from './components/GamePanel';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Encuentra el tesoro de Gollum</h1>
        <div>
        <GamePanel/>
        </div>
      </header>
    </div>
  );
}

export default App;
