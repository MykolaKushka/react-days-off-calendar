import React from 'react';
import { CalendarHeader } from '../CalendarHeader';
import { PeriodSelector } from '../PeriodSelector';

export const App = () => {
  return (<>
    <main className="calendar-content">
      <div className="my-time-off mainMargin-top">

        <CalendarHeader />

        <div className="maincontent">

          <div className="calendars-box">

            <div className="calendars-select">

              <PeriodSelector />

            </div>

            <div className="calendars">
              <div id="calendar" className="calendar">
              </div>
            </div>

            <div id="calendarFilter" className="calendars-checkbox"></div>

          </div>

        </div>
      </div>
    </main>
  </>);
}