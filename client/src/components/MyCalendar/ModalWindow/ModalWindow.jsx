import React, {useState} from "react";
import {addEvent} from "../../../services";
import {useHistory} from "react-router-dom";

const ModalWindow = (props) => {
  const history = useHistory();
  const [dataEvent, setDataEvent] = useState({
    start: '',
    end: '',
    title: ''
  });

  const addEventButton = () => {
    if (props.admin.email[1] === 'admin@mail.ru') {
        let obj = {
          start: new Date(dataEvent.start),
          end: new Date(dataEvent.end),
          title: dataEvent.title
        }
        addEvent(obj)
          .then(data => props.setFlag(!props.flag))
          .then(() => history.push('/calendar/'));
      props.setCheck(false);
      }
    return false;

  };

  const dataEventChange = (e, type) => {
    console.log(`==========>e.target.value`, e.target.value);
    setDataEvent({
      ...dataEvent,
      [type]: e.target.value
    })
  };

  return (
    <div className='wrapper__modal-window'>
      <div>
        <div className='date__block'>
          <span>Начало события: </span>
          <input value={dataEvent.start}
                 onChange={(e) => {
                  dataEventChange(e, 'start')
          }} type="date" id='date-start'/>
        </div>
        <div className="date__block">
          <span>Конец события: </span>
          <input value={dataEvent.end}
                 onChange={(e) => {
                  dataEventChange(e, 'end')
          }} type="date" id='date-end'/>
        </div>
        <div className="date__block">
          <span>Title: </span>
          <input value={dataEvent.title} onChange={(e) => {dataEventChange(e, 'title')}} type="text"/>
        </div>
        <div className="date__block">
          <button onClick={addEventButton}>Добавить</button>
        </div>
      </div>

    </div>
  )
}

export default ModalWindow;
