import React from 'react'
import { Link } from 'react-router-dom'

const Profile = () => {
  return (
    <div>
      Profile
      <div>
        <Link to='/'>
          link ke halaman Dashboard
        </Link>
      </div>
    </div>
  )
}

export default Profile