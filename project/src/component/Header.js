import React, { useState } from 'react'
import logo from '../images/codestates-logo.png'
import menu from '../images/menu.png'
import product from '../images/product.png'
import bookmark from '../images/bookmark.png'
import '../CSS/Header.css'
import { Link } from 'react-router-dom';


function Header() {
  const [isBasketOpen, setIsBasketOpen] = useState(false);

  const handleHamburgerClick = () => {
    setIsBasketOpen((prevIsOpen) => !prevIsOpen);
  };
  return (
    <header>
      <div className="inner">
        <div className="Logo">
          <Link to='/'><img className='codestates' src={logo} alt='로고'></img></Link>
          <Link to='/'><h3> COZ Shopping </h3></Link>
        </div>
        
        <div className='Menu'>
          <img className='hamburger' src={menu} alt='Menu' onClick={handleHamburgerClick}></img>
          <div className={`basket ${isBasketOpen ? 'show' : ''}`}>
            <div className='arrow'></div>
            <div className='message'>김동주님, 안녕하세요!</div>
            <ul>
              <li>
                <Link to='/products/list'><div><img src={product} alt='Product'></img>상품리스트 페이지</div></Link>
                <Link to='/bookmark'><div><img src={bookmark} alt='Bookmark'></img>북마크페이지</div></Link>
              </li>
            </ul>
          </div>
        </div>
        

      </div>
    </header>
  )
}

export default Header;