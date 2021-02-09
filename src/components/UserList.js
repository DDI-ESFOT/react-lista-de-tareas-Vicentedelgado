import React from "react";
import {useState} from "react";
function formatName(user){
    return`${user.name} ${user.lastname}`;
}
const UserList = ({users})=>{
    const [usersList,setUserList]= useState([
        {
            name:"Vicente",
            lastname:"Delgado",
        }
    ]);
    const handAdduser =(event) =>{
        console.log("event",event);
        console.log("Anadir");
        const newName=document.querySelector("#name").value;
        const lastName=document.querySelector("#lastname").value;
        const newUser ={
            name:newName,
            lastname:lastName,
        }
        console.log("newname",newName);

        setUserList((prevUsersList) =>{
            /*const newList =[];
            /prevUsersList.forEach((pr)=>{
                newList.push(pr);
            });*/
            //Spread operation
            return [ ...prevUsersList,newUser];
        });
        document.querySelector("#name").value="";
        document.querySelector("#lastname").value="";
    };

    const handDeleteUser = (index) => {
        console.log("eventEliminar",index);
        setUserList((prevState) =>{
          return prevState.filter( (user,i) => i !== index);
        });
    };


    return(
        <>
            <h1>Lista de usarios ({usersList.length} usuarios)</h1>
            <input type="text" id="name"placeholder="ingrese nombre"/>
            <input type="text" id="lastname"placeholder="ingrese Apellido"/>
            <button onClick={handAdduser}>Añadir</button>
            {usersList.map( (user, index) => {
                return <button key={index} onClick={() => handDeleteUser(index)}>Eliminar último usuario</button>;
            })}
            <ul>
                {usersList.map( (user, index) => {
                        return <li key={index}>{ formatName(user)} <button onClick={() => handDeleteUser(index)}>Eliminar</button></li>;
                })}
            </ul>

        </>
    );
};

export default UserList;