import React from 'react'
import CardUser from '../../molecules/CardUser'
import IMAGES from '../../../constant/images'

const UserList = ({ data }) => {
  return (
    <div className="mb-12 flex flex-wrap mx-auto">
      {data.length < 1 ? (
        <div className="mx-auto">
          <img src={IMAGES.illEmpty} alt="illEmpty" />
          <h1 className="text-center text-3xl">No List User</h1>
        </div>
      ) : (
        data.map((dataUser) => (
          <div key={dataUser.id.value} className=" px-4 sm:px-6 lg:px-4 py-12 ">
            <CardUser data={dataUser} />
          </div>
        ))
      )}
    </div>
  )
}

export default UserList
