import React from 'react';
import './button.css'
function button({icon, name, classes, classes1}) {
    return (
        <button className='btn  ${classes} bg-black }' >
            <span className="icon icon--white">{icon}</span>
            {name}
        </button>
    );
}

export default button;