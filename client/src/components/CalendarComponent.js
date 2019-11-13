import React, { Component } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import { Card } from 'reactstrap';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

class CalendarComponent extends Component {

  getCalendar = () => {
    if (this.props.events) {
      return (
        <Card style={{ height: '500pt', paddingBottom: '40px' }}>
          <div style={{ height: '100%' }}>
            <Calendar
              events={this.props.events}
              // events={events} //       USE THIS FOR TESTING ONLY
              startAccessor="start"
              endAccessor="end"
              defaultDate={moment().toDate()}
              localizer={localizer}
              views={['month', 'agenda']}
            />
          </div>
        </Card>
      )
    } else {
      return <div>Calendar Not Found</div>
    }
  }

  render() { 
    return (
    <div>
      
    </div>
    );
  };
}

export default CalendarComponent;