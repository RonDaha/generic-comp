import React, { useState } from 'react';
import {Hlink} from '../header-links/Hlink';

export const MidLogoHeader = ({ leftElement, imgElement, rightElement }) => {

  const [toggleNavbar, setToggleNavbar] = useState(false);

  const handleNavbarToggle = () => {
    setToggleNavbar(!toggleNavbar)
  }

  return (
    <div className="header-container mheader base-shadow z-index">
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
        <div className={'m-header-navbar base-shadow ' + (toggleNavbar ? 'open' : '')}>
          <Hlink content="aaaa"/>
          <Hlink content="bbbb"/>
          <Hlink content="cccc"/>
          <Hlink content="dddd"/>
          <Hlink content="ffff"/>
        </div>
      </div>
    </div>
  );
}