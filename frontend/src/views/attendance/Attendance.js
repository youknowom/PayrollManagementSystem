import React, { useRef, useState } from 'react'
import Webcam from 'react-webcam'

const AttendanceForm = () => {
  const [attendanceData, setAttendanceData] = useState([])
  const [date, setDate] = useState('')
  const [empId, setEmpId] = useState('')
  const [inTime, setInTime] = useState('')
  const [outTime, setOutTime] = useState('')
  const [photo, setPhoto] = useState(null)
  const [isCameraOpen, setIsCameraOpen] = useState(false)
  const webcamRef = useRef(null)

  const handleCapture = () => {
    const imageSrc = webcamRef.current.getScreenshot()
    setPhoto(imageSrc)
    setIsCameraOpen(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newEntry = { date, empId, inTime, outTime, photo }
    setAttendanceData([...attendanceData, newEntry])
    resetForm()
  }

  const resetForm = () => {
    setDate('')
    setEmpId('')
    setInTime('')
    setOutTime('')
    setPhoto(null)
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center text-indigo-600">Employee Attendance</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 mb-8">
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
          className="px-4 py-2 rounded-full border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
        <input
          type="text"
          value={empId}
          onChange={(e) => setEmpId(e.target.value)}
          placeholder="Emp ID"
          required
          className="px-4 py-2 rounded-full border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
        <input
          type="time"
          value={inTime}
          onChange={(e) => setInTime(e.target.value)}
          required
          className="px-4 py-2 rounded-full border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
        <input
          type="time"
          value={outTime}
          onChange={(e) => setOutTime(e.target.value)}
          placeholder="Out Time"
          className="px-4 py-2 rounded-full border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setIsCameraOpen(true)}
            className="bg-white text-gray-800 px-6 py-2 text-sm rounded-full border shadow hover:bg-gray-100 transition"
          >
            📷 Open Camera
          </button>

          {photo && (
            <img
              src={photo}
              alt="Captured"
              className="w-16 h-16 rounded-full object-cover border border-gray-400"
            />
          )}
        </div>

        {isCameraOpen && (
          <div className="flex flex-col items-start gap-3">
            <Webcam ref={webcamRef} screenshotFormat="image/jpeg" width={150} />
            <button
              type="button"
              onClick={handleCapture}
              className="bg-blue-500 text-white px-4 py-2 rounded-full shadow hover:bg-blue-600 transition"
            >
              Capture Photo
            </button>
          </div>
        )}

        <button
          type="submit"
          className="bg-indigo-600 text-white px-8 py-2 mt-4 rounded-full font-semibold hover:bg-indigo-700 transition"
        >
          Add Attendance
        </button>
      </form>

      <h3 className="text-lg font-semibold mb-4 mt-8 text-gray-700">Attendance Records</h3>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2">Date</th>
              <th className="border px-4 py-2">Emp ID</th>
              <th className="border px-4 py-2">In Time</th>
              <th className="border px-4 py-2">Out Time</th>
              <th className="border px-4 py-2">Photo</th>
            </tr>
          </thead>
          <tbody>
            {attendanceData.map((entry, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{entry.date}</td>
                <td className="border px-4 py-2">{entry.empId}</td>
                <td className="border px-4 py-2">{entry.inTime}</td>
                <td className="border px-4 py-2">{entry.outTime}</td>
                <td className="border px-4 py-2">
                  {entry.photo && (
                    <img
                      src={entry.photo}
                      alt="Attendance"
                      className="w-12 h-12 object-cover rounded"
                    />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AttendanceForm
