/*
 * Ducks patterns permit you to have all code inside one file 
 * Another pattern orders files into own folder:
    * store/bugs/actionsTypes
    * store/bugs/actions
    * store/bugs/reducers
*/

// Actions types
const ADD_PROJECT = "ADD_PROJECT";
const UPDATE_PROJECT = "UPDATE_PROJECT";
const REMOVE_PROJECT = "REMOVE_PROJECT";


// Actions creators 
export const addProject = (description) => ({
  type: ADD_PROJECT,
  payload : {
    description
  }
})

export const updateProject = (id, data) => ({
  type: UPDATE_PROJECT,
  payload : {
    id,
    data
  }
})

export const removeProject = (id) => ({
  type: REMOVE_PROJECT,
  payload :  {
    id 
  }
})


// Reducers
let lastId = 0;

export const projectsReducer = (state = [], action) => {

  switch(action.type) {

    case ADD_PROJECT: {
      return [
        ...state,
        {
          id: ++lastId,
          description: action.payload.description,
          status: "init"
        }
      ]
    }

    case UPDATE_PROJECT: {
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

    case REMOVE_PROJECT: {
      return state.filter(bug => bug.id !== action.payload.id);
    }

    default: {
      return state
    }

  }

}
