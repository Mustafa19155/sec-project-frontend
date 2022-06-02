import { combineReducers } from "redux";
import campaignReducer from "./campaignReducers";
import characterReducer from "./characterReducer";
import mapReducer from "./mapReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  user: userReducer,
  characters: characterReducer,
  maps: mapReducer,
  campaigns: campaignReducer,
});

export default rootReducer;
