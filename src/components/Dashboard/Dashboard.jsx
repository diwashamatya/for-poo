import React from "react";
import Cards from "./Cards";
import tick from "../../assets/dash_tick.png";
import cross from "../../assets/dash_cross.png";
import checkmark from "../../assets/icons-checkmark.png";
import checked from "../../assets/icons-checked.svg";
 
const Dashboard = () => {
  return (
    <div className="bg-[#F3F7F9] w-full px-[50px] py-5 md:px-10 lg:px-20" >
      <h1 className="text-[27px] text-[#3F26A5] pb-3">Dashboard</h1>
      <Cards />
      <div className="px-7 mt-10 w-full border rounded-[20px] bg-[#ebe9e9] h-[250px]">
        <div >
          <h1 className="text-[22px] my-2.5">Summary</h1>
          <div className=" flex">
            <div className="bg-white h-[45px] w-full rounded-[5px] flex items-center justify-between px-8 mb-2 shadow-sm">
              <div>
                <h2 className="text-[#346AFF] text-[18px] w-[100px] font-[500] ">Yesterday</h2>
              </div>

              <div className="flex gap-3 ml-[80px] items-center">
                <img src={checked} className="w-[18px] h-[18px]" />
                <p>You have <span className="text-[#1C19CC]">7 appointments</span> to review.</p>
              </div>

              <div className="flex gap-7 w-[200px] justify-end pl-5">
                <p className="text-[#0A0879]">Review</p>
                <img src={cross} className="h-[27px] w-[27px]" />
              </div>

             
            </div>
          </div>
          <div className="flex">
            <div className="bg-white h-[45px] w-full rounded-[5px] flex items-center justify-between px-8 mb-2 shadow-sm">
              <div>
                <h2 className="text-[#346AFF] text-[18px] w-[100px] font-[500]">Today</h2>
              </div>

              <div className="flex gap-3 ml-[80px] items-center">
                <img src={checked} className="w-[18px] h-[18px]" />
                <p>You have <span className="text-[#1C19CC]">7 appointments</span> to review.</p>
              </div>

              <div className="flex gap-7 w-[200px] justify-end pl-5">
                <p className="text-[#0A0879]">Review</p>
                <img src={cross} className="h-[27px] w-[27px]" />
              </div>

             
            </div>
          </div>
          <div className=" flex">
            <div className="bg-white h-[45px] w-full rounded-[5px] flex items-center justify-between px-8 shadow-sm">
              <div>
                <h2 className="text-[#346AFF] text-[18px] w-[100px] font-[500]">Tomorrow</h2>
              </div>

              <div className="flex gap-3 ml-[80px] items-center">
                <img src={checked} className="w-[18px] h-[18px]" />
                <p>You have <span className="text-[#1C19CC]">7 appointments</span> to review.</p>
              </div>

              <div className="flex gap-7 w-[200px] justify-end pl-5">
                <p className="text-[#0A0879]">Review</p>
                <img src={cross} className="h-[27px] w-[27px]" />
              </div>

              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
