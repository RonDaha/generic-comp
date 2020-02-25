import React from 'react';

export const SlicedBtn = ({ handleClick, content, styleClasses}) => {
    return (
      <div onClick={handleClick} className={'sliced-btn-container ' + styleClasses}>
        <div className="content-wrapper">
          {content}
        </div>
      </div>
    );
}