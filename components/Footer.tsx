"use client"

import Link from "next/link";
import { Car, Phone, Mail, MapPin, Star, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--black-2)",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        paddingTop: 64,
        paddingBottom: 32,
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        {/* Top grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 48,
            marginBottom: 64,
          }}
        >
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
              <div
                style={{
                  width: 34,
                  height: 34,
                  background: "var(--red-neon)",
                  borderRadius: 6,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Car size={16} color="#fff" strokeWidth={2.5} />
              </div>
              <span
                className="font-display"
                style={{ fontSize: 22, color: "var(--white)", letterSpacing: "0.1em" }}
              >
                AUTO<span style={{ color: "var(--red-neon)" }}>RENT</span>
              </span>
            </div>
            <p style={{ color: "var(--text-muted)", fontSize: 13, lineHeight: 1.8, maxWidth: 240 }}>
              Премиальный сервис аренды автомобилей. Более 200 автомобилей в нашем
              автопарке на любой вкус и бюджет.
            </p>
            <div style={{ display: "flex", gap: 12, marginTop: 24 }}>
              {[Star, Globe].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 8,
                    border: "1px solid rgba(255,255,255,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--text-muted)",
                    transition: "all 0.2s",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "var(--red-neon)";
                    el.style.color = "var(--red-neon)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "rgba(255,255,255,0.1)";
                    el.style.color = "var(--text-muted)";
                  }}
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4
              style={{
                fontSize: 11,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--red-neon)",
                marginBottom: 20,
                fontWeight: 500,
              }}
            >
              Навигация
            </h4>
            {[
              { href: "/", label: "Главная" },
              { href: "/catalog", label: "Каталог автомобилей" },
              { href: "/profile", label: "Личный кабинет" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  display: "block",
                  color: "var(--text-muted)",
                  textDecoration: "none",
                  fontSize: 13,
                  marginBottom: 12,
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "var(--white)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "var(--text-muted)";
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Categories */}
          <div>
            <h4
              style={{
                fontSize: 11,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--red-neon)",
                marginBottom: 20,
                fontWeight: 500,
              }}
            >
              Категории
            </h4>
            {["Эконом", "Бизнес", "Премиум", "Спорт", "Внедорожник"].map((cat) => (
              <Link
                key={cat}
                href={`/catalog?category=${cat}`}
                style={{
                  display: "block",
                  color: "var(--text-muted)",
                  textDecoration: "none",
                  fontSize: 13,
                  marginBottom: 12,
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "var(--white)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "var(--text-muted)";
                }}
              >
                {cat}
              </Link>
            ))}
          </div>

          {/* Contacts */}
          <div>
            <h4
              style={{
                fontSize: 11,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--red-neon)",
                marginBottom: 20,
                fontWeight: 500,
              }}
            >
              Контакты
            </h4>
            {[
              { icon: Phone, text: "+7 (800) 555-35-35" },
              { icon: Mail, text: "info@autorent.ru" },
              { icon: MapPin, text: "Москва, ул. Тверская, 1" },
            ].map(({ icon: Icon, text }, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  marginBottom: 14,
                  color: "var(--text-muted)",
                  fontSize: 13,
                }}
              >
                <Icon size={14} style={{ color: "var(--red-neon)", flexShrink: 0 }} />
                {text}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="divider" style={{ marginBottom: 28 }} />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <p style={{ color: "var(--text-muted)", fontSize: 12 }}>
            © 2024 AutoRent. Все права защищены.
          </p>
          <div style={{ display: "flex", gap: 24 }}>
            {["Политика конфиденциальности", "Условия аренды"].map((t) => (
              <a
                key={t}
                href="#"
                style={{
                  color: "var(--text-muted)",
                  fontSize: 12,
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "var(--white)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "var(--text-muted)";
                }}
              >
                {t}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
