interface IInitialState {

}

const initialState : IInitialState = {

}

const reducerRegister = (state : IInitialState = initialState, action : any) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default reducerRegister;