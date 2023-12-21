import {NavLink, useLocation} from "react-router-dom";

export default function HeaderElement({path, name, currentLocation}) {
  return (
    <NavLink
      to={path}
      className= {
        `      
          ${currentLocation === path ? 'text-white' : 'text-white/40'}      
          font-medium          
          hover:underline hover:text-white/70                    
        `
      }
    >
      {name}
    </NavLink>
  )
}