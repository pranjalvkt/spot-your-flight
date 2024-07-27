import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import data from './data.json'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {data.map((item)=> (
          <Card data={item} key={item.flight_id}/>
        ))}
      </header>
    </div>
  );
}

export default App;
