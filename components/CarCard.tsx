"use client";
import { Car } from "@/data/cars";
import { Settings, Fuel, Calendar, Users } from "lucide-react";
import Link from "next/link";

export default function CarCard({ car }: { car: Car }) {
  return (
    <div
      className="card-hover"
      style={{
        background: "var(--black-2)",
        border: "1px solid rgba(255,255,255,0.07)",
        borderRadius: 12,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Image */}
      <div style={{ position: "relative", aspectRatio: "16/9", overflow: "hidden", background: "var(--black-3)" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={car.image}
          alt={`${car.brand} ${car.model}`}
          style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease" }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "scale(1.05)"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "scale(1)"; }}
        />
        <div style={{ position: "absolute", top: 12, left: 12 }}>
          <span className="tag tag-red">{car.category}</span>
        </div>
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 60, background: "linear-gradient(transparent, rgba(0,0,0,0.6))" }} />
      </div>

      {/* Content */}
      <div style={{ padding: "20px 20px 24px", display: "flex", flexDirection: "column", flex: 1 }}>
        <p style={{ color: "var(--red-neon)", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 6 }}>
          {car.brand}
        </p>
        <h3 className="font-heading" style={{ fontSize: 18, color: "var(--white)", marginBottom: 16, lineHeight: 1.2 }}>
          {car.model}
        </h3>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 16 }}>
          {[
            { icon: Calendar, label: String(car.year) },
            { icon: Users, label: `${car.seats} мест` },
            { icon: Settings, label: car.transmission },
            { icon: Fuel, label: car.engine.split(",")[0] },
          ].map(({ icon: Icon, label }, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 10px", background: "var(--black-3)", borderRadius: 6 }}>
              <Icon size={13} style={{ color: "var(--text-muted)", flexShrink: 0 }} />
              <span style={{ fontSize: 12, color: "var(--text-muted)" }}>{label}</span>
            </div>
          ))}
        </div>

        <p style={{ fontSize: 11, color: "var(--text-muted)", marginBottom: 20, letterSpacing: "0.02em" }}>
          {car.engine}
        </p>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "auto" }}>
          <div>
            <span className="font-display" style={{ fontSize: 26, color: "var(--white)", letterSpacing: "0.02em" }}>
              {car.pricePerDay.toLocaleString("ru-RU")} ₽
            </span>
            <span style={{ fontSize: 11, color: "var(--text-muted)", display: "block" }}>в сутки</span>
          </div>
          <Link
            href={`/booking?carId=${car.id}`}
            className="btn-primary"
            style={{ padding: "10px 20px", fontSize: 12, textDecoration: "none" }}
          >
            Забронировать
          </Link>
        </div>
      </div>
    </div>
  );
}
