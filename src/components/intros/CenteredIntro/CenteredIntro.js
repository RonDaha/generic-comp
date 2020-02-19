import React from 'react';

export const CenteredIntro = ({ title, subTitle, btnComponent}) => {


  const titleToDisplay = title ? (<div className="title">{title}</div>) : null;
  const subTitleToDisplay = subTitle ? (<div className="sub-title">{subTitle}</div>) : null;
  const btnToDisplay = btnComponent ? (<div className="btn-wrapper">{btnComponent}</div>) : null;

  return (
    <div className="centered-intro-container">
      <div className="content-container">
        {titleToDisplay}
        {subTitleToDisplay}
        {btnToDisplay}
      </div>
    </div>
  )
}