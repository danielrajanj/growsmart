import React from 'react';
import { useHistory } from 'react-router-dom';
import UserForm from '../reusable/formComp';


export default function CreateUser(props) {
    let history = useHistory();
    
    const submit =(values) =>{
        let locale=JSON.parse(localStorage.getItem("userDatags"))
        if(values) {
            let localObject = values;
            localObject.id = JSON.stringify(locale.length + 1);
            locale.push(localObject)
            localStorage.setItem("userDatags",JSON.stringify(locale))
            history.push("/")
        }
    }


    return(
        <div className="wrapper">
            {/* {console.log(props)} */}
            <div className="page-wrapper">
                <div className="cent-position">
                    <div className="create-main-container">
                    <div className="header flex">
		                <h3>Create User</h3>
                    </div>
                    <UserForm onSubmit={submit}/>
                    </div>
                </div>
            </div>
        </div>
    )
}



  