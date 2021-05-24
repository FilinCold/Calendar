import React, {useState} from 'react'
import {Calendar, momentLocalizer} from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css';

import events from "../../events/events";
import User from "../User/User";
import {useHistory} from "react-router-dom";


const MyCalendar = () => {
  const [state, setState] = useState({events})
  const history = useHistory()
  const handleSelectSlot = ({start, end, resourceId}) => {
    const title = window.prompt('New Event name');
    console.log(`==========>state`, state.events);
    if (title) {
      setState(() => {
        return {
          events: [
            ...state.events,
            {
              end: end + '',
              start: start + '',
              title,
            },
          ],
        }
      })
    }
  }
  const localizer = momentLocalizer(moment)
  const changeStateAuthorization = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    history.push('/authentication/signin/');
  }
  return (
    <div className='wrapper__user-calendar'>
      <div className="wrapper__user">
        <User changeStateAuthorization={changeStateAuthorization}/>
      </div>
      <div className='wrapper__calendar'>
        <Calendar
          style={{minHeight: '500px'}}

          selectable="true"
          localizer={localizer}
          events={state.events}
          onSelectEvent={state.events}
          onSelectSlot={handleSelectSlot}
        />
      </div>
    </div>

  )
}

export default MyCalendar;