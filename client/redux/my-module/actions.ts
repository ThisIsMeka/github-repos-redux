import { Dispatch } from 'redux';
import { MY_MODULE_ACTIONS } from './action-types';
import { FetchDataAction } from './types';

export const fetchData = (data: any) => (dispatch: Dispatch<FetchDataAction>) => {
    dispatch({ type: MY_MODULE_ACTIONS.SET_DATA, data });
};
