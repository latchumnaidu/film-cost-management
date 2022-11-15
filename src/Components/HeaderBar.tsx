import DropdownIcon from "../assets/images/dropdown.svg";
import HamburgerIcon from "../assets/images/hamburger.svg";
import NopalLogo from "../assets/images/nopal_logo.svg";
import NotificationIcon from "../assets/images/notification.svg"
import ProfileIcon from "../assets/images/profile.svg"
import QuestionmarkIcon from "../assets/images/questionmark.svg"
import './index.scss';

const  HeaderBar=()=>{
 return (
   <div className="header-container">
     <div className="header-elements">
       <div className="header-left">
         {/* <div className="hamburger-logo"> */}
         <img src={HamburgerIcon} alt="hamburger" className="hamburger-image" />
         <div className="logo-layout">
           <img src={NopalLogo} alt="logo" className="logo" />
           <span className="nopal-label">NOPALCYBER</span>
           {/* </div> */}
         </div>
       </div>
       <div className="header-right">
         <img src={QuestionmarkIcon} alt="questionmark" className="questionmark" />
         <img src={NotificationIcon} alt="" className="notification" />
         <div className="profile-contents">
           <img src={ProfileIcon} alt="" className="profile" />
           <span>Sara Wong</span>
           <img src={DropdownIcon} alt="dropdown" className="dropdown" />
         </div>
       </div>
     </div>
   </div>
 );
}
export default  HeaderBar;