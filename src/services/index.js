import {ajaxWrapper} from '../helpers/ajaxWrapper';
import {urls} from '../helpers/constant';

export const login = (data) => {
  const url = `${urls.USER}login`;

  return ajaxWrapper({
    method: 'POST',
    url,
    data,
  }).then(data => data.data)
};

export const registration = (data) => {
  const url = `${urls.USER}register`;

  return ajaxWrapper({
    method: 'POST',
    url,
    data,
  }).then(data => data.data)
};

export const getUser = (data) => {
  const url = `${urls.USER}getuser`;

  return ajaxWrapper({
    method: 'GET',
    url,
  }).then(data => data.data)
};

export const addEvent = (data) => {
  const url = `${urls.EVENT}addevent`;
  console.log(`==========>url`, url);
  return ajaxWrapper({
    method: 'POST',
    url,
    data
  }).then(data => data.data)
};

export const getEvent = (data) => {
  const url = `${urls.EVENT}getevent`;

  return ajaxWrapper({
    method: 'GET',
    url,
  }).then(data => data.data)
};

export const editEvent = (data) => {
  const url = `${urls.EVENT}editevent`;
  return ajaxWrapper({
    method: 'PUT',
    url,
    data
  }).then(data => data.data)
};