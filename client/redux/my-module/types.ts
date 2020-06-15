import { Action } from 'redux';
import { MY_MODULE_ACTIONS } from './action-types';

export interface MyModuleState {
    data: any;
}

export type FetchDataAction = Action< MY_MODULE_ACTIONS.SET_DATA> & {
}

export type MyModuleActions = FetchDataAction;
