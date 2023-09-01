import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PaymentCard = () => {
  const addCardHandler = () => {
    toast("Coming Soon!");
  };

  return (
    <React.Fragment>
      <ToastContainer />
      <div className="bg-white mt-6 mx-4 lg:mx-0 w-[83%] md:[70%] lg:w-[46%] h-[300px] rounded-lg shadow-md hover:translate-y-[2px]">
        <h2 className="p-4 text-lg font-semibold">My Card(0)</h2>
        <div className="flex flex-col items-center justify-center h-[210px]">
          <p>You have not added a card yet</p>
          <button
            className="px-4 py-3 text-white bg-green-600 rounded shadow"
            onClick={addCardHandler}
          >
            Add Card
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PaymentCard;
