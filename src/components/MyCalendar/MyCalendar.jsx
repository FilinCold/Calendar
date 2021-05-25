import React, { useEffect, useState } from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import {useHistory} from 'react-router-dom';

import User from '../User/User';
import {
  addEvent,
  editEvent,
  getEvent,
  getUser
} from '../../services';

import './MyCalendar.scss';

const MyCalendar = () => {
  const history = useHistory();
  const [state, setState] = useState(() => {
    return {
      events: [
        {
          start: '',
          end: '',
          title: "ccc"
        }
      ]
    }
  });
  const [flag, setFlag] = useState(false);
  const [admin, setAdmin] = useState({
    email: ''
  });

  const localizer = momentLocalizer(moment);

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
  }, [flag]);

  const handleSelectSlot = ({start, end, resourceId, box}) => {
    if (admin.email[1] === 'admin@mail.ru') {
      const title = window.prompt('New Event name');
      if (title) {
        let obj = {
          start: new Date(start),
          end: new Date(end),
          title
        }
        addEvent(obj)
          .then(data => setFlag(!flag))
          .then(() => history.push('/calendar/'));
      }
    }
    return false;
  };

  const selectEvent = (event) => {
    if (admin.email[1] === 'admin@mail.ru') {
      const title = window.prompt('New Event name');
      editEvent({_id: event._id, title})
        .then(data => data)
        .then(() => setFlag(!flag))
    }
  };

  const changeStateAuthorization = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    history.push('/authentication/signin/');
  };

  return (
    <div className='wrapper__user-calendar'>
      <div className="wrapper__user">
        <User admin={admin} changeStateAuthorization={changeStateAuthorization}/>
      </div>
      <div className='wrapper__calendar'>

        <Calendar
          style={{minHeight: '500px'}}
          selectable
          localizer={localizer}
          events={state.events.map(event => ({
            ...event,
            start: new Date(event.start),
            end: new Date(event.end),
          }))}
          defaultDate={new Date()}
          onSelectEvent={selectEvent}
          onSelectSlot={handleSelectSlot}
          views={['month', 'week', 'day']}
          messages={{
            next: 'Следующий',
            previous: 'Предыдущий',
            today: 'Сегодня',
            month: 'Месяц',
            week: 'Неделя',
            day: 'День',
            work_week: 'Рабочая неделя',
            allDay: 'Весь день',
            yesterday: 'Вчера',
            tomorrow: 'Завтра',
            noEventsInRange: 'Не найдено никаких мероприятий в текущем периоде.',
          }}
        />
      </div>
    </div>
  );
};

export default MyCalendar;
