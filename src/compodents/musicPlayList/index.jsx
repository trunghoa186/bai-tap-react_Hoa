import React from 'react';
import Play from './play';
import List from './list';

function PlayList(props) {
  return (
    <div className="d-flex">
      <List />
      {/* <Play /> */}
    </div>
  );
}

export default PlayList;