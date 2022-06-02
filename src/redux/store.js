import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "../redux/reducers/rootReducer";

const createstore = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger))
);
export default createstore;
