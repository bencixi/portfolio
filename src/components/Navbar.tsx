import { FaBars } from 'react-icons/fa'
import {Link} from 'react-scroll'
import "../styles/navbar.css"

function Navbar() {
   function btnClick() {
        const dropdownMenu = document.querySelector('.dropdown_menu')
        if (dropdownMenu != null)
        {
            dropdownMenu.classList.toggle('open')
        }        
    }  

    function szolgaltatasokButton() {  
        const szolgaltatasokBtn = document.querySelector('.szolgaltatasok_button')
        const referBtn = document.querySelector('.referenciak_button')
        const csapatBtn = document.querySelector('.csapat_button')
        const rolunkBtn = document.querySelector('.rolunk_button')        
        if(szolgaltatasokBtn != null 
            && referBtn != null
            && csapatBtn != null
            && rolunkBtn != null )
        {
            szolgaltatasokBtn.classList.toggle('clicked')
            referBtn.classList.remove('clicked')
            csapatBtn.classList.remove('clicked')
            rolunkBtn.classList.remove('clicked')
        }       
    }
    function rolunkButton() {  
        const szolgaltatasokBtn = document.querySelector('.szolgaltatasok_button')
        const referBtn = document.querySelector('.referenciak_button')
        const csapatBtn = document.querySelector('.csapat_button')
        const rolunkBtn = document.querySelector('.rolunk_button')        
        if(szolgaltatasokBtn != null 
            && referBtn != null
            && csapatBtn != null
            && rolunkBtn != null )
        {
            szolgaltatasokBtn.classList.remove('clicked')
            referBtn.classList.remove('clicked')
            csapatBtn.classList.remove('clicked')
            rolunkBtn.classList.toggle('clicked')
        }       
    }
    function referenciaButton() {  
        const szolgaltatasokBtn = document.querySelector('.szolgaltatasok_button')
        const referBtn = document.querySelector('.referenciak_button')
        const csapatBtn = document.querySelector('.csapat_button')
        const rolunkBtn = document.querySelector('.rolunk_button')        
        if(szolgaltatasokBtn != null 
            && referBtn != null
            && csapatBtn != null
            && rolunkBtn != null )
        {
            szolgaltatasokBtn.classList.remove('clicked')
            referBtn.classList.toggle('clicked')
            csapatBtn.classList.remove('clicked')
            rolunkBtn.classList.remove('clicked')
        }       
    }
    function csapatButton() {  
        const szolgaltatasokBtn = document.querySelector('.szolgaltatasok_button')
        const referBtn = document.querySelector('.referenciak_button')
        const csapatBtn = document.querySelector('.csapat_button')
        const rolunkBtn = document.querySelector('.rolunk_button')        
        if(szolgaltatasokBtn != null 
            && referBtn != null
            && csapatBtn != null
            && rolunkBtn != null )
        {
            szolgaltatasokBtn.classList.remove('clicked')
            referBtn.classList.remove('clicked')
            csapatBtn.classList.toggle('clicked')
            rolunkBtn.classList.remove('clicked')
        }       
    }
    
          
    
      


    return ( 
        <header>
        <div className="navbar">
            <div className="logo"><a>X40 Fodrászat</a></div>
            <ul className="links">
                <li><Link to='rolunk' spy={true} smooth={true} offset={50} duration={500} onClick={() => rolunkButton()}  className="rolunk_button">Rólunk</Link></li>
                <li><Link to='referenciak' spy={true} smooth={true} offset={50} duration={500}  onClick={() => referenciaButton()} className="referenciak_button">Áraink</Link></li>
                <li><Link to='csapat' spy={true} smooth={true} offset={50} duration={500}  onClick={() => csapatButton()} className="csapat_button">Csapat</Link></li>
                <li><Link to='szolgaltatasok' spy={true} smooth={true} offset={50} duration={500}  onClick={() => szolgaltatasokButton()} className="szolgaltatasok_button">Elérhetőségek</Link></li>
            </ul>
            <a href="#" className="arajanlat_btn">Foglalás</a>
            <a className="toggle_btn" onClick={btnClick}><FaBars/></a>              
        </div>
        <div className="dropdown_menu">
            <li><a href="#">Rólunk</a></li>
            <li><a href="#">Áraink</a></li>
            <li><a href="#">Csapat</a></li>
            <li><a href="#">Elérhetőségek</a></li>
            <li><a href="#" className="arajanlat_btn">Foglalás</a></li>
        </div>
    </header> 
     );
    }
export default Navbar ;