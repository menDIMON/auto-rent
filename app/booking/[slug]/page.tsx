"use client";
import { useState, useEffect, use } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { cars } from "@/data/cars";
import { Booking } from "@/data/bookings";
import { useBookings } from "@/hooks/useBookings";
import {
  Calendar,
  User,
  Phone,
  Mail,
  MessageSquare,
  ChevronLeft,
  CheckCircle,
  Car,
  Settings,
  Fuel,
  Users,
  X,
} from "lucide-react";

type Params = { slug: string };

function diffDays(start: string, end: string) {
  if (!start || !end) return 0;
  const d = (new Date(end).getTime() - new Date(start).getTime()) / 86400000;
  return d > 0 ? Math.round(d) : 0;
}

export default function BookingPage({ params }: { params: Promise<Params> }) {
  const { slug } = use(params);
  const router = useRouter();
  const { addBooking } = useBookings();

  const car = cars.find((c) => c.slug === slug);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    startDate: "",
    endDate: "",
    comment: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [bookingId, setBookingId] = useState("");

  const today = new Date().toISOString().split("T")[0];

  const days = diffDays(form.startDate, form.endDate);
  const total = car ? days * car.pricePerDay : 0;

  function set(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  }

  function validate() {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Введите имя";
    if (!form.phone.trim()) e.phone = "Введите телефон";
    else if (!/^\+?[\d\s\-()]{7,}$/.test(form.phone)) e.phone = "Неверный формат";
    if (!form.email.trim()) e.email = "Введите email";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Неверный email";
    if (!form.startDate) e.startDate = "Выберите дату";
    if (!form.endDate) e.endDate = "Выберите дату";
    if (form.startDate && form.endDate && days <= 0) e.endDate = "Дата окончания должна быть позже начала";
    return e;
  }

  function handleSubmit() {
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    if (!car) return;

    const id = `AR-${Date.now().toString(36).toUpperCase()}`;
    const booking = {
      carId: car.id,
      carBrand: car.brand,
      carModel: car.model,
      carImage: car.image,
      carPricePerDay: car.pricePerDay,
      name: form.name,
      phone: form.phone,
      email: form.email,
      startDate: form.startDate,
      endDate: form.endDate,
      comment: form.comment,
      days,
      total,
    };

    const newBooking = addBooking(booking);
    setBookingId(newBooking.id);
    setSubmitted(true);
  }

  if (!car) {
    return (
      <div style={{ paddingTop: 68, minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ textAlign: "center" }}>
          <p className="font-display" style={{ fontSize: 48, color: "var(--text-muted)", marginBottom: 16 }}>
            АВТО НЕ НАЙДЕНО
          </p>
          <Link href="/catalog" className="btn-primary" style={{ textDecoration: "none" }}>
            Вернуться в каталог
          </Link>
        </div>
      </div>
    );
  }

  // ── SUCCESS SCREEN ─────────────────────────────────────
  if (submitted) {
    return (
      <div
        style={{
          paddingTop: 68,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "88px 24px 48px",
        }}
      >
        <div
          className="animate-fade-up"
          style={{
            maxWidth: 560,
            width: "100%",
            textAlign: "center",
          }}
        >
          {/* Icon */}
          <div
            style={{
              width: 96,
              height: 96,
              borderRadius: "50%",
              background: "rgba(255,59,48,0.1)",
              border: "2px solid rgba(255,59,48,0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 32px",
            }}
          >
            <CheckCircle size={44} style={{ color: "var(--red-neon)" }} />
          </div>

          <h1
            className="font-display"
            style={{ fontSize: 48, color: "var(--white)", marginBottom: 12, letterSpacing: "0.04em" }}
          >
            ЗАБРОНИРОВАНО!
          </h1>
          <p style={{ color: "var(--text-muted)", fontSize: 15, marginBottom: 8 }}>
            Ваша заявка успешно отправлена
          </p>
          <div
            style={{
              display: "inline-block",
              padding: "6px 20px",
              background: "rgba(255,59,48,0.1)",
              border: "1px solid rgba(255,59,48,0.2)",
              borderRadius: 100,
              marginBottom: 40,
            }}
          >
            <span style={{ color: "var(--red-neon)", fontSize: 13, letterSpacing: "0.08em" }}>
              #{bookingId}
            </span>
          </div>

          {/* Car summary */}
          <div
            style={{
              background: "var(--black-2)",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: 12,
              overflow: "hidden",
              marginBottom: 32,
              textAlign: "left",
            }}
          >
            <div style={{ height: 160, overflow: "hidden" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={car.image}
                alt={car.model}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div style={{ padding: "20px 24px" }}>
              <p style={{ color: "var(--red-neon)", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 4 }}>
                {car.brand}
              </p>
              <p className="font-heading" style={{ fontSize: 18, color: "var(--white)", marginBottom: 16 }}>
                {car.model}
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16 }}>
                {[
                  { label: "Начало", val: new Date(form.startDate).toLocaleDateString("ru-RU") },
                  { label: "Конец", val: new Date(form.endDate).toLocaleDateString("ru-RU") },
                  { label: "Дней", val: String(days) },
                ].map(({ label, val }) => (
                  <div key={label}>
                    <p style={{ fontSize: 10, color: "var(--text-muted)", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 4 }}>
                      {label}
                    </p>
                    <p style={{ fontSize: 14, color: "var(--white)", fontWeight: 500 }}>{val}</p>
                  </div>
                ))}
              </div>
              <div className="divider" style={{ margin: "16px 0" }} />
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ color: "var(--text-muted)", fontSize: 13 }}>Итого к оплате</span>
                <span className="font-display" style={{ fontSize: 28, color: "var(--white)" }}>
                  {total.toLocaleString("ru-RU")} ₽
                </span>
              </div>
            </div>
          </div>

          <p style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 28, lineHeight: 1.6 }}>
            Мы свяжемся с вами по номеру <strong style={{ color: "var(--white)" }}>{form.phone}</strong> в
            течение 30 минут для подтверждения.
          </p>

          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/profile" className="btn-primary" style={{ textDecoration: "none" }}>
              Мои бронирования
            </Link>
            <Link href="/catalog" className="btn-outline" style={{ textDecoration: "none" }}>
              Вернуться в каталог
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // ── BOOKING FORM ───────────────────────────────────────
  return (
    <div style={{ paddingTop: 68, minHeight: "100vh" }}>
      {/* Breadcrumb */}
      <div
        style={{
          background: "var(--black-2)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          padding: "16px 24px",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <Link
            href="/catalog"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              color: "var(--text-muted)",
              textDecoration: "none",
              fontSize: 13,
              transition: "color 0.2s",
            }}
          >
            <ChevronLeft size={14} />
            Назад в каталог
          </Link>
        </div>
      </div>

      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "48px 24px 80px",
          display: "grid",
          gridTemplateColumns: "1fr 380px",
          gap: 40,
          alignItems: "flex-start",
        }}
      >
        {/* ── LEFT: FORM ── */}
        <div>
          <p
            style={{
              fontSize: 11,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--red-neon)",
              marginBottom: 12,
            }}
          >
            Оформление заявки
          </p>
          <h1
            className="font-display"
            style={{ fontSize: 40, color: "var(--white)", marginBottom: 40, letterSpacing: "0.04em" }}
          >
            БРОНИРОВАНИЕ
          </h1>

          {/* Personal data */}
          <SectionLabel label="Личные данные" />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
            <Field
              label="Имя и фамилия"
              icon={<User size={15} />}
              placeholder="Александр Петров"
              value={form.name}
              onChange={(v) => set("name", v)}
              error={errors.name}
            />
            <Field
              label="Телефон"
              icon={<Phone size={15} />}
              placeholder="+7 (999) 123-45-67"
              value={form.phone}
              onChange={(v) => set("phone", v)}
              error={errors.phone}
              type="tel"
            />
          </div>
          <Field
            label="Email"
            icon={<Mail size={15} />}
            placeholder="you@example.com"
            value={form.email}
            onChange={(v) => set("email", v)}
            error={errors.email}
            type="email"
          />

          {/* Dates */}
          <SectionLabel label="Даты аренды" style={{ marginTop: 36 }} />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
            <Field
              label="Дата начала"
              icon={<Calendar size={15} />}
              value={form.startDate}
              onChange={(v) => set("startDate", v)}
              error={errors.startDate}
              type="date"
              min={today}
            />
            <Field
              label="Дата окончания"
              icon={<Calendar size={15} />}
              value={form.endDate}
              onChange={(v) => set("endDate", v)}
              error={errors.endDate}
              type="date"
              min={form.startDate || today}
            />
          </div>

          {days > 0 && (
            <div
              style={{
                padding: "14px 18px",
                background: "rgba(255,59,48,0.06)",
                border: "1px solid rgba(255,59,48,0.15)",
                borderRadius: 8,
                marginBottom: 16,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <span style={{ color: "var(--text-muted)", fontSize: 13 }}>
                Итого за <strong style={{ color: "var(--white)" }}>{days} {dayWord(days)}</strong>:
              </span>
              <span className="font-display" style={{ fontSize: 24, color: "var(--red-neon)" }}>
                {total.toLocaleString("ru-RU")} ₽
              </span>
            </div>
          )}

          {/* Comment */}
          <SectionLabel label="Дополнительно" style={{ marginTop: 36 }} />
          <div style={{ marginBottom: 40 }}>
            <label
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                fontSize: 12,
                color: "var(--text-muted)",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                marginBottom: 8,
              }}
            >
              <MessageSquare size={13} />
              Комментарий
            </label>
            <textarea
              placeholder="Особые пожелания, место доставки, вопросы..."
              value={form.comment}
              onChange={(e) => set("comment", e.target.value)}
              rows={4}
              style={{
                width: "100%",
                padding: "14px 16px",
                background: "var(--black-2)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 8,
                color: "var(--white)",
                fontSize: 14,
                resize: "vertical",
                outline: "none",
                fontFamily: "inherit",
                lineHeight: 1.5,
              }}
            />
          </div>

          <button
            onClick={handleSubmit}
            className="btn-primary"
            style={{ width: "100%", justifyContent: "center", fontSize: 14, padding: "16px" }}
          >
            Подтвердить бронирование
          </button>

          <p style={{ fontSize: 11, color: "var(--text-muted)", textAlign: "center", marginTop: 16, lineHeight: 1.6 }}>
            Нажимая кнопку, вы соглашаетесь с{" "}
            <a href="#" style={{ color: "var(--red-neon)", textDecoration: "none" }}>
              условиями аренды
            </a>{" "}
            и{" "}
            <a href="#" style={{ color: "var(--red-neon)", textDecoration: "none" }}>
              политикой конфиденциальности
            </a>
          </p>
        </div>

        {/* ── RIGHT: CAR SUMMARY ── */}
        <div style={{ position: "sticky", top: 88 }}>
          <div
            style={{
              background: "var(--black-2)",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: 12,
              overflow: "hidden",
            }}
          >
            {/* Car image */}
            <div style={{ height: 200, overflow: "hidden", position: "relative" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={car.image}
                alt={car.model}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: 80,
                  background: "linear-gradient(transparent, var(--black-2))",
                }}
              />
            </div>

            {/* Car info */}
            <div style={{ padding: "0 24px 24px" }}>
              <span className="tag tag-red" style={{ marginBottom: 10, display: "inline-flex" }}>
                {car.category}
              </span>
              <p style={{ color: "var(--red-neon)", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 4 }}>
                {car.brand}
              </p>
              <h2 className="font-heading" style={{ fontSize: 20, color: "var(--white)", marginBottom: 20 }}>
                {car.model}
              </h2>

              {/* Specs */}
              <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 24 }}>
                {[
                  { icon: Car, label: `${car.year} год` },
                  { icon: Users, label: `${car.seats} мест` },
                  { icon: Settings, label: car.transmission },
                  { icon: Fuel, label: car.engine },
                ].map(({ icon: Icon, label }, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      padding: "10px 12px",
                      background: "var(--black-3)",
                      borderRadius: 6,
                    }}
                  >
                    <Icon size={13} style={{ color: "var(--text-muted)", flexShrink: 0 }} />
                    <span style={{ fontSize: 12, color: "var(--text-muted)" }}>{label}</span>
                  </div>
                ))}
              </div>

              <div className="divider" style={{ marginBottom: 20 }} />

              {/* Pricing breakdown */}
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ fontSize: 13, color: "var(--text-muted)" }}>Цена в сутки</span>
                  <span style={{ fontSize: 13, color: "var(--white)" }}>
                    {car.pricePerDay.toLocaleString("ru-RU")} ₽
                  </span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ fontSize: 13, color: "var(--text-muted)" }}>Количество дней</span>
                  <span style={{ fontSize: 13, color: "var(--white)" }}>{days > 0 ? days : "—"}</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ fontSize: 13, color: "var(--text-muted)" }}>Страховка</span>
                  <span style={{ fontSize: 13, color: "var(--red-neon)" }}>Включена</span>
                </div>

                <div className="divider" style={{ margin: "4px 0" }} />

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: 14, color: "var(--white)", fontWeight: 500 }}>Итого</span>
                  <span className="font-display" style={{ fontSize: 28, color: "var(--white)" }}>
                    {total > 0 ? `${total.toLocaleString("ru-RU")} ₽` : "—"}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Guarantee note */}
          <div
            style={{
              marginTop: 16,
              padding: "16px 20px",
              background: "rgba(255,59,48,0.05)",
              border: "1px solid rgba(255,59,48,0.1)",
              borderRadius: 10,
            }}
          >
            <p style={{ fontSize: 12, color: "var(--text-muted)", lineHeight: 1.6 }}>
              🛡️ <strong style={{ color: "var(--white)" }}>Бесплатная отмена</strong> за 24 часа до
              начала аренды. КАСКО и ОСАГО включены в стоимость.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── SUB-COMPONENTS ──────────────────────────────────────

