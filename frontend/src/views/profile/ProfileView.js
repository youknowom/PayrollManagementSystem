import React, { useState, useRef } from 'react'
import './Profile.css'
import { FaCamera, FaPencilAlt } from 'react-icons/fa' // Import the camera and pencil icons

const ProfileEdit = ({ profile, onSave }) => {
  const [firstName, setFirstName] = useState(profile.firstName)
  const [surname, setSurname] = useState(profile.surname)
  const [email, setEmail] = useState(profile.email)
  const [phone, setPhone] = useState(profile.phone)
  const [address, setAddress] = useState(profile.address || '')
  const [city, setCity] = useState(profile.city || '')
  const [state, setState] = useState(profile.state || '')
  const [zipCode, setZipCode] = useState(profile.zipCode || '')
  const [country, setCountry] = useState(profile.country || '')
  const [image, setImage] = useState(profile.image)

  const fileInputRef = useRef(null)

  // Handle profile picture change
  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setImage(URL.createObjectURL(file))
    }
  }

  const handleImageClick = () => {
    fileInputRef.current.click()
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSave({ firstName, surname, email, phone, address, city, state, zipCode, country, image })
  }

  return (
    <div className="profile-edit">
      <h2>Edit Profile</h2>
      <form onSubmit={handleSubmit}>
        {/* Profile Image Section */}
        <div className="profile-image-container" onClick={handleImageClick}>
          {image ? (
            <img src={image} alt="Profile" className="profile-image" />
          ) : (
            <div className="profile-placeholder">
              <FaCamera className="camera-icon" />
            </div>
          )}
          <FaPencilAlt className="pencil-icon" /> {/* Pencil Icon */}
        </div>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: 'none' }}
          onChange={handleImageChange}
        />

        {/* Form Fields */}
        <label>First Name:</label>
        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />

        {/* Other form fields... */}
        <button type="submit" className="save-button">
          Save Changes
        </button>
      </form>
    </div>
  )
}

export default ProfileEdit
