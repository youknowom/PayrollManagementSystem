import React, { useState } from 'react'
import ProfileView from './ProfileView'
import ProfileEdit from './ProfileEdit'

const Profile = () => {
  const [profile, setProfile] = useState({
    firstName: 'John',
    surname: 'Doe',
    email: 'admin@example.com',
    phone: '123-456-7890',
    image: 'https://via.placeholder.com/150',
  })
  const [isEditing, setIsEditing] = useState(false)

  const handleEdit = () => setIsEditing(true)
  const handleSave = (updatedProfile) => {
    setProfile(updatedProfile)
    setIsEditing(false)
  }

  return (
    <div className="profile-container">
      {isEditing ? (
        <ProfileEdit profile={profile} onSave={handleSave} />
      ) : (
        <ProfileView profile={profile} onEdit={handleEdit} />
      )}
    </div>
  )
}

export default Profile
