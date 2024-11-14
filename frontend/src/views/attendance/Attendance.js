// // import React from 'react'

// // function Attendance() {
// //   return

// //    <div className='Main'>

// //    </div>
// // }

// // export default Attendance

// // src/components/AttendanceTable.js
// import React, { useState } from 'react';
// import './attendance.css'


// const AttendanceTable = () => {
//     const [attendanceData, setAttendanceData] = useState([
//         { id: 1, name: 'John Doe', date: '2024-10-01', status: 'Present' },
//         { id: 2, name: 'Jane Smith', date: '2024-10-01', status: 'Absent' },
//         { id: 3, name: 'Alice Johnson', date: '2024-10-01', status: 'Present' },
//     ]);

//     const handleStatusChange = (id) => {
//         setAttendanceData((prevData) =>
//             prevData.map((employee) =>
//                 employee.id === id
//                     ? { ...employee, status: employee.status === 'Present' ? 'Absent' : 'Present' }
//                     : employee
//             )
//         );
//     };

//     return (
//         <div>
//             <h1>Employee Attendance</h1>
//             <table>
//                 <thead>
//                     <tr>
//                         <th>ID</th>
//                         <th>Name</th>
//                         <th>Date</th>
//                         <th>Status</th>
//                         <th>Action</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {attendanceData.map((employee) => (
//                         <tr key={employee.id}>
//                             <td>{employee.id}</td>
//                             <td>{employee.name}</td>
//                             <td>{employee.date}</td>
//                             <td>{employee.status}</td>
//                             <td>
//                                 <button onClick={() => handleStatusChange(employee.id)}>
//                                     Toggle Status
//                                 </button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default AttendanceTable;


// src/components/WeeklyAttendanceTable.js
// import React, { useState } from 'react';
// import './attendance.css'
// const WeeklyAttendanceTable = () => {
//     const initialAttendanceData = [
//         { id: 1, name: 'John Doe', week: ['Present', 'Present', 'Absent', 'Present', 'Present', 'Absent', 'Present'] },
//         { id: 2, name: 'Jane Smith', week: ['Absent', 'Present', 'Present', 'Absent', 'Present', 'Present', 'Absent'] },
//         { id: 3, name: 'Alice Johnson', week: ['Present', 'Absent', 'Present', 'Present', 'Absent', 'Present', 'Present'] },
//     ];

//     const [attendanceData, setAttendanceData] = useState(initialAttendanceData);

//     const handleStatusChange = (id, dayIndex) => {
//         setAttendanceData((prevData) =>
//             prevData.map((employee) =>
//                 employee.id === id
//                     ? {
//                         ...employee,
//                         week: employee.week.map((status, index) =>
//                             index === dayIndex ? (status === 'Present' ? 'Absent' : 'Present') : status
//                         )
//                     }
//                     : employee
//             )
//         );
//     };

