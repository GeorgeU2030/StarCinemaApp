import { Movie } from "./Movie";
import { Room } from "./Room";

export interface FunctionFull {
    id: number;
    startTime: string;
    room : Room;
    movie : Movie
}