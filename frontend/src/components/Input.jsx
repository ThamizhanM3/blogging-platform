import React from 'react'

const Input = ({ element, type, onChange }) => {
    return (
        <div className='Input'>
            <input type={type} value={element} onChange={(e) => { onChange(e.target.value) }} />
        </div>
    )
}

export default Input
