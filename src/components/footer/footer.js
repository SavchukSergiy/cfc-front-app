import './footer.css';
import { Link } from "react-router-dom";
import logo from './images/logo.png';
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer>
      <div className='row'>
        <div className='col-md-3 d-flex justify-content-center align-items-center custom-test custom-test4'>
          <Link to="/" className="navbar-brand logo">
            <img src={logo} alt="Logo" className="img-fluid" height="50%" width="50%" />
          </Link>
        </div>
        <div className='col-md-3 d-flex flex-column justify-content-center align-items-center pt-5 pb-4 custom-test custom-test3'>
          <p>
            {t('footer-address-part1')}
            <br />
            {t('footer-address-part2')}
          </p>
          <div className="d-flex justify-content-center gap-3 social-media">
            <a href="#" className="text-white icon-custom">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="#" className="text-white icon-custom">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="#" className="text-white icon-custom">
              <i className="bi bi-telegram"></i>
            </a>
            <a href="#" className="text-white icon-custom">
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </div>
        <div className='col-md-3 d-flex flex-column gap-2 pt-5 pb-4 custom-test custom-test2'>
          <Link to="/cottagenewway" className="custom-link">{t('dachanewway')}</Link>
          <Link to="/catalog" className="custom-link">{t('catalog')}</Link>
          <Link to="/aboutus" className="custom-link">{t('aboutus')}</Link>
          <Link to="/archive" className="custom-link">{t('archive')}</Link>
        </div>
        <div className='col-md-3 d-flex justify-content-center align-items-center pt-5 pb-4 custom-test'>
          <div className="buttons-info-block">
            <a href="#" className="btn btn-outline">{t('footer-btn')}</a>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-12 d-flex justify-content-center align-items-center copyright-custom'>COPYRIGHT © 2025 COMFORT FRAME</div>
      </div>
    </footer>
  );
};

export default Footer;