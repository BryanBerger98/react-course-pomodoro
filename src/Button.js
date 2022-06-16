import { memo } from "react";

const Button = memo(function ({color, onClick, children}) {

    const btnStyle = {
        padding:'.6rem 1.8rem',
        fontSize: '1.8rem',
        borderRadius: 20,
        color: 'beige',
        border: 'none',
        cursor: 'pointer'
    }

    return(
        <button style={{...btnStyle, backgroundColor: color ? color : 'tomato'}} onClick={onClick}>
            {children}
        </button>
    )

});

export default Button;