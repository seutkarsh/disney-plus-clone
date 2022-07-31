import React from "react";
import styled from "styled-components";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";

const Header = (props) => {
  const authHandler = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <Nav>
      <NavLogo>
        <img src="/images/logo.svg" alt="Disney+" />
      </NavLogo>
      <NavMenu>
        <a href="/home">
          <img src="/images/home-icon.svg" alt="Home" />
          <span>HOME</span>
        </a>
        <a href="/search">
          <img src="/images/search-icon.svg" alt="Search" />
          <span>SEARCH</span>
        </a>
        <a href="/watchlist">
          <img src="/images/watchlist-icon.svg" alt="Watchlist" />
          <span>WATCHLIST</span>
        </a>
        <a href="/originals">
          <img src="/images/original-icon.svg" alt="Originals" />
          <span>ORIGINALS</span>
        </a>
        <a href="/movies">
          <img src="/images/movie-icon.svg" alt="Movies" />
          <span>MOVIES</span>
        </a>
        <a href="/series">
          <img src="/images/series-icon.svg" alt="Series" />
          <span>SERIES</span>
        </a>
      </NavMenu>
      <Login onClick={authHandler}>LOGIN</Login>
    </Nav>
  );
};

const Nav = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 70px;
  background-color: #090b13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  z-index: 3; //to make sure header always stays over the backgraound image.
`;

const NavLogo = styled.a`
  padding: 0;
  width: 80px;
  max-height: 70px;
  margin-top: 4px;
  display: inline-block;
  img {
    display: block;
    width: 100%;
  }
  cursor: pointer;
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  height: 100%;
  margin: 0px;
  padding: 0px;
  position: relative;
  justify-content: flex-end;
  margin-right: auto;
  margin-left: 25px;

  /* @media (max-width: 768px) {
    display: none;
  } */

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;

    img {
      height: 20px;
      min-width: 20px;
      width: 20px;
    }

    span {
      color: rgb(249, 249, 249);
      font-size: 13px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 0;
      white-space: nowrap;
      position: relative;

      &:before {
        position: absolute;
        content: "";
        background-color: rgb(249, 249, 249);
        border-radius: 0 0 4px 4px;
        bottom: -6px;
        height: 2px;
        left: 0;
        right: 0;
        transform-origin: left center;
        transform: scale(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        opacity: 0;
        width: auto;
      }
    }
    &:hover {
      span:before {
        transform: scale(1);
        opacity: 1 !important;
      }
    }
  }
`;

const Login = styled.a`
  background-color: rgba(0, 0, 0, 0.6);
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  transition: all 200ms ease 0s;
  cursor: pointer;

  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;
export default Header;
