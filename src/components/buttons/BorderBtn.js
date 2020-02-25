import React from 'react';

export const BorderBtn = ({ handleClick, content, styleClasses}) => {
  return (
    <div onClick={handleClick} className={'border-btn-container ' + styleClasses}>
      <div className="content-wrapper">
          {content}
      </div>
    </div>
  );
}