import configureStore from "./store/configureStore";
import { addBug, updateBug, removeBug, selectorUnresolvedBugs, selectorMemberBug } from "./store/bugs";
import { addProject } from "./store/projects";

const store  = configureStore();

/* 
  Subscribe gets all store changes
*/
const unsubscribe = store.subscribe(() => {
  console.log("Store changed!", store.getState());
})

/*
 Actions
*/
// store.dispatch(addBug("Bug one"));
store.dispatch(addBug("Bug one", "Juan López", "High"));

store.dispatch(updateBug(
  1, 
  {
    description: "Bug one updated", 
    resolved: true,
  }
));

store.dispatch(addBug("Bug two", "Irina Ríos", "High"));
store.dispatch(addProject("New project"))
// store.dispatch(removeBug(1));


unsubscribe();

const getUnresolvedBugs = selectorUnresolvedBugs(store.getState());
const getBugMember = selectorMemberBug("Juan López")(store.getState());
console.log(getBugMember)
