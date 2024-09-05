import { BiGridAlt } from "react-icons/bi";
import { BsCalendarWeekFill, BsCardImage } from "react-icons/bs";
import { IoMdSettings } from "react-icons/io";
import { MdOutlineAdsClick } from "react-icons/md";
import { RiArrowDownSLine } from "react-icons/ri";
import "./index.css";

const MenuRoute = () => {
     return (
        <div className="menu-container">
            <img src="https://res.cloudinary.com/dtv22dsxc/image/upload/v1725412656/blaashlogo_ldtjuy.png" className="logo-img" alt="logo"/>
            <div className="menu-card">

              <div className="menu-title">
                  <span>
                  <BiGridAlt className="icon" color="black"/>
                  Revenue
                  </span>
                  <RiArrowDownSLine className="toggle-btn" />
              </div> 

              <div className="menu-title">
                <span>
                <BsCardImage className="icon" color="black"/>
                Shoppable video
                </span>
                <RiArrowDownSLine className="toggle-btn"/>
                 </div>

                 <div className="menu-title">
                    <span>
                 <BsCardImage className="icon" color="black"/>
                   Story
                   </span>
                   <RiArrowDownSLine className="toggle-btn" />
                 </div>

                 <div className="menu-title">
                    <span>
                 <BsCardImage className="icon" height="80" color="black"/>
                  Live Commerce
                  </span>
                  <RiArrowDownSLine className="toggle-btn"/>
                 </div>
                 
                 <div className="menu-title">
                    <span>
                 <BsCardImage className="icon" height="80" color="black" />
                 Playlist Manager
                 </span>
                 <RiArrowDownSLine className="toggle-btn"/>
                 </div>

             <div className="menu-title">
                  <span>
                 <MdOutlineAdsClick className="icon" height="80" color="black"/>
                 One Click Post
                 </span>
                 <RiArrowDownSLine className="toggle-btn" />
                 </div>

                <div className="menu-title">
                  <span>  
                <BsCalendarWeekFill className="icon" height="80" color="black" />
                 Calendar
                 </span>
                 <RiArrowDownSLine className="toggle-btn" />
                 </div>

                <div className="menu-title">
                    <span>
               <IoMdSettings className="icon" height="80" color="black"/>
                 Hire Influencer
                 </span>
                 <RiArrowDownSLine className="toggle-btn"/>
                 </div> 
            </div>
        </div>
     )
}
export default MenuRoute