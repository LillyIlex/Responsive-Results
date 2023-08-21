import React from "react";

import data from "./data.json";
import Button from "./Button";

console.log(data);

function Results() {
  return (
    <>
      <div className="flex grid-cols-1 md:grid-cols-2 text-white font- place-content-center md:container md:mx-auto">
        <div>
          <div className="block max-w-xs h-96 w-72 rounded-2xl bg-indigo-600 bg-gradient-to-b from-gradients-light-slate-blue to-gradients-light-royal-blue p-4 pb-7 text-center shadow-[0_4px_9px_-4px_#3b71ca] my-10 ">
            <div className=" text-2xl  border-black py-1 px-6 ">
              <p className="mt-2 text-lg font-semibold leading-7 text-gray-200">
                Your Result
              </p>
              <h3 className="text-6xl font-bold text-white border-0 rounded-full bg-gradient-to-b from-gradients-violet-blue to-gradients-persian-blue w-36 h-36 mt-4 pt-6 ml-8">
                76
                <p className="flex-none text-sm font-medium leading-6 text-gray-400 mb-2">
                  {" "}
                  of 100{data.map}
                </p>
              </h3>

              <p className="mt-4 text-2xl text-white font-semibold ">Great</p>
              <p className="mt-2 text-sm text-gray-300 ">
                You scored higher than 65% of these people who have taken these
                tests.
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="block rounded-2xl h-96 w-72 bg-white text-center shadow-[0_4px_9px_-4px_#3b71ca] my-10">
            <div className=" text-2xl border-black py-1 px-6 ">
              <h3 className="text-gray-800 m-6 ml-4 mt-4 text-left text-base font-bold">
                Summary
              </h3>
              <div>
                {data.map((item) => (
                  <Button
                    title={item.category}
                    score={item.score}
                    icon={item.icon}
                  />
                ))}
              </div>

              <button className="rounded-full  bg-indigo-600 bg-gradient-to-b from-gradients-light-slate-blue to-gradients-light-royal-blue text-base px-4 py-3 mr-4 mt-6 w-60  hover:bg-indigo-800">
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Results;
