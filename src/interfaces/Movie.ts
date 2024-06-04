export interface Movie {
  id: string;
  title: string;
  year: number;
  premiereDate: string;
  isprox: boolean;
  genres: string[];
  rating: string;
  cover: string;
  duration: number;
  trailer: string;
  functions? : Function[]; 
}

export interface Function {
  id:number;
  startTime: string;
}