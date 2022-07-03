import './App.css';
import LoadingScreen from './components/LoadingScreen';
import Home from './pages/home';

function App() {
  return (
    <div className="App">
      <LoadingScreen />
      <Home />
    </div>
  );
}

export default App;
