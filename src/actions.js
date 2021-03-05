/*
  We have this file in order to have centralized all actions to dispatch
*/
import * as actionTypes from "./actionTypes";

const addBug = (description) => ({
  type: actionTypes.ADD_BUG,
  payload : {
    description
  }
})

const updateBug = (id, data) => ({
  type: actionTypes.UPDATE_BUG,
  payload : {
    id,
    data
  }
})

const removeBug = (id) => ({
  type: actionTypes.REMOVE_BUG,
  payload :  {
    id 
  }
})

export {
  addBug,
  updateBug,
  removeBug
}
