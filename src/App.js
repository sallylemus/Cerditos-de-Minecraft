import './App.css';

const puerquito = "puerquito.png"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={puerquito} className="App-logo" alt="logo" />
        <p>
          Puerquitos de Minecraft
        </p>
      </header>
    </div>
  );
}

export default App;
