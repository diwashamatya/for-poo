import React from "react";
import Cards from "./Cards";
import tick from "../../images/dash_tick.png";
import cross from "../../images/dash_cross.png";
const Dashboard = () => {
  return (
    <div className="bg-[#F1F6F9] w-full p-12">
      <h1 className="text-[33px] text-[#3F26A5] px-5">Dashboard</h1>
      <Cards />
      <div className="p-5 mt-6 w-full border rounded-[20px] bg-[#E8E8E8] h-[375px]">
        <div className=" p-4">
          <h1 className="text-[25px]">Summary</h1>
          <div className="p-1 flex">
            <div className="bg-white h-[75px] w-full rounded-[5px] flex items-center justify-between px-8">
              <div>
                <h2 className="text-[#346AFF] text-[18px] w-[100px] ">Yesterday</h2>
              </div>

              <div className="flex gap-3 ml-[80px]">
                <img src={tick} className="w-[23px] h-[23px]" />
                <p>You have 7 appointments to review.</p>
              </div>

              <div className="flex gap-7 w-[200px] justify-end pl-5">
                <p className="text-[#0A0879]">Review</p>
                <img src={cross} />
              </div>

              <div></div>
            </div>
          </div>
          <div className="p-1 flex">
            <div className="bg-white h-[75px] w-full rounded-[5px] flex items-center justify-between px-8">
              <div>
                <h2 className="text-[#346AFF] text-[18px] w-[100px]">Today</h2>
              </div>

              <div className="flex gap-3 ml-[80px]">
                <img src={tick} className="w-[23px] h-[23px]" />
                <p>You have 7 appointments to review.</p>
              </div>

              <div className="flex gap-7 w-[200px] justify-end pl-5">
                <p className="text-[#0A0879]">Review</p>
                <img src={cross} />
              </div>

              <div></div>
            </div>
          </div>
          <div className="p-1 flex">
            <div className="bg-white h-[75px] w-full rounded-[5px] flex items-center justify-between px-8">
              <div>
                <h2 className="text-[#346AFF] text-[18px] w-[100px]">Tomorrow</h2>
              </div>

              <div className="flex gap-3 ml-[80px]">
                <img src={tick} className="w-[23px] h-[23px]" />
                <p>You have 7 appointments to review.</p>
              </div>

              <div className="flex gap-7 w-[200px] justify-end pl-5">
                <p className="text-[#0A0879]">Review</p>
                <img src={cross} />
              </div>

              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
