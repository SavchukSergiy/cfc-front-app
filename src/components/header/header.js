import { Link } from "react-router-dom";
import './header.css';
import logo from './static-files/logo.svg';


const Header = () => {
  return (
    <header>
      <nav class="navbar navbar-expand-lg custom-header fixed-top">
        <div class="container">
          <Link to="/" className="navbar-brand">
            <img src={logo} alt="Logo" width="112" height="47.78" class="img-fluid" />

          </Link>

          <span class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <svg width="27" height="15" viewBox="0 0 27 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect y="6.35345" width="26.9997" height="2" fill="#4AABCB" />
              <rect x="13.1445" y="12.3535" width="13.8551" height="2" fill="#4AABCB" />
              <rect y="0.353455" width="26.9997" height="2" fill="#4AABCB" />
            </svg>
          </span>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto  mb-2 mb-lg-0">
              <li class="nav-item custom-li">
                <Link to="/cottagenewway" className="nav-link active fs-6 ">ДАЧА ПО-НОВОМУ</Link>
              </li>
              <li class="nav-item custom-li">
                <Link to="/catalog" className="nav-link fs-6">КАТАЛОГ</Link>
              </li>
              <li class="nav-item custom-li">
                <Link to="/archive" className="nav-link fs-6">АРХІВ</Link>
              </li>
              <li class="nav-item custom-li">
                <Link to="/aboutus" className="nav-link fs-6">ПРО НАС</Link>
              </li>
            </ul>
            <ul class="navbar-nav ml-auto">
              <li class="nav-item custom-li fs-6">
                <li class="nav-item">
                  <select class="form-select mt-1">
                    <option>UA</option>
                    <option>EN</option>
                  </select>
                </li>
              </li>
              <li class="nav-item btn-write-us">
                <div class="custom-button fs-6" id="myButton">НАПИШІТЬ НАМ</div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;