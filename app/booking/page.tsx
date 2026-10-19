"use client";
import { useState, useMemo, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { cars } from "@/data/cars";
import { useBookings } from "@/hooks/useBookings";
import {
  User, Phone, Mail, Car, Calendar, MessageSquare,
  CheckCircle, ChevronDown, ArrowLeft, Clock
} from "lucide-react";
import Link from "next/link";

/* ── Success toast ───────────────────────────── */
function SuccessToast({ bookingId, onClose }: { bookingId: string; onClose: () => void }) {
  return (
    <div
      style={{
        position: "fixed", inset: 0, zIndex: 1000,
        background: "rgba(0,0,0,0.85)", backdropFilter: "blur(8px)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: 24,
      }}
    >
      <div
        className="animate-fade-up"
        style={{
          background: "var(--black-2)",
          border: "1px solid rgba(255,59,48,0.3)",
          borderRadius: 16,
          padding: "48px 40px",
          maxWidth: 460,
          width: "100%",
          textAlign: "center",
        }}
      >
        <div
          style={{
            width: 72, height: 72,
            background: "rgba(255,59,48,0.1)",
            border: "2px solid var(--red-neon)",
            borderRadius: "50%",
            display: "flex", alignItems: "center", justifyContent: "center",
            margin: "0 auto 24px",
          }}
        >
          <CheckCircle size={34} style={{ color: "var(--red-neon)" }} />
        </div>
        <h2 className="font-display" style={{ fontSize: 32, color: "var(--white)", letterSpacing: "0.04em", marginBottom: 12 }}>
          БРОНИРОВАНИЕ ОФОРМЛЕНО!
        </h2>
        <p style={{ color: "var(--text-muted)", fontSize: 14, lineHeight: 1.7, marginBottom: 8 }}>
          Ваше бронирование успешно создано.
        </p>
        <div
          style={{
            display: "inline-block",
            padding: "6px 18px",
            background: "rgba(255,59,48,0.08)",
            border: "1px solid rgba(255,59,48,0.2)",
            borderRadius: 6,
            color: "var(--red-neon)",
            fontSize: 13,
            letterSpacing: "0.06em",
            marginBottom: 32,
          }}
        >
          {bookingId}
        </div>
        <p style={{ color: "var(--text-muted)", fontSize: 13, marginBottom: 32 }}>
          Мы свяжемся с вами в ближайшее время для подтверждения.
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <Link
            href="/profile"
            className="btn-primary"
            style={{ textDecoration: "none", fontSize: 13 }}
            onClick={onClose}
          >
            Мои бронирования
          </Link>
          <button className="btn-outline" style={{ fontSize: 13 }} onClick={onClose}>
            Ещё одна аренда
          </button>
        </div>
      </div>
    </div>
  );
}

/* ── Main form ───────────────────────────────── */
function BookingForm() {
  const params = useSearchParams();
  const router = useRouter();
  const { addBooking } = useBookings();

  const preselectedId = params.get("carId") ? Number(params.get("carId")) : null;
  const [selectedCarId, setSelectedCarId] = useState<number | null>(preselectedId ?? cars[0].id);
  const [form, setForm] = useState({ name: "", phone: "", email: "", startDate: "", endDate: "", comment: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [successId, setSuccessId] = useState<string | null>(null);

  const selectedCar = cars.find((c) => c.id === selectedCarId) ?? cars[0];

  const days = useMemo(() => {
    if (!form.startDate || !form.endDate) return 0;
    const diff = (new Date(form.endDate).getTime() - new Date(form.startDate).getTime()) / 86400000;
    return diff > 0 ? Math.ceil(diff) : 0;
  }, [form.startDate, form.endDate]);

  const total = days * selectedCar.pricePerDay;

  function set(field: string, value: string) {
    setForm((p) => ({ ...p, [field]: value }));
    setErrors((p) => ({ ...p, [field]: "" }));
  }

  function validate() {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Введите ваше имя";
    if (!form.phone.trim()) e.phone = "Введите номер телефона";
    else if (!/^[\d\s\+\-\(\)]{7,}$/.test(form.phone)) e.phone = "Некорректный номер";
    if (!form.email.trim()) e.email = "Введите email";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Некорректный email";
    if (!form.startDate) e.startDate = "Выберите дату начала";
    if (!form.endDate) e.endDate = "Выберите дату окончания";
    if (form.startDate && form.endDate && days <= 0) e.endDate = "Дата окончания должна быть позже начала";
    return e;
  }

  async function handleSubmit() {
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 800));
    const booking = addBooking({
      carId: selectedCar.id,
      carBrand: selectedCar.brand,
      carModel: selectedCar.model,
      carImage: selectedCar.image,
      carPricePerDay: selectedCar.pricePerDay,
      name: form.name,
      phone: form.phone,
      email: form.email,
      startDate: form.startDate,
      endDate: form.endDate,
      comment: form.comment,
      days,
      total,
    });
    setSubmitting(false);
    setSuccessId(booking.id);
  }

  const today = new Date().toISOString().split("T")[0];

  const inputStyle = (err?: string): React.CSSProperties => ({
    width: "100%",
    padding: "13px 16px",
    background: "var(--black-3)",
    border: `1px solid ${err ? "var(--red-neon)" : "rgba(255,255,255,0.08)"}`,
    borderRadius: 8,
    color: "var(--white)",
    fontSize: 14,
    outline: "none",
    transition: "border-color 0.2s",
  });

  const labelStyle: React.CSSProperties = {
    display: "flex", alignItems: "center", gap: 8,
    fontSize: 12, color: "var(--text-muted)", letterSpacing: "0.06em",
    textTransform: "uppercase", marginBottom: 8,
  };

  return (
    <>
      {successId && (
        <SuccessToast bookingId={successId} onClose={() => {
          setSuccessId(null);
          setForm({ name: "", phone: "", email: "", startDate: "", endDate: "", comment: "" });
          router.push("/catalog");
        }} />
      )}

      <div style={{ paddingTop: 68, minHeight: "100vh" }}>
        {/* Header */}
        <div style={{ background: "var(--black-2)", borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "48px 24px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <Link href="/catalog" style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "var(--text-muted)", textDecoration: "none", fontSize: 13, marginBottom: 20, letterSpacing: "0.04em" }}>
              <ArrowLeft size={14} /> Назад к каталогу
            </Link>
            <p style={{ fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--red-neon)", marginBottom: 10 }}>
              Оформление
            </p>
            <h1 className="font-display" style={{ fontSize: "clamp(36px, 6vw, 72px)", color: "var(--white)" }}>
              БРОНИРОВАНИЕ АВТО
            </h1>
          </div>
        </div>

        {/* Body */}
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 24px", display: "grid", gridTemplateColumns: "1fr 360px", gap: 32, alignItems: "flex-start" }}>

          {/* Form */}
          <div>
            {/* Car select */}
            <div style={{ background: "var(--black-2)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 12, padding: 28, marginBottom: 24 }}>
              <h2 className="font-heading" style={{ fontSize: 17, color: "var(--white)", marginBottom: 20, display: "flex", alignItems: "center", gap: 10 }}>
                <Car size={16} style={{ color: "var(--red-neon)" }} /> Выберите автомобиль
              </h2>
              <div style={{ position: "relative" }}>
                <select
                  value={selectedCarId ?? ""}
                  onChange={(e) => setSelectedCarId(Number(e.target.value))}
                  style={{ ...inputStyle(), appearance: "none", cursor: "pointer", paddingRight: 44 }}
                >
                  {cars.map((c) => (
                    <option key={c.id} value={c.id} style={{ background: "var(--black-2)" }}>
                      {c.brand} {c.model} — {c.pricePerDay.toLocaleString("ru-RU")} ₽/сут
                    </option>
                  ))}
                </select>
                <ChevronDown size={16} style={{ position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)", color: "var(--text-muted)", pointerEvents: "none" }} />
              </div>

              {/* Selected car preview */}
              <div style={{ display: "flex", gap: 16, marginTop: 16, padding: "16px", background: "var(--black-3)", borderRadius: 8, border: "1px solid rgba(255,59,48,0.12)" }}>
                <div style={{ width: 100, height: 68, borderRadius: 6, overflow: "hidden", flexShrink: 0 }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={selectedCar.image} alt={selectedCar.model} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div>
                  <p style={{ color: "var(--red-neon)", fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 4 }}>{selectedCar.brand}</p>
                  <p className="font-heading" style={{ color: "var(--white)", fontSize: 15, marginBottom: 4 }}>{selectedCar.model}</p>
                  <p style={{ color: "var(--text-muted)", fontSize: 12 }}>{selectedCar.engine}</p>
                </div>
              </div>
            </div>

            {/* Personal info */}
            <div style={{ background: "var(--black-2)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 12, padding: 28, marginBottom: 24 }}>
              <h2 className="font-heading" style={{ fontSize: 17, color: "var(--white)", marginBottom: 20, display: "flex", alignItems: "center", gap: 10 }}>
                <User size={16} style={{ color: "var(--red-neon)" }} /> Личные данные
              </h2>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <div>
                  <label style={labelStyle}><User size={11} /> Имя и фамилия *</label>
                  <input placeholder="Александр Петров" value={form.name} onChange={(e) => set("name", e.target.value)} style={inputStyle(errors.name)} />
                  {errors.name && <p style={{ color: "var(--red-neon)", fontSize: 11, marginTop: 5 }}>{errors.name}</p>}
                </div>
                <div>
                  <label style={labelStyle}><Phone size={11} /> Телефон *</label>
                  <input placeholder="+7 (999) 123-45-67" value={form.phone} onChange={(e) => set("phone", e.target.value)} style={inputStyle(errors.phone)} />
                  {errors.phone && <p style={{ color: "var(--red-neon)", fontSize: 11, marginTop: 5 }}>{errors.phone}</p>}
                </div>
                <div style={{ gridColumn: "1 / -1" }}>
                  <label style={labelStyle}><Mail size={11} /> Email *</label>
                  <input type="email" placeholder="email@example.com" value={form.email} onChange={(e) => set("email", e.target.value)} style={inputStyle(errors.email)} />
                  {errors.email && <p style={{ color: "var(--red-neon)", fontSize: 11, marginTop: 5 }}>{errors.email}</p>}
                </div>
              </div>
            </div>

            {/* Dates */}
            <div style={{ background: "var(--black-2)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 12, padding: 28, marginBottom: 24 }}>
              <h2 className="font-heading" style={{ fontSize: 17, color: "var(--white)", marginBottom: 20, display: "flex", alignItems: "center", gap: 10 }}>
                <Calendar size={16} style={{ color: "var(--red-neon)" }} /> Даты аренды
              </h2>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <div>
                  <label style={labelStyle}><Calendar size={11} /> Дата начала *</label>
                  <input type="date" min={today} value={form.startDate} onChange={(e) => { set("startDate", e.target.value); if (form.endDate && e.target.value >= form.endDate) set("endDate", ""); }} style={{ ...inputStyle(errors.startDate), colorScheme: "dark" }} />
                  {errors.startDate && <p style={{ color: "var(--red-neon)", fontSize: 11, marginTop: 5 }}>{errors.startDate}</p>}
                </div>
                <div>
                  <label style={labelStyle}><Calendar size={11} /> Дата окончания *</label>
                  <input type="date" min={form.startDate || today} value={form.endDate} onChange={(e) => set("endDate", e.target.value)} style={{ ...inputStyle(errors.endDate), colorScheme: "dark" }} />
                  {errors.endDate && <p style={{ color: "var(--red-neon)", fontSize: 11, marginTop: 5 }}>{errors.endDate}</p>}
                </div>
              </div>

              {days > 0 && (
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 16, padding: "12px 16px", background: "rgba(255,59,48,0.06)", border: "1px solid rgba(255,59,48,0.15)", borderRadius: 8 }}>
                  <Clock size={14} style={{ color: "var(--red-neon)" }} />
                  <span style={{ color: "var(--white)", fontSize: 13 }}>
                    Длительность аренды: <strong style={{ color: "var(--red-neon)" }}>{days} {days === 1 ? "день" : days < 5 ? "дня" : "дней"}</strong>
                  </span>
                </div>
              )}
            </div>

            {/* Comment */}
            <div style={{ background: "var(--black-2)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 12, padding: 28 }}>
              <h2 className="font-heading" style={{ fontSize: 17, color: "var(--white)", marginBottom: 20, display: "flex", alignItems: "center", gap: 10 }}>
                <MessageSquare size={16} style={{ color: "var(--red-neon)" }} /> Комментарий
              </h2>
              <textarea
                rows={4}
                placeholder="Особые пожелания, адрес доставки или дополнительная информация..."
                value={form.comment}
                onChange={(e) => set("comment", e.target.value)}
                style={{ ...inputStyle(), resize: "vertical", minHeight: 100, fontFamily: "inherit" }}
              />
            </div>
          </div>

          {/* Summary sidebar */}
          <div style={{ position: "sticky", top: 88 }}>
            <div style={{ background: "var(--black-2)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 12, padding: 28 }}>
              <h3 className="font-heading" style={{ fontSize: 16, color: "var(--white)", marginBottom: 20 }}>
                Итог бронирования
              </h3>

              {/* Car */}
              <div style={{ paddingBottom: 20, borderBottom: "1px solid rgba(255,255,255,0.06)", marginBottom: 20 }}>
                <div style={{ borderRadius: 8, overflow: "hidden", marginBottom: 14, aspectRatio: "16/9" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={selectedCar.image} alt={selectedCar.model} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <p style={{ color: "var(--red-neon)", fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 4 }}>{selectedCar.brand}</p>
                <p className="font-heading" style={{ color: "var(--white)", fontSize: 16 }}>{selectedCar.model}</p>
              </div>

              {/* Price breakdown */}
              <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 20 }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ color: "var(--text-muted)", fontSize: 13 }}>Цена в сутки</span>
                  <span style={{ color: "var(--white)", fontSize: 13 }}>{selectedCar.pricePerDay.toLocaleString("ru-RU")} ₽</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ color: "var(--text-muted)", fontSize: 13 }}>Количество дней</span>
                  <span style={{ color: "var(--white)", fontSize: 13 }}>{days || "—"}</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ color: "var(--text-muted)", fontSize: 13 }}>Страховка</span>
                  <span style={{ color: "var(--red-neon)", fontSize: 13 }}>Включена</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ color: "var(--text-muted)", fontSize: 13 }}>Доставка</span>
                  <span style={{ color: "var(--red-neon)", fontSize: 13 }}>Бесплатно</span>
                </div>
              </div>

              <div style={{ height: 1, background: "rgba(255,255,255,0.06)", marginBottom: 20 }} />

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 24 }}>
                <span style={{ color: "var(--text-muted)", fontSize: 13 }}>Итого</span>
                <div style={{ textAlign: "right" }}>
                  <p className="font-display" style={{ fontSize: 30, color: "var(--white)", letterSpacing: "0.02em" }}>
                    {total > 0 ? total.toLocaleString("ru-RU") + " ₽" : "—"}
                  </p>
                </div>
              </div>

              <button
                className="btn-primary"
                onClick={handleSubmit}
                disabled={submitting}
                style={{
                  width: "100%",
                  justifyContent: "center",
                  fontSize: 14,
                  opacity: submitting ? 0.7 : 1,
                  cursor: submitting ? "wait" : "pointer",
                }}
              >
                {submitting ? "Оформляем..." : "Подтвердить бронирование"}
              </button>

              <p style={{ textAlign: "center", color: "var(--text-muted)", fontSize: 11, marginTop: 12, lineHeight: 1.6 }}>
                Нажимая кнопку, вы соглашаетесь с условиями аренды
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default function BookingPage() {
  return (
    <Suspense fallback={<div style={{ paddingTop: 120, textAlign: "center", color: "var(--text-muted)" }}>Загрузка...</div>}>
      <BookingForm />
    </Suspense>
  );
}
