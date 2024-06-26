

const BUY_CAKE = 'BUY_CAKE'

function buyCake () {
    return {
        type: BUY_CAKE,
        info: 'First Redux Action'
    };
};

//(previousState,action)  => newState

const initialState = {
    numOfCakes: 10
}

const reducer = (state = initialState, action: any) => {

    switch(action.type){
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        default: return state
    }

}