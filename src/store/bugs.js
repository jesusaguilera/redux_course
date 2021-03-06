/*
 * Ducks patterns permit you to have all code inside one file 
 * Another pattern orders files into bugs folder:
    * store/bugs/actionsTypes
    * store/bugs/actions
    * store/bugs/reducers
*/

// Actions types
const ADD_BUG = "ADD_BUG";
const UPDATE_BUG = "UPDATE_BUG";
const REMOVE_BUG = "REMOVE_BUG";


// Actions creators 
export const addBug = (description) => ({
  type: ADD_BUG,
  payload : {
    description
  }
})

export const updateBug = (id, data) => ({
  type: UPDATE_BUG,
  payload : {
    id,
    data
  }
})

export const removeBug = (id) => ({
  type: REMOVE_BUG,
  payload :  {
    id 
  }
})


// Reducers
let lastId = 0;

export const reducer = (state = [], action) => {

  switch(action.type) {

    case ADD_BUG: {
      return [
        ...state,
        {
          id: ++lastId,
          description: action.payload.description,
          resolved: false
        }
      ]
    }

    case UPDATE_BUG: {
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

    case REMOVE_BUG: {
      return state.filter(bug => bug.id !== action.payload.id);
    }

    default:
      return state

  }

}
