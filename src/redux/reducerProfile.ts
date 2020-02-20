interface IInitialState {

}

const initialState : IInitialState = {

}

const reducerProfile = (state : IInitialState = initialState, action : any) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default reducerProfile;