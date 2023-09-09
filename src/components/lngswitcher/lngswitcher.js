import React, { useState } from "react";
import './lngswitcher.css';

const LngSwitcher = () => {
  const [lng, setLng] = useState('ua');

  const handleLngChange = (e) => {
    const newLng = e.target.value;
    setLng(newLng);
  };

  return (
    <select className="form-control lng-switcher-select-style" value={lng} onChange={handleLngChange}>
      <option value="ua">UA</option>
      <option value="en">EN</option>
    </select>
  );
};

export default LngSwitcher;