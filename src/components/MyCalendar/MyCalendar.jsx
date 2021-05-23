import React, {useState} from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css';

import events from "../../events/events";


const MyCalendar = () => {
    const [state, setState] = useState({events})
    const handleSelectSlot = ({start,end,resourceId}) => {
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

    return (
        <div className='wrapper__calendar'>
            <Calendar
                style={{minHeight: '500px'}}

                selectable = "true"
                localizer={localizer}
                events={state.events}
                onSelectSlot={handleSelectSlot}
            />
        </div>
    )
}

export default MyCalendar;