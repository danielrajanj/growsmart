import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { editReducer } from './edit/reducer'
import { listReducer } from './list/reducer'

const allReducers = combineReducers(
    {
        form: formReducer,
        editData: editReducer,
        userlist: listReducer
    })

    export default allReducers