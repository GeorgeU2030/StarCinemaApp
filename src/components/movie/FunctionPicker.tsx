"use client";
import { DatePicker } from "@nextui-org/react";
import { getLocalTimeZone, today } from "@internationalized/date";
import { useState } from "react";
import { useGetMovieIdFunctionsQuery } from "@/store/services/movieApi";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { Function } from "@/interfaces";

interface FunctionPickerProps {
  id: number
}

export const FunctionPicker = ({id}:FunctionPickerProps) => {

  const currentDate = today(getLocalTimeZone());

  const [selectedDate, setSelectedDate] = useState<string>(currentDate.toString());

  const token = useSelector((state: RootState) => state.user.token);

  const { data: functions } = useGetMovieIdFunctionsQuery({ date: selectedDate, id, token });

  if (functions){
    console.log(functions)
  }

  return (
    <div className="flex flex-col items-center space-y-7 w-4/5 md:w-2/3 h-fit mt-12 p-5 bg-two rounded-lg shadow-lg">
      <div className="flex flex-col space-y-4">
        <span className="text-lg font-bold text-white text-center">Choose the Date: &#128516;</span>
        <DatePicker
          defaultValue={currentDate}
          minValue={currentDate}
          className="w-48 md:w-72"
          onChange={(date) => {
            const isoDate = `${date.year}-${date.month.toString().padStart(2, '0')}-${date.day.toString().padStart(2, '0')}`;
            setSelectedDate(isoDate);
          }}
        />
      </div>

      <div className="flex flex-col space-y-4 items-center">
        <span className="text-lg font-bold text-white">Functions: 🎬</span>

        <div className="flex">
        {functions && functions.length > 0 ? (
            functions.map((functionArray: Function[]) => (
              functionArray.map((f: Function) => {
                
                const date = new Date(f.startTime);

                const hours = date.getHours();
                const minutes = date.getMinutes();

                
                const formattedHours = hours % 12 || 12; 
                const formattedMinutes = minutes.toString().padStart(2, '0'); 
                const amOrPm = hours < 12 ? 'AM' : 'PM';

                return (
                  <div key={f.id} className="flex flex-row items-center bg-four ml-2 px-2 py-2 rounded-lg text-one cursor-pointer">
                    <span className="font-semibold">{`${formattedHours}:${formattedMinutes} ${amOrPm}`}</span>
                  </div>
                );
              })
            ))
          ) : (
            <div className="flex flex-row items-center bg-four ml-2 px-2 py-2 rounded-lg text-one cursor-pointer">
              <span className="font-semibold">No functions available</span>
            </div>
          )}
          </div>
      </div>
    </div>
  );
};
