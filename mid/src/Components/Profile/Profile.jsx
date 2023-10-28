import React from 'react'
import "./Profile.css";

const Profile = () => {
  return (
    <div>
        <h1>YOUR PROFILE</h1>
        <img className="im" src='https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg' alt='Profile pic'></img>
        <div className="data">Yernar Zhilkibaev</div>
        <div className="data">+7 705 777 77 77</div>
        <div className="data">Almaty, Kazakhstan</div>
    </div>
  )
}

export default Profile