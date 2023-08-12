import React, { useState ,useContext } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import Calendar from "../CalendarModal/Calendar";
import { Button } from "@mui/material";
import axios from "axios";
import { AppContext } from "../../AppContext"; // Import the AppContext

const AddOffersModal = ({ setGetformData, closeAddOffer }) => {
   const { setFormDataFromModal ,setHello} = useContext(AppContext);

  const [formData, setFormData] = useState({
    title: "",
    message: "",
    description: "",
    from: "",
    to: "",
  });
  const [formErrors, setFormErrors] = useState({
    title: "",
    message: "",
    description: "",
    from: "",
    to: "",
  });
  const validateForm = () => {
    let isValid = true;

    if (!formData.title) {
      setFormErrors((prevData) => ({
        ...prevData,
        title: "Required",
      }));
      isValid = false;
    } else {
      setFormErrors((prevState) => ({
        ...prevState,
        name: "",
      }));
    }

    if (!formData.message) {
      setFormErrors((prevData) => ({
        ...prevData,
        message: "Required",
      }));
      isValid = false;
    } else {
      setFormErrors((prevState) => ({
        ...prevState,
        message: "",
      }));
    }

    if (!formData.from) {
      setFormErrors((prevData) => ({
        ...prevData,
        from: "Select a Date",
      }));
      isValid = false;
    } else {
      setFormErrors((prevState) => ({
        ...prevState,
        from: "",
      }));
    }

    if (!formData.to) {
      setFormErrors((prevData) => ({
        ...prevData,
        to: "Select a Date",
      }));
      isValid = false;
    } else {
      setFormErrors((prevState) => ({
        ...prevState,
        to: "",
      }));
    }
    return isValid;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
    
     const newOffer = {
      title: formData.title,
      message: formData.message,
      description: formData.description,
      from: formData.from,
      to: formData.to,
    };

    setFormDataFromModal((prevOffers) => [...prevOffers, newOffer]);
      setHello(true)
      closeAddOffer()
      
    } else {
      // console.log('notSubmitted')
      console.log(formData);
    }
  };
 const handleChange = (e) => {
   const { name, value } = e.target;
   setFormData((prevState) => ({
     ...prevState,
     [name]: value,
   }));
 };


  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const onCloseModal = () => setModalOpen(false);

  const handleSelectedDate = (selectedDate) => {
    // Callback function to set the selected date in the formData state
    setFormData((prevState) => ({
      ...prevState,
      to: selectedDate, // Update the "date" field with the selected date
    }));

    setModalOpen(false);
  };

  return (
    <>
      <Modal
        open={modalOpen}
        onClose={onCloseModal}
        center
        classNames={{
          overlay: "customOverlay",
          modal: "customModal",
          closeButton: "customButton",
        }}
      >
        <Calendar onSelectDate={handleSelectedDate} />
      </Modal>
      <div>
        <form
          onSubmit={handleSubmit}
          className=" flex md:w-[400px] md:h-[auto] mt-4  flex-col bg-[#ffffff] rounded-[10px] "
        >
          <h1 className="text-center  text-[22px] font-[600] md:py-4">
            Add Offers
          </h1>
          <div className="flex items-center relative mx-3">
            {/* <img className="w-3.5  absolute left-4" src={user} alt="user"></img> */}
            <input
              className={`w-full rounded-[5px]  text-[14px] h-[39px] m-2 pl-[20px] border-[0.5px]   focus:bg-white focus:outline-none focus:ring-2 focus:ring-slate-500  placeholder:text-[#8B8989] bg-[#dceaff4d]   placeholder:text-[13px]  md:w-[400px] md:h-[45px] md:placeholder:text-[15px] md:pl-[20px]`}
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Title"
              required
            />
            {/* {formErrors.name && (
          <p className="text-red-500  absolute right-2 text-[12px] mx-3 ">
            {formErrors.name}*
          </p>
        )} */}
          </div>
          <div className="flex  items-center relative mx-3">
            {/* <img className="w-4 absolute left-4" src={mail} alt="mail"></img> */}
            <input
              className={`w-full  rounded-[5px]  text-[14px] h-[39px] m-2 pl-[26px] border-[0.5px]   focus:bg-white focus:outline-none focus:ring-2 focus:ring-slate-500  placeholder:text-[#8B8989] bg-[#dceaff4d]   placeholder:text-[13px]  md:w-[400px] md:h-[45px] md:placeholder:text-[15px] md:pl-[20px]`}
              type="text"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              required
            />
            {/* {formErrors.email && (
          <p className="text-red-500  absolute right-2 text-[12px] mx-3 ">
            {formErrors.email}*
          </p>
        )} */}
          </div>
          <div className="flex items-center relative mx-3">
            {/* <img
          className="w-4 h-4 absolute left-4"
          src={phone}
          alt="phone"
        ></img> */}
            <textarea
              className={`w-full rounded-[5px] md:p-2 text-[14px] h-[39px] m-2 pl-[26px] border-[0.5px]   focus:bg-white focus:outline-none focus:ring-2 focus:ring-slate-500  placeholder:text-[#8B8989] bg-[#dceaff4d] shadow-shado2  placeholder:text-[13px]  md:w-[400px] md:h-auto md:placeholder:text-[15px] md:pl-[20px] resize-none`}
              rows={4}
              name="description"
              placeholder="Description"
              value={formData.description}
              onChange={handleChange}
              required
            />
            {/* {formErrors.contact && (
          <p className="text-red-500  absolute right-2 text-[12px] mx-3 ">
            {formErrors.contact}*
          </p>
        )} */}
          </div>

          <div className="  mx-3 flex  flex-col md:justify-between md:items-center md:gap-2 md:flex-row  ">
            <div className=" relative w-[100px] md:w-auto ">
              {/* <img
            className=" hidden md:block md:w-4 left-2 absolute md:left-4 top-[1.40rem]"
            src={calender}
            alt="calender"
          ></img> */}
              <input
                type="text"
                name="from"
                value={formData.from}
                placeholder="From"
                className="md:pl-[20px] text-[14px] h-[39px] w-full rounded-[5px] text-[#8B8989] m-2 border-[0.5px] focus:bg-white focus:outline-none focus:ring-2 focus:ring-slate-500 bg-[#dceaff4d]  md:w-[170px] md:h-[45px] md:text-[15px]"
                onChange={handleChange}
              />

              {/* {formData.date === "" ? (
              <p>Select Date</p>
            ) : (
              <p className="pl-3">{formData.date}</p>
            )} */}

              {/* {formErrors.date && (
            <p className="text-red-500 text-[12px] mx-3 ">
              {formErrors.date}*
            </p>
          )} */}
            </div>
            {/* <div className=" relative w-[100px] md:w-auto ">
         

          <button
            type="button"
            className="  text-[14px] h-[39px]  w-full rounded-[5px]  text-[#8B8989]  m-2  border-[0.5px]  focus:bg-white focus:outline-none focus:ring-2 focus:ring-slate-500  bg-[#dceaff4d] shadow-shado2   md:w-[140px] md:h-[45px] md:text-[15px]   "
          >
            Select Time
          </button>
        </div> */}
            <div className=" relative w-[100px] md:w-auto ">
              {/* <img
            className=" hidden md:block  md:w-4 left-2 absolute md:left-4 top-[1.40rem]"
            src={time}
            alt="time"
          ></img> */}
              <button
                type="button"
                onClick={openModal}
                name="to"
                className="  text-[14px]  h-[39px]  w-full rounded-[5px]  text-[#8B8989]  m-2  border-[0.5px]  focus:bg-white focus:outline-none focus:ring-2 focus:ring-slate-500  bg-[#dceaff4d] shadow-shado2   md:w-[170px] md:h-[45px]  md:text-[15px] "
              >
                {formData.to === "" ? <p>To</p> : <p>{formData.to}</p>}
              </button>

              {/* {formData.date === "" ? (
              <p>Select Date</p>
            ) : (
              <p className="pl-3">{formData.date}</p>
            )} */}

              {/* {formErrors.time && (
            <p className="text-red-500 text-[12px] mx-3 ">
              {formErrors.time}*
            </p>
          )} */}
            </div>
          </div>
          {/* <div
        className={` text-center mt-2 ${
          (formData.time && formData.date) === "" ? "hidden" : null
        } `}
      >
        <p>
          Appointment is set to {formData.time}, {formData.date}
        </p>
      </div> */}
          <div className="flex justify-center items-center mt-5 mb-5">
            <button
              type="submit"
              onClick={handleSubmit}
              className="bg-[#0AA1DD] text-[white] font-[600] font-inter p-4 rounded-[5px] flex justify-center  items-center text-[14px] h-[39px] "
              style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddOffersModal;
