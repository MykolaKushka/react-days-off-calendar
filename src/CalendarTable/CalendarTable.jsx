import React from 'react';

export const CalendarTable = (props) => {
  const { monthsValue, startDate } = props;  
  
  let date = new Date(startDate);
  let month = date.getMonth()
  let year = parseInt(date.getFullYear());


  let monthsTables = [];
  let monthLongName = ''
  const Days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  const daysInMonth = (iMonth, iYear) => {
    return new Date(iYear, iMonth + 1, 0).getDate();
  }

  const showDaysInMonth = (month, year) => {
    let day = 1;
    let daysRows = [];
    let days = [];
    let firstDay = new Date(year, month).getDay();
    
    for (let i = 0; i < 6; i++) {
      days = [];
      for (let j = 0; j < 7; j++){
        if (i === 0 && j < firstDay) {
          days.push(
          <td key={j}></td>
          )
        }
        else if (day > daysInMonth(month, year)) {
        }
        else {
        days.push(
          <td key={j} className="day">{day}
          </td>
          )
          day++;
        }
      }
      daysRows.push(<tr key={i}>
        {days}
      </tr>)      
    }

    return daysRows;
  }

  for (let i = date.getMonth(); i < date.getMonth() + parseInt(monthsValue); i++) {
    let tempDate = new Date()
    tempDate.setMonth(month);
    monthLongName = tempDate.toLocaleString('en-us', { month: 'long' });
    monthsTables.push(
      <table className="month" key={i}>
        <thead>
          <tr><th className="month-title" colSpan="7">{monthLongName}</th></tr>
          <tr>
            {Days.map((item, index) => {
                return <th key={index} className="day-header">{item}</th>
            })}
          </tr>
        </thead>
        <tbody>
          {showDaysInMonth(month, year)}
        </tbody>
      </table>
    );
    if (month < 12) month++;
    if (month == 12) {
      year++
      month = 0;
    }
    
  }

  return (
    <div className="months-container">
        {monthsTables}
    </div>
  )
}