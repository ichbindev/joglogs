import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import { Card } from 'reactstrap';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const CalendarComponent = (props) => {

  // USE THIS ARRAY FOR TESTING ONLY
  var events = [
  { title: '4.1 mile run today. 9 weeks til Marathon. ',
    start: '2020-01-08',
    end: '2020-01-08',
    allDay: true },
  { title: '16.5 mile run today. 9 weeks til Marathon. ',
    start: '2020-01-10',
    end: '2020-01-10',
    allDay: true },
  { title: '3.5 mile run today. 8 weeks til Marathon. Recovery Week : ',
    start: '2020-01-12',
    end: '2020-01-12',
    allDay: true },
  { title: '7 mile run today. 8 weeks til Marathon. Recovery Week : ',
    start: '2020-01-13',
    end: '2020-01-13',
    allDay: true },
  { title: '3.5 mile run today. 8 weeks til Marathon. Recovery Week : ',
    start: '2020-01-15',
    end: '2020-01-15',
    allDay: true },
  { title: '14 mile run today. 8 weeks til Marathon. Recovery Week : ',
    start: '2020-01-17',
    end: '2020-01-17',
    allDay: true },
  { title: '4.5 mile run today. 7 weeks til Marathon. ',
    start: '2020-01-19',
    end: '2020-01-19',
    allDay: true },
  { title: '9 mile run today. 7 weeks til Marathon. ',
    start: '2020-01-20',
    end: '2020-01-20',
    allDay: true },
  { title: '4.5 mile run today. 7 weeks til Marathon. ',
    start: '2020-01-22',
    end: '2020-01-22',
    allDay: true },
  { title: '18 mile run today. 7 weeks til Marathon. ',
    start: '2020-01-24',
    end: '2020-01-24',
    allDay: true },
  { title: '4.9 mile run today. 6 weeks til Marathon. ',
    start: '2020-01-26',
    end: '2020-01-26',
    allDay: true },
  { title: '9.8 mile run today. 6 weeks til Marathon. ',
    start: '2020-01-27',
    end: '2020-01-27',
    allDay: true },
  { title: '4.9 mile run today. 6 weeks til Marathon. ',
    start: '2020-01-29',
    end: '2020-01-29',
    allDay: true },
  { title: '19.5 mile run today. 6 weeks til Marathon. ',
    start: '2020-01-31',
    end: '2020-01-31',
    allDay: true },
  { title: '4.1 mile run today. 5 weeks til Marathon. Recovery Week : ',
    start: '2020-02-02',
    end: '2020-02-02',
    allDay: true },
  { title: '8.3 mile run today. 5 weeks til Marathon. Recovery Week : ',
    start: '2020-02-03',
    end: '2020-02-03',
    allDay: true },
  { title: '4.1 mile run today. 5 weeks til Marathon. Recovery Week : ',
    start: '2020-02-05',
    end: '2020-02-05',
    allDay: true },
  { title: '16.6 mile run today. 5 weeks til Marathon. Recovery Week : ',
    start: '2020-02-07',
    end: '2020-02-07',
    allDay: true },
  { title: '5.6 mile run today. 4 weeks til Marathon. ',
    start: '2020-02-09',
    end: '2020-02-09',
    allDay: true },
  { title: '10.8 mile run today. 4 weeks til Marathon. ',
    start: '2020-02-10',
    end: '2020-02-10',
    allDay: true },
  { title: '5.6 mile run today. 4 weeks til Marathon. ',
    start: '2020-02-12',
    end: '2020-02-12',
    allDay: true },
  { title: '20 mile run today. 4 weeks til Marathon. ',
    start: '2020-02-14',
    end: '2020-02-14',
    allDay: true },
  { title: '6.5 mile run today. 3 weeks til Marathon. ',
    start: '2020-02-16',
    end: '2020-02-16',
    allDay: true },
  { title: '12.1 mile run today. 3 weeks til Marathon. ',
    start: '2020-02-17',
    end: '2020-02-17',
    allDay: true },
  { title: '6.5 mile run today. 3 weeks til Marathon. ',
    start: '2020-02-19',
    end: '2020-02-19',
    allDay: true },
  { title: '20 mile run today. 3 weeks til Marathon. ',
    start: '2020-02-21',
    end: '2020-02-21',
    allDay: true },
  { title: '5.5 mile run today. 2 weeks til Marathon. Recovery Week : ',
    start: '2020-02-23',
    end: '2020-02-23',
    allDay: true },
  { title:
     '10.3 mile run today. 2 weeks til Marathon. Recovery Week : ',
    start: '2020-02-24',
    end: '2020-02-24',
    allDay: true },
  { title: '5.5 mile run today. 2 weeks til Marathon. Recovery Week : ',
    start: '2020-02-26',
    end: '2020-02-26',
    allDay: true },
  { title: '17 mile run today. 2 weeks til Marathon. Recovery Week : ',
    start: '2020-02-28',
    end: '2020-02-28',
    allDay: true },
  { title:
     '3.1 mile run today. 1 weeks til Marathon. 13 days til race day. You are in final prep stage : ',
    start: '2020-03-01',
    end: '2020-03-01',
    allDay: true },
  { title:
     '5.6 mile run today. 1 weeks til Marathon. 12 days til race day. You are in final prep stage : ',
    start: '2020-03-02',
    end: '2020-03-02',
    allDay: true },
  { title:
     '3.1 mile run today. 1 weeks til Marathon. 10 days til race day. You are in final prep stage : ',
    start: '2020-03-04',
    end: '2020-03-04',
    allDay: true },
  { title:
     '8.3 mile run today. 1 weeks til Marathon. 8 days til race day. You are in final prep stage : ',
    start: '2020-03-06',
    end: '2020-03-06',
    allDay: true },
  { title:
     '1.6 mile run today. 0 weeks til Marathon. 6 days til race day. You are in final prep stage : ',
    start: '2020-03-08',
    end: '2020-03-08',
    allDay: true }
  ];

  return (
    <div>
      <Card style={{ height: '500pt', paddingBottom: '40px'}}>
        {/* <p>
          A test for the React Big Calendar.
        </p> */}
        <div style={{ height: '100%'}}>
          <Calendar
            // events={props.events} USE THIS FOR DYNAMIC
            events={events} //       USE THIS FOR TESTING ONLY
            startAccessor="start"
            endAccessor="end"
            defaultDate={moment().toDate()}
            localizer={localizer}
          />
        </div>
      </Card>
    </div>
  );
};

export default CalendarComponent;