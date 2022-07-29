import React from 'react'
import Input from '../../atoms/Input'

const UserForm = ({ handleGenerateUser }) => {
  return (
    <form className="mx-[20%]">
      <Input
        label="Full Name"
        type="text"
        id="fullName"
        placeholder="Your Name"
      />
      <Input
        label="Email address"
        type="email"
        id="email"
        placeholder="Your Email"
      />
      <Input
        label="Date of Birth"
        type="text"
        id="dob"
        placeholder="dd/mm/yy"
      />
      <Input
        label="Address"
        type="text"
        id="address"
        placeholder="Street Address"
      />
      <Input
        label="Phone Number"
        type="text"
        id="phoneNo"
        placeholder="e.g 813 2811 2993"
      />
      <Input
        label="Password"
        type="password"
        id="password"
        placeholder="**********"
      />
      <div className="w-full border-b border-gray-300 mt-8 mb-5" />
      <div className="flex justify-between">
        <div className="flex">
          <button
            type="button"
            className="font-normal rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center text-[#374151] border border-[#D1D5DB] bg-white"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="font-normal rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center text-[#FFFFFF] bg-[#4F46E5] ml-3"
          >
            Submit
          </button>
        </div>
        <div>
          <button
            onClick={handleGenerateUser}
            type="button"
            className="font-normal rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center text-[#4338CA] bg-[#E0E7FF]"
          >
            Auto Generate
          </button>
        </div>
      </div>
    </form>
  )
}

export default UserForm
