import { Button } from "@nextui-org/react";
import { TbArmchair } from "react-icons/tb";

interface SeatProps {
    id: number;
    isSelected: boolean;
    onSelect: (id: number) => void;
    view: boolean;
  }
  
const Seat: React.FC<SeatProps> = ({ id, isSelected, onSelect, view }) => {
    return (
      <Button
          className={`m-1 p-1 ${isSelected ? 'bg-green-500' : 'bg-five border-2 border-one'} ${view ? 'cursor-default' : 'cursor-pointer'}`}
          onClick={() => !view && onSelect(id)}
          disabled={view}
          isIconOnly
      >
        <TbArmchair size={20}/>
      </Button>
    );
  };

export default Seat;