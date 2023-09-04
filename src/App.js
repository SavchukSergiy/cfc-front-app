import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout/Layout';
import Home from './pages/Home/Home';
import DachaPoNovomy from './pages/DachaPoNovomy/DachaPoNovomy';
import Catalog from './pages/Catalog/Catalog';
import Archive from './pages/Archive/Archive';
import AboutUs from './pages/AboutUs/AboutUs';
import NoPage from './pages/NoPage/NoPage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home/>}/>
        <Route path="dachaponovomy" element={<DachaPoNovomy/>}/>
        <Route path="catalog" element={<Catalog/>}/>
        <Route path="archive" element={<Archive/>}/>
        <Route path="aboutus" element={<AboutUs/>}/>
        <Route path="*" element={<NoPage/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
