import React from "react";

const Main = () => {
  return (
    <div className="my-40">
      <div className="flex justify-center items-center">
        <fieldset className="border-4 w-460 h-150 rounded-2xl bg-amber-50 flex gap-10 justify-center items-center shadow-2xl">
          <legend className="text-4xl ml-5">เมนูแนะนำ</legend>
          <div className="shadow-2xl h-80 w-80 flex justify-center items-center rounded-3xl">
            <img className="h-70 w-70 rounded-3xl" src="noodle1.jpg" alt="" />
          </div>
          <div className="shadow-2xl h-80 w-80 flex justify-center items-center rounded-3xl">
            <img className="h-70 w-70 rounded-3xl" src="noodle2.jpg" alt="" />
          </div>
          <div className="shadow-2xl h-80 w-80 flex justify-center items-center rounded-3xl">
            <img className="h-70 w-70 rounded-3xl" src="noodle3.jpg" alt="" />
          </div>
          <div className="shadow-2xl h-80 w-80 flex justify-center items-center rounded-3xl">
            <img className="h-70 w-70 rounded-3xl" src="noodle4.jpg" alt="" />
          </div>
          <div className="shadow-2xl h-80 w-80 flex justify-center items-center rounded-3xl">
            <img className="h-70 w-70 rounded-3xl" src="noodle5.jpg" alt="" />
          </div>
        </fieldset>
      </div>
    </div>
  );
};

export default Main;
