import React from 'react';

export const CalendarNav = (props) => {
  const startDate = new Date();
  const year = startDate.getFullYear();
  const endDate = new Date();
  
  const monthsQuantity = parseInt(props.monthsValue);

   if (monthsQuantity == '12') {
     startDate.setMonth(0);
     endDate.setMonth(11);
  }

  const startMonthTitle = startDate
      .toLocaleString('en-us', { month: 'short' })
    .toLowerCase();
  
  const endMonthTitle = endDate
      .toLocaleString('en-us', { month: 'short' })
    .toLowerCase();

  // console.log(monthsQuantity);

  return (
    <div className="calendars">
      <div id="calendar" className="calendar">
        <div className="calendar-header">
          <div className="prev" id="prevBtnCalendar"></div>
          <div id="year-title" className="year-title">{startMonthTitle} {year} - {endMonthTitle } { year }</div>
          <div className="next" id="nextBtnCalendar"></div>
        </div>
      </div>
    </div>
    
  )
}