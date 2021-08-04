// // import { div } from 'prelude-ls'
import React from 'react'
// import ReactDOM from 'react-dom';
 import './App.css'
import StudentFunc from './StudentFunc'

//  var students=[
//     {
//       id: 1, name:'Elnazar', status:'o`qchi',
//       id: 2, name:'Botr', status:'piyozchi',
//       id: 3, name:'Fayzullo', status:'kartoshkachi',
//       id: 4, name:'Rustam', status:'ishchi',
//       id: 5, name:'Vali', status:'Studaet',
//       id: 6, name:'Abdurashit', status:'traktorchi',
//       id: 7, name:'Jaomshid', status:'Stilist',
//       id: 8, name:'Chapa', status:'mol boqar',
//       id: 9, name:'Jumabek', status:'Uyquchi',
//       id: 10, name:'Ketmonbek', status:'hayduvchi',
//     }
//   ]
  
class StudentClass  extends React.Component{
    render(){
    console.log(this.props.data);
        return( 
            <table border='1'>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Status</th>
                </tr>
                {
                    this.props.data.map((value,index)=>{
return(
    <tr>
        <td>{value.id}</td>
        <td>{value.name}</td>
        <td>{value.status}</td>
    </tr>
)
                    })
                }
               
            </table>
            
        )
        
    }
}
export default StudentClass


// <div>
            //      <div>ID:{this.props.id} </div>
            //     <div>Name:{this.props.name} </div>
            //     <div>status:{this.props.status} </div>
            // </div>