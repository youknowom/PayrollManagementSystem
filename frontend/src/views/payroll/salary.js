// import React from 'react'

// const salary = () => {
//   return <div>salary 1</div>
// }

// export default salary

import React, { useState } from 'react';

const PayrollSystem = () => {
    const [employeeDetails, setEmployeeDetails] = useState({
        employeeId: '',
        name: '',
        salary: '',
        bankAccount: '',
        taxId: '',
        paymentMode: 'Bank Transfer',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEmployeeDetails({ ...employeeDetails, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Payroll Details:', employeeDetails);
        alert('Payroll details submitted successfully!');
    };

    return (
        <div style={{ margin: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h2>Payroll System</h2>
            <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: '0 auto' }}>
                <div style={{ display: 'flex', marginBottom: '15px' }}>
                    <label style={{ flex: '1', paddingRight: '10px' }}>Employee ID:</label>
                    <input
                        type="text"
                        name="employeeId"
                        value={employeeDetails.employeeId}
                        onChange={handleInputChange}
                        required
                        style={{ flex: '2', padding: '8px' }}
                    />
                </div>
                <div style={{ display: 'flex', marginBottom: '15px' }}>
                    <label style={{ flex: '1', paddingRight: '10px' }}>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={employeeDetails.name}
                        onChange={handleInputChange}
                        required
                        style={{ flex: '2', padding: '8px' }}
                    />
                </div>
                <div style={{ display: 'flex', marginBottom: '15px' }}>
                    <label style={{ flex: '1', paddingRight: '10px' }}>Salary:</label>
                    <input
                        type="number"
                        name="salary"
                        value={employeeDetails.salary}
                        onChange={handleInputChange}
                        required
                        style={{ flex: '2', padding: '8px' }}
                    />
                </div>
                <div style={{ display: 'flex', marginBottom: '15px' }}>
                    <label style={{ flex: '1', paddingRight: '10px' }}>Bank Account Details:</label>
                    <input
                        type="text"
                        name="bankAccount"
                        value={employeeDetails.bankAccount}
                        onChange={handleInputChange}
                        required
                        style={{ flex: '2', padding: '8px' }}
                    />
                </div>
                <div style={{ display: 'flex', marginBottom: '15px' }}>
                    <label style={{ flex: '1', paddingRight: '10px' }}>Tax Identification Number (TIN):</label>
                    <input
                        type="text"
                        name="taxId"
                        value={employeeDetails.taxId}
                        onChange={handleInputChange}
                        required
                        style={{ flex: '2', padding: '8px' }}
                    />
                </div>
                <div style={{ display: 'flex', marginBottom: '15px' }}>
                    <label style={{ flex: '1', paddingRight: '10px' }}>Payment Mode:</label>
                    <select
                        name="paymentMode"
                        value={employeeDetails.paymentMode}
                        onChange={handleInputChange}
                        style={{ flex: '2', padding: '8px' }}
                    >
                        <option value="Bank Transfer">Bank Transfer</option>
                        <option value="Cheque">Cheque</option>
                    </select>
                </div>
                <div style={{ textAlign: 'center' }}>
                    <button
                        type="submit"
                        style={{
                            backgroundColor: '#4CAF50',
                            color: 'white',
                            padding: '10px 15px',
                            border: 'none',
                            cursor: 'pointer',
                        }}
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default PayrollSystem;
