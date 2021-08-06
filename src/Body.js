import React from 'react';
import './Body.css';
// import luap from'.img/lup.png'
import lupa from  './img/lupa.png';
import dow from './img/dow.png'
import top from './img/Top.png'
import Go1 from './img/Group.png'
import Go2 from './img/tok.png'
import Go3 from './img/qul.png'
import Go4 from './img/mot.png'
import Go5 from './img/bal.png'
import Go6 from './img/rul.png'

class Body extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className='Body'>
             <div className='body1'><div className='body2'><img className='lupa' src={lupa}></img><h5 className='h6'>Search for a race car or racer</h5></div><div className='body3'><h5 
             
             className='hh'>Chooes a car </h5><div ><img className ='str' src={dow}></img>
                 </div></div >
                 <div className='body4'><img className='icon' src={top}></img></div>
             </div>

             <div className='body5'>
             <div className='body6'><div  ><img className='go1' src={Go1} ></img><div className='word'>Start</div></div></div><div className='body6'><div  ><img className='go1' src={Go6} ></img><div className='word'>Drive</div></div></div><div className='body6'><div  ><img className='go1' src={Go4} ></img><div className='word'>Maintinance</div></div></div><div className='body6'><div  ><img className='go1' src={Go2} ></img><div className='word'>Battery</div></div></div>
             <div className='body6'><div  ><img className='go1' src={Go5} ></img><div className='word'>Tires</div></div></div>
             <div className='body6'><div  ><img className='go1' src={Go3} ></img><div className='word'>Lock</div></div></div>

             </div>
            </div>
        );
    }
}


export default Body;
