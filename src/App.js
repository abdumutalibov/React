import React from "react";
import Body from "./Body";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

class App extends React.Component{
  render(){
    return(
      <div className="container">
        <Sidebar />
        <div className="main">
          <Navbar />
          <Body/>
        </div>
      </div>
    )
    }
   
}

export default App;




 /* {
      students.map((value,index)=>{
        return(
          <StudentClass 
          id={value.id}
          name={value.name}
          status={value.status}/>
        )
      })
  } */