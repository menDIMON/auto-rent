import Link from "next/link";
import { ArrowRight, Shield, Clock, Star, ChevronRight, Zap } from "lucide-react";
import { popularCars } from "@/data/cars";
import CarCard from "@/components/CarCard";

export default function HomePage() {
  return (
    <div>
      {/* ── HERO ──────────────────────────────────────────── */}
      <section
        style={{
          minHeight: "100vh",
          position: "relative",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        {/* Background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "url(https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1600&q=80)",
            backgroundSize: "cover",
            backgroundPosition: "center 40%",
            filter: "brightness(0.25)",
          }}
        />
        {/* Red gradient overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg, rgba(192,57,43,0.15) 0%, transparent 50%, rgba(10,10,10,0.8) 100%)",
          }}
        />
        {/* Bottom fade */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 200,
            background: "linear-gradient(transparent, var(--black))",
          }}
        />

        {/* Content */}
        <div
          style={{
            position: "relative",
            maxWidth: 1280,
            margin: "0 auto",
            padding: "0 24px",
            paddingTop: 120,
          }}
        >
          {/* Badge */}
          <div className="animate-fade-up" style={{ marginBottom: 24 }}>
            <span className="tag tag-red">
              <span
                className="animate-pulse-red"
                style={{
                  width: 6,
                  height: 6,
                  background: "var(--red-neon)",
                  borderRadius: "50%",
                  display: "inline-block",
                }}
              />
              Более 200 автомобилей в наличии
            </span>
          </div>

          {/* Heading */}
          <h1
            className="font-display animate-fade-up-delay"
            style={{
              fontSize: "clamp(56px, 10vw, 120px)",
              lineHeight: 0.9,
              letterSpacing: "0.03em",
              color: "var(--white)",
              maxWidth: 800,
              marginBottom: 32,
            }}
          >
            ТВОЙ{" "}
            <span style={{ color: "var(--red-neon)" }}>АВТОМОБИЛЬ</span>{" "}
            ЖДЁТ ТЕБЯ
          </h1>

          <p
            className="animate-fade-up-delay-2"
            style={{
              fontSize: 17,
              color: "rgba(245,245,240,0.6)",
              maxWidth: 480,
              lineHeight: 1.7,
              marginBottom: 48,
            }}
          >
            Аренда премиальных автомобилей с доставкой. Никаких скрытых
            платежей. Забронируйте онлайн за 2 минуты.
          </p>

          <div
            className="animate-fade-up-delay-2"
            style={{ display: "flex", gap: 16, flexWrap: "wrap" }}
          >
            <Link href="/catalog" className="btn-primary" style={{ textDecoration: "none" }}>
              Выбрать автомобиль
              <ArrowRight size={16} />
            </Link>
            <Link href="/profile" className="btn-outline" style={{ textDecoration: "none" }}>
              Личный кабинет
            </Link>
          </div>

          {/* Stats row */}
          <div
            style={{
              display: "flex",
              gap: 48,
              marginTop: 80,
              paddingTop: 48,
              borderTop: "1px solid rgba(255,255,255,0.08)",
              flexWrap: "wrap",
            }}
          >
            {[
              { num: "200+", label: "Автомобилей" },
              { num: "15 000+", label: "Довольных клиентов" },
              { num: "4.9★", label: "Рейтинг сервиса" },
              { num: "24/7", label: "Поддержка" },
            ].map(({ num, label }) => (
              <div key={label}>
                <p
                  className="font-display"
                  style={{ fontSize: 36, color: "var(--white)", letterSpacing: "0.03em" }}
                >
                  {num}
                </p>
                <p style={{ fontSize: 12, color: "var(--text-muted)", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ──────────────────────────────────── */}
      <section style={{ padding: "96px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          {/* Section label */}
          <p
            style={{
              fontSize: 11,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--red-neon)",
              marginBottom: 16,
            }}
          >
            Как это работает
          </p>
          <h2
            className="font-display"
            style={{ fontSize: "clamp(36px, 5vw, 64px)", color: "var(--white)", marginBottom: 64 }}
          >
            АРЕНДА ЗА 3 ШАГА
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 24,
            }}
          >
            {[
              {
                num: "01",
                icon: Star,
                title: "Выберите автомобиль",
                desc: "Просмотрите каталог из 200+ автомобилей. Фильтры по категории, цене и характеристикам.",
              },
              {
                num: "02",
                icon: Zap,
                title: "Забронируйте онлайн",
                desc: "Выберите даты аренды и оформите бронирование за 2 минуты без скрытых комиссий.",
              },
              {
                num: "03",
                icon: Shield,
                title: "Получите автомобиль",
                desc: "Доставим автомобиль по вашему адресу или заберите из нашего офиса. Страховка включена.",
              },
            ].map(({ num, icon: Icon, title, desc }) => (
              <div
                key={num}
                style={{
                  padding: 32,
                  background: "var(--black-2)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: 12,
                  position: "relative",
                }}
              >
                <span
                  className="font-display"
                  style={{
                    fontSize: 72,
                    color: "rgba(255,59,48,0.06)",
                    position: "absolute",
                    top: 16,
                    right: 24,
                    lineHeight: 1,
                    letterSpacing: "0.02em",
                  }}
                >
                  {num}
                </span>
                <div
                  style={{
                    width: 48,
                    height: 48,
                    background: "rgba(255,59,48,0.1)",
                    border: "1px solid rgba(255,59,48,0.2)",
                    borderRadius: 10,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 20,
                  }}
                >
                  <Icon size={20} style={{ color: "var(--red-neon)" }} />
                </div>
                <h3
                  className="font-heading"
                  style={{ fontSize: 17, color: "var(--white)", marginBottom: 10 }}
                >
                  {title}
                </h3>
                <p style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.7 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── POPULAR CARS ──────────────────────────────────── */}
      <section
        style={{
          padding: "96px 24px",
          background: "var(--black-2)",
          borderTop: "1px solid rgba(255,255,255,0.04)",
        }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: 48,
              flexWrap: "wrap",
              gap: 16,
            }}
          >
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
                Топ выбор клиентов
              </p>
              <h2
                className="font-display"
                style={{ fontSize: "clamp(36px, 5vw, 64px)", color: "var(--white)" }}
              >
                ПОПУЛЯРНЫЕ АВТО
              </h2>
            </div>
            <Link
              href="/catalog"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                color: "var(--red-neon)",
                textDecoration: "none",
                fontSize: 13,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
              }}
            >
              Весь каталог <ChevronRight size={16} />
            </Link>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: 24,
            }}
          >
            {popularCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US ────────────────────────────────────────── */}
      <section style={{ padding: "96px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <p
            style={{
              fontSize: 11,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--red-neon)",
              marginBottom: 16,
            }}
          >
            Наши преимущества
          </p>
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(36px, 5vw, 64px)",
              color: "var(--white)",
              marginBottom: 64,
            }}
          >
            ПОЧЕМУ AUTORENT
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 1,
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: 12,
              overflow: "hidden",
            }}
          >
            {[
              { icon: Shield, title: "Полная страховка", desc: "КАСКО и ОСАГО включены в стоимость без доплат" },
              { icon: Clock, title: "Доставка 24/7", desc: "Привезём автомобиль в любое время дня и ночи" },
              { icon: Star, title: "Чистые авто", desc: "Каждый автомобиль проходит детейлинг перед выдачей" },
              { icon: Zap, title: "Быстрое оформление", desc: "Оформление договора займёт не более 10 минут" },
            ].map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                style={{
                  padding: "36px 28px",
                  background: "var(--black-2)",
                  borderRight: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    background: "rgba(255,59,48,0.08)",
                    borderRadius: 10,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 16,
                  }}
                >
                  <Icon size={18} style={{ color: "var(--red-neon)" }} />
                </div>
                <h3
                  className="font-heading"
                  style={{ fontSize: 15, color: "var(--white)", marginBottom: 8 }}
                >
                  {title}
                </h3>
                <p style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ────────────────────────────────────── */}
      <section style={{ padding: "0 24px 96px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div
            style={{
              background:
                "linear-gradient(135deg, var(--red) 0%, #8b0000 100%)",
              borderRadius: 16,
              padding: "64px 48px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 32,
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Decorative circle */}
            <div
              style={{
                position: "absolute",
                right: -60,
                top: -60,
                width: 300,
                height: 300,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.04)",
              }}
            />
            <div>
              <h2
                className="font-display"
                style={{ fontSize: "clamp(32px, 5vw, 56px)", color: "#fff", marginBottom: 12 }}
              >
                ГОТОВЫ К ПОЕЗДКЕ?
              </h2>
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 15 }}>
                Первая аренда со скидкой 20% по промокоду{" "}
                <strong style={{ color: "#fff" }}>AUTORENT20</strong>
              </p>
            </div>
            <Link
              href="/catalog"
              style={{
                padding: "16px 36px",
                background: "#fff",
                color: "var(--red)",
                borderRadius: 4,
                textDecoration: "none",
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                display: "flex",
                alignItems: "center",
                gap: 8,
                flexShrink: 0,
              }}
            >
              Выбрать автомобиль <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
