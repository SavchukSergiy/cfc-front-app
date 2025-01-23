import React, { useState } from "react";
import './lngswitcher.css';

const LngSwitcher = ({ onButtonClick }) => {

  const [lng, setLng] = useState('UA');

  const handleLngFunction = (value) => {
    setLng(value);
    onButtonClick(lng);
  };


  return (
    <div className="nav-item dropdown lng-switcher-select-style">
      <a
        className="nav-link dropdown-toggle"
        href="#"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {lng}
      </a>
      <ul className="dropdown-menu submenu-custom">
        {/* <li><a class="dropdown-item" href="#" onClick={(e) => { e.preventDefault();  handleLngFunction('UA'); }}>UA</a></li> */}
        <li><a className="dropdown-item" href="#" onClick={() => handleLngFunction('UA')}>UA</a></li>
        <li>
          {/* <a class="dropdown-item" href="#" onClick={(e) => { e.preventDefault(); handleLngFunction('EN'); }}> EN</a> */}
          <a className="dropdown-item" href="#" onClick={() => handleLngFunction('EN')}> EN</a>
        </li>
        <li>
          <a className="dropdown-item" href="#" onClick={(e) => { e.preventDefault(); handleLngFunction('PL'); }}> PL</a>
        </li>
      </ul>
    </div>
  );
};

export default LngSwitcher;