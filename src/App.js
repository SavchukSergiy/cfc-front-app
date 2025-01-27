import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18n from './i18n/i18n';
import Layout from './pages/Layout/Layout';
import Home from './pages/Home/Home';
import CottageNewWay from './pages/CottageNewWay/CottageNewWay';
import Catalog from './pages/Catalog/Catalog';
import Archive from './pages/Archive/Archive';
import AboutUs from './pages/AboutUs/AboutUs';
import NoPage from './pages/NoPage/NoPage';

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="cottagenewway" element={<CottageNewWay />} />
            <Route path="catalog" element={<Catalog />} />
            <Route path="archive" element={<Archive />} />
            <Route path="aboutus" element={<AboutUs />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </I18nextProvider>
  );
}

export default App;
