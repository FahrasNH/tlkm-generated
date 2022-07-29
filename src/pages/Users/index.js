import React, { useEffect, useState } from 'react'
import UserForm from '../../components/organisms/UserForm'
import UserList from '../../components/organisms/UserList'

const Users = () => {
  const [data, setData] = useState([])

  const handleClick = async () => {
    try {
      fetch('https://randomuser.me/api/')
        .then((res) => res.json())
        .then((data) => {
          setData((oldData) => [...oldData, ...data.results])
        })
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="mx-8">
      <div className="mb-6 mt-20 mx-[20%]">
        <h1 className="text-[#111827] text-lg font-normal">
          Personal information
        </h1>
        <p className="text-[#6B7280] font-light">
          This information will be displayed publicly so be careful what you
          share.
        </p>
      </div>
      <UserForm handleGenerateUser={handleClick} />
      <div className="relative py-4 my-12">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-b border-gray-300"></div>
        </div>
        <div className="relative flex justify-center">
          <span
            className="bg-white px-4 text-lg text-[#979797]"
            onClick={() => setData([])}
          >
            Clear All List User
          </span>
        </div>
      </div>
      <UserList data={data} />
    </div>
  )
}

export default Users
