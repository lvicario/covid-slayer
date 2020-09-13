import { combineReducers } from "redux";
import authReducer from "./auth/reducer";
import gameReducer from "./game/reducer";

export default combineReducers({
  auth: authReducer,
  game: gameReducer
});
