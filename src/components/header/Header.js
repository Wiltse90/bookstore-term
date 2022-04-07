import React from "react";
import './style.css';
import book from '../../assets/book.jpg';


const Header = () =>{
    return(
        <nav>
            <div className="divHeader">
                <div className="divImg">
                    <span>Home</span>
                </div>
                <div id="titleHeader">Crack <spand style={{color: "#ffebcd"}}>- A -</spand> Book <img id="imgHeader" src={book}></img></div>
               
                
                <div className="pageLinks">
                    <span className='divImg'>Shop</span>
                    <span className='divImg'>About</span>
                    <button className="btnHeader">Login</button>
                </div>
            </div>
        </nav>
    )
}

export default Header;