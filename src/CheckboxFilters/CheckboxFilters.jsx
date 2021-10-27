import React from 'react';

export const CheckboxFilters = (props) => {
  const { daysOff } = props;

  let data = daysOff[0];
  let checkBoxFilters = []

  let cssCheckboxesColors = ''

  // Check days off
  if (data.Data.length > 0) {
    let ids = []
    data.Data.forEach((item) => {
      let id = item.EmployeeId
      let color = item.AbsenceLabelColor;
      let name = item.EmployeeName
      if (!ids.includes(id)) {
        checkBoxFilters.push(
          <label className={"mycheckbox-2 bgcolor-" + id} key={id}>
            <input id={"employee-" + id} type="checkbox" defaultChecked />
            <span>{name}</span>
          </label>)
        cssCheckboxesColors+=
          `.calendars-checkbox .mycheckbox-2.bgcolor-${id} input:checked + span::before{
            background-color: #${color};
          }
          
          .calendars-checkbox .mycheckbox-2.bgcolor-${id} span::before{
            border-color: #${color};
          }`;
        
        ids.push(id)
      }
    })
  }
    
  return (
    <div id="calendarFilter" className="calendars-checkbox">
      <style>{ cssCheckboxesColors }</style>
      {checkBoxFilters}
    </div>
  )
}