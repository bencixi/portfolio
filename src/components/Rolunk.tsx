import "../styles/rolunk.css"
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";
import kep from '../img/kep2.jpg'
import logo from '../img/barber.png'

function Rolunk() {
    useEffect(()=> {
        Aos.init();
        
    }, [])
    
    


    
    return (
    <div className="mainpage" id="rolunk">
        <div className="rolunk">
            <div className="rolunkIMG">
                <img className="logoIMG" src={kep}/>
            </div>
            <div className="rolunkText">
                <img src={logo}/>
                <h1>BUDAPEST, KÁROLY KIRÁLYOK ÚTJA 127.</h1>
                <h2>Mindenki megérdemli, hogy egy kis luxusban legyen része!</h2>
                <h2>Péntek - Szombat</h2>
                <h1>8.00 - 23.00</h1>
                <div className="foglaljButton">
                    <a href="#" title="Button">Foglalás</a>
                </div>
            </div>
            
        </div>               
    </div> 
      );
}

export default Rolunk;