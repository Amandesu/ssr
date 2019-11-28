
//export const CINEMA_SET_LIST = 'cinema_set_list';

const defaultState = {
    
};

export default (state = defaultState,action) => {
    switch(action.type) {
        case CINEMA_SET_LIST:
            return {
                ...state
            }
        default: return state;
    }
}