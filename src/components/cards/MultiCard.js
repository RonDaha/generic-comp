import React from 'react';

export const MultiCard = ({handleClick, title, subTitle, styleClasses, imgElement }) => {
  return (
    <div onClick={handleClick} className={'multi-card-contaienr ' + styleClasses }>
        <div className="img-container">
          {imgElement}
        </div>
        <div className="details">
            <div className="title">{title}</div>
            <div className="subTitle">{subTitle}</div>
        </div>
    </div>
  );
}