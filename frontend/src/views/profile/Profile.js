import React, { useState } from 'react'
import './Profile.css'

const Profile = () => {
  const [isEditMode, setIsEditMode] = useState(false)
  const [profile, setProfile] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@example.com',
    phone: '123-456-7890',
    address: '123 Main St, City, Country',
    profilePic: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }))
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setProfile((prevProfile) => ({
          ...prevProfile,
          profilePic: reader.result,
        }))
      }
      reader.readAsDataURL(file)
    }
  }

  const toggleEditMode = () => {
    setIsEditMode(!isEditMode)
  }

  const handleSave = (e) => {
    e.preventDefault()
    setIsEditMode(false)
    alert('Profile updated successfully!')
  }

  return (
    <div className="profile-container">
      <h2>Admin Profile</h2>

      <div className="profile-pic">
        <img src={profile.profilePic || 'https://via.placeholder.com/100'} alt="Profile" />
      </div>

      {isEditMode ? (
        <form onSubmit={handleSave}>
          <div className="form-group">
            <label>First Name:</label>
            <input type="text" name="firstName" value={profile.firstName} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label>Last Name:</label>
            <input type="text" name="lastName" value={profile.lastName} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label>Email:</label>
            <input type="email" name="email" value={profile.email} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label>Phone:</label>
            <input type="tel" name="phone" value={profile.phone} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label>Address:</label>
            <input type="text" name="address" value={profile.address} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label>Profile Picture:</label>
            <input type="file" accept="image/*" onChange={handleFileChange} />
          </div>

          <button type="submit" className="save-button">
            Save Changes
          </button>
          <button type="button" onClick={toggleEditMode} className="cancel-button">
            Cancel
          </button>
        </form>
      ) : (
        <div className="profile-view">
          <p>
            <strong>First Name:</strong> {profile.firstName}
          </p>
          <p>
            <strong>Last Name:</strong> {profile.lastName}
          </p>
          <p>
            <strong>Email:</strong> {profile.email}
          </p>
          <p>
            <strong>Phone:</strong> {profile.phone}
          </p>
          <p>
            <strong>Address:</strong> {profile.address}
          </p>
          <button onClick={toggleEditMode} className="edit-button">
            Edit Profile
          </button>
        </div>
      )}
    </div>
  )
}

export default Profile
