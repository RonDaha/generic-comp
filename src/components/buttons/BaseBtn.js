import React from 'react';

// TODO - add handleClick
export const BaseBtn = ({ content, styleClasses }) => {
  return (
    <div className={'base-btn-container ' + styleClasses}>
      <div className="content-wrapper">
        {content}
      </div>
    </div>
  );
}