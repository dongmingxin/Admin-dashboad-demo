import React from 'react';
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return ( 
       <div className="sidebar">
           <div className="sidebar__title">JR Team 3 Project</div>
           <div className="sidebar__item">
               <div className="sidebar__item--title">Store</div>
               <ul>
                   <li><NavLink className="nav-link" to='/welcome'>Welcom</NavLink></li>
                   <li><NavLink className="nav-link" to='/welcome'>Order Histroy</NavLink></li>
                   <li><NavLink className="nav-link" to='/welcome'>Sales</NavLink></li>
                   <li><NavLink className="nav-link" to='/welcome'>Menu</NavLink></li>
               </ul>
           </div>
           <div className="sidebar__item">
                <div className="sidebar__item--underline"></div>
                <div className="sidebar__item--title">CRM</div>
                <ul>
                   <li><NavLink className="nav-link" to='/customer'>Existing Customers</NavLink></li>
                   <li><NavLink className="nav-link" to='/welcome'>Subscribers</NavLink></li>
               </ul>
           </div>
           <div className="sidebar__item">
                <div className="sidebar__item--underline"></div>
                <div className="sidebar__item--title">Admin</div>
                <ul>
                   <li><NavLink className="nav-link" to='/staff'>Staff</NavLink></li>
                   <li><NavLink className="nav-link" to='/order'>Order Notification</NavLink></li>
                   <li><NavLink className="nav-link" to='/notification'>Notification</NavLink></li>
               </ul>
           </div>
       </div>
     );
}
 
export default NavBar;