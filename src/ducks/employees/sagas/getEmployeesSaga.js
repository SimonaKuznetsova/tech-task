import axios from 'axios'
import { call, put } from 'redux-saga/effects'
import { GET_EMPLOYEES_ERROR, GET_EMPLOYEES_SUCCESS } from "ducks/employees/const";

export default function* getEmployeesSaga() {
    const callApi = 'https://yalantis-react-school-api.yalantis.com/api/task0/users'
    console.log('saga here')
    try {
        const options = {
            method: 'get',
            url: callApi,
        };

        const res = yield call(axios, options)

        if (res && res.data) {
            yield put({
                type: GET_EMPLOYEES_SUCCESS,
                payload: res.data
            })
        }
    } catch (error) {
        yield put({
            type: GET_EMPLOYEES_ERROR,
            error
        })
    }
}