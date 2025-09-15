
import './components.css'
import { useState } from "react";


function Header() {
    const [isVisible, setIsVisible] = useState(false);

    const handleClick = () => {
        setIsVisible(prev => !prev); // toggles true/false
    };

    return (
        <>
            <div class='header-container'>
                <div class='logo-banner'>
                    <img
                        src={isVisible ? "/cross.png" : "menu.svg"}
                        alt="Toggle"
                        class="dropdown"
                        onClick={handleClick}
                    ></img>
                    <img class='img-header' src='/header_white.svg'></img>
                    <img class='search-white' src='/search_white.svg'></img>
                </div>
                <div className={`nav-categories ${isVisible ? "visible" : ""}`}>
                    <p className={`browse-categories ${isVisible ? "visible" : ""}`}>BROWSE THROUGH CATEGORIES</p>
                <nav class='nav-bar'>

                    <ul class='nav-list'>
                        <li class='nav-item'>NEWS</li>
                        <li class='nav-item'>OPINION</li>
                        <li class='nav-item'>SPORTS</li>
                        <li class='nav-item'>BEYOND LOYOLA</li>
                        <li class='nav-item'>FEATURES</li>
                        <li class='nav-item'>INQUIRY</li>
                        <li class='nav-item'>VANTAGE MAGAZINE</li>
                        <li class='nav-item'>SCITECH</li>
                        <li class='nav-item'>INTERACTIVES</li>
                        <li class='nav-item'>ARCHIVES</li>
                        <li class='nav-item'>TAKE THE LEDE</li>
                        <li class='nav-item'>ABOUT</li>
                        <li><img class='search-grey' src='/search_grey.svg'></img></li>
                        </ul>

                    </nav>
                </div>
            </div>
        </>
    )
}

export default Header