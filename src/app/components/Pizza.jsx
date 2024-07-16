"use client";

import Modal from "react-modal";

import { IoCloseOutline } from "react-icons/io5";
import Image from "next/image";
import { useState } from "react";
import PizzaDetails from "./PizzaDetails";

Modal.setAppElement("body");

const modalStyles = {
  overlay: {
    backgroundColor: "rgba(0,0,0,0.5)",
  },
};

const Pizza = ({ pizza }) => {
  const [modal, setModal] = useState(false);
  // open modal
  const openModal = () => {
    setModal(true);
  };
  // close modal
  const closeModal = () => {
    setModal(false);
  };

  return (
    <div className="group py-2 px-4 xl:py-4 xl:px-2 rounded-xl">
      <Image
        onClick={openModal}
        className="lg:group-hover:translate-y-3 lg:group-hover:rotate-45 transition-all duration-500 mb-8"
        width={270}
        height={270}
        src={pizza.image}
        alt=""
        priority={1}
      />
      {/* title */}
      <div onClick={openModal}>
        <div className="text-xl font-bold mb-3 capitalize cursor-pointer">
          {pizza.name}
        </div>
      </div>
      {/* description */}
      <div className="text-sm font-medium min-h-[60px] mb-6">
        {pizza.description}
      </div>
      {/* price & btn */}
      <div className="mb-6 flex items-center justify-between">
        {/* price -> hidden(sm) - visible(lg) */}
        <div className="hidden lg:flex text-xl font-semibold">
          starts at {pizza.priceSm}
        </div>
        {/* btn hidden-> (sm) - visible(lg) */}
        <button
          onClick={openModal}
          className="hidden lg:flex gradient text-white rounded-lg btn-sm font-semibold text-sm"
        >
          Choose
        </button>
        {/* btn ->visible (sm) - hidden (lg) */}
        <button
          onClick={openModal}
          className="btn btn-sm gradient lg:hidden px-3"
        >
          starts at {pizza.priceSm}
        </button>
      </div>
      {/* modal */}
      {modal && (
        <Modal
          isOpen={modal}
          style={modalStyles}
          onRequestClose={closeModal}
          contentLabel="Pizza Modal"
          className="bg-white w-full h-full lg:max-w-[900px] lg:max-h-[600px] lg:rounded-[30px] lg:fixed lg:top-[50%] lg:left-[50%] lg:translate-x-[-50%] lg:translate-y-[-50%] outline-none"
        >
          {/* close modal icon */}
          <div
            onClick={closeModal}
            className="absolute z-30 right-2 top-2 hover:scale-110 duration-200 cursor-pointer"
          >
            <IoCloseOutline className="text-4xl text-orange" />
          </div>
          <PizzaDetails pizza={pizza} modal={modal} setModal={setModal} />
        </Modal>
      )}
    </div>
  );
};

export default Pizza;
