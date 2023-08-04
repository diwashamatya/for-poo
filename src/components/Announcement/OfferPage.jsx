import React, { useState } from "react";
import radio from "../../assets/radio.png";
import right from "../../assets/right.png";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import OfferModal from "./OfferModal";
import AddOffersModal from "./AddOffersModal";
import { AppProvider } from "../../AppContext";
import "./offermodal.css";
import Offers from "./Offers";
import Annouce from "./Annouce";
import Expired from "./Expired";

const OfferPage = () => {
  const [activeTab, setActiveTab] = useState("offers");
  // const [portal, setPortal] = useState(true);

  // const togglePortal = () => {
  //   setPortal(!portal);
  // };

  // const childData = (data) => {
  //   setPortal(data);
  // };

  const [modalOpen, setModalOpen] = useState(false);
  const [addmodalOpen, setAddModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const onCloseModal = () => setModalOpen(false);

  const openAddModal = () => {
    setAddModalOpen(true);
  };
  const closeAddModal = () => {
    setAddModalOpen(false);
  };
 

  
  return (
    <div className="flex flex-col px-[50px] py-4 w-full bg-[#F3F7F9] gap-3 overflow-y-hidden">
      <Modal
        open={addmodalOpen}
        onClose={closeAddModal}
        center
        classNames={{
          overlay: "customOverlay",
          modal: "customModal",
          
        }}
      >
        <AddOffersModal />
      </Modal>
      <div className="flex  items-center justify-between w-full">
        <h1 className="text-[27px] text-[#3F26A5] ">Announcement</h1>

        {activeTab === "announcement" || activeTab === "offers" ? (
          
  <button
  className="flex items-center justify-center gap-2 border p-3 text-center text-[#88a3fa] text-inter text-[16px] font-[600] rounded-[6px] bg-white shadow-sm hover:text-[#5570e8]
  "
    onClick={openAddModal}
  >
    {activeTab === "announcement" ? "+ Add Announcement" : "+ Add Offers"}
  </button>
) : null}
      </div>

      <div className="flex ">
        <button
          className={`border-r ${
            activeTab === "offers"
              ? "border-gray-300 bg-gradient bg-gradient-to-b from-gray-100 via-white to-transparent shadow-inner inset-x-0 inset-y-2 bg-white"
              : ""
          } md:h-[50px] md:w-[100px]`}
          style={
            activeTab === "offers"
              ? {
                  color: "#346AFF",
                  borderWidth: "0.5px",
                  boxShadow: "0px 2px 5px 0px #D2F3FA",
                }
              : { boxShadow: "0px 2px 5px 0px #D2F3FA" }
          }
          onClick={() => setActiveTab("offers")}
        >
          Offers
        </button>

        <button
          className={`border-r ${
            activeTab === "announcement"
              ? "border-gray-300 bg-gradient bg-gradient-to-b from-gray-100 via-white to-transparent shadow-inner inset-x-0 inset-y-2 bg-white"
              : ""
          } md:h-[50px] md:w-[150px]`}
          style={
            activeTab === "announcement"
              ? {
                  borderWidth: "0.5px",
                  boxShadow: "0px 2px 5px 0px #D2F3FA",

                }
              : { boxShadow: "0px 2px 5px 0px #D2F3FA" }
          }
          onClick={() => setActiveTab("announcement")}
        >
          Announcement
        </button>
        <button
          className={`border-r ${
            activeTab === "expired"
              ? "border-gray-300 bg-gradient bg-gradient-to-b from-gray-100 via-white to-transparent shadow-inner inset-x-0 inset-y-2 bg-white"
              : ""
          } md:h-[50px] md:w-[100px]`}
          style={
            activeTab === "expired"
              ? {
                  borderWidth: "0.5px",
                  boxShadow: "0px 2px 5px 0px #D2F3FA",
                }
              : { boxShadow: "0px 2px 5px 0px #D2F3FA" }
          }
          onClick={() => setActiveTab("expired")}
        >
          Expired
        </button>
      </div>
      <div className="mt-[30px] flex flex-wrap gap-8">
        <div>
          {activeTab === "offers" && <Offers />}
          {activeTab === "announcement" && <Annouce />}
          {activeTab === "expired" && <Expired />}
        </div>
      </div>
    </div>
  );
};

export default OfferPage;
