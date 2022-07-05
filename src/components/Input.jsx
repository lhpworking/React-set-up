import React from 'react'

export default function Input({ label, placeholder, error, onChange }) {
    return (
        <label style={ { width: "100%" } } >
            <p style={ { width: "30%" } }>{ label }<span>*</span></p>
            <div style={ { width: "70%" } }>
                <input style={ { display: "flex", width: "100%", } } type="text" placeholder={ placeholder } onChange={ onChange } />
                <small className='error' style={ { color: "#00afab" } }>{ error }</small>
            </div>
        </ label >

    )
}
