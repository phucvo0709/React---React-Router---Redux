import * as actionTypes from './../actions/actionTypes';
import isEmpty from './../../validation/is-empty';

export const responsiveFacebook = (responsive) => dispatch => {
    if(!isEmpty(responsive)){
        dispatch({
            type: actionTypes.RESPONSIVE_FACEBOOK,
            payload: responsive
        })
        dispatch({
            type: actionTypes.FACEBOOK_LOGINED,
            payload: true
        })
    }
}