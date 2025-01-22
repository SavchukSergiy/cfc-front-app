import './footer.css';
import { Link } from "react-router-dom";
import logo from './images/logo.png';

const Footer = () => {
  return (
    <footer>
      <div className='row'>
        <div className='col-md-3 d-flex justify-content-center align-items-center custom-test custom-test4'>
          <Link to="/" className="navbar-brand logo">
            <img src={logo} alt="Logo" class="img-fluid" height="50%" width="50%" />
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
          <div class="d-flex justify-content-center gap-3 social-media">
            <a href="#" class="text-white icon-custom">
              <i class="bi bi-facebook"></i>
            </a>
            <a href="#" class="text-white icon-custom">
              <i class="bi bi-instagram"></i>
            </a>
            <a href="#" class="text-white icon-custom">
              <i class="bi bi-telegram"></i>
            </a>
            <a href="#" class="text-white icon-custom">
              <i class="bi bi-linkedin"></i>
            </a>
          </div>
        </div>
        <div className='col-md-3 d-flex flex-column gap-2 pt-5 pb-4 custom-test custom-test2'>
          <a href='#' className='custom-link'>ДАЧА ПО НОВОМУ</a>
          <a href='#' className='custom-link'>КАТАЛОГ</a>
          <a href='#' className='custom-link'>ПРО НАС</a>
          <a href='#' className='custom-link'>АРХІВ</a>
        </div>
        <div className='col-md-3 d-flex justify-content-center align-items-center pt-5 pb-4 custom-test'>
          <div class="buttons-info-block">
            <a href="#" class="btn btn-outline">ОБРАТИ ДІЛЯНКУ</a>
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