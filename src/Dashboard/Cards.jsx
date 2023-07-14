import React from "react";
import user from "../images/card_user.png";
import appointment from "../images/card_appointment.png";
import request from "../images/card_request.png";
import ok from "../images/card_ok.png";
import arrow from "../images/card_arrow.png";

const Cards = () => {
  return (
    <>
      <div className="p-5">
      
        <div>
          <div className="flex justify-between">
            <div
              className="bg-gradient-to-b from-[#D5FEC7] to-[#F5F5F5]
         h-[145px] w-[250px] rounded-[10px] border p-5 flex justify-between"
            >
              <div>
                <h3 className="text-[17px]">Users</h3>
                <p className="text-[24px]">250</p>
              </div>
              <div className="pt-8 flex flex-col items-end justify-between">
                <img src={user} className="mr-2 h-[35px] w-[35px] " />
                <div className="flex w-[80px]  items-center gap-2 justify-end">
                  <p className="text-[11px]">See all Users</p>
                  <img src={arrow} className="h-[10px] w-[10px]" />
                </div>
              </div>
            </div>

            <div
              className="bg-gradient-to-b from-[#C7F1FE] to-[#F5F5F5]
         h-[145px] w-[250px] rounded-[10px] border p-5 flex justify-between"
            >
               <div >
                <h3 className="text-[17px]">Total Appointments</h3>
                <p className="text-[24px]">250</p>
              </div>
              <div className="pt-8 flex flex-col items-end justify-between">
                <img src={appointment} className="mr-2 h-[35px] w-[35px] " />
                <div className="flex w-[80px]  items-center gap-2 justify-end">
                  <p className="text-[11px]">See all Appointments</p>
                  <img src={arrow} className="h-[10px] w-[10px]" />
                </div>
              </div>
            </div>

            <div
              className="bg-gradient-to-b from-[#E6C7FE] to-[#F5F5F5]
         h-[145px] w-[250px] rounded-[10px] border p-5 flex justify-between"
            >
               <div>
                <h3 className="text-[17px]">Appointment Requests</h3>
                <p className="text-[24px]">250</p>
              </div>
              <div className="pt-8 flex flex-col items-end justify-between">
                <img src={request} className="mr-2 h-[35px] w-[35px] " />
                <div className="flex w-[80px]  items-center gap-2 justify-end">
                  <p className="text-[11px]">See all Requests</p>
                  <img src={arrow} className="h-[10px] w-[10px]" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex ">
            <div
              className="bg-gradient-to-b from-[#FFCDCD] to-[#F5F5F5]
         h-[145px] w-[250px] rounded-[10px] border mt-[34px] p-5 flex justify-between"
            >
               <div>
                <h3 className="text-[17px]">Completed Appointment</h3>
                <p className="text-[24px]">250</p>
              </div>
              <div className="pt-8 flex flex-col items-end justify-between">
                <img src={ok} className="mr-2 h-[35px] w-[35px] " />
                <div className="flex w-[80px]  items-center gap-2 justify-end">
                  <p className="text-[11px]">See all</p>
                  <img src={arrow} className="h-[10px] w-[10px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
