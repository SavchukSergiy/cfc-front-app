import { Link } from "react-router-dom";
import './header.css';

const Header = () => {
  return (
    <header>
      <nav class="navbar navbar-expand-lg navbar-light custom-header">
        <div class="container">
          <Link to="/" className="navbar-brand">Logo</Link>

          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <svg width="27" height="15" viewBox="0 0 27 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect y="6.35345" width="26.9997" height="2" fill="#4AABCB" />
              <rect x="13.1445" y="12.3535" width="13.8551" height="2" fill="#4AABCB" />
              <rect y="0.353455" width="26.9997" height="2" fill="#4AABCB" />
            </svg>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to="/cottagenewway" className="nav-link active">Cottage new way</Link>
              </li>
              <li class="nav-item">
                <Link to="/catalog" className="nav-link">Catalog</Link>
              </li>
              <li class="nav-item">
                <Link to="/archive" className="nav-link">Archive</Link>
              </li>
              <li class="nav-item">
                <Link to="/aboutus" className="nav-link">About us</Link>
              </li>
            </ul>
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <select class="form-control">
                  <option>UA</option>
                  <option>EN</option>
                </select>
              </li>
              <li class="nav-item">
                <button class="btn btn-success ml-3">Write to us</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;