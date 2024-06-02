"use client";
import { DatePicker } from "@nextui-org/react";
import { getLocalTimeZone, today } from "@internationalized/date";

export const FunctionPicker = () => {
  const currentDate = today(getLocalTimeZone());

  return (
    <div className="flex flex-col space-y-7 w-2/3 h-fit mt-12 p-5 bg-slate-100 rounded-lg shadow-lg">
      <div className="flex flex-col space-y-4">
        <span className="text-lg font-bold">Select a date:</span>
        <DatePicker
          defaultValue={currentDate}
          minValue={currentDate}
          className="w-96"
        />
      </div>

      <div className="flex flex-col space-y-4">
        <span className="text-lg font-bold">Select a function:</span>
        <div className="flex space-x-4">
          <button className="bg-white text-black w-fit h-fit p-2 rounded-full border border-slate-200 hover:bg-blue-500 hover:text-white">
            <span>4:00 p.m.</span>
          </button>

          <button className="bg-white text-black w-fit h-fit p-2 rounded-full border border-slate-200 hover:bg-blue-500 hover:text-white">
            <span>7:00 p.m.</span>
          </button>

          <button className="bg-white text-black w-fit h-fit p-2 rounded-full border border-slate-200 hover:bg-blue-500 hover:text-white">
            <span>10:00 p.m.</span>
          </button>
        </div>
      </div>
    </div>
  );
};
