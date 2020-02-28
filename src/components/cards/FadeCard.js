import React from 'react';

export const FadeCard = ({ handleClick, title, content, date, styleClasses }) => {

  let dateElement = null;
  if (date) {
    dateElement = (   
        <div className="date">
          <span className="day">{date.day}</span>  
          <span className="month">{date.month}</span>  
        </div>)
  }

  return (
    <div onClick={handleClick} className={'fade-card-container ' + styleClasses}>
      {dateElement}
      <div className="content-container">
        <div className="title-container">
          <span className="title">{title}</span>
        </div>
        <div className="content">
          {content}
        </div>
      </div>

    </div>
  )
}