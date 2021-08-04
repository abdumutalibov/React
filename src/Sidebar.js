import React from 'react';
import './Sidebar.css'
import logo  from './img/Union.png'
import log  from './img/Group 2.png'

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
            <img src={log}/>     

            <img src={logo}/>     
                
                <div className='main'>
                 <h1>Menu</h1>
                 <ul>
                     <li>
                         <li>Home</li>
                         <li>Garage</li>
                         <li>Serice Menu</li>
                         <li>Races</li>
                         <li></li>
                         <li></li>
                         <li></li>
                     </li>
                 </ul>
                </div>
            </div>
        );
    }
}

Sidebar.propTypes = {};

export default Sidebar;
