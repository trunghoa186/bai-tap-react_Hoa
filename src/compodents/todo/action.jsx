import React, { useCallback } from "react";
import { useDispatch, useSelector } from 'react-redux';


import { checkAllMissionAction, deleteSelectedMissionAction,  deleteSelectedMissionSuccessAction } from "store/todo/action";

function Action(props) {
  const dispatch = useDispatch();
  
  const selected = useSelector((state) => state.todoReducer.selected);
  const missions = useSelector((state) => state.todoReducer.missions);


  const onSelectedAll = useCallback(() => {
    dispatch(checkAllMissionAction());
  }, [dispatch]);

  const onDeleteSelected = useCallback(() => {
    dispatch(deleteSelectedMissionAction());

    setTimeout(() => {
      dispatch(deleteSelectedMissionSuccessAction());
    }, 500);
  }, [dispatch]);

  return (
    <div className="d-flex">
      <div className="input-group-text">
        <input 
         className="form-check-input mt-0"
         type="checkbox" 
         checked = {(missions.length === selected.length) && selected.length > 0}
         onChange={onSelectedAll}  
         />
      </div>

      <button
        type="button"
        className="btn btn-danger"
        disabled={selected.length === 0}
        onClick={onDeleteSelected}
      >
        Xóa hàng loạt
      </button>
    </div>
  );
}

export default Action;
