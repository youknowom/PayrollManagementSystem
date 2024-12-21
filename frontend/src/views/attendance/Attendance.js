// // import React from 'react'

// // function Attendance() {
// //   return

// //    <div className='Main'>

// //    </div>
// // }

// // export default Attendance





import './attendance.css'

// src/AttendanceForm.js
import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';

import './attendance.css'
const AttendanceForm = () => {
    const [attendanceData, setAttendanceData] = useState([]);
    const [date, setDate] = useState('');
    const [empId, setEmpId] = useState('');
    const [inTime, setInTime] = useState('');
    const [outTime, setOutTime] = useState('');
    const [photo, setPhoto] = useState(null);
    const [isCameraOpen, setIsCameraOpen] = useState(false);
    const webcamRef = useRef(null);

    const handleCapture = () => {
        const imageSrc = webcamRef.current.getScreenshot();
        setPhoto(imageSrc);
        setIsCameraOpen(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newEntry = { date, empId, inTime, outTime, photo };
        setAttendanceData([...attendanceData, newEntry]);
        resetForm();
    };

    const resetForm = () => {
        setDate('');
        setEmpId('');
        setInTime('');
        setOutTime('');
        setPhoto(null);
    };

    return (
        <div>
            <h2>Employee Attendance</h2>
            <form onSubmit={handleSubmit}>
                <input type="date" className='space' value={date} onChange={(e) => setDate(e.target.value)} required />
                <input type="text" className='space' value={empId} onChange={(e) => setEmpId(e.target.value)} placeholder="Emp ID" required />
                <input type="time" className='space' value={inTime} onChange={(e) => setInTime(e.target.value)} required />
                <input type="time" className='space' value={outTime} onChange={(e) => setOutTime(e.target.value)} placeholder="Out Time" />
                <button type="button" className='space  ' onClick={() => setIsCameraOpen(true)}>
                    📷
                </button>
                {isCameraOpen && (
                    <div>
                        <Webcam ref={webcamRef} screenshotFormat="image/jpeg" width={100} />
                        <button type="button" onClick={handleCapture}>Capture Photo</button>
                    </div>
                )}
                <button type="submit" className='Buttonn'>Add Attendance</button>
            </form>     

            <h3 className='up'>Attendance Records</h3>         
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Emp ID</th>
                        <th>In Time</th>
                        <th>Out Time</th>
                        <th>Photo</th>
                    </tr>
                </thead>
                <tbody>
                    {attendanceData.map((entry, index) => (
                        <tr key={index}>
                            <td>{entry.date}</td>
                            <td>{entry.empId}</td>
                            <td>{entry.inTime}</td>
                            <td>{entry.outTime}</td>
                            <td><img src={entry.photo} alt="Attendance" width={50} /></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AttendanceForm;