//     return (
//         <div>
//             <h1>Weekly Employee Attendance</h1>
//             <table>
//                 <thead>
//                     <tr>
//                         <th>ID</th>
//                         <th>Name</th>
//                         {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
//                             <th key={day}>{day}</th>
//                         ))}
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {attendanceData.map((employee) => (
//                         <tr key={employee.id}>
//                             <td>{employee.id}</td>
//                             <td>{employee.name}</td>
//                             {employee.week.map((status, dayIndex) => (
//                                 <td key={dayIndex}>
//                                     {status}
//                                     {/* <button onClick={() => handleStatusChange(employee.id, dayIndex)}>Toggle</button> */}
//                                 </td>
//                             ))} 
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default WeeklyAttendanceTable;



// src/components/Attendance.js
// src/Attendance.js

// import React, { useState } from 'react';
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Button, Paper } from '@mui/material';

// const Attendance = () => {
//     const [attendanceData, setAttendanceData] = useState([]);
//     const [date, setDate] = useState('');
//     const [empId, setEmpId] = useState('');
//     const [inTime, setInTime] = useState('');
//     const [outTime, setOutTime] = useState('');

//     const handleAddAttendance = () => {
//         if (date && empId && inTime && outTime) {
//             const newRecord = { date, empId, inTime, outTime };
//             setAttendanceData([...attendanceData, newRecord]);
//             // Clear input fields
//             setDate('');
//             setEmpId('');
//             setInTime('');
//             setOutTime('');
//         } else {
//             alert('Please fill in all fields.');
//         }
//     };

//     return (
//         <Paper style={{ padding: '20px', margin: '20px' }}>
//             <h2>Employee Attendance Management</h2>
//             <div style={{ marginBottom: '20px' }}>
//                 <TextField
//                     label="Date"
//                     type="date"
//                     value={date}
//                     onChange={(e) => setDate(e.target.value)}
//                     InputLabelProps={{ shrink: true }}
//                 />
//                 <TextField
//                     label="Employee ID"
//                     value={empId}
//                     onChange={(e) => setEmpId(e.target.value)}
//                     style={{ marginLeft: '10px' }}
//                 />
//                 <TextField
//                     label="In Time"
//                     type="time"
//                     value={inTime}
//                     onChange={(e) => setInTime(e.target.value)}
//                     InputLabelProps={{ shrink: true }}
//                     style={{ marginLeft: '10px' }}
//                 />
//                 <TextField
//                     label="Out Time"
//                     type="time"
//                     value={outTime}
//                     onChange={(e) => setOutTime(e.target.value)}
//                     InputLabelProps={{ shrink: true }}
//                     style={{ marginLeft: '10px' }}
//                 />
//                 <Button variant="contained" onClick={handleAddAttendance} style={{ marginLeft: '10px' }}>
//                     Add Attendance
//                 </Button>
//             </div>
//             <TableContainer component={Paper}>
//                 <Table>
//                     <TableHead>
//                         <TableRow>
//                             <TableCell>Date</TableCell>
//                             <TableCell>Employee ID</TableCell>
//                             <TableCell>In Time</TableCell>
//                             <TableCell>Out Time</TableCell>
//                         </TableRow>
//                     </TableHead>
//                     <TableBody>
//                         {attendanceData.map((record, index) => (
//                             <TableRow key={index}>
//                                 <TableCell>{record.date}</TableCell>
//                                 <TableCell>{record.empId}</TableCell>
//                                 <TableCell>{record.inTime}</TableCell>
//                                 <TableCell>{record.outTime}</TableCell>
//                             </TableRow>
//                         ))}
//                     </TableBody>
//                 </Table>
//             </TableContainer>
//         </Paper>
//     );
// };

// export default Attendance;

// src/AttendanceForm.js


// src/AttendanceForm.js
// import React, { useRef, useState } from 'react';
// import Webcam from 'react-webcam';
// import './attendance.css'
// const AttendanceForm = () => {
//     const [attendanceData, setAttendanceData] = useState([]);
//     const [date, setDate] = useState('');
//     const [empId, setEmpId] = useState('');
//     const [inTime, setInTime] = useState('');
//     const [outTime, setOutTime] = useState('');
//     const [photo, setPhoto] = useState(null);
//     const webcamRef = useRef(null);

//     const handleCapture = () => {
//         const imageSrc = webcamRef.current.getScreenshot();
//         setPhoto(imageSrc);
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const newEntry = { date, empId, inTime, outTime, photo };
//         setAttendanceData([...attendanceData, newEntry]);
//         resetForm();
//     };

//     const resetForm = () => {
//         setDate('');
//         setEmpId('');
//         setInTime('');
//         setOutTime('');
//         setPhoto(null);
//     };

//     return (
//         <div>
//             <h2>Employee Attendance</h2>
//             <form onSubmit={handleSubmit}>
//                 <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
//                 <input type="text" value={empId} onChange={(e) => setEmpId(e.target.value)} placeholder="Emp ID" required />
//                 <input type="time" value={inTime} onChange={(e) => setInTime(e.target.value)} required />
//                 <input type="time" value={outTime} onChange={(e) => setOutTime(e.target.value)} placeholder="Out Time" />
//                 <div>
//                     <Webcam ref={webcamRef} screenshotFormat="image/jpeg" width={100} />
//                     <button type="button" onClick={handleCapture}>Capture Photo</button>
//                 </div>
//                 <button type="submit">Add Attendance</button>
//             </form>

//             <h3>Attendance Records</h3>
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Date</th>
//                         <th>Emp ID</th>
//                         <th>In Time</th>
//                         <th>Out Time</th>
//                         <th>Photo</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {attendanceData.map((entry, index) => (
//                         <tr key={index}>
//                             <td>{entry.date}</td>
//                             <td>{entry.empId}</td>
//                             <td>{entry.inTime}</td>
//                             <td>{entry.outTime}</td>
//                             <td><img src={entry.photo} alt="Attendance" width={50} /></td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default AttendanceForm;

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
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
                <input type="text" value={empId} onChange={(e) => setEmpId(e.target.value)} placeholder="Emp ID" required />
                <input type="time" value={inTime} onChange={(e) => setInTime(e.target.value)} required />
                <input type="time" value={outTime} onChange={(e) => setOutTime(e.target.value)} placeholder="Out Time" />
                <button type="button" onClick={() => setIsCameraOpen(true)}>
                    📷
                </button>
                {isCameraOpen && (
                    <div>
                        <Webcam ref={webcamRef} screenshotFormat="image/jpeg" width={100} />
                        <button type="button" onClick={handleCapture}>Capture Photo</button>
                    </div>
                )}
                <button type="submit">Add Attendance</button>
            </form>

            <h3>Attendance Records</h3>
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
