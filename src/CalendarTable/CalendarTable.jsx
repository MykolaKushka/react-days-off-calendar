import React from 'react';

export const CalendarTable = (props) => {
  const { monthsValue, startDate, daysOff } = props;  
  
  let date = new Date(startDate);
  date.setDate(1);
  let month = date.getMonth()
  let year = parseInt(date.getFullYear());


  let monthsTables = [];
  let monthLongName = ''
  const Days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  let data = daysOff[0];
  let dayClasses;


  // Check holydays
  let holydays = data.CalendarNationalHolidays

  holydays.forEach((item, index) => {
    item = item.slice(0, 10);
    holydays[index] = item;
  })

  const checkHolyday = (id) => {
    let bool = false
    holydays.forEach((item, index) => {
      if (holydays[index] == id) {
        bool = true;
        return bool
      }
    });
    return bool
  }

  // Add days off
  let bgColor = ''

  const checkDayOff = (id) => {
    let idDate = new Date(id);
    bgColor = ''
    data.Data.forEach((item) => {
      if (idDate >= date && idDate >= new Date(item.AbsenceStartDate.slice(0, 10)) && idDate <= new Date(item.AbsenceFinishDate.slice(0, 10))) {
        if (bgColor == '') {
          bgColor = `#${item.AbsenceLabelColor}`
        } else {
          dayClasses += ' day-multi'
        }
      }
    })
  }

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
          // Add holydays
          let id = `${year}-${month + 1 < 10 ? '0' + (month + 1) : month + 1}-${day < 10 ? '0' + day : day}`
          if (checkHolyday(id)) dayClasses = 'day day-holyday';
          else dayClasses = 'day';
          
          // Add days off
          let style = {}

          checkDayOff(id)

          days.push(
            <td key={j} className={dayClasses} id={id} style={{ backgroundColor: bgColor }}>{day}
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