import React, {useEffect, useState} from 'react'
import {Calendar, momentLocalizer} from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css';

import events from "../../events/events";
import User from "../User/User";
import {useHistory} from "react-router-dom";
import {getUser} from "../../services";


const MyCalendar = () => {
  const [state, setState] = useState({events});
  const [admin, setAdmin] = useState({
    email: ''
  });
  useEffect(() => {
    getUser()
      .then(data => setAdmin({
        ...admin,
        email: data.map(u => {
          if (u.email === localStorage.getItem('email')) {
            return u.email
          }
        })
      }));
  }, []);
  const history = useHistory();
  const handleSelectSlot = ({start, end, resourceId, box}) => {

    if (admin.email[1] === 'admin@mail.ru' ) {
      const title = window.prompt('New Event name');
      if (title) {
        setState(() => {
          return {
            events: [
              ...state.events,
              {
                end: end,
                start: start,
                title,
              },
            ],
          }
        })
      }
    }
    return false;
  };
  const selectEvent = (event) => {
    console.log(`==========>event`, event);
  }
  const localizer = momentLocalizer(moment);
  const changeStateAuthorization = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    history.push('/authentication/signin/');
  }
  
  return (
    <div className='wrapper__user-calendar'>
      <div className="wrapper__user">
        <User admin={admin} changeStateAuthorization={changeStateAuthorization}/>
      </div>
      <div className='wrapper__calendar'>
        <Calendar
          style={{minHeight: '500px'}}
          // onView={eventChange}
          selectable
          localizer={localizer}
          events={state.events}
          onSelectEvent={selectEvent}
          onSelectSlot={ handleSelectSlot }
        />
      </div>
    </div>

  )
}

export default MyCalendar;