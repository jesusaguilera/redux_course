import * as actionTypes from "./actionTypes";

let lastId = 0;

const reducer = (state = [], action) => {

  switch(action.type) {

    case actionTypes.ADD_BUG: {
      return [
        ...state,
        {
          id: ++lastId,
          description: action.payload.description,
          resolved: false
        }
      ]
    }

    case actionTypes.UPDATE_BUG: {
      state.map(bug => {
        if(bug.id === action.payload.id) {
          if(action.payload.data) {
            Object.keys(action.payload.data).map(key => {
              bug[key] = action.payload.data[key]
            })
          }
        }
      })
      return state;
    }

    case actionTypes.REMOVE_BUG: {
      return state.filter(bug => bug.id !== action.payload.id);
    }

    default:
      return state

  }

}

export default reducer;

