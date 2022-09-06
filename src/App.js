import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './app.css';
import Country from './components/Country';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Country />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
