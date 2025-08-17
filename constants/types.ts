export type AstroCategory = {
  id: string;
  name: string;
  icon: any;
};

export interface Astrologer {
  id: string;
  name: string;
  image: any;
  rating: number;
  speciality: string;
  experience: number;
  price: number;
  language: string[];
  orders: number;
  availability: string;
  category: string[];
}

export type Notification = {
  id: string;
  title: string;
  description: string;
  timestamp: string;
};

export interface HistorySession {
  id: string;
  astrologer: {
    id: string;
    name: string;
    image: any;
    rating: number;
    speciality: string;
  };
  sessionType: "Chat" | "Call";
  duration: string;
  date: string;
  timestamp: string;
  status: "Completed" | "Missed" | "Cancelled";
  amount: number;
}
