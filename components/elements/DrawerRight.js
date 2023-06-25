import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const DrawerRight = ({ title, children, show, setShow }) => {
  return (
    <>
      {/* Backdrop */}
      {show && (
        <div
          className="fixed top-0 left-0 z-30 w-full h-screen bg-black opacity-50"
          //   onClick={setShow}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 z-50 w-[31rem] h-screen overflow-y-auto transition-transform ease-in-out duration-300 transform ${
          show ? "translate-x-0" : "translate-x-full"
        } bg-white`}
        tabIndex="-1"
      >
        <div className="relative h-full">
          {/*header*/}
          <div className="flex items-center justify-between px-5 py-2 text-slate-900 border-b-[1px] border-slate-300">
            <h3 className="text-3xl font-semibold">{title ? title : null}</h3>
            <button
              className="icon-btn text-3xl text-slate-500"
              onClick={() => setShow(false)}
            >
              <AiOutlineClose />
            </button>
          </div>
          {/*body*/}
          {children && show ? (
            children
          ) : (
            <p className="text-slate-500 text-lg leading-relaxed">
              This is a regular side drawer
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default DrawerRight;
