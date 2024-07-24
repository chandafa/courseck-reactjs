import React, { useState } from 'react';
import styled from "styled-components";
import { MdMenu, MdShoppingCart, MdSearch, MdClose } from "react-icons/md";
import { Link } from 'react-router-dom';
import { useSidebarContext } from '../context/sidebar_context';
import { useCartContext } from '../context/cart_context';

const Navbar = () => {
  const { total_items } = useCartContext();
  const { openSidebar } = useSidebarContext();
  const [showSearch, setShowSearch] = useState(false);

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  return (
    <NavbarWrapper className="bg-white flex">
      <div className='container w-100'>
        <div className='brand-and-toggler flex flex-between w-100'>
          <Link to="/" className='navbar-brand text-uppercase ls-1 fw-8'>
            <span>course</span>ck
          </Link>

          <div className='navbar-btns flex'>
            <button type="button" className='search-btn' onClick={toggleSearch}>
              <MdSearch />
            </button>
            <Link to="/cart" className='cart-btn'>
              <MdShoppingCart />
              <span className='item-count-badge'>{total_items}</span>
            </Link>
            <button type="button" className='sidebar-open-btn' onClick={() => openSidebar()}>
              <MdMenu />
            </button>
          </div>
        </div>
      </div>
      {showSearch && (
        <SearchPopup>
          <div className='search-container'>
            <input type="text" placeholder="Search for anything" />
            <button type="button" className='search-close-btn' onClick={toggleSearch}>
              <MdClose />
            </button>
          </div>
        </SearchPopup>
      )}
    </NavbarWrapper>
  )
}

const NavbarWrapper = styled.nav`
  height: 80px;
  box-shadow: rgba(50, 50, 93, 0.15) 0px 16px 12px -2px, rgba(0, 0, 0, 0.2) 0px 3px 7px -3px;

  .navbar-brand{
    font-size: 23px;
    span{
      color: var(--clr-orange);
    }
  }
  .navbar-btns{
    display: flex;
    align-items: center;
  }
  .search-btn, .cart-btn, .sidebar-open-btn{
    margin-right: 18px;
    font-size: 23px;
    background: transparent;
    border: none;
    cursor: pointer;
    transition: all 300ms ease-in-out;
    &:hover{
      opacity: 0.7;
    }
  }
  .cart-btn{
    position: relative;
    .item-count-badge{
      background-color: var(--clr-orange);
      position: absolute;
      right: -10px;
      top: -10px;
      font-size: 12px;
      font-weight: 700;
      display: block;
      width: 23px;
      height: 23px;
      color: var(--clr-white);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

const SearchPopup = styled.div`
  position: absolute;
  top: 80px;
  right: 20px;
  background: white;
  box-shadow: rgba(50, 50, 93, 0.15) 0px 16px 12px -2px, rgba(0, 0, 0, 0.2) 0px 3px 7px -3px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  z-index: 1000;
  border-radius: 0 0 4px 4px;

  .search-container {
    display: flex;
    align-items: center;
  }

  input{
    width: 300px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-right: 10px;
  }

  .search-close-btn{
    font-size: 24px;
    background: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
  }
`;

export default Navbar;
