import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import { Card } from 'reactstrap';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const CalendarComponent = (props) => {

  return (
    <div>
      <Card style={{ height: '500pt', paddingBottom: '40px' }}>
        <div style={{ height: '100%' }}>
          <Calendar
            events={props.events}
            // events={events} //       USE THIS FOR TESTING ONLY
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