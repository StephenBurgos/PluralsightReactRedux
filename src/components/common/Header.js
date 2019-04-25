import React from 'react';
import { NavLink } from 'react-router-dom';
import CoursesPage from '../courses/CoursesPage';

const Header = () => {
  const activeStyle = { color: '#F1582A' }

  return (
    <nav>
      <NavLink to="/" activeStyle={activeStyle} exact>
        Home
      </NavLink>{" "}
      {" | "}
      <NavLink to="/about" activeStyle={activeStyle}>
        About
      </NavLink>{" "}
      {" | "}
      <NavLink to="/courses" activeStyle={CoursesPage}>
        Courses
      </NavLink>
    </nav>
  );
}

export default Header;