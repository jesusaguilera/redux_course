import { createStore } from "redux";
import { reducer } from "./bugs";

let configureStore = () => {
  return createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
};

export default configureStore;
