import React from 'react';
import './button.css'
function button({icon, name, classNamees, classNamees1}) {
    return (
        <button className='btn  ${classNamees} bg-black }' >
            <span className="icon icon--white">{icon}</span>
            {name}
        </button>
    );
}

export default button;