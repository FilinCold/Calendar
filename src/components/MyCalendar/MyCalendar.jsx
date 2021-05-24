import React, {useEffect, useState} from 'react'
import {Calendar, momentLocalizer} from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css';

import events from "../../events/events";
import User from "../User/User";
import {useHistory} from "react-router-dom";
import {addEvent, editEvent, getEvent, getUser} from "../../services";


const MyCalendar = () => {
  const [state, setState] = useState(() => {
    return {
      events: [
        {
          start: "",
          end: "",
          title: ""
        }
      ]
    }
  });
  const [value, setValue] = useState({
    _id: '60abb9c14449498ec9fbdc45',
    title: 'CHANGED',
  });
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
    getEvent()
      .then(data => setState({
        events: data
      }))

  }, []);

  console.log(`==========>state.events`, state.events);
  const history = useHistory();

  const handleSelectSlot = ({start, end, resourceId, box}) => {

    if (admin.email[1] === 'admin@mail.ru') {

      const title = window.prompt('New Event name');
      if (title) {
        let obj = {
          start,
          end,
          title
        }
        addEvent(obj)
          .then(data => data)
          .then(() => {
            history.push('/calendar/')
          });
      }
    }
    return false;
  };
  const selectEvent = (event) => {

    const title = window.prompt('New Event name');
    setValue({
      _id: event._id,
      title: title
    })
    console.log(`==========>value`, value);
    editEvent({_id:event._id,title})
      .then(data => data);
    // console.log(`==========>event`, event);
  }


  const localizer = momentLocalizer(moment);
  const changeStateAuthorization = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    history.push('/authentication/signin/');
  }
  // console.log(`==========>value._id`, value._id);

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
          onSelectSlot={handleSelectSlot}
        />
      </div>
    </div>

  )
}

export default MyCalendar;