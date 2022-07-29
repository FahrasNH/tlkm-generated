import React from 'react'
import CardUser from '../../molecules/CardUser'

const UserList = ({ data }) => {
  return (
    <div className="mb-12 flex flex-wrap mx-auto">
      {(data || []).map((dataUser) => (
        <div key={dataUser.id.value} className=" px-4 sm:px-6 lg:px-4 py-12 ">
          <CardUser data={dataUser} />
        </div>
      ))}
    </div>
  )
}

export default UserList
