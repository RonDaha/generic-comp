import React from 'react';

export const DoubleBtn = ({ handleClick, content, styleClasses}) => {
  return (
    <div onClick={handleClick} className={'double-btn-container ' + styleClasses}>
      <div className="content-wrapper">
        {content}
      </div>
    </div>
  );
}