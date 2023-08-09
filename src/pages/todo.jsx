import React from 'react';

import Add from "compodents/todo/add";
import List from "compodents/todo/list";
import Action from "compodents/todo/action";

function TodoPage(props) {
  return (
    <div>
      <Add />
      <List />
      <Action />
    </div>
  );
}

export default TodoPage;