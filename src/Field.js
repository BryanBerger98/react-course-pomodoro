import { useState, useId } from "react";

const style = {
    inputGroup: {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '1rem',
        width: '100%'
    },
    input: {
        padding: '.5rem .8rem',
        borderRadius: 10,
        border: 'none',
        width: '100%'
    }
}

function wait(t) {
    const start = Date.now();
    while(Date.now() - start < t){};
}

export default function Field({value, onChange, validation, type, label, placeholder}) {

    const id = useId();
    const [error, setError] = useState(null);

    // wait(500);

    const handleInputChange = (e) => {
        const { value } = e.target;
        if (typeof value !== validation.type) {
            setError('The value must be a string');
        } else if (validation.required && !value) {
            setError('This field is required');
        } else if (validation.length && value.length < validation.length) {
            setError('The value must have at least 4 characters');
        } else {
            setError(null);
        }
        onChange(value);
    }

   return(
        <div style={style.inputGroup}>
            <label htmlFor={id}>{label}</label>
            {
                type === 'text' && <input id={id} type="text" placeholder={placeholder} style={style.input} value={value} onChange={handleInputChange} />
            }
            {
                type === 'textarea' && <textarea id={id} rows={5} placeholder={placeholder} style={style.input} value={value} onChange={handleInputChange} />
            }
            {error && <p style={{color: 'red'}}>{error}</p>}
        </div>
   )
}