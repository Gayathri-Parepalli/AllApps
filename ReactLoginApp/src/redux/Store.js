import { createStore } from "redux";
import reducer from "./reducer/Index";
const store = createStore(
  reducer,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;

// import { createStore, applyMiddleware, compose } from "redux";
// import reducer from "./reducer/Index";
// import thunk from "redux-thunk";
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE_ || compose;
// const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
// export default store;

// import { createStore, combineReducers, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
// import reducer from "./reducer/Index";

// const reducers = combineReducers(reducer);
// applyMiddleware supercharges createStore with middleware:
// const store = createStore(reducer, applyMiddleware(thunk));
// export default store;
