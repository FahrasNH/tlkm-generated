import React from 'react'
import ICONS from '../../../constant/icons'

const CardUser = ({ data }) => {
  return (
    <div className="border border-[#D1D5DB] rounded-lg w-[250px]">
      <div className="px-8 flex flex-col align-center mb-9 mt-8">
        <div className="text-center w-[128px] h-[128px] mx-auto mb-5">
          <img
            src={data?.picture?.thumbnail}
            alt="imgUser"
            className="mx-auto w-[128px] h-[128px] rounded-full"
          />
        </div>
        <p className="text-center">Hi, My name is</p>
        <p className="text-center">{`${data?.name?.title} ${data?.name?.first} ${data?.name?.last}`}</p>
      </div>
      <div className="py-3 px-[7px] flex justify-between">
        <div className="px-[7px]">
          <img src={ICONS.userTagAct} alt="icon" className="w-6" />
        </div>
        <div className="px-[7px]">
          <img src={ICONS.sms} alt="icon" className="w-6" />
        </div>
        <div className="px-[7px]">
          <img src={ICONS.calendar} alt="icon" className="w-6" />
        </div>
        <div className="px-[7px]">
          <img src={ICONS.map} alt="icon" className="w-6" />
        </div>
        <div className="px-[7px]">
          <img src={ICONS.mobile} alt="icon" className="w-6" />
        </div>
        <div className="px-[7px]">
          <img src={ICONS.lock} alt="icon" className="w-6" />
        </div>
      </div>
    </div>
  )
}

export default CardUser
