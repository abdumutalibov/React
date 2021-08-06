import React from 'react';
import Body from './Body';
import './Navbar.css'
import Said from './Sidebar'
import chap from './img/chap.png'
import on from './img/on.png'
import tri from './img/tri.png'
import car from './img/Car.png'
class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (

            <div className="Navbar">
                <div><Body/></div>

                <div className='navbar1'>
<div className='inf'>Infiniti Renault

<div className='tm'>TM</div>
<div className='obj'>
<div className='box'><img className='chap' src={chap}></img> </div>

<div className='box'><div className='on'>
    </div><img className='chap' src={on}></img> </div></div>


<div className='tri'><img src={tri}></img></div>
</div>
<div className='car'><img src={car}></img></div>
                </div>
            </div>
        );
    }
}


export default Navbar;
