import React from 'react'

function Button({children}) {
  return (
    <button className="btn btn-sm btn-dark" type="submit">
        {children}
    </button>
  )
}

export default Button