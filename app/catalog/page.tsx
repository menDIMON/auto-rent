"use client";
import { useState } from "react";
import { cars } from "@/data/cars";
import CarCard from "@/components/CarCard";
import { SlidersHorizontal, X } from "lucide-react";

const CATEGORIES = ["Все", "Эконом", "Бизнес", "Премиум", "Спорт", "Внедорожник"];
const TRANSMISSIONS = ["Все", "Автомат", "Механика"];

export default function CatalogPage() {
  const [category, setCategory] = useState("Все");
  const [transmission, setTransmission] = useState("Все");
  const [maxPrice, setMaxPrice] = useState(70000);
  const [search, setSearch] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  const filtered = cars.filter((car) => {
    const matchCat = category === "Все" || car.category === category;
    const matchTr = transmission === "Все" || car.transmission === transmission;
    const matchPrice = car.pricePerDay <= maxPrice;
    const matchSearch =
      search === "" ||
      `${car.brand} ${car.model}`.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchTr && matchPrice && matchSearch;
  });

  const FilterPanel = () => (
    <div
      style={{
        background: "var(--black-2)",
        border: "1px solid rgba(255,255,255,0.07)",
        borderRadius: 12,
        padding: 28,
      }}
    >
      {/* Category */}
      <div style={{ marginBottom: 32 }}>
        <p
          style={{
            fontSize: 11,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "var(--red-neon)",
            marginBottom: 16,
          }}
        >
          Категория
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              style={{
                padding: "9px 14px",
                borderRadius: 6,
                border: "1px solid",
                borderColor:
                  category === cat ? "var(--red-neon)" : "rgba(255,255,255,0.06)",
                background: category === cat ? "rgba(255,59,48,0.1)" : "transparent",
                color: category === cat ? "var(--red-neon)" : "var(--text-muted)",
                fontSize: 13,
                cursor: "pointer",
                textAlign: "left",
                transition: "all 0.15s",
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Transmission */}
      <div style={{ marginBottom: 32 }}>
        <p
          style={{
            fontSize: 11,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "var(--red-neon)",
            marginBottom: 16,
          }}
        >
          Коробка передач
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          {TRANSMISSIONS.map((t) => (
            <button
              key={t}
              onClick={() => setTransmission(t)}
              style={{
                padding: "9px 14px",
                borderRadius: 6,
                border: "1px solid",
                borderColor:
                  transmission === t ? "var(--red-neon)" : "rgba(255,255,255,0.06)",
                background: transmission === t ? "rgba(255,59,48,0.1)" : "transparent",
                color: transmission === t ? "var(--red-neon)" : "var(--text-muted)",
                fontSize: 13,
                cursor: "pointer",
                textAlign: "left",
                transition: "all 0.15s",
              }}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <p
          style={{
            fontSize: 11,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "var(--red-neon)",
            marginBottom: 8,
          }}
        >
          Цена до
        </p>
        <p
          className="font-display"
          style={{ fontSize: 28, color: "var(--white)", marginBottom: 12 }}
        >
          {maxPrice.toLocaleString("ru-RU")} ₽
        </p>
        <input
          type="range"
          min={3000}
          max={70000}
          step={500}
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          style={{
            width: "100%",
            accentColor: "var(--red-neon)",
            cursor: "pointer",
          }}
        />
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 6 }}>
          <span style={{ fontSize: 11, color: "var(--text-muted)" }}>3 000 ₽</span>
          <span style={{ fontSize: 11, color: "var(--text-muted)" }}>70 000 ₽</span>
        </div>
      </div>

      {/* Reset */}
      <button
        onClick={() => {
          setCategory("Все");
          setTransmission("Все");
          setMaxPrice(70000);
          setSearch("");
        }}
        style={{
          marginTop: 28,
          width: "100%",
          padding: "10px",
          background: "transparent",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: 6,
          color: "var(--text-muted)",
          fontSize: 12,
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          cursor: "pointer",
          transition: "all 0.2s",
        }}
      >
        Сбросить фильтры
      </button>
    </div>
  );

  return (
    <div style={{ paddingTop: 68, minHeight: "100vh" }}>
      {/* Header */}
      <div
        style={{
          background: "var(--black-2)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          padding: "48px 24px",
        }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <p
            style={{
              fontSize: 11,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--red-neon)",
              marginBottom: 12,
            }}
          >
            Выберите автомобиль
          </p>
          <h1
            className="font-display"
            style={{ fontSize: "clamp(40px, 6vw, 80px)", color: "var(--white)" }}
          >
            КАТАЛОГ АВТО
          </h1>
        </div>
      </div>

      {/* Body */}
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "40px 24px",
          display: "flex",
          gap: 32,
          alignItems: "flex-start",
        }}
      >
        {/* Sidebar — desktop */}
        <aside
          className="hidden md:block"
          style={{ width: 260, flexShrink: 0, position: "sticky", top: 88 }}
        >
          <FilterPanel />
        </aside>

        {/* Main */}
        <div style={{ flex: 1, minWidth: 0 }}>
          {/* Search + mobile filter toggle */}
          <div style={{ display: "flex", gap: 12, marginBottom: 32 }}>
            <input
              type="text"
              placeholder="Поиск по марке или модели..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{
                flex: 1,
                padding: "12px 18px",
                background: "var(--black-2)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 8,
                color: "var(--white)",
                fontSize: 14,
                outline: "none",
              }}
            />
            <button
              className="md:hidden"
              onClick={() => setShowFilters(!showFilters)}
              style={{
                padding: "12px 16px",
                background: "var(--black-2)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 8,
                color: "var(--text-muted)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 8,
                fontSize: 13,
              }}
            >
              {showFilters ? <X size={16} /> : <SlidersHorizontal size={16} />}
              Фильтры
            </button>
          </div>

          {/* Mobile filters */}
          {showFilters && (
            <div className="md:hidden" style={{ marginBottom: 24 }}>
              <FilterPanel />
            </div>
          )}

          {/* Results count */}
          <div style={{ marginBottom: 24 }}>
            <p style={{ fontSize: 13, color: "var(--text-muted)" }}>
              Найдено автомобилей:{" "}
              <span style={{ color: "var(--white)", fontWeight: 500 }}>{filtered.length}</span>
            </p>
          </div>

          {/* Grid */}
          {filtered.length > 0 ? (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(290px, 1fr))",
                gap: 24,
              }}
            >
              {filtered.map((car) => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>
          ) : (
            <div
              style={{
                textAlign: "center",
                padding: "80px 24px",
                color: "var(--text-muted)",
              }}
            >
              <p className="font-display" style={{ fontSize: 40, marginBottom: 12, color: "var(--gray-light)" }}>
                НЕТ РЕЗУЛЬТАТОВ
              </p>
              <p style={{ fontSize: 14 }}>Попробуйте изменить фильтры или поисковый запрос</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
