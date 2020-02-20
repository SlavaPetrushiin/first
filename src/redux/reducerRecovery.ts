interface IInitialState {

}

const initialState : IInitialState = {

}

const reducerRecovery = (state : IInitialState = initialState, action : any) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default reducerRecovery;