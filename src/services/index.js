
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

export const addPost = (data) => {
  console.log(`==========>data`, data);
  const url = `${urls.POST}post`;
  return ajaxWrapper({
    method: 'POST',
    url,
    data,
  }).then(data => data.data)
};
export const editProfile = (data) => {
  console.log(`==========>data`, data);
  const url = `${urls.USER}editprofile`;
  return ajaxWrapper({
    method: 'PUT',
    url,
    data,
  }).then(data => data.data)
};
export const getAllPosts = (data) => {
  const url = `${urls.POST}allposts`;

  return ajaxWrapper({
    method: 'GET',
    url,
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
  const url = `${urls.EVENTS}`;
  return ajaxWrapper({
    method: 'POST',
    url,
    data,
  }).then(data => data.data)
};



export const deleteOne = (id) => {
  const url = `${urls.EVENTS}/${id}`;
  return ajaxWrapper({
    method: 'DELETE',
    url,
    data: {id: id}
  }).then(data => data.data)
};

export const changeOne = (id, title) => {
  const url = `${urls.EVENTS}/${id}`;
  return ajaxWrapper({
    method: 'POST',
    url,
    data: {id: id, title}
  }).then(data => data.data)
};