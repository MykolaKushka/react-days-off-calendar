import React from "../../_snowpack/pkg/react.js";
export const CalendarTable = (props) => {
  const {monthsValue, startDate} = props;
  let date = new Date(startDate);
  let month = date.getMonth();
  let year = parseInt(date.getFullYear());
  let monthsTables = [];
  let monthLongName = "";
  const Days = ["S", "M", "T", "W", "T", "F", "S"];
  const daysInMonth = (iMonth, iYear) => {
    return new Date(iYear, iMonth + 1, 0).getDate();
  };
  const showDaysInMonth = (month2, year2) => {
    let day = 1;
    let daysRows = [];
    let days = [];
    let firstDay = new Date(year2, month2).getDay();
    for (let i = 0; i < 6; i++) {
      days = [];
      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < firstDay) {
          days.push(/* @__PURE__ */ React.createElement("td", {
            key: j
          }));
        } else if (day > daysInMonth(month2, year2)) {
        } else {
          days.push(/* @__PURE__ */ React.createElement("td", {
            key: j,
            className: "day"
          }, day));
          day++;
        }
      }
      daysRows.push(/* @__PURE__ */ React.createElement("tr", {
        key: i
      }, days));
    }
    return daysRows;
  };
  for (let i = date.getMonth(); i < date.getMonth() + parseInt(monthsValue); i++) {
    let tempDate = new Date();
    tempDate.setMonth(month);
    monthLongName = tempDate.toLocaleString("en-us", {month: "long"});
    monthsTables.push(/* @__PURE__ */ React.createElement("table", {
      className: "month",
      key: i
    }, /* @__PURE__ */ React.createElement("thead", null, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", {
      className: "month-title",
      colSpan: "7"
    }, monthLongName)), /* @__PURE__ */ React.createElement("tr", null, Days.map((item, index) => {
      return /* @__PURE__ */ React.createElement("th", {
        key: index,
        className: "day-header"
      }, item);
    }))), /* @__PURE__ */ React.createElement("tbody", null, showDaysInMonth(month, year))));
    if (month < 12)
      month++;
    if (month == 12) {
      year++;
      month = 0;
    }
  }
  return /* @__PURE__ */ React.createElement("div", {
    className: "months-container"
  }, monthsTables);
};
