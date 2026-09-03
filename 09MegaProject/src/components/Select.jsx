import React, { useId } from 'react'

function Select({
    options,
    label,
    className = "",
    ...props
},ref) {
    const id = useId()
  return (
    <div className='w-full'>
        { label && <label htmlFor={id}>
        </label>}
        <select
        {...props}
        id={id}
        className={`px-3 py-2 rounded-lg
        Itext-black outline-none
        duration-200 border border-gray-200 w-full $
        {className} }

        bg-white
        focus: bg-gray-50`}
        ref={ref}
        >
            {options?.map((option)=>(
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
    </div>
  )
}

export default React.forwardRef(Select)