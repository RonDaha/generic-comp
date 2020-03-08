import React, { useState, useEffect, useRef } from 'react';
import { Hlink } from '../header-links/Hlink';
import { Strail } from '../../spring-adapters';

export const MidLogoHeader = ({ leftElement, imgElement, rightElement, styleClasses }) => {

  const [toggleNavbar, setToggleNavbar] = useState(false);
  const handleNavbarToggle = () => {
    setToggleNavbar(!toggleNavbar)
  }

  const hlinks = [<Hlink key="1" content="Link One" />,
  <Hlink key="2" content="Link Two" />,
  <Hlink key="3" content="Link Three" />,
  <Hlink key="4" content="Link Four" />]

  return (
    <div className={"header-container mheader base-shadow z-index " + (styleClasses ? styleClasses : '')}>
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
        <div className={'m-header-navbar ' + (toggleNavbar ? 'open' : '')}>
          <Strail stepsHieght={50} addConfig={{friction: 250, mass: 12}} toggle={toggleNavbar} items={hlinks} containerClass="m-header-navbar-wrapper" />
        </div>
      </div>
    </div>
  );
}