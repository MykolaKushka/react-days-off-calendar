import React from 'react';

export const CalendarTable = (props) => {
  let monthsQuantity = parseInt(props.monthsValue);
  let startDate = new Date();
  let endDate = new Date();


  if (monthsQuantity == '3') {
    endDate.setMonth(startDate.getMonth() + 2)
  } else if (monthsQuantity == '6') {
    endDate.setMonth(startDate.getMonth() + 5)
  } else {
     startDate.setMonth(0);
     endDate.setMonth(11);
  }
  
  let date = new Date(startDate);
  let year = date.getFullYear()

  let monthsTables = [];
  let monthLongName = ''
  const Days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  const daysInMonth = (iMonth, iYear) => {
    return new Date(iYear, iMonth + 1, 0).getDate();
  }

  const showDaysInMonth = (month, year) => {
    let date = 1;
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
        else if (date > daysInMonth(month, year)) {
        }
        else {
        days.push(
          <td key={j} className="day">{date}
          </td>
          )
          date++;
        }
      }
      daysRows.push(<tr key={i}>
        {days}
      </tr>)      
    }

    return daysRows;
  }

  for (let i = 0; i < monthsQuantity; i++) {
    monthLongName = date.toLocaleString('en-us', { month: 'long' });
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
          {showDaysInMonth(i, year)}
        </tbody>
      </table>
    );
     if (i < monthsQuantity - 1) date.setMonth(date.getMonth() + 1);
  }

  return (
    <div className="months-container">
        {monthsTables}
    </div>
  )
}