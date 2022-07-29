import React from 'react'

const Input = ({ label, placeholder, id, type }) => {
  return (
    <div className="mb-6">
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text=[#374151]"
      >
        {label}
      </label>
      <input
        type="text"
        id={id}
        className="w-full p-2.5 border border-[#D1D5DB] rounded-lg focus:ring-sky-500 focus:border-sky-500"
        placeholder={placeholder}
        required
      />
    </div>
  )
}

export default Input
