import React, { useState } from "react";
import "./bhourmodal.css";
import trash from "../assets/trash.png";
import add from "../assets/add.png";
import hour from "../assets/hour.svg";
import TimezoneSelect,{allTimezones} from "react-timezone-select"

function BhourModal({ setOpenModal }) {
  const [selectedFromWeek, setSelectedFromWeek] = useState("");
  const [selectedToWeek, setSelectedToWeek] = useState("");

  const handleSelectFrom = (event) => {
    setSelectedFromWeek(event.target.value);
  };
  const handleSelectTo = (event) => {
    setSelectedToWeek(event.target.value);
  };

  const [workHourOpen, setWorkHourOpen] = useState(false);
  const [breakOpen, setBreakOpen] = useState(false);

  const toggleWorkHour = () => {
    setWorkHourOpen(!workHourOpen);
  };

  const toggleBreak = () => {
    setBreakOpen(!breakOpen);
  };

  
  const [selectedOption, setSelectedOption] = useState("default");
  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };
  const [selectedTimezone, setSelectedTimezone] =useState(
    Intl.DateTimeFormat().resolvedOptions().timeZone
  )

  const [checked, setChecked] = useState(false);

  const handleToggle = (itemId) => {
    // Find the item in the data array and update its checked state
    const updatedData = data.map((item) => {
      if (item.id === itemId) {
        return { ...item, checked: !item.checked };
      }
      return item;
    });

    // Update the data array with the updatedData
    setData(updatedData);
  };
  const [data, setData] = useState([
    {
      id: 1,
      visibility: false,
    },
  ])


  return (
  
      <div className="modalContainer">
        <div className="titleCloseBtn">
         
        </div>
        <div className="title">
        <img src={hour} alt="hour" className="h-[20px] w-[20px]"/>
          <h1>Business Hours</h1>
        </div>
        {/* <div className="border flex items-center justify-end bg-white rounded-[5px]">
         
          Central Time USA and Canada
          
         

        </div> */}
         
         
          <div className='flex items-center justify-start  w-full mr-5 gap-3 mt-5 '>
        <div>
        <label className="inline-flex items-center">
          <input
            type="radio"
            value="default"
            checked={selectedOption === "default"}
            onChange={handleOptionChange}
            className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out "
          />
          <span className="ml-2 text-[14px] text-[#0C1A97] font-normal" >Default</span>
        </label>
      </div>
      <div>
        <label className="inline-flex items-center">
          <input
            type="radio"
            value="custom"
            checked={selectedOption === "custom"}
            onChange={handleOptionChange}
            className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out "
          />
          <span  className="ml-2 text-[14px] text-[#0C1A97] font-normal" >Custom</span>
        </label>
      </div>
      
          
         

          {/* {selectedWeekday && <p>Selected weekday: {selectedWeekday}</p>} */}
        </div>
        
        <TimezoneSelect
                      sx={{height: "5px",
                    backgroundColor:"#FDFBFB"
                    }}
                      value={selectedTimezone}
                      onChange={setSelectedTimezone}
                      //  placeholder= {"Select Time zone"}
                      labelStyle="altName"
                      className="text-[14px] w-[390px] shadow-sm mt-2 hover:shadow-md"

                      
                    />
        <div className="business_days">
          <h2>Business Days</h2>
          <div className="select_days">
            <select value={selectedFromWeek} onChange={handleSelectFrom}>
              <option value="">Select</option>
              <option value="Monday">Monday</option>
              <option value="Tuesday">Tuesday</option>
              <option value="Wednesday">Wednesday</option>
              <option value="Thursday">Thursday</option>
              <option value="Friday">Friday</option>
              <option value="Saturday">Saturday</option>
              <option value="Sunday">Sunday</option>
            </select>
            <p>to</p>
            <select value={selectedToWeek} onChange={handleSelectTo}>
              <option value="">Select</option>
              
              <option value="Monday">Monday</option>
              <option value="Tuesday">Tuesday</option>
              <option value="Wednesday">Wednesday</option>
              <option value="Thursday">Thursday</option>
              <option value="Friday">Friday</option>
              <option value="Saturday">Saturday</option>
              <option value="Sunday">Sunday</option>
            </select>
          </div>
          <div className="edit">
            <img src={add} />
            <img src={trash} />
          </div>

          {/* {selectedWeekday && <p>Selected weekday: {selectedWeekday}</p>} */}
        </div>

        <div className="days">
        
          <h2>Days</h2>
          <div className="flex flex-col w-full" >
            <div className="button_days">
              <button onClick={toggleWorkHour}>Mon</button>
              <button onClick={toggleWorkHour}>Tue</button>
              <button onClick={toggleWorkHour}>Wed</button>
              <button onClick={toggleWorkHour}>Thu</button>
              <button onClick={toggleWorkHour}>Fri</button>
              <button onClick={toggleWorkHour}>Sat</button>
              <button onClick={toggleWorkHour}>Sun</button>
            </div>
<div className="flex gap-3 items-center">
            <div >
            {data.map((item) => (
               <div key={item.id} className=" h-[40px]">
                 <div className="flex items-center justify-evenly  h-[59px]  ">
                  <label className="flex items-center cursor-pointer">
                    <div className="relative">
                      {/* Hidden input to hold the toggle state */}
                      <input
                        type="checkbox"
                        className="sr-only"
                        checked={item.checked}
                        onChange={() => handleToggle(item.id)} // Use onChange instead of onClick
                      />
                      {/* Track (background) */}
                      <div
                        className={`w-[35px] h-[16px] rounded-full shadow-inner ${
                          item.checked ? "bg-[#08A0E9]" : " bg-gray-300"
                        }`}
                      ></div>
                      {/* Thumb (circle) */}
                      <div
                        className={`absolute top-0 left-0 w-[16px] h-[16px] bg-white rounded-full shadow transform transition-transform ${
                          item.checked ? "translate-x-5" : "translate-x-0"
                        }`}
                      ></div>
                    </div>
                  </label>
                </div>
               </div>
            ))}
            </div>
            <div className="days_edit">
            
              <div className="work_hours">
                <h2>Work Hours</h2>
                <div className="select_time">
                  <select value={selectedFromWeek} onChange={handleSelectFrom}>
                    <option value="">Select</option>
                    <option value="Monday">Monday</option>
                    <option value="Tuesday">Tuesday</option>
                    <option value="Wednesday">Wednesday</option>
                    <option value="Thursday">Thursday</option>
                    <option value="Friday">Friday</option>
                    <option value="Saturday">Saturday</option>
                    <option value="Sunday">Sunday</option>
                  </select>
                  <p>to</p>
                  <select value={selectedToWeek} onChange={handleSelectTo}>
                    <option value="">Select</option>
                    <option value="Monday">Monday</option>
                    <option value="Tuesday">Tuesday</option>
                    <option value="Wednesday">Wednesday</option>
                    <option value="Thursday">Thursday</option>
                    <option value="Friday">Friday</option>
                    <option value="Saturday">Saturday</option>
                    <option value="Sunday">Sunday</option>
                  </select>
                </div>

                {/* {selectedWeekday && <p>Selected weekday: {selectedWeekday}</p>} */}
              </div>

              <div className="work_hours">
                <h2>Break</h2>
                <div className="select_time">
                  <select value={selectedFromWeek} onChange={handleSelectFrom}>
                    <option value="">Select</option>
                    <option value="Monday">Monday</option>
                    <option value="Tuesday">Tuesday</option>
                    <option value="Wednesday">Wednesday</option>
                    <option value="Thursday">Thursday</option>
                    <option value="Friday">Friday</option>
                    <option value="Saturday">Saturday</option>
                    <option value="Sunday">Sunday</option>
                  </select>
                  <p>to</p>
                  <select value={selectedToWeek} onChange={handleSelectTo}>
                    <option value="">Select</option>
                    <option value="Monday">Monday</option>
                    <option value="Tuesday">Tuesday</option>
                    <option value="Wednesday">Wednesday</option>
                    <option value="Thursday">Thursday</option>
                    <option value="Friday">Friday</option>
                    <option value="Saturday">Saturday</option>
                    <option value="Sunday">Sunday</option>
                  </select>
                </div>

                {/* {selectedWeekday && <p>Selected weekday: {selectedWeekday}</p>} */}
              </div>
            </div>
            </div>
          </div>
        </div>
        <div className="business_days">
          <h2>Holidays</h2>
          <div className="select_days">
            <select value={selectedFromWeek} onChange={handleSelectFrom}>
              <option value="">Select</option>
              <option value="Monday">Monday</option>
              <option value="Tuesday">Tuesday</option>
              <option value="Wednesday">Wednesday</option>
              <option value="Thursday">Thursday</option>
              <option value="Friday">Friday</option>
              <option value="Saturday">Saturday</option>
              <option value="Sunday">Sunday</option>
            </select>
            <p>to</p>
            <select value={selectedToWeek} onChange={handleSelectTo}>
              <option value="">Select</option>
              <option value="Monday">Monday</option>
              <option value="Tuesday">Tuesday</option>
              <option value="Wednesday">Wednesday</option>
              <option value="Thursday">Thursday</option>
              <option value="Friday">Friday</option>
              <option value="Saturday">Saturday</option>
              <option value="Sunday">Sunday</option>
            </select>
          </div>
          <div className="edit">
            <img src={add} />
            <img src={trash} />
          </div>

          {/* {selectedWeekday && <p>Selected weekday: {selectedWeekday}</p>} */}
        </div>
        <div className="footer">
          {/* <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel */}
          {/* </button> */}
          {/* <button>Continue</button> */}
        </div>
      </div>
    
  );
}

export default BhourModal;
