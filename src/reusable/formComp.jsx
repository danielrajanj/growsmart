import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form'
import { updateData  as loadUpdateData} from '../store/edit/action';
import { validate } from '../reusable/validation'
import { inputComponent } from '../reusable/inputComp';

export default function UserForm({handleSubmit}){

    return(
        <form onSubmit={handleSubmit}>
            <Field label="Name" component={inputComponent} name="Name" type="text"/>
            <div class="input-group">
		        <p>Gender</p>
		        <div class="select select-dimen">
                <Field name="gender" component="select" >
                    <option></option>
		            <option>Male</option>
                    <option>Female</option>
		            <option>Others</option>
		          </Field>
		        </div>
		    </div>
            <Field label="Email ID" component={inputComponent} name="email" type="email"/>
            <Field label="Phone number" component={inputComponent} name="phone" type="number"/>
            <Field label="City" component={inputComponent} name="city" type="text"/>
            <Field label="Pincode" component={inputComponent} name="pin" type="number"/>
            <div className="cu-btns flex">
                <button type='submit'>Create User</button>
            </div>
        </form>
    )
}
UserForm = reduxForm({
    form: 'initializeFromState' 
  })(UserForm)
  
  UserForm = connect(
    state => ({
      initialValues: state.editData.data 
    }),
    { updateData: loadUpdateData } 
  )(UserForm)

UserForm = reduxForm({
    form: 'user',
    validate
  })(UserForm)