import { Route, Routes } from 'react-router-dom';
import './App.css';
import LoadingScreen from './components/LoadingScreen';
import Navigation from './components/Navigation';
import AddPerson from './pages/AddPerson';
import Home from './pages/home';

function App() {
  return (
    <div className="App">
      <LoadingScreen />
      <Routes >
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/add-new-person' element={<AddPerson />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
