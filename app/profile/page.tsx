"use client";
import { User, Calendar, Heart, Settings, Car, Star, Clock, ChevronRight, Trash2, Plus } from "lucide-react";
import { cars } from "@/data/cars";
import { useBookings } from "@/hooks/useBookings";
import Link from "next/link";

const favorites = [cars[2], cars[7], cars[9]];

function statusColor(status: string) {
  if (status === "Активно") return "var(--red-neon)";
  if (status === "Ожидает") return "#f59e0b";
  return "var(--text-muted)";
}
function statusBg(status: string) {
  if (status === "Активно") return "rgba(255,59,48,0.1)";
  if (status === "Ожидает") return "rgba(245,158,11,0.1)";
  return "rgba(255,255,255,0.05)";
}
function formatDate(iso: string) {
  if (!iso) return "—";
  // If it's already a display date (no T), return as-is
  if (!iso.includes("T") && !iso.match(/^\d{4}-\d{2}-\d{2}$/)) return iso;
  const d = new Date(iso + (iso.includes("T") ? "" : "T00:00:00"));
  return d.toLocaleDateString("ru-RU", { day: "numeric", month: "short", year: "numeric" });
}

export default function ProfilePage() {
  const { bookings, removeBooking, loaded } = useBookings();

  const totalDays = bookings.reduce((sum, b) => sum + b.days, 0);
  const totalBookings = bookings.length;

  return (
    <div style={{ paddingTop: 68, minHeight: "100vh" }}>
      {/* Header */}
      <div style={{ background: "var(--black-2)", borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "56px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", alignItems: "center", gap: 28, flexWrap: "wrap" }}>
          <div style={{ width: 88, height: 88, borderRadius: "50%", background: "linear-gradient(135deg, var(--red) 0%, #8b0000 100%)", display: "flex", alignItems: "center", justifyContent: "center", border: "3px solid rgba(255,59,48,0.3)", flexShrink: 0 }}>
            <User size={36} color="#fff" />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 6, flexWrap: "wrap" }}>
              <h1 className="font-display" style={{ fontSize: 36, color: "var(--white)", letterSpacing: "0.04em" }}>
                АЛЕКСАНДР ПЕТРОВ
              </h1>
            </div>
            <p style={{ color: "var(--text-muted)", fontSize: 13 }}>
              alexander.petrov@email.com · +7 (916) 123-45-67
            </p>
          </div>
          <button className="btn-outline" style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <Settings size={14} /> Редактировать профиль
          </button>
        </div>

        {/* Stats */}
        <div style={{ maxWidth: 1280, margin: "32px auto 0", display: "flex", gap: 32, flexWrap: "wrap", paddingTop: 32, borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          {[
            { icon: Car, num: String(totalBookings || 0), label: "Аренд всего" },
            { icon: Calendar, num: String(totalDays || 0), label: "Дней аренды" },
            { icon: Heart, num: String(favorites.length), label: "В избранном" },
            { icon: Star, num: "4.9", label: "Ваш рейтинг" },
          ].map(({ icon: Icon, num, label }) => (
            <div key={label} style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div style={{ width: 42, height: 42, background: "rgba(255,59,48,0.08)", border: "1px solid rgba(255,59,48,0.15)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Icon size={16} style={{ color: "var(--red-neon)" }} />
              </div>
              <div>
                <p className="font-display" style={{ fontSize: 26, color: "var(--white)", letterSpacing: "0.02em" }}>{num}</p>
                <p style={{ fontSize: 11, color: "var(--text-muted)", letterSpacing: "0.06em", textTransform: "uppercase" }}>{label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "48px 24px", display: "grid", gridTemplateColumns: "1fr 340px", gap: 32, alignItems: "flex-start" }}>

        {/* Bookings */}
        <div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 28, flexWrap: "wrap", gap: 12 }}>
            <h2 className="font-display" style={{ fontSize: 28, color: "var(--white)", letterSpacing: "0.04em" }}>
              ИСТОРИЯ БРОНИРОВАНИЙ
            </h2>
            <Link href="/booking" className="btn-primary" style={{ textDecoration: "none", fontSize: 12, padding: "10px 20px", display: "flex", alignItems: "center", gap: 6 }}>
              <Plus size={14} /> Новое бронирование
            </Link>
          </div>

          {!loaded ? (
            <div style={{ textAlign: "center", padding: 60, color: "var(--text-muted)" }}>Загрузка...</div>
          ) : bookings.length === 0 ? (
            <div style={{ textAlign: "center", padding: "60px 24px", background: "var(--black-2)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 12 }}>
              <Car size={40} style={{ color: "rgba(255,255,255,0.1)", margin: "0 auto 16px" }} />
              <p className="font-display" style={{ fontSize: 24, color: "rgba(255,255,255,0.2)", marginBottom: 10 }}>НЕТ БРОНИРОВАНИЙ</p>
              <p style={{ color: "var(--text-muted)", fontSize: 13, marginBottom: 24 }}>
                У вас пока нет активных или завершённых бронирований
              </p>
              <Link href="/catalog" className="btn-primary" style={{ textDecoration: "none", fontSize: 13 }}>
                Выбрать автомобиль
              </Link>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {bookings.map((b) => (
                <div key={b.id} className="card-hover" style={{ background: "var(--black-2)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 12, padding: 24, display: "flex", gap: 20, alignItems: "center", flexWrap: "wrap" }}>
                  <div style={{ width: 120, height: 80, borderRadius: 8, overflow: "hidden", flexShrink: 0, background: "var(--black-3)" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={b.carImage} alt={b.carModel} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </div>
                  <div style={{ flex: 1, minWidth: 180 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6, flexWrap: "wrap" }}>
                      <p style={{ color: "var(--text-muted)", fontSize: 11, letterSpacing: "0.06em" }}>#{b.id}</p>
                      <span style={{ padding: "2px 10px", borderRadius: 100, fontSize: 10, letterSpacing: "0.06em", textTransform: "uppercase", background: statusBg(b.status), color: statusColor(b.status), border: `1px solid ${statusColor(b.status)}30` }}>
                        {b.status}
                      </span>
                    </div>
                    <h3 className="font-heading" style={{ fontSize: 16, color: "var(--white)", marginBottom: 8 }}>
                      {b.carBrand} {b.carModel}
                    </h3>
                    <div style={{ display: "flex", gap: 16, color: "var(--text-muted)", fontSize: 12, flexWrap: "wrap" }}>
                      <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
                        <Calendar size={11} /> {formatDate(b.startDate)} — {formatDate(b.endDate)}
                      </span>
                      <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
                        <Clock size={11} /> {b.days} {b.days === 1 ? "день" : b.days < 5 ? "дня" : "дней"}
                      </span>
                    </div>
                    {b.comment && (
                      <p style={{ color: "var(--text-muted)", fontSize: 12, marginTop: 6, fontStyle: "italic" }}>
                        «{b.comment}»
                      </p>
                    )}
                  </div>
                  <div style={{ textAlign: "right", flexShrink: 0 }}>
                    <p className="font-display" style={{ fontSize: 22, color: "var(--white)", marginBottom: 8 }}>
                      {b.total.toLocaleString("ru-RU")} ₽
                    </p>
                    <div style={{ display: "flex", gap: 8, justifyContent: "flex-end" }}>
                      <Link href={`/booking?carId=${b.carId}`} style={{ display: "flex", alignItems: "center", gap: 4, color: "var(--red-neon)", textDecoration: "none", fontSize: 12, cursor: "pointer" }}>
                        Повторить <ChevronRight size={12} />
                      </Link>
                      <button
                        onClick={() => removeBooking(b.id)}
                        style={{ background: "transparent", border: "none", color: "rgba(255,255,255,0.2)", cursor: "pointer", padding: 4, transition: "color 0.2s" }}
                        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--red-neon)"; }}
                        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.2)"; }}
                        title="Удалить"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right panel */}
        <div>
          <h2 className="font-display" style={{ fontSize: 28, color: "var(--white)", letterSpacing: "0.04em", marginBottom: 28, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            ИЗБРАННОЕ <Heart size={18} style={{ color: "var(--red-neon)" }} />
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 24 }}>
            {favorites.map((car) => (
              <div key={car.id} className="card-hover" style={{ background: "var(--black-2)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 12, padding: 14, display: "flex", gap: 14, alignItems: "center" }}>
                <div style={{ width: 80, height: 56, borderRadius: 6, overflow: "hidden", flexShrink: 0, background: "var(--black-3)" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={car.image} alt={car.model} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{ color: "var(--red-neon)", fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 3 }}>{car.brand}</p>
                  <p className="font-heading" style={{ fontSize: 13, color: "var(--white)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{car.model}</p>
                  <p style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 3 }}>{car.pricePerDay.toLocaleString("ru-RU")} ₽/сут</p>
                </div>
                <Link href={`/booking?carId=${car.id}`} className="btn-primary" style={{ padding: "7px 14px", fontSize: 11, textDecoration: "none", flexShrink: 0 }}>
                  Арендовать
                </Link>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
