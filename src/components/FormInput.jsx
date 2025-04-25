import React from 'react'

const FormInput = ({
  label,
  name,
  type = 'text',
  value,
  onChange,
  required = false
}) => {
  return (
    <fieldset className='relative border border-gray-300 rounded-md px-3 pt-4 pb-2 focus-within:ring-2 focus-within:ring-violet-500'>
      <legend className='absolute -top-3 left-2 text-sm px-1 bg-gray-50 text-violet-600 font-medium'>
        {label} {required && <span className='text-red-500'>*</span>}
      </legend>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={label}
        className='w-full bg-transparent border-none text-sm text-gray-800 placeholder-transparent focus:outline-none'
      />
    </fieldset>
  )
}

export default FormInput
