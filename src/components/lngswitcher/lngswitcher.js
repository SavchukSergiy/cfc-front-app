import React, { useState } from "react";
import './lngswitcher.css';

const LngSwitcher = () => {
  const [lng, setLng] = useState('UA');

  const handleLngFunction = (value) => {
    setLng(value);
  };


  return (
    <div className="nav-item dropdown lng-switcher-select-style">
      <a
        class="nav-link dropdown-toggle"
        href="#"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {lng}
      </a>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#" onClick={(e) => { e.preventDefault(); handleLngFunction('UA'); }}>UA</a></li>
        <li>
          <a class="dropdown-item" href="#" onClick={(e) => { e.preventDefault(); handleLngFunction('EN'); }}> EN</a>
        </li>
      </ul>
    </div>
  );
};

export default LngSwitcher;