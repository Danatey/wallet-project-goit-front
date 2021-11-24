import React from "react";
import { NavLink } from "react-router-dom";
import Media from "react-media";
import PropTypes from "prop-types";
import { ReactComponent as HomeIcon } from '../../images/svg/home.svg'
import { ReactComponent as DiagramIcon } from '../../images/svg/diagram.svg'
import { ReactComponent as CurrencyIcon } from '../../images/svg/currency.svg'
// import home from "../../images/svg/home.svg";
// import diagram from "../../images/svg/diagram.svg";
// import currency from "../../images/svg/currency.svg";
import "./Navigation.scss";

// const checkActive = (match, location) => {
//   console.log(location);
//   if (!location) return false;
//   const { pathname } = location;
//   const { url } = match;
//   return pathname === url ? true : false;
// };

const Navigation = () => {
  return (
    <nav className="nav_container">
      <ul className="nav_list">
        <li>
          {/* <NavLink
              // className={({ isActive }) => 'link' + (isActive ? ' nav_link_active' : '')}
            exact 
            to="/home"
            activeClassName="nav_link_active"
            // isActive={checkActive}
            className="nav_link"
           
          >
            <img src={home} alt="home" className="nav_img" />
            <Media
              query="(min-width: 768px)"
              render={() => <span className="nav_text">Главная</span>}
            />
          </NavLink> */}
          <NavLink
            to="/home"
            className={({ isActive }) =>
              'nav_link' + (isActive ? ' nav_link_active' : '')
            }
          >
            <HomeIcon className="nav_icon" />
            <Media
              query="(min-width: 768px)"
              render={() => <span className="nav_text">Главная</span>}
            />
          </NavLink>
          
        </li>
        <li>
          {/* <NavLink
           exact
            to="/diagram"
            activeClassName="nav_link_active"
            className="nav_link"
          >
            <img src={diagram} alt="diagram" className="nav_img" />
            <Media
              query="(min-width: 768px)"
              render={() => (
                <span className="nav_text">Статистика</span>
              )}
            />
          </NavLink> */}
          <NavLink
          to="/diagram"
          className={({ isActive }) =>
            'nav_link' + (isActive ? ' nav_link_active' : '')
          }
        >
          <DiagramIcon className="nav_icon" />

          <Media
            query="(min-width: 768px)"
            render={() => <span className="nav_text">Статистика</span>}
          />
        </NavLink>
        </li>

        <li  className="nav_link_currency">
          <Media
            query="(max-width: 767px)"
            render={() => (
              // <NavLink
              // exact
              //  to="/currency"
              //  activeClassName="nav_link_active"
              //  className="nav_link">
              //   <img
              //     src={currency}
              //     width="44"
              //     height="44"
              //     alt="currency"
              //     className="nav_img"
              //   />
              // </NavLink>
              <NavLink
          to="/currency"
          className={({ isActive }) =>
            'nav_link' + (isActive ? ' nav_link_active' : '')
          }
          className="nav_link"
        >
          <CurrencyIcon className="nav_icon" />

          <Media
            query="(min-width: 768px)"
            render={() => <span className="nav_text">Статистика</span>}
          />
        </NavLink>
            )}
          />
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
