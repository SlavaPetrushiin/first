interface IInitialState {

}

const initialState : IInitialState = {

}

const reducerLogin = (state : IInitialState = initialState, action : any) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default reducerLogin;