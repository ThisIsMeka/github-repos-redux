import { MyModuleActions, MyModuleState } from './types';
import { MY_MODULE_ACTIONS } from './action-types';

export const initialState: MyModuleState = {
    data: null,
};

export default function MyModuleReducer(state = initialState, action: MyModuleActions): MyModuleState {
    switch (action.type) {
        case MY_MODULE_ACTIONS.SET_DATA:
            return {
                ...state,
            };
        default:
            return state;
    }
}
