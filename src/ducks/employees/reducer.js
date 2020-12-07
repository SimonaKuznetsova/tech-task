import { GET_EMPLOYEES_ERROR, GET_EMPLOYEES_REQUEST, GET_EMPLOYEES_SUCCESS,
    ADD_EMPLOYEES_IDS_REQUEST, ADD_EMPLOYEES_IDS_SUCCESS,
    ADD_EMPLOYEES_IDS_ERROR,
    DELETE_EMPLOYEES_IDS_REQUEST,
    DELETE_EMPLOYEES_IDS_SUCCESS,
    DELETE_EMPLOYEES_IDS_ERROR, } from "ducks/employees/const"

const defaultState = {
   loading: false,
   employees: [],
   error: '',
   employeesIds: [],
}

export default function reducer(state = defaultState, action) {
   const { type, payload, error } = action

   switch(type){
       case GET_EMPLOYEES_REQUEST:
           return { ...state, loading: true }
        case GET_EMPLOYEES_SUCCESS:
            return { ...state, loading: false, employees: payload }
        case GET_EMPLOYEES_ERROR:
            return { ...state, loading: false, error }
        
        case ADD_EMPLOYEES_IDS_REQUEST:
            return { ...state, loading: true }
        case ADD_EMPLOYEES_IDS_SUCCESS:
            return { ...state, loading: false, employeesIds: [...state.employeesIds, payload.id]}
        case ADD_EMPLOYEES_IDS_ERROR:
            return { ...state, loading: false, error }

        case DELETE_EMPLOYEES_IDS_REQUEST:
            return { ...state, loading: true }
        case DELETE_EMPLOYEES_IDS_SUCCESS:
            return { ...state, loading: false, 
                    employeesIds: state.employeesIds.filter((id) => id !== payload.id),}
        case DELETE_EMPLOYEES_IDS_ERROR:
            return { ...state, loading: false, error }
   }

   return state
}
