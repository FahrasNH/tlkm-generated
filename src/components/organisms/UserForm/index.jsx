import React from 'react'

const UserForm = ({ handleGenerateUser }) => {
  return (
    <form className="mx-[20%]">
      <div className="mb-6">
        <label
          htmlFor="fullName"
          className="block mb-2 text-sm font-medium text=[#374151]"
        >
          Full Name
        </label>
        <input
          type="text"
          id="fullName"
          className="w-full p-2.5 border border-[#D1D5DB] rounded-lg focus:ring-sky-500 focus:border-sky-500"
          placeholder="Your Name"
          required
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text=[#374151]"
        >
          Email address
        </label>
        <input
          type="email"
          id="email"
          className="w-full p-2.5 border border-[#D1D5DB] rounded-lg focus:ring-sky-500 focus:border-sky-500"
          placeholder="Your Name"
          required
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="dob"
          className="block mb-2 text-sm font-medium text=[#374151]"
        >
          Date of Birth
        </label>
        <input
          type="text"
          id="dob"
          className="w-full p-2.5 border border-[#D1D5DB] rounded-lg focus:ring-sky-500 focus:border-sky-500"
          placeholder="dd/mm/yy"
          required
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="dob"
          className="block mb-2 text-sm font-medium text=[#374151]"
        >
          Address
        </label>
        <input
          type="text"
          id="dob"
          className="w-full p-2.5 border border-[#D1D5DB] rounded-lg focus:ring-sky-500 focus:border-sky-500"
          placeholder="Street Address"
          required
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="phoneNo"
          className="block mb-2 text-sm font-medium text=[#374151]"
        >
          Phone Number
        </label>
        <input
          type="text"
          id="phoneNo"
          className="w-full p-2.5 border border-[#D1D5DB] rounded-lg focus:ring-sky-500 focus:border-sky-500"
          placeholder="e.g 813 2811 2993"
          required
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text=[#374151]"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          className="w-full p-2.5 border border-[#D1D5DB] rounded-lg focus:ring-sky-500 focus:border-sky-500"
          placeholder="**********"
          required
        />
      </div>
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
            type="submit"
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
