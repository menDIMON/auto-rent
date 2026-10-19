export type Booking = {
  id: string;
  carId: number;
  carBrand: string;
  carModel: string;
  carImage: string;
  carPricePerDay: number;
  name: string;
  phone: string;
  email: string;
  startDate: string;
  endDate: string;
  comment: string;
  totalDays: number;
  totalPrice: number;
  status: "Активно" | "Завершено" | "Отменено";
  createdAt: string;
};
