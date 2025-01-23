import './footer.css';
import { Link } from "react-router-dom";
import logo from './images/logo.png';

const Footer = () => {
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
            Волинська обл. Луцький р-н, с. Буяни
            comfort.frame.company@gmail.com
            <br />
            Пн-Пт 09:00 - 18:00
            +38 095 001 29 06
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
          <Link to="/cottagenewway" className="custom-link">ДАЧА ПО-НОВОМУ</Link>
          <Link to="/catalog" className="custom-link">КАТАЛОГ</Link>
          <Link to="/aboutus" className="custom-link">ПРО НАС</Link>
          <Link to="/archive" className="custom-link">АРХІВ</Link>
        </div>
        <div className='col-md-3 d-flex justify-content-center align-items-center pt-5 pb-4 custom-test'>
          <div className="buttons-info-block">
            <a href="#" className="btn btn-outline">ОБРАТИ ДІЛЯНКУ</a>
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