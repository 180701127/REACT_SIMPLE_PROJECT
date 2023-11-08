import React from 'react';
import '../Pages/Dashboard.css';

const Dashboard = ({user}) => {
    const {fname,email} = user
  return (
    <div>
      <h1 className='r'>Welcome to dashboard</h1>
      <p className='q'>Name of the user: {fname}</p>
      <p className='u'>Email of the user: {email}</p>
    </div>
  )
}

export default Dashboard
