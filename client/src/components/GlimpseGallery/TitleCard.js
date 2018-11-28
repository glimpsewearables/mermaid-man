import React from 'react';

const TitleCard = (props) => {
  const { title, date, color, cssName } = props;
  let style = { "backgroundColor": color };
  let cssNameDefault = cssName ? 'cardColor ' + cssName : 'cardColor';
  return (
      <div className={cssNameDefault} style={style}>
        <div className="colorSpan">
          <span className="cardTitleEvent">{title}</span><br/>
          <span className="cardTitleDate">{date}</span>
        </div>
      </div>
  );
};

export default TitleCard;

