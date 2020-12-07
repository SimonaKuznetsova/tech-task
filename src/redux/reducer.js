import {combineReducers} from 'redux'

import employeesReducer from 'ducks/employees/reducer'
import {moduleName as employeesModule} from 'ducks/employees/const'

export const reducer = combineReducers({
    [employeesModule]: employeesReducer,
})