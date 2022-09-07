import './app.css';
import {
  BrowserRouter, Route, Routes,
} from 'react-router-dom';
import CountryItem from './components/CountryItem';
import Country from './components/Country';
// import Nav from './components/Nav';

function App() {
  return (
    <BrowserRouter>
      {/* <Nav /> */}
      <Routes>
        <Route path="/" element={<Country />} />
        <Route path="/CountryItem" element={<CountryItem />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
