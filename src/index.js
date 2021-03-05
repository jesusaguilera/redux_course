import store from "./store";
import { addBug, updateBug, removeBug } from "./actions";

/* 
  Subscribe get all store changes
  working on React it will get changes with React render() method
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
store.dispatch(removeBug(1));


unsubscribe();
