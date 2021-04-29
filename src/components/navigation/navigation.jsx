import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Navigation = (props) => {
  return (
    <>
      <header className="header pt-4">
        <nav>
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <NavLink
                to="/"
                className="nav-link"
                activeClassName="active"
                exact>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/users"
                className="nav-link"
                activeClassName="active"
                exact>
                Users
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/logout"
                className="nav-link"
                activeClassName="active">
                Logout
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

Navigation.propTypes = {
  onPageChange: PropTypes.func,
  pages: PropTypes.object,
};

export default Navigation;
