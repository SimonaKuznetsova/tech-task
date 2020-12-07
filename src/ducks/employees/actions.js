import { GET_EMPLOYEES_REQUEST, ADD_EMPLOYEES_IDS_REQUEST,
    DELETE_EMPLOYEES_IDS_REQUEST, } from "ducks/employees/const"

export const getEmployees = () => {
    return {
        type: GET_EMPLOYEES_REQUEST
    }
}

export const addEmployeesId = (id) => {
    return {
        type: ADD_EMPLOYEES_IDS_REQUEST,
        payload: {id}
    }
}

export const deleteEmployeesId = (id) => {
    return {
        type: DELETE_EMPLOYEES_IDS_REQUEST,
        payload: {id}
    }
}