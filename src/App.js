import './App.css';
import './style/Countdown.css';
import Countdown from './components/Countdown';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Countdown</h1>
      </header>
      <main className="content">
        <Countdown date='2020-12-24T00:00:00' />
      </main>
    </div>
  );
}

export default App;
