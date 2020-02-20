import {applyMiddleware, combineReducers, createStore} from "redux";
import reducerLogin from "./reducerLogin";
import reducerRegister from "./reducerRegister";
import reducerRecovery from "./reducerRecovery";
import reducerProfile from "./reducerProfile";
import thunk, {ThunkMiddleware} from "redux-thunk";


const rootReducer = combineReducers({
    login : reducerLogin,
    register : reducerRegister,
    recovery : reducerRecovery,
    profile : reducerProfile
});

export type AppState = ReturnType<typeof rootReducer>

const store = createStore(rootReducer,applyMiddleware(thunk as ThunkMiddleware<AppState, any>) )

export default store