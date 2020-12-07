import {takeEvery, call, take} from 'redux-saga/effects'
import getEmployeesSaga from 'ducks/employees/sagas/getEmployeesSaga'
import addEmployeesIdsSaga from 'ducks/employees/sagas/addEmployeesIdsSaga'
import deleteEmployeesIdsSaga from 'ducks/employees/sagas/deleteEmployeesIdsSaga'
import { GET_EMPLOYEES_REQUEST, ADD_EMPLOYEES_IDS_REQUEST, DELETE_EMPLOYEES_IDS_REQUEST } from "ducks/employees/const";

export default function* saga() {
    yield takeEvery(GET_EMPLOYEES_REQUEST, getEmployeesSaga)
    yield takeEvery(ADD_EMPLOYEES_IDS_REQUEST, addEmployeesIdsSaga)
    yield takeEvery(DELETE_EMPLOYEES_IDS_REQUEST, deleteEmployeesIdsSaga)
}