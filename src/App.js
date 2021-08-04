import React from "react";
import StudentClass from "./StudentClass";






 var students=[
    
     { id: 1, name:' Elnazar', status:' o`qchi'},
      {id: 2, name:' Botr', status:' piyozchi'},
      {id: 3, name: 'Fayzullo', status:' kartoshkachi'},
      {id: 4, name: ' Rustam', status:' ishchi'},
      {id: 5, name:' Vali', status:' Studaet'},
      {id: 6, name:' Abdurashit', status:'  traktorchi'},
      {id: 7, name:' Jamshud', status:' Stilist'},
      {id: 8, name:' Chapa', status:' mol boqar'},
      {id: 9, name:' Jumabek', status:' Uyquchi'},
      {id: 10, name:' Ketmonbek', status:' hayduvchi'},
    
  ]
  
class App extends React.Component{
  render(){
    return(
      <div className="container">
       <StudentClass data={students}/>
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