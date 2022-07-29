import React, { useEffect, useState } from 'react'
import UserForm from '../../components/organisms/UserForm'

const Users = () => {
  // const [data, setData] = useState([])

  useEffect(() => {}, [])

  return (
    <div className="mx-[20%]">
      <div className="mb-6 mt-20">
        <h1 className="text-[#111827] text-lg font-normal">
          Personal information
        </h1>
        <p className="text-[#6B7280] font-light">
          This information will be displayed publicly so be careful what you
          share.
        </p>
      </div>
      <UserForm />
    </div>
  )
}

export default Users
