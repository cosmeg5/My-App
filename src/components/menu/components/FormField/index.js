import React from "react";

function FormField( { label, type, values, name, onChange, textarea } ) {
    return(
        <div>
            <label>
                {label}
                <input 
                    type={type} 
                    values={values}
                    name={name}
                    onChange={onChange}
                    textarea={textarea}
                />
            </label>
        </div>
    )
}

export default FormField;