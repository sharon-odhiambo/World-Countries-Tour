import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CountryItem from './components/countryitem/CountryItem';
import Country from './components/country/Country';
import Nav from './components/Nav';
import './app.css';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Country />} />
        <Route path="/CountryItem" element={<CountryItem />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
