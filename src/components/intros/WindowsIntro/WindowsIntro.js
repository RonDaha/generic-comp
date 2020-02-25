import React from 'react';
import { DoubleBtn } from '../../buttons/DoubleBtn';

export const WindowsIntro = () => {
  return (
    <div className="windows-intro-container">
      <div className="content-container">
        <div className="title-container">
          <div className="title">
            Welcome to something...
          </div>
          <div className="sub-title">
            And this, is the Subtitle
          </div>
        </div>
        <div className="secondary-window base-shadow"></div>
        <div className="main-window base-shadow"></div>
        <div className="btn-wrapper">
          <DoubleBtn handleClick={() => console.log('Clicked!')} content="SEE MORE" styleClasses="transition pointer"/>
        </div>
      </div>
    </div>
  );
}