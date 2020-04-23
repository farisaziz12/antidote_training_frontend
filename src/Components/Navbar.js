import React from 'react'
import '../CSS/Navbar.css'
import ProfileAvatar from './ProfileAvatar'

export default function Navbar() {
    return (
        <div className='navbar'>
            <div className='nav-items'>

            </div>
            <div className='profile-icon'>
                <ProfileAvatar/>
            </div>
        </div>
    )
}
