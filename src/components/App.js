import logo from '../images/logo.svg';
import React from "react";
import '../Styles/App.css';
import UserList from "./UserList";
import Counter from "./counter";


function App({users}) {
  return (
    <>
        <Counter/>
        <UserList users={users}/>


    </>
  );
}

export default App;
