import React, { useState } from 'react'

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
    setProfile((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setProfile((prev) => ({
          ...prev,
          profilePic: reader.result,
        }))
      }
      reader.readAsDataURL(file)
    }
  }

  const toggleEditMode = () => setIsEditMode(!isEditMode)

  const handleSave = (e) => {
    e.preventDefault()
    setIsEditMode(false)
    alert('Profile updated successfully!')
  }

  return (
    <div className="bg-gray-100 p-6 max-w-md mx-auto rounded-lg shadow-md mt-6">
      <h2 className="text-xl font-bold text-center text-gray-700 mb-6">Admin Profile</h2>

      <div className="text-center mb-6">
        <img
          src={profile.profilePic || 'https://via.placeholder.com/100'}
          alt="Profile"
          className="w-24 h-24 rounded-full mx-auto border-2 border-gray-300"
        />
      </div>

      {isEditMode ? (
        <form onSubmit={handleSave} className="space-y-4">
          <div>
            <label className="block font-semibold text-gray-600 mb-1">First Name</label>
            <input
              type="text"
              name="firstName"
              value={profile.firstName}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          <div>
            <label className="block font-semibold text-gray-600 mb-1">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={profile.lastName}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label className="block font-semibold text-gray-600 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label className="block font-semibold text-gray-600 mb-1">Phone</label>
            <input
              type="tel"
              name="phone"
              value={profile.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label className="block font-semibold text-gray-600 mb-1">Address</label>
            <input
              type="text"
              name="address"
              value={profile.address}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label className="block font-semibold text-gray-600 mb-1">Profile Picture</label>
            <input type="file" accept="image/*" onChange={handleFileChange} />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white font-semibold py-2 rounded-md hover:bg-green-700 transition"
          >
            Save Changes
          </button>
          <button
            type="button"
            onClick={toggleEditMode}
            className="w-full bg-red-500 text-white font-semibold py-2 rounded-md hover:bg-red-600 transition"
          >
            Cancel
          </button>
        </form>
      ) : (
        <div className="space-y-2 text-gray-700">
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
          <button
            onClick={toggleEditMode}
            className="w-full mt-4 bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition"
          >
            Edit Profile
          </button>
        </div>
      )}
    </div>
  )
}

export default Profile
