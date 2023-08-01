import React, { useState } from "react";
import menu from "../assets/menu.png";
import dashboard from "../assets/dashboard.png";
import appointment from "../assets/appointment.png";
import announcement from "../assets/announcement.png";
import settings from "../assets/settings.png";
import profile from "../assets/admin-photo.png";
import logout from "../assets/logout-icon.png";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  const handleMenu = () => {
    setOpen(!open);
    console.log("menu clicked");
  };
  return (
      <div
        className={`h-screen  flex flex-col items-center border-r md:items-center  w-[80px]
         ${open ? "md:w-[290px] " : "md:w-[100px]"} relative duration-100`}
      >
       
          <div
            className={`flex w-[220px] h-[40px]  items-center
            rounded-md  hidden md:block md:mt-2 md:pt-3
             ${
               open ? "w-[260px] pl-[53px]" : "w-[60px] flex justify-center "
             } relative duration-300 `}
          >
            <div className="flex justify-start items-center">
              <img src={menu} className="h-[16px] " onClick={handleMenu} />
            </div>
          </div>

          <div
            className={`flex  md:h-[48px] bg-[#78C1F3] md:items-center md:mt-[8px] h-[38px] w-auto md:w-[190px] mt-[10px]
            rounded-md p-[20px]
             ${
               open ? "w-[190px] items-center" : "w-[60px] p-[5px] ml-0"
             } relative duration-300 `}
          >
            <div className="flex ">
            <Link to="/dashboard" className="flex justify-center gap-4 items-center">
              <img src={dashboard} className={`w-[20px] h-[20px] ${open ? "ml-0": "ml-3" }`} />
             
                <h4 className={`${!open && "hidden"} text-[18px] md:block hidden`} style={{fontFamily:"Arial"}}>Dashboard</h4>
              </Link>
            </div>
          </div>
          <div
            className={`flex  md:h-[48px] bg-[#78C1F3] md:items-center md:mt-[18px] mt-[10px] h-[38px] w-auto md:w-[190px] 
            rounded-md p-[20px]
             ${
               open ? "w-[190px] items-center" : "w-[60px] p-[5px] ml-0"
             } relative duration-300 `}
          >
            <div className="flex  justify-center gap-4 items-center ">
             
              <img src={appointment} className={`w-[20px] h-[20px] ${open ? "ml-0": "ml-3" }`} />
              <h3 className={`${!open && "hidden"} text-[18px]  md:block hidden`} style={{fontFamily:"Poppins"}}>Appointment</h3>
             
            </div>
          </div>
          <div
            className={`flex  md:h-[48px] bg-[#78C1F3] md:items-center md:mt-[18px] mt-[10px] h-[38px] w-auto md:w-[190px] 
            rounded-md p-[20px]
             ${
               open ? "w-[190px] items-center" : "w-[60px] p-[5px] ml-0"
             } relative duration-300 `}
          >
            <div className="flex">
            <Link to="/announcement" className="flex  justify-center gap-4 items-center ">
              <img src={announcement} className={`w-[20px] h-[20px] ${open ? "ml-0": "ml-3" }`} />
              <h3 className={`${!open && "hidden"} text-[18px]  md:block hidden`} style={{fontFamily:"Poppins"}}>Announcement</h3>
              </Link>
            </div>
          </div>
          <div
            className={`flex  md:h-[48px] bg-[#78C1F3] md:items-center md:mt-[18px] mt-[10px] h-[38px] w-auto md:w-[190px] 
            rounded-md p-[20px]
             ${
               open ? "w-[190px] items-center" : "w-[60px] p-[5px] ml-0"
             } relative duration-300 `}
          >
            <div className="flex justify-center gap-4 items-center ">
            <Link to="/settings"  className="flex justify-center gap-4 items-center">
              <img src={settings} className={`w-[20px] h-[20px] ${open ? "ml-0": "ml-3" }`} />
             
                <h3 className={`${!open && "hidden"}  text-[18px]  md:block hidden`} style={{fontFamily:"Poppins"}}>Settings</h3>{" "}
              </Link>
            </div>
          </div>
          <div className="py-11">
          <div
            className={`flex  md:h-[48px]  md:items-center md:mt-[18px] mt-[10px] h-[38px] w-auto md:w-[190px] 
            rounded-md p-[20px]
             ${
               open ? "w-[190px] items-center" : "w-[60px] p-[5px] ml-0"
             } relative duration-300 `}
          >
              <div className="flex justify-center gap-4 items-center">
                <img src={profile} className={`w-[20px] h-[20px] ${open ? "ml-0": "ml-3" }`} />
                <h3 className={`${!open && "hidden"}  md:block hidden`}>Profile</h3>
              </div>
            </div>
            <div
              className={`flex  h-[48px] items-center mt-[5px] 
            rounded-md p-[20px]
             ${
               open ? "w-[190px]" : "w-[60px] p-[5px] ml-0"
             } relative duration-300 `}
            >
              <div className="flex  justify-center gap-4 items-center">
                <img src={logout} className={`w-[20px] h-[20px] ${open ? "ml-0": "ml-3" }`} />
                <h3 className={`${!open && "hidden"}  md:block hidden`}>Logout</h3>
              </div>
            </div>
          </div>
        </div>
     
    
  );
};

export default Sidebar;
