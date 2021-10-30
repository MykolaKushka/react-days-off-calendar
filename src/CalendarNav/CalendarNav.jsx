import React from 'react';

export const CalendarNav = (props) => {
  const { startDate, endDate, shownDate, monthsValue, daysOff } = props;
  let yearStart = shownDate.getFullYear(new Date(shownDate));
    
  let yearEnd = endDate.getFullYear()
  
  let startMonthTitle = startDate
      .toLocaleString('en-us', { month: 'short' })
    .toLowerCase();
  
  let endMonthTitle = endDate
      .toLocaleString('en-us', { month: 'short' })
    .toLowerCase();
  
  let data = daysOff[0];  
  
  const showPrevPeriod = () => {
    if (yearStart > data.AbsenceDataCutOffYear) {
      props.onClick(shownDate.setMonth(shownDate.getMonth() - parseInt(monthsValue)))
    }
    else if (yearStart == data.AbsenceDataCutOffYear && monthsValue != '12' && shownDate.getMonth() >= (monthsValue - 1)) {
      props.onClick(shownDate.setMonth(shownDate.getMonth() - parseInt(monthsValue)))
    }
    else {
      props.onClick(shownDate.setMonth(0))
    }
  }

  const showNextPeriod = () => {
    if (monthsValue == '12') {
      yearStart++
      props.onClick(shownDate.setFullYear(yearStart))
    } else {
      props.onClick(shownDate.setMonth(shownDate.getMonth() + parseInt(monthsValue)))
    }
  }

  return (
    <div className="calendar-header">
      <div className="prev" id="prevBtnCalendar" onClick={showPrevPeriod}></div>
      <div id="year-title" className="year-title">{startMonthTitle} {yearStart} - {endMonthTitle } { yearEnd }</div>
      <div className="next" id="nextBtnCalendar" onClick={showNextPeriod}></div>
    </div>
  )
}