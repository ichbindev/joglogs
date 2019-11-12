import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import { Card } from 'reactstrap';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const CalendarComponent = (props) => {

  // USE THIS ARRAY FOR TESTING ONLY
  var events = [
    {
      title:
        '0.3 mile run today. 17 weeks til Marathon. Recovery Week : ',
      start: '2019-11-13',
      end: '2019-11-13',
      allDay: true
    },
    {
      title:
        '2.6 mile run today. 17 weeks til Marathon. Recovery Week : ',
      start: '2019-11-15',
      end: '2019-11-15',
      allDay: true
    },
    {
      title: '0.6 mile run today. 16 weeks til Marathon. ',
      start: '2019-11-17',
      end: '2019-11-17',
      allDay: true
    },
    {
      title: '2 mile run today. 16 weeks til Marathon. ',
      start: '2019-11-18',
      end: '2019-11-18',
      allDay: true
    },
    {
      title: '0.6 mile run today. 16 weeks til Marathon. ',
      start: '2019-11-20',
      end: '2019-11-20',
      allDay: true
    },
    {
      title: '4.8 mile run today. 16 weeks til Marathon. ',
      start: '2019-11-22',
      end: '2019-11-22',
      allDay: true
    },
    {
      title: '0.9 mile run today. 15 weeks til Marathon. ',
      start: '2019-11-24',
      end: '2019-11-24',
      allDay: true
    },
    {
      title: '2.8 mile run today. 15 weeks til Marathon. ',
      start: '2019-11-25',
      end: '2019-11-25',
      allDay: true
    },
    {
      title: '0.8 mile run today. 15 weeks til Marathon. ',
      start: '2019-11-27',
      end: '2019-11-27',
      allDay: true
    },
    {
      title: '6.6 mile run today. 15 weeks til Marathon. ',
      start: '2019-11-29',
      end: '2019-11-29',
      allDay: true
    },
    {
      title:
        '0.7 mile run today. 14 weeks til Marathon. Recovery Week : ',
      start: '2019-12-01',
      end: '2019-12-01',
      allDay: true
    },
    {
      title:
        '2.3 mile run today. 14 weeks til Marathon. Recovery Week : ',
      start: '2019-12-02',
      end: '2019-12-02',
      allDay: true
    },
    {
      title:
        '0.7 mile run today. 14 weeks til Marathon. Recovery Week : ',
      start: '2019-12-04',
      end: '2019-12-04',
      allDay: true
    },
    {
      title:
        '5.6 mile run today. 14 weeks til Marathon. Recovery Week : ',
      start: '2019-12-06',
      end: '2019-12-06',
      allDay: true
    },
    {
      title: '1.1 mile run today. 13 weeks til Marathon. ',
      start: '2019-12-08',
      end: '2019-12-08',
      allDay: true
    },
    {
      title: '3.5 mile run today. 13 weeks til Marathon. ',
      start: '2019-12-09',
      end: '2019-12-09',
      allDay: true
    },
    {
      title: '1 mile run today. 13 weeks til Marathon. ',
      start: '2019-12-11',
      end: '2019-12-11',
      allDay: true
    },
    {
      title: '8.4 mile run today. 13 weeks til Marathon. ',
      start: '2019-12-13',
      end: '2019-12-13',
      allDay: true
    },
    {
      title: '1.4 mile run today. 12 weeks til Marathon. ',
      start: '2019-12-15',
      end: '2019-12-15',
      allDay: true
    },
    {
      title: '4.3 mile run today. 12 weeks til Marathon. ',
      start: '2019-12-16',
      end: '2019-12-16',
      allDay: true
    },
    {
      title: '1.2 mile run today. 12 weeks til Marathon. ',
      start: '2019-12-18',
      end: '2019-12-18',
      allDay: true
    },
    {
      title: '10.2 mile run today. 12 weeks til Marathon. ',
      start: '2019-12-20',
      end: '2019-12-20',
      allDay: true
    },
    {
      title:
        '1.2 mile run today. 11 weeks til Marathon. Recovery Week : ',
      start: '2019-12-22',
      end: '2019-12-22',
      allDay: true
    },
    {
      title:
        '3.6 mile run today. 11 weeks til Marathon. Recovery Week : ',
      start: '2019-12-23',
      end: '2019-12-23',
      allDay: true
    },
    {
      title: '1 mile run today. 11 weeks til Marathon. Recovery Week : ',
      start: '2019-12-25',
      end: '2019-12-25',
      allDay: true
    },
    {
      title:
        '8.7 mile run today. 11 weeks til Marathon. Recovery Week : ',
      start: '2019-12-27',
      end: '2019-12-27',
      allDay: true
    },
    {
      title: '1.6 mile run today. 10 weeks til Marathon. ',
      start: '2019-12-29',
      end: '2019-12-29',
      allDay: true
    },
    {
      title: '5 mile run today. 10 weeks til Marathon. ',
      start: '2019-12-30',
      end: '2019-12-30',
      allDay: true
    },
    {
      title: '1.4 mile run today. 10 weeks til Marathon. ',
      start: '2020-01-01',
      end: '2020-01-01',
      allDay: true
    },
    {
      title: '12 mile run today. 10 weeks til Marathon. ',
      start: '2020-01-03',
      end: '2020-01-03',
      allDay: true
    },
    {
      title: '2.1 mile run today. 9 weeks til Marathon. ',
      start: '2020-01-05',
      end: '2020-01-05',
      allDay: true
    },
    {
      title: '6 mile run today. 9 weeks til Marathon. ',
      start: '2020-01-06',
      end: '2020-01-06',
      allDay: true
    },
    {
      title: '1.8 mile run today. 9 weeks til Marathon. ',
      start: '2020-01-08',
      end: '2020-01-08',
      allDay: true
    },
    {
      title: '13.1 mile run today. 9 weeks til Marathon. ',
      start: '2020-01-10',
      end: '2020-01-10',
      allDay: true
    },
    {
      title: '1.8 mile run today. 8 weeks til Marathon. Recovery Week : ',
      start: '2020-01-12',
      end: '2020-01-12',
      allDay: true
    },
    {
      title: '5.1 mile run today. 8 weeks til Marathon. Recovery Week : ',
      start: '2020-01-13',
      end: '2020-01-13',
      allDay: true
    },
    {
      title: '1.6 mile run today. 8 weeks til Marathon. Recovery Week : ',
      start: '2020-01-15',
      end: '2020-01-15',
      allDay: true
    },
    {
      title:
        '11.1 mile run today. 8 weeks til Marathon. Recovery Week : ',
      start: '2020-01-17',
      end: '2020-01-17',
      allDay: true
    },
    {
      title: '2.9 mile run today. 7 weeks til Marathon. ',
      start: '2020-01-19',
      end: '2020-01-19',
      allDay: true
    },
    {
      title: '7.3 mile run today. 7 weeks til Marathon. ',
      start: '2020-01-20',
      end: '2020-01-20',
      allDay: true
    },
    {
      title: '2.7 mile run today. 7 weeks til Marathon. ',
      start: '2020-01-22',
      end: '2020-01-22',
      allDay: true
    },
    {
      title: '13.1 mile run today. 7 weeks til Marathon. ',
      start: '2020-01-24',
      end: '2020-01-24',
      allDay: true
    },
    {
      title: '3.7 mile run today. 6 weeks til Marathon. ',
      start: '2020-01-26',
      end: '2020-01-26',
      allDay: true
    },
    {
      title: '8.7 mile run today. 6 weeks til Marathon. ',
      start: '2020-01-27',
      end: '2020-01-27',
      allDay: true
    },
    {
      title: '3.5 mile run today. 6 weeks til Marathon. ',
      start: '2020-01-29',
      end: '2020-01-29',
      allDay: true
    },
    {
      title: '13.1 mile run today. 6 weeks til Marathon. ',
      start: '2020-01-31',
      end: '2020-01-31',
      allDay: true
    },
    {
      title: '3.2 mile run today. 5 weeks til Marathon. Recovery Week : ',
      start: '2020-02-02',
      end: '2020-02-02',
      allDay: true
    },
    {
      title: '7.4 mile run today. 5 weeks til Marathon. Recovery Week : ',
      start: '2020-02-03',
      end: '2020-02-03',
      allDay: true
    },
    {
      title: '2.9 mile run today. 5 weeks til Marathon. Recovery Week : ',
      start: '2020-02-05',
      end: '2020-02-05',
      allDay: true
    },
    {
      title:
        '11.1 mile run today. 5 weeks til Marathon. Recovery Week : ',
      start: '2020-02-07',
      end: '2020-02-07',
      allDay: true
    },
    {
      title: '4.6 mile run today. 4 weeks til Marathon. ',
      start: '2020-02-09',
      end: '2020-02-09',
      allDay: true
    },
    {
      title: '10 mile run today. 4 weeks til Marathon. ',
      start: '2020-02-10',
      end: '2020-02-10',
      allDay: true
    },
    {
      title: '4.3 mile run today. 4 weeks til Marathon. ',
      start: '2020-02-12',
      end: '2020-02-12',
      allDay: true
    },
    {
      title: '13.1 mile run today. 4 weeks til Marathon. ',
      start: '2020-02-14',
      end: '2020-02-14',
      allDay: true
    },
    {
      title: '5.4 mile run today. 3 weeks til Marathon. ',
      start: '2020-02-16',
      end: '2020-02-16',
      allDay: true
    },
    {
      title: '11.4 mile run today. 3 weeks til Marathon. ',
      start: '2020-02-17',
      end: '2020-02-17',
      allDay: true
    },
    {
      title: '5.1 mile run today. 3 weeks til Marathon. ',
      start: '2020-02-19',
      end: '2020-02-19',
      allDay: true
    },
    {
      title: '13.1 mile run today. 3 weeks til Marathon. ',
      start: '2020-02-21',
      end: '2020-02-21',
      allDay: true
    },
    {
      title: '4.6 mile run today. 2 weeks til Marathon. Recovery Week : ',
      start: '2020-02-23',
      end: '2020-02-23',
      allDay: true
    },
    {
      title: '9.7 mile run today. 2 weeks til Marathon. Recovery Week : ',
      start: '2020-02-24',
      end: '2020-02-24',
      allDay: true
    },
    {
      title: '4.3 mile run today. 2 weeks til Marathon. Recovery Week : ',
      start: '2020-02-26',
      end: '2020-02-26',
      allDay: true
    },
    {
      title:
        '11.1 mile run today. 2 weeks til Marathon. Recovery Week : ',
      start: '2020-02-28',
      end: '2020-02-28',
      allDay: true
    },
    {
      title:
        '2.1 mile run today. 1 weeks til Marathon. 13 days til race day. You are in final prep stage : ',
      start: '2020-03-01',
      end: '2020-03-01',
      allDay: true
    },
    {
      title:
        '4.4 mile run today. 1 weeks til Marathon. 12 days til race day. You are in final prep stage : ',
      start: '2020-03-02',
      end: '2020-03-02',
      allDay: true
    },
    {
      title:
        '2 mile run today. 1 weeks til Marathon. 10 days til race day. You are in final prep stage : ',
      start: '2020-03-04',
      end: '2020-03-04',
      allDay: true
    },
    {
      title:
        '4.5 mile run today. 1 weeks til Marathon. 8 days til race day. You are in final prep stage : ',
      start: '2020-03-06',
      end: '2020-03-06',
      allDay: true
    },
    {
      title:
        '2.4 mile run today. 0 weeks til Marathon. 6 days til race day. You are in final prep stage : ',
      start: '2020-03-08',
      end: '2020-03-08',
      allDay: true
    },
    {
      title:
        '4.2 mile run today. 0 weeks til Marathon. 5 days til race day. You are in final prep stage : ',
      start: '2020-03-09',
      end: '2020-03-09',
      allDay: true
    },
    {
      title:
        '2.3 mile run today. 0 weeks til Marathon. 3 days til race day. You are in final prep stage : ',
      start: '2020-03-11',
      end: '2020-03-11',
      allDay: true
    },
    {
      title: 'Race Day! Great Job, you are ready for this! Good Luck!',
      start: '2020-03-15',
      end: '2020-03-15',
      allDay: true
    }
  ];

  return (
    <div>
      <Card style={{ height: '500pt', paddingBottom: '40px' }}>
        {/* <p>
          A test for the React Big Calendar.
        </p> */}
        <div style={{ height: '100%' }}>
          <Calendar
            // events={props.events} USE THIS FOR DYNAMIC
            events={events} //       USE THIS FOR TESTING ONLY
            startAccessor="start"
            endAccessor="end"
            defaultDate={moment().toDate()}
            localizer={localizer}
            views={['month', 'agenda']}
          />
        </div>
      </Card>
    </div>
  );
};

export default CalendarComponent;