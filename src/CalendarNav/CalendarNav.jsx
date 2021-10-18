import React from 'react';

export const CalendarNav = (props) => {
  let monthsQuantity = parseInt(props.monthsValue);
  let startDate = new Date();
  let year = startDate.getFullYear();
  let endDate = new Date();


  if (monthsQuantity == '3') {
    endDate.setMonth(startDate.getMonth() + 2)
  } else if (monthsQuantity == '6') {
    endDate.setMonth(startDate.getMonth() + 5)
  } else {
     startDate.setMonth(0);
     endDate.setMonth(11);
  }
  
  let startMonthTitle = startDate
      .toLocaleString('en-us', { month: 'short' })
    .toLowerCase();
  
  let endMonthTitle = endDate
      .toLocaleString('en-us', { month: 'short' })
    .toLowerCase();

  // console.log(monthsQuantity);

  return (
    <div className="calendar-header">
      <div className="prev" id="prevBtnCalendar"></div>
      <div id="year-title" className="year-title">{startMonthTitle} {year} - {endMonthTitle } { year }</div>
      <div className="next" id="nextBtnCalendar"></div>
    </div>
  )
}