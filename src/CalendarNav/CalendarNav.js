import React from '../../snowpack/pkg/react.js';
export const CalendarNav = (props) => {
  const { startDate, endDate, shownDate, monthsValue } = props;
  let yearStart = shownDate.getFullYear(new Date(shownDate));
  let yearEnd = endDate.getFullYear();
  let startMonthTitle = startDate
    .toLocaleString('en-us', { month: 'short' })
    .toLowerCase();
  let endMonthTitle = endDate
    .toLocaleString('en-us', { month: 'short' })
    .toLowerCase();
  const showPrevPeriod = () => {
    if (monthsValue == '12') {
      yearStart--;
      console.log(shownDate.setFullYear(yearStart));
      props.onClick(shownDate.setFullYear(yearStart));
    } else {
      console.log(
        shownDate.setMonth(shownDate.getMonth() - parseInt(monthsValue))
      );
      props.onClick(
        shownDate.setMonth(shownDate.getMonth() - parseInt(monthsValue))
      );
    }
  };
  return /* @__PURE__ */ React.createElement(
    'div',
    {
      className: 'calendar-header',
    },
    /* @__PURE__ */ React.createElement('div', {
      className: 'prev',
      id: 'prevBtnCalendar',
      onClick: showPrevPeriod,
    }),
    /* @__PURE__ */ React.createElement(
      'div',
      {
        id: 'year-title',
        className: 'year-title',
      },
      startMonthTitle,
      ' ',
      yearStart,
      ' - ',
      endMonthTitle,
      ' ',
      yearEnd
    ),
    /* @__PURE__ */ React.createElement('div', {
      className: 'next',
      id: 'nextBtnCalendar',
    })
  );
};
