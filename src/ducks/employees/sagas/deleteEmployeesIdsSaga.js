import { put } from 'redux-saga/effects'
import { DELETE_EMPLOYEES_IDS_ERROR, DELETE_EMPLOYEES_IDS_SUCCESS } from "ducks/employees/const";

export default function* deleteEmployeesIdsSaga({payload: {id}}) {
    console.log('saga ids here')
    try {
        yield put({
            type: DELETE_EMPLOYEES_IDS_SUCCESS,
            payload: {id}
        })
    } catch (error) {
        yield put({
            type: DELETE_EMPLOYEES_IDS_ERROR,
            error
        })
    }
}