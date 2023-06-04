import React from 'react'

const Profile = () => {
  return (
    <div className='profile-items'>
      <br></br>
<center><h2>Profile</h2>
      <h4>Username</h4>
      {localStorage.getItem('name')}<br></br>
      {localStorage.getItem('email')}<br></br></center>
    </div>
  )
}

export default Profile
