import { Link } from "react-router-dom";
import './header.css';
import logo from './static-files/logo.svg';
import LngSwitcher from './../lngswitcher/lngswitcher.js';
import Modal from '../modal/modal.js';
import { useTranslation } from "react-i18next";
import '../../i18n/i18n.js';


const Header = () => {

  const { t, i18n } = useTranslation();

  const changeLanguageHandle = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
  };


  function collapseNavbar() {
    var navbarCollapse = document.querySelector(".navbar-collapse");
    if (navbarCollapse.classList.contains("show")) {
      navbarCollapse.classList.remove("show");
    }
  }

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg  custom-header fixed-top">
          <Link to="/" className="navbar-brand logo" onClick={collapseNavbar}>
            <img src={logo} alt="Logo" className="img-fluid" />
          </Link>
          <span className="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <svg width="27" height="15" viewBox="0 0 27 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect y="6.35345" width="26.9997" height="2" fill="#4AABCB" />
              <rect x="13.1445" y="12.3535" width="13.8551" height="2" fill="#4AABCB" />
              <rect y="0.353455" width="26.9997" height="2" fill="#4AABCB" />
            </svg>
          </span>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto  mb-2 mb-lg-0">
              <li className="nav-item custom-li">
                <Link to="/cottagenewway" className="nav-link active fs-6" onClick={collapseNavbar}>{t('dachanewway')}</Link>
              </li>
              <li className="nav-item custom-li">
                <Link to="/catalog" className="nav-link fs-6" onClick={collapseNavbar}>{t('catalog')}</Link>
              </li>
              <li className="nav-item custom-li">
                <Link to="/archive" className="nav-link fs-6" onClick={collapseNavbar}>{t('archive')}</Link>
              </li>
              <li className="nav-item custom-li">
                <Link to="/aboutus" className="nav-link fs-6" onClick={collapseNavbar}>{t('aboutus')}</Link>
              </li>
            </ul>
            <div className="d-flex flex-column flex-lg-row right-block">
              <div className="LngSwitcherWrapper">
                <LngSwitcher onButtonClick={changeLanguageHandle} />
              </div>
              <div className="nav-item btn-write-us">
                <div className="custom-button fs-6" id="myButton" data-bs-toggle="modal" data-bs-target="#contactModal">{t('writeus')}</div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <Modal />
    </>
  );
};

export default Header;