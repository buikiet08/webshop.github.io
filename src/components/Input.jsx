import React, { useId } from 'react'

function Input({label, type = 'text', placeholder, ...props}) {
    const id = useId()
  return (
    <div className="form-group">
        <label className="sr-only" htmlFor={id}>
            {label}
        </label>
        <input {...props} className="form-control form-control-sm" id={id} type={type} placeholder={placeholder} />
    </div>
  )
}

export default Input