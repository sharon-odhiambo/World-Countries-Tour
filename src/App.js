import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
