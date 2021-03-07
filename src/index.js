import store from "./store";
import { addBug, updateBug, removeBug } from "./actions";

/* 
  Subscribe gets all store changes
*/
const unsubscribe = store.subscribe(() => {
  console.log("Store changed!", store.getState());
})

/*
 Actions
*/
store.dispatch(addBug("Bug one"));
store.dispatch(updateBug(
  1, 
  {
    description: "Bug one updated", 
    resolved: true
  }
));
store.dispatch(addBug("Bug two"));
// store.dispatch(removeBug(1));


unsubscribe();
