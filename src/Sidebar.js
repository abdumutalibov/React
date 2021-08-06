import React from 'react';

import './Sidebar.css'
import logo  from './img/Union.png'
import log  from './img/Group 2.png'
import calcul from './img/calculator.png'
import uni  from './img/Uni.png'
import cat  from './img/cat.png'
import gro  from './img/gro.png'
import set  from './img/set.png'
import ell from './img/ell.png'
import kok from './img/kok.png'
import sar from './img/sar.png'
import qiz from './img/qiz.png'
import nex from './img/nex.png'
import Navbar from './Navbar';
import Body from './Body';

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (


            <div className='container1'>
           
            {/* <img className='rasim1' src={logo}/>     
            <img className='rasim1' src={logo}/>     
                 */}
                <div className='main'>
<div className='ras'> 

    <img className='rasim' src= {log} ></img><div className ='iffee'> iffee</div>
</div>


           <div className='Men'>
                 <h4 className='menu'>Menu </h4>

                 <nav>
        <ul>
          <li ><img src={logo}></img><a href="">Home</a></li>

          <li ><img src={cat}></img><a href="">Garage</a></li>
          <li><img src={uni}></img><a href="">Service Menu</a></li>
          <li><img src={gro}></img><a href="">Racers</a></li>
          <li><img src={calcul}></img><a href="">Calculator</a></li>
          <li><img src={set}></img><a href="">Settings</a></li>
          
          
        </ul>
      </nav> 
                 </div>
                 <div className='sche'><h4 className='h4'>Scheduled Reces</h4>
                 <nav>
                     <ul>
                     <li><img src={sar}></img><a href=''>MotoGP 2022</a></li> <li><img src={qiz}></img><a href=''>Dynamic</a></li> <li><img src={kok}></img><a href=''>Olympics</a></li>
                     </ul>
                 </nav>

                 </div>
                 <div className='ell'>
                     <nav>
                         <ul>
                             {/* <li ><img className='ell1' src={ell}></img><a className='kill'  href=''>Killua</a><img src={nex}></img></li> */}


                             <li><img src={ell}></img><a className='kill' href=''>Killua</a><img className='nex' src={nex}></img></li>
                             </ul>
                             </nav>
                              </div>
                </div>
              
                <div><Navbar/></div>
{/* <div><Body/></div> */}
            </div>
        );
    }
}

Sidebar.propTypes = {};

export default Sidebar;
