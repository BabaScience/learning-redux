import configureBugStore from "./store/configureStore";
import {
  bugAdded,
  bugRemoved,
  bugResolved,
  getUnresolvedBugs,
  bugAssignedToUser,
  getBugsByUser,
} from "./store/bugs";
import { projectAdded, projectRemoved } from "./store/projects";
import { userAdded, userRemoved } from "./store/users";

const store = configureBugStore();

const unsubscribe = store.subscribe(() => {
  // Every time the store changes, this function will be called
  console.log("Store changed!", store.getState());
});

store.dispatch(userAdded({ name: "User 1" }));
// store.dispatch(userAdded({ name: "User 2" }));

// store.dispatch(bugAdded({ description: "Bug 1" }));
// store.dispatch(bugAdded({ description: "Bug 2" }));
// store.dispatch(bugAdded({ description: "Bug 3" }));
// store.dispatch(bugAdded({ description: "Bug 4" }));
// store.dispatch(bugAdded({ description: "Bug 5" }));

// store.dispatch(bugAssignedToUser({ bugId: 1, userId: 1 }));
// store.dispatch(bugAssignedToUser({ bugId: 2, userId: 1 }));

store.dispatch(bugResolved({ id: 1 }));
// store.dispatch(bugRemoved({ id: 2 }));

// preojects
// store.dispatch(projectAdded({ name: "Project 1" }));
// store.dispatch(projectAdded({ name: "Project 2" }));
// store.dispatch(projectAdded({ name: "Project 3" }));
// store.dispatch(projectRemoved({ id: 1 }));

const UserBugs = getBugsByUser(1)(store.getState());
console.log("UserBugs: ", UserBugs);

unsubscribe();

console.log("store: ", store.getState());
