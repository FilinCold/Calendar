import React, {useEffect, useState} from "react";
import {getUser} from "../../services";

const User = (props) => {
  const [user, setUser] = useState({
    id: 0,
    img: 'https://www.loyatic.eu/wp-content/uploads/2017/11/iStock_000020004182Medium1.jpg',
    firstName: '',
    // lastName: 'Doe',
    aboutMe: '',
  })
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
        })
      }));
  }, []);

  return (
    <div className='wrapper__user'>
      <div className="user__fName-lName">
        <span className='fName'>Name: {user.firstName}</span>
        {/*<span className="lName">{user.lastName}</span>*/}
        <div className="user__logout-button">
          <button onClick={props.changeStateAuthorization}>Logout</button>
        </div>
      </div>
    </div>
  )
}

export default User;