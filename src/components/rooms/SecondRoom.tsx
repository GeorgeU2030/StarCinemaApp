import React, { useState } from 'react';
import { Button } from "@nextui-org/react"; 
import Seat from './Seat';


interface FirstRoomProps {
  view: boolean;
  maxSeats?: number;
}

const SecondRoom: React.FC<FirstRoomProps> = ({ view, maxSeats }) => {
    const [selectedSeats, setSelectedSeats] = useState<string[]>([]);

    const handleSelectSeat = (id: number) => {
        const rowLetter = String.fromCharCode(64 + Math.ceil(id / 6));
        const seatNumber = id % 6 === 0 ? 6 : id % 6;
        const seatId = `${rowLetter}-${seatNumber}`;
    
        setSelectedSeats((prevSelectedSeats) => {
          if (prevSelectedSeats.includes(seatId)) {
            return prevSelectedSeats.filter((seat) => seat !== seatId);
          } else if (maxSeats === undefined || prevSelectedSeats.length < maxSeats) {
            return [...prevSelectedSeats, seatId];
          } else {
            return prevSelectedSeats;
          }
        });
    };       

    console.log(selectedSeats); 

  return (
    <div className='border-2 border-one px-1 py-1 rounded-lg'>
        <div className='flex justify-end'>
            <div className='bg-slate-400 w-11/12 rounded my-1'>
                <h1 className='text-center'>Screen</h1>
            </div>
        </div>
        <div className='flex'>
            <div className='flex flex-col'>
                <div className='mt-1'>
                    <Button disabled isIconOnly className='bg-one text-white font-bold'>A</Button>
                </div>
                <div className='mt-2'>
                    <Button disabled isIconOnly className='bg-one text-white font-bold'>B</Button>
                </div>
                <div className='mt-2'>
                    <Button disabled isIconOnly className='bg-one text-white font-bold'>C</Button>
                </div>
                <div className='mt-2'>
                    <Button disabled isIconOnly className='bg-one text-white font-bold'>D</Button>
                </div>
                <div className='mt-2'>
                    <Button disabled isIconOnly className='bg-one text-white font-bold'>E</Button>
                </div>
                <div className='mt-2'>
                    <Button disabled isIconOnly className='bg-one text-white font-bold'>F</Button>
                </div>
            </div>
            <div >
                <div>
                {Array.from({ length: 6 }, (_, i) => {
                const id = i + 1;
                const rowLetter = String.fromCharCode(64 + Math.ceil(id / 6));
                const seatNumber = id % 6 === 0 ? 6 : id % 6;
                const seatId = `${rowLetter}-${seatNumber}`;

                return (
                    <Seat
                    key={id}
                    id={id}
                    isSelected={selectedSeats.includes(seatId)}
                    onSelect={handleSelectSeat}
                    view={view}
                    />
                );
                })}
                </div>
                <div>
                {Array.from({ length: 6 }, (_, i) => {
                const id = i + 7;
                const rowLetter = String.fromCharCode(64 + Math.ceil(id / 6));
                const seatNumber = id % 6 === 0 ? 6 : id % 6;
                const seatId = `${rowLetter}-${seatNumber}`;

                return (
                    <Seat
                    key={id}
                    id={id}
                    isSelected={selectedSeats.includes(seatId)}
                    onSelect={handleSelectSeat}
                    view={view}
                    />
                );
                })}
                </div>
                <div>
                {Array.from({ length: 6 }, (_, i) => {
                const id = i + 13;
                const rowLetter = String.fromCharCode(64 + Math.ceil(id / 6));
                const seatNumber = id % 6 === 0 ? 6 : id % 6;
                const seatId = `${rowLetter}-${seatNumber}`;

                return (
                    <Seat
                    key={id}
                    id={id}
                    isSelected={selectedSeats.includes(seatId)}
                    onSelect={handleSelectSeat}
                    view={view}
                    />
                );
                })}
                </div>
                <div>
                {Array.from({ length: 6 }, (_, i) => {
                const id = i + 19;
                const rowLetter = String.fromCharCode(64 + Math.ceil(id / 6));
                const seatNumber = id % 6 === 0 ? 6 : id % 6;
                const seatId = `${rowLetter}-${seatNumber}`;

                return (
                    <Seat
                    key={id}
                    id={id}
                    isSelected={selectedSeats.includes(seatId)}
                    onSelect={handleSelectSeat}
                    view={view}
                    />
                );
                })}
                </div>
                <div>
                {Array.from({ length: 6 }, (_, i) => {
                const id = i + 25;
                const rowLetter = String.fromCharCode(64 + Math.ceil(id / 6));
                const seatNumber = id % 6 === 0 ? 6 : id % 6;
                const seatId = `${rowLetter}-${seatNumber}`;

                return (
                    <Seat
                    key={id}
                    id={id}
                    isSelected={selectedSeats.includes(seatId)}
                    onSelect={handleSelectSeat}
                    view={view}
                    />
                );
                })}
                </div>
                <div>
                {Array.from({ length: 6 }, (_, i) => {
                const id = i + 31;
                const rowLetter = String.fromCharCode(64 + Math.ceil(id / 6));
                const seatNumber = id % 6 === 0 ? 6 : id % 6;
                const seatId = `${rowLetter}-${seatNumber}`;

                return (
                    <Seat
                    key={id}
                    id={id}
                    isSelected={selectedSeats.includes(seatId)}
                    onSelect={handleSelectSeat}
                    view={view}
                    />
                );
                })}
                </div>
            </div>
        </div>
        <div className='flex'>
            <div className='flex w-1/2 ml-11'>
                <div>
                    <Button disabled isIconOnly className='bg-one text-white font-bold'>1</Button>
                </div>  
                <div className='ml-2'>
                    <Button disabled isIconOnly className='bg-one text-white font-bold'>2</Button>
                </div> 
                <div className='ml-2'>
                    <Button disabled isIconOnly className='bg-one text-white font-bold'>3</Button>
                </div>
                <div className='ml-2'>
                    <Button disabled isIconOnly className='bg-one text-white font-bold'>4</Button>
                </div>
                <div className='ml-2'>
                    <Button disabled isIconOnly className='bg-one text-white font-bold'>5</Button>
                </div>
                <div className='ml-2'>
                    <Button disabled isIconOnly className='bg-one text-white font-bold'>6</Button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default SecondRoom;
