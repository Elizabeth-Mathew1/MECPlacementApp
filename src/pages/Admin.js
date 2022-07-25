import React from 'react'
import CreateDrive from '../components/CreateDrive/CreateDrive';
import CreateNews from '../components/CreateNews/CreateNews';
import AdminHeader from '../components/Header/AdminHeader';

export default function Admin() {
  return (
    <div>
      <div className='admin-page'>
        <AdminHeader/>
        <CreateDrive/>
        <CreateNews/>
    </div>
    </div>
  )
}
