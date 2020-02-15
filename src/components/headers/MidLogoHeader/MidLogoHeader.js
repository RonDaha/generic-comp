import React, { useState } from 'react';

export const MidLogoHeader = ({ leftElement, imgElement, rightElement }) => {

  const [toggleNavbar, setToggleNavbar] = useState(false);

  const handleNavbarToggle = () => {
    setToggleNavbar(!toggleNavbar)
  }

  return (
    <div className="header-container mheader base-shadow">
      <div className="mheader-side mheader-left">
        {leftElement}
      </div>
      <div className="mheader-logo pointer">
        {imgElement}
      </div>
      <div className="mheader-side mheader-right">
        <div onClick={handleNavbarToggle} className={'target-burger transition pointer ' + (toggleNavbar ? 'toggled' : '')}>
          <ul className="buns">
            <li className="bun"></li>
            <li className="bun"></li>
          </ul>
        </div>
      </div>
    </div>
  );
}