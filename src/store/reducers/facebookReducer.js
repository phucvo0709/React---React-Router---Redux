import * as actionTypes from './../actions/actionTypes';

const initialState = {
    facebookLogined: false,
    facebookInfo: {}
}

const reducer = ( state = initialState, action ) => {
    switch (action.type) {
        case actionTypes.FACEBOOK_LOGINED:
            return{
                ...state,
                facebookLogined: true
            }
        case actionTypes.RESPONSIVE_FACEBOOK:
            return {
                ...state,
                facebookInfo: action.payload
            }
        default:
            return state;
    }
}

export default reducer;