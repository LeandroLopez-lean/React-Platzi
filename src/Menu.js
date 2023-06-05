import React from "react";
import { Link as NavLink } from "react-router-dom";

function Menu(){
    return(
        <nav>
            <ul>
            {routes.map(route => (
                 <li>
                   <NavLink 
                   /// el style queda comentado por que rompe el codigo/////////
                       /*  style={({ isActive }) => ({
                            color: isActive ? 'red' : 'blue',
                    })}  */
                     to={route.to}
                   >
                     {route.Text}
                   </NavLink>
                   </li>
                ))}
               {/*  <li>
                    <NavLink
                         style={({ isActive }) => ({
                            color: isActive ? 'red' : 'blue',
                    })} 
                    to="/">
                        Home</NavLink>
                </li>
                <li>
                    <NavLink to="/Blog">Blog</NavLink>
                </li>
                <li>
                    <NavLink to="/profile">Profile</NavLink>
                </li> */}
            </ul>
        </nav>
    );
}

const routes = [];
routes.push({
    to: '/',
    Text: 'Home',
});
routes.push({
    to: '/blog',
    Text: 'Blog',
});
routes.push({
    to: '/profile',
    Text: 'Profile',
});

export { Menu };


