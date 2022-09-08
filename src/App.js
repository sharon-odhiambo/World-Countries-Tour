import { NavLink, Route, Routes } from 'react-router-dom';
import CountryItem from './components/countryitem/CountryItem';
import Country from './components/country/Country';
import './app.css';

function App() {
  return (
    <>
      <nav>
        <NavLink className="navlink" to="/">
          All Countries
        </NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Country />} />
        <Route path="/CountryItem" element={<CountryItem />} />
      </Routes>
    </>
  );
}

export default App;
