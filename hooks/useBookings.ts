"use client";
import { useState, useEffect, useCallback } from "react";

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
  days: number;
  total: number;
  status: "Активно" | "Завершено" | "Ожидает";
  createdAt: string;
};

const STORAGE_KEY = "autorent_bookings";

export function useBookings() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setBookings(JSON.parse(raw));
    } catch { /* ignore */ }
    setLoaded(true);
  }, []);

  const addBooking = useCallback(
    (booking: Omit<Booking, "id" | "createdAt" | "status">) => {
      const newBooking: Booking = {
        ...booking,
        id: `AR-${Date.now()}`,
        createdAt: new Date().toISOString(),
        status: "Ожидает",
      };
      setBookings((prev) => {
        const updated = [newBooking, ...prev];
        try { localStorage.setItem(STORAGE_KEY, JSON.stringify(updated)); } catch { /* ignore */ }
        return updated;
      });
      return newBooking;
    },
    []
  );

  const removeBooking = useCallback((id: string) => {
    setBookings((prev) => {
      const updated = prev.filter((b) => b.id !== id);
      try { localStorage.setItem(STORAGE_KEY, JSON.stringify(updated)); } catch { /* ignore */ }
      return updated;
    });
  }, []);

  return { bookings, addBooking, removeBooking, loaded };
}
