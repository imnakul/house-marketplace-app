import { useNavigate, useLocation } from "react-router-dom";
import OfferIcon from "../assets/svg/localOfferIcon.svg?react";
import ExploreIcon from "../assets/svg/exploreIcon.svg?react";
import PersonOutlineIcon from "../assets/svg/personOutlineIcon.svg?react";

function Navbar() {
   const navigate = useNavigate();
   const location = useLocation();

   const pathMatchRoute = (route) => {
      if (route == location.pathname) {
         return true;
      }
   };

   return (
      <footer className='navbar'>
         <nav className='navbarNav'>
            <ul className='navbarListItems'>
               <li
                  className='navbarListItem'
                  onClick={() => navigate("/explore")}
               >
                  <ExploreIcon
                     fill={pathMatchRoute("/explore") ? "#2c2c2c" : "#8f8f8f"}
                     width='36px'
                     height='36px'
                  />
                  <p
                     className={
                        pathMatchRoute("/explore")
                           ? "navbarListItemNameActive"
                           : "navbarListName"
                     }
                  >
                     Explore
                  </p>
               </li>
               <li
                  className='navbarListItem'
                  onClick={() => navigate("/offers")}
               >
                  <OfferIcon
                     fill={pathMatchRoute("/offers") ? "#2c2c2c" : "#8f8f8f"}
                     width='36px'
                     height='36px'
                  />
                  <p
                     className={
                        pathMatchRoute("/offers")
                           ? "navbarListItemNameActive"
                           : "navbarListName"
                     }
                  >
                     Offers
                  </p>
               </li>
               <li
                  className='navbarListItem'
                  onClick={() => navigate("/profile")}
               >
                  <PersonOutlineIcon
                     fill={pathMatchRoute("/profile") ? "#2c2c2c" : "#8f8f8f"}
                     width='36px'
                     height='36px'
                  />
                  <p
                     className={
                        pathMatchRoute("/profile")
                           ? "navbarListItemNameActive"
                           : "navbarListName"
                     }
                  >
                     Profile
                  </p>
               </li>
            </ul>
         </nav>
      </footer>
   );
}
export default Navbar;
