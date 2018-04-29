import { LOGIN_SUCCESS, GET_USER_INFO } from "../types";

export default function (state = {}, action) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return action.payload.data;
        case GET_USER_INFO:
            console.log('User Info in reducer', action.payload.images[0].faces[0]);
            if (!action.error)
                return action.payload.images[0].faces[0];
            break;
        default:
            return state;
    }
}
