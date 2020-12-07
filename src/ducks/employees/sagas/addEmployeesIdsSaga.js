import { put } from 'redux-saga/effects'
import { ADD_EMPLOYEES_IDS_ERROR, ADD_EMPLOYEES_IDS_SUCCESS } from "ducks/employees/const";

export default function* addEmployeesIdsSaga({payload: {id}}) {
    console.log('saga ids here')
    try {
        yield put({
            type: ADD_EMPLOYEES_IDS_SUCCESS,
            payload: {id}
        })
    } catch (error) {
        yield put({
            type: ADD_EMPLOYEES_IDS_ERROR,
            error
        })
    }
}