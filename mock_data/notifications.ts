import { Notification } from "@/constants/types";

export const MockNotification: Notification[] = [
  {
    id: "1",
    title: "New Message",
    description: "You have received a new message from John Doe.",
    timestamp: "2023-10-01T12:00:00Z",
  },
  {
    id: "2",
    title: "Appointment Reminder",
    description: "Your appointment is scheduled for tomorrow at 3 PM.",
    timestamp: "2023-10-01T08:00:00Z",
  },
  {
    id: "3",
    title: "System Update",
    description: "A new system update is available. Please update your app.",
    timestamp: "2023-10-01T06:00:00Z",
  },
];