function SectionLabel({
  label,
  style: extraStyle,
}: {
  label: string;
  style?: React.CSSProperties;
}) {
  return (
    <p
      style={{
        fontSize: 11,
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        color: "var(--red-neon)",
        marginBottom: 16,
        ...extraStyle,
      }}
    >
      {label}
    </p>
  );
}

function Field({
  label,
  icon,
  placeholder,
  value,
  onChange,
  error,
  type = "text",
  min,
}: {
  label: string;
  icon: React.ReactNode;
  placeholder?: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  type?: string;
  min?: string;
}) {
  return (
    <div>
      <label
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          fontSize: 12,
          color: "var(--text-muted)",
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          marginBottom: 8,
        }}
      >
        <span style={{ color: error ? "var(--red-neon)" : "inherit" }}>{icon}</span>
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        min={min}
        onChange={(e) => onChange(e.target.value)}
        style={{
          width: "100%",
          padding: "13px 16px",
          background: "var(--black-2)",
          border: `1px solid ${error ? "rgba(255,59,48,0.5)" : "rgba(255,255,255,0.08)"}`,
          borderRadius: 8,
          color: "var(--white)",
          fontSize: 14,
          outline: "none",
          transition: "border-color 0.2s",
          colorScheme: "dark",
        }}
      />
      {error && (
        <p style={{ fontSize: 11, color: "var(--red-neon)", marginTop: 6 }}>{error}</p>
      )}
    </div>
  );
}

function dayWord(n: number) {
  if (n % 10 === 1 && n % 100 !== 11) return "день";
  if ([2, 3, 4].includes(n % 10) && ![12, 13, 14].includes(n % 100)) return "дня";
  return "дней";
}
