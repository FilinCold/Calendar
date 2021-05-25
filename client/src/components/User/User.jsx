import React, { useEffect, useState } from 'react';

import { getUser } from '../../services';

const User = (props) => {
  const [user, setUser] = useState({
    id: 0,
    img: 'https://www.loyatic.eu/wp-content/uploads/2017/11/iStock_000020004182Medium1.jpg',
    firstName: '',
    email: '',
    // lastName: 'Doe',
    aboutMe: '',
  });
  useEffect(() => {
    getUser()
      .then(data => setUser({
        ...user,
        firstName: data.map(u => {
          if (u.email === localStorage.getItem('email')) {
            return u.name
          }
        }),
        aboutMe: data.map(u => {
          if (u.email === localStorage.getItem('email')) {
            return u.aboutMe
          }
        }),
        email: data.map(u => {
          if (u.email === localStorage.getItem('email')) {
            return u.email
          }
        })
      }));
  }, []);

  return (
    <div className='wrapper__user'>
      <div className="user__fName-lName">
        <div>
          <span className='fName'>Name: {user.firstName}</span>
        </div>
        <div>
          <span className='fName'>Admin: {props.admin.email[1] === 'admin@mail.ru' ? 'true' : 'false'}</span>

        </div>

        <div className="user__logout-button">
          <button onClick={props.changeStateAuthorization}>Logout</button>
        </div>
      </div>
    </div>
  );
};

export default User;