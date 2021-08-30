import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { listData } from '../store/list/action';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { updateData } from '../store/edit/action';

const staticData = [{id:"1",Name:"Daniel",gender :"Male",phone :"9845655555",email:"daniel@gmail.com",pin:"600226",city:"chennai"},
	{id:"2",Name:"Kavi",gender :"Female",phone :"7925655555",email:"kavi@gmail.com",pin:"270126",city:"chennai"},{id:"3",Name:"Ram",gender :"Male",phone :"9325655555",email:"ram@gmail.com",pin:"750126",city:"chennai"},{id:"4",Name:"John",gender :"Male",phone :"2345655555",email:"john@gmail.com",pin:"600126",city:"chennai"}]

export default function UserList(){
	const dispatch = useDispatch()
	let history = useHistory();

	let userlistdata = useSelector(s=>s.userlist)

	useEffect(()=>{
		let localeData = JSON.parse(localStorage.getItem("userDatags"))
		if(localeData && localeData.length !== 0) {
			dispatch(listData(localeData))

		} else {
			dispatch(listData(staticData))
			localStorage.setItem("userDatags",JSON.stringify(staticData))
		}
	},[])

	const reorder = (list, startIndex, endIndex) => {
		console.log(list,startIndex,endIndex)

		const result = Array.from(list.data);
		const [removed] = result.splice(startIndex, 1);
		result.splice(endIndex, 0, removed);
	  
		return result;
	  };

	const onDragEnd =(result)=>{
		if (!result.destination) {
			return;
		}
		const items = reorder(
			userlistdata,
			result.source.index,
			result.destination.index
		  );
		  dispatch(listData(items))
		  localStorage.setItem("userDatags",JSON.stringify(items))
	}

	const deleteRow =(e,deleteId) =>{
		e.preventDefault()
		let existArray = userlistdata.data.filter((value)=> value.id !== deleteId)
		dispatch(listData(existArray))
		localStorage.setItem("userDatags",JSON.stringify(existArray))
		alert("Successfully deleted a user!");
	}

	const editDetail =(editData) =>{
		dispatch(updateData(editData))
		history.push("/create-user")

	}

	

    return(
        <div className="wrapper">
		    <div className="page-wrapper">

		    <div className="header flex">
		      <h3>User list</h3>
		      <Link to="/create-user" > <i className="fas fa-plus"></i> Create user</Link>
		    </div>
				<DragDropContext 
				onDragEnd={onDragEnd}
				>
    		    	<Droppable droppableId="droppable">
					{(provided, snapshot) => (
						<div
						{...provided.droppableProps}
						ref={provided.innerRef}
						// style={getListStyle(snapshot.isDraggingOver)}
					  >
					<>
					<div className="table-responsive height-responsive">

					<table className="table">

		      <thead>
		        <tr>
		          <th>Name</th>
		          <th>Gender </th>
		          <th>Email </th>
		          {/* <th>Role</th> */}
		          <th className="text-center">Delete </th>
		        </tr>
		      </thead>
					<tbody>
						{userlistdata && userlistdata.data && userlistdata.data.map((value,index)=>(
						<Draggable key={value.id} draggableId={value.id} index={index}>
							{(provided, snapshot) => (
								<tr ref={provided.innerRef}
								{...provided.draggableProps}
								{...provided.dragHandleProps}
								>
								{/* <tr key={index} > */}
								{/* // ref={provided.innerRef}
								// {...provided.draggableProps}
								// {...provided.dragHandleProps} */}
								
		          					<td className="width-30" onClick={e=> editDetail(value)}>
                  					      <strong>  {value.Name}</strong>
		          					</td>
		          					<td className="width-30">{value.gender}</td>
		          					<td>{value.email}</td>
		          					<td className="text-center">
		          					  <a href="#" onClick={e=>deleteRow(e,value.id)}> <img src="img/trash.svg"/> </a>
		          					</td>
		        				{/* </tr> */}
								</tr>
								
							)}
						</Draggable>
				  		))}
						  </tbody>
						  </table>
						  </div>
					</></div>)}
					{/* {userlistdata && userlistdata.data && userlistdata.data.map((value,index)=>(
					<Draggable key={index} draggableId={index} index={index}>
						<tr key={index}>
		          		<td className="width-30">
                  		      <strong>  {value.Name}</strong>
		          		</td>
		          		<td className="width-30">{value.gender}</td>
		          		<td>{value.email}</td>
		          		<td className="text-center">
		          		  <a href="javascript:void(0)"> <img src="img/trash.svg"/> </a>
		          		</td>
		        		</tr>
					</Draggable>
				  ))} */}
					</Droppable>
    		  	</DragDropContext>
		  </div>

		{/* </div> */}

	</div>
    )
}