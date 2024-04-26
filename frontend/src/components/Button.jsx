import React from 'react'

const Button = ({ value, onClick, type }) => {
    return (
        <div className='Button'>
            <button type={type} onClick={onClick} > { value } </button>
        </div>
    )
}

export default Button
