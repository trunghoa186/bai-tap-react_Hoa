import React, { useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Loading from "compodents/todo/loading";
import {
  checkMissionAction,
  deleteMissionAction,
  deleteMissionSuccessAction,
  updateMissionAction,
  updateMissionSuccessAction,
} from "store/todo/action";

function List(props) {

  const missions = useSelector((state) => state.todoReducer.missions);
  const selected = useSelector((state) => state.todoReducer.selected);

  return missions.length > 0 ? (
    missions.map((m) => (
      <ListItem
        key={m.id}
        content={m.name}
        id={m.id}
        isChecked={selected.includes(m.id)}
      />
    ))
  ) : (
    <>
      <ListItem
        classes="text-danger"
        content="Không có nhiệm vụ"
        isHiddenButton
      />
    </>
  );
}

export default List;

function ListItem({ id, content, classes, isChecked, isHiddenButton = false }) {
  const [mission, setMission] = useState('');

  const dispatch = useDispatch();

  const loadingDelete = useSelector((state) => state.todoReducer.loadingDelete);
  const loadingUpdate = useSelector((state) => state.todoReducer.loadingUpdate);

  const onDeleteMission = () => {
    dispatch(deleteMissionAction(id));

    setTimeout(() => {
      dispatch(deleteMissionSuccessAction(id));
    }, 1000);
  };

  const onChangeMission = (e) => {
    setMission(e.target.value);
  };

  const onUpdateMission = () => {
    dispatch(updateMissionAction(id));

    setTimeout(() => {
      dispatch(updateMissionSuccessAction({ id, mission }));
    }, 1000);
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13 && mission) {
      onUpdateMission();
    }
  };

  const onSelectMission = useCallback(() => {
    dispatch(checkMissionAction(id));
  }, [dispatch, id]);


  useEffect(() => {
    setMission(content);
  }, [content]);

  return (
    <div className="input-group mb-3 d-flex">
      <input
        type="text"
        className={`form-control ${classes}`}
        placeholder="Nhiệm vụ 1"
        value={mission}
        onChange={onChangeMission}
        onKeyDown={onKeyDown}
      />

      {!isHiddenButton && (
        <>
          <div className="input-group-text">
            <input
             className="form-check-input mt-0" 
             type="checkbox"
             onChange= {onSelectMission}
             checked={isChecked}
            />
          </div>

          <button
            className="btn btn-outline-danger"
            type="button"
            disabled={loadingDelete.includes(id)}
            onClick={onDeleteMission}
          >
            {loadingDelete.includes(id) ? (
              <Loading />
            ) : (
              <i className="fa-solid fa-trash" />
            )}
          </button>

          <button
            className="btn btn-outline-info"
            type="button"
            disabled={loadingUpdate.includes(id)}
            onClick={onUpdateMission}
          >
            {loadingUpdate.includes(id) ? (
              <Loading />
            ) : (
              <i className="fas fa-edit" />
            )}
          </button>
        </>
      )}
    </div>
  );
}
