import React from 'react';

import MultipleOpen from './multipleOpen';
import OpenAtATime from './openAtATime';

import './openAtATime.css'

function ButtonAccord(props) {
    return (
        <div className="container content1-format d-flex">
      <OpenAtATime />

      <MultipleOpen />
    </div>
    );
}

export default ButtonAccord;