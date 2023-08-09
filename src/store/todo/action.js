import * as ActionTypes from './actionTypes';

export const addMissionAction = (mission) => ({
  type: ActionTypes.ADD_MISSION, // ACTION TYPE
});

export const addMissionSuccessAction = (mission) => ({
  type: ActionTypes.ADD_MISSION_SUCCESS, // ACTION TYPE
  payload: mission, // PARAMETER
});

export const addMissionFailedAction = () => ({
  type: ActionTypes.ADD_MISSION_FAILED, // ACTION TYPE
});

//delete

export const deleteMissionAction = (id) => ({
  type: ActionTypes.DELETE_MISSION, // ACTION TYPE
  payload: id,
});

export const deleteMissionSuccessAction = (id) => ({
  type: ActionTypes.DELETE_MISSION_SUCCESS, // ACTION TYPE
  payload: id, // PARAMETER
});

export const deleteMissionFailedAction = () => ({
  type: ActionTypes.DELETE_MISSION_FAILED, // ACTION TYPE
});

// UPDATE

export const updateMissionAction = (id) => ({
  type: ActionTypes.UPDATE_MISSION,
  payload: id, //id PARAMETER
});

export const updateMissionSuccessAction = (payload) => ({
  type: ActionTypes.UPDATE_MISSION_SUCCESS, // ACTION TYPE
  payload, //id PARAMETER
});

export const updateMissionFailedAction = () => ({
  type: ActionTypes.UPDATE_MISSION_FAILED, // ACTION TYPE
});

export const checkMissionAction = (payload) => ({
  type: ActionTypes.CHECKED_MISSION, // ACTION TYPE
  payload,
});

export const checkAllMissionAction = () => ({
  type: ActionTypes.CHECKED_ALL_MISSION, // ACTION TYPE
});

export const deleteSelectedMissionAction = () => ({
  type: ActionTypes.DELETE_SELECTED_MISSION, // ACTION TYPE
});

export const deleteSelectedMissionSuccessAction = () => ({
  type: ActionTypes.DELETE_SELECTED_MISSION_SUCCESS, // ACTION TYPE
});