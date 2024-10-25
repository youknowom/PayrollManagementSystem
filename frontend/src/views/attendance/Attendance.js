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
import React, { useState } from 'react';
import './attendance.css'
const WeeklyAttendanceTable = () => {
    const initialAttendanceData = [
        { id: 1, name: 'John Doe', week: ['Present', 'Present', 'Absent', 'Present', 'Present', 'Absent', 'Present'] },
        { id: 2, name: 'Jane Smith', week: ['Absent', 'Present', 'Present', 'Absent', 'Present', 'Present', 'Absent'] },
        { id: 3, name: 'Alice Johnson', week: ['Present', 'Absent', 'Present', 'Present', 'Absent', 'Present', 'Present'] },
    ];

    const [attendanceData, setAttendanceData] = useState(initialAttendanceData);

    const handleStatusChange = (id, dayIndex) => {
        setAttendanceData((prevData) =>
            prevData.map((employee) =>
                employee.id === id
                    ? {
                        ...employee,
                        week: employee.week.map((status, index) =>
                            index === dayIndex ? (status === 'Present' ? 'Absent' : 'Present') : status
                        )
                    }
                    : employee
            )
        );
    };

    return (
        <div>
            <h1>Weekly Employee Attendance</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
                            <th key={day}>{day}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {attendanceData.map((employee) => (
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.name}</td>
                            {employee.week.map((status, dayIndex) => (
                                <td key={dayIndex}>
                                    {status}
                                    <button onClick={() => handleStatusChange(employee.id, dayIndex)}>Toggle</button>
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default WeeklyAttendanceTable;
