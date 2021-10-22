import React, { useState } from '../../snowpack/pkg/react.js';
import { CalendarHeader } from '../CalendarHeader/index.js';
import { PeriodSelector } from '../PeriodSelector/index.js';
import { CheckboxFilters } from '../CheckboxFilters/index.js';
import { CalendarNav } from '../CalendarNav/index.js';
import { CalendarTable } from '../CalendarTable/index.js';
export const App = () => {
  const daysOff = useState({
    Data: [
      {
        EmployeeId: '97005000',
        EmployeeName: 'Denise Flanders',
        AbsenceTypeId: null,
        AbsenceStartDate: '2021-07-15T00:00:00',
        AbsenceFinishDate: '2021-07-22T00:00:00',
        AbsenceDescription: 'Annual Leave',
        AbsenceHalfStartDay: false,
        AbsenceHalfFinishDay: false,
        AbsenceRequestedDays: 6,
        AbsenceRequestedHours: 46.8,
        AbsenceState: 'Submitted',
        AbsenceLabelColor: '2CA4BF',
        AbsenceTextColor: 'ffffff',
      },
      {
        EmployeeId: '97005035',
        EmployeeName: 'Christina Hunter',
        AbsenceTypeId: null,
        AbsenceStartDate: '2021-01-05T00:00:00',
        AbsenceFinishDate: '2021-01-13T00:00:00',
        AbsenceDescription: 'Annual Leave',
        AbsenceHalfStartDay: false,
        AbsenceHalfFinishDay: false,
        AbsenceRequestedDays: 7,
        AbsenceRequestedHours: 54.6,
        AbsenceState: 'Approved',
        AbsenceLabelColor: '8CD19D',
        AbsenceTextColor: 'ffffff',
      },
      {
        EmployeeId: '97005035',
        EmployeeName: 'Christina Hunter',
        AbsenceTypeId: null,
        AbsenceStartDate: '2021-07-20T00:00:00',
        AbsenceFinishDate: '2021-07-22T00:00:00',
        AbsenceDescription: 'Annual Leave',
        AbsenceHalfStartDay: false,
        AbsenceHalfFinishDay: false,
        AbsenceRequestedDays: 3,
        AbsenceRequestedHours: 23.4,
        AbsenceState: 'Submitted',
        AbsenceLabelColor: '8CD19D',
        AbsenceTextColor: 'ffffff',
      },
      {
        EmployeeId: '97005035',
        EmployeeName: 'Christina Hunter',
        AbsenceTypeId: null,
        AbsenceStartDate: '2021-04-14T00:00:00',
        AbsenceFinishDate: '2021-04-15T00:00:00',
        AbsenceDescription: 'Annual Leave',
        AbsenceHalfStartDay: false,
        AbsenceHalfFinishDay: false,
        AbsenceRequestedDays: 2,
        AbsenceRequestedHours: 15.6,
        AbsenceState: 'Approved',
        AbsenceLabelColor: '8CD19D',
        AbsenceTextColor: 'ffffff',
      },
      {
        EmployeeId: '97005039',
        EmployeeName: 'Richard Hynes',
        AbsenceTypeId: null,
        AbsenceStartDate: '2021-01-04T00:00:00',
        AbsenceFinishDate: '2021-01-08T00:00:00',
        AbsenceDescription: 'Annual Leave',
        AbsenceHalfStartDay: false,
        AbsenceHalfFinishDay: false,
        AbsenceRequestedDays: 5,
        AbsenceRequestedHours: 39,
        AbsenceState: 'Approved',
        AbsenceLabelColor: '89bdd3',
        AbsenceTextColor: 'ffffff',
      },
      {
        EmployeeId: '97005069',
        EmployeeName: 'John Dowling',
        AbsenceTypeId: null,
        AbsenceStartDate: '2021-07-19T00:00:00',
        AbsenceFinishDate: '2021-07-19T00:00:00',
        AbsenceDescription: 'Absent Paid Leave',
        AbsenceHalfStartDay: false,
        AbsenceHalfFinishDay: false,
        AbsenceRequestedDays: 1,
        AbsenceRequestedHours: 7.8,
        AbsenceState: 'Approved',
        AbsenceLabelColor: 'e05038',
        AbsenceTextColor: 'ffffff',
      },
      {
        EmployeeId: '97005069',
        EmployeeName: 'John Dowling',
        AbsenceTypeId: null,
        AbsenceStartDate: '2021-01-04T00:00:00',
        AbsenceFinishDate: '2021-01-08T00:00:00',
        AbsenceDescription: 'Annual Leave',
        AbsenceHalfStartDay: false,
        AbsenceHalfFinishDay: false,
        AbsenceRequestedDays: 5,
        AbsenceRequestedHours: 39,
        AbsenceState: 'Approved',
        AbsenceLabelColor: 'e05038',
        AbsenceTextColor: 'ffffff',
      },
      {
        EmployeeId: '97005069',
        EmployeeName: 'John Dowling',
        AbsenceTypeId: null,
        AbsenceStartDate: '2021-01-04T00:00:00',
        AbsenceFinishDate: '2021-01-04T00:00:00',
        AbsenceDescription: 'Annual Leave',
        AbsenceHalfStartDay: false,
        AbsenceHalfFinishDay: false,
        AbsenceRequestedDays: 1,
        AbsenceRequestedHours: 7.8,
        AbsenceState: 'Approved',
        AbsenceLabelColor: 'e05038',
        AbsenceTextColor: 'ffffff',
      },
    ],
    AbsenceCalendarShiftType: '4',
    AbsenceRequestedDaysOrHours: 'Days',
    AbsenceDataCutOffYear: 2016,
    AbsenceCalendarFilter: [
      {
        Text: 'Denise Flanders',
        Value: 'EmployeeId_97005000',
        LabelColor: '2CA4BF',
        TextColor: 'ffffff',
        Id: 'AbsenceType_EmployeeId_97005000',
      },
      {
        Text: 'Christina Hunter',
        Value: 'EmployeeId_97005035',
        LabelColor: '8CD19D',
        TextColor: 'ffffff',
        Id: 'AbsenceType_EmployeeId_97005035',
      },
      {
        Text: 'Richard Hynes',
        Value: 'EmployeeId_97005039',
        LabelColor: '89bdd3',
        TextColor: 'ffffff',
        Id: 'AbsenceType_EmployeeId_97005039',
      },
      {
        Text: 'John Dowling',
        Value: 'EmployeeId_97005069',
        LabelColor: 'e05038',
        TextColor: 'ffffff',
        Id: 'AbsenceType_EmployeeId_97005069',
      },
    ],
    CalendarNationalHolidays: [
      '2021-01-01T00:00:00',
      '2021-03-17T00:00:00',
      '2021-04-05T00:00:00',
      '2021-05-03T00:00:00',
      '2021-06-07T00:00:00',
      '2021-08-02T00:00:00',
      '2021-10-25T00:00:00',
      '2021-12-27T00:00:00',
      '2021-12-28T00:00:00',
      '2022-01-03T00:00:00',
      '2022-03-17T00:00:00',
      '2022-04-18T00:00:00',
      '2022-05-02T00:00:00',
      '2022-06-06T00:00:00',
      '2022-08-01T00:00:00',
      '2022-10-31T00:00:00',
      '2022-12-26T00:00:00',
      '2022-12-27T00:00:00',
    ],
    IsThereOverlappingAbsence: true,
    ErrorMessage: null,
  });
  const [monthsValue, changeMonthSelector] = useState(12);
  let startDate = new Date();
  let [shownDate, changeShownDate] = useState(startDate);
  if (monthsValue == '3') {
    shownDate = new Date();
    startDate = new Date();
  } else if (monthsValue == '6') {
    shownDate = new Date();
    startDate = new Date();
  } else {
    startDate.setMonth(0);
    shownDate = new Date(shownDate);
    shownDate.setMonth(0);
  }
  let endDate = new Date(shownDate);
  endDate.setMonth(shownDate.getMonth() + (monthsValue - 1));
  return /* @__PURE__ */ React.createElement(
    React.Fragment,
    null,
    /* @__PURE__ */ React.createElement(
      'main',
      {
        className: 'calendar-content',
      },
      /* @__PURE__ */ React.createElement(
        'div',
        {
          className: 'my-time-off mainMargin-top',
        },
        /* @__PURE__ */ React.createElement(CalendarHeader, null),
        /* @__PURE__ */ React.createElement(
          'div',
          {
            className: 'maincontent',
          },
          /* @__PURE__ */ React.createElement(
            'div',
            {
              className: 'calendars-box',
            },
            /* @__PURE__ */ React.createElement(PeriodSelector, {
              onChange: (monthsValue2) => {
                changeMonthSelector(monthsValue2);
              },
            }),
            /* @__PURE__ */ React.createElement(
              'div',
              {
                className: 'calendars',
              },
              /* @__PURE__ */ React.createElement(
                'div',
                {
                  id: 'calendar',
                  className: 'calendar',
                },
                /* @__PURE__ */ React.createElement(CalendarNav, {
                  monthsValue,
                  startDate,
                  endDate,
                  onClick: (shownDate2) => {
                    changeShownDate(shownDate2);
                  },
                  shownDate: new Date(shownDate),
                }),
                /* @__PURE__ */ React.createElement(CalendarTable, {
                  monthsValue,
                  startDate: new Date(shownDate),
                })
              )
            ),
            /* @__PURE__ */ React.createElement(CheckboxFilters, null)
          )
        )
      )
    )
  );
};
