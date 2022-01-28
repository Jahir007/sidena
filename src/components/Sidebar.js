import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import * as FaIcons from 'react-icons/fa';
import * as FaIcons from 'react-icons/ai';

const NavIcon = styled(Link)`
  margin-left: 2rem;
  `;

const Nav = styled.div`
    display: flex;
    background-color: #fff;
    height: 80px;
    justify-content: flex-start;
    align-items: center;
    `;

const Sidebar = () => {
  return (
    <>
    <Nav>
      <NavIcon to='#'>
        <FaIcons.FaBars/>
      </NavIcon>
    </Nav>
    </>
  );
}

export default Sidebar;
