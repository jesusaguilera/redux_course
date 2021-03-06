import { createStore } from "redux";
import reducer from "./reducer";

let configureStore = () => {
  return createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
};

export default configureStore;

/*
Store structure
{
  entities: {
    bugs: [{...}, {...}],
    projects: [{...}, {...}],
    tasks: [{...}, {...}],
  },
  auth: {
    userId: 1,
    name: "John"
  },
  ui: {
    bugs: { query: {...}, sortBy: {...} }
  }
}
*/
