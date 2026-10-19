"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Car, User, Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Главная" },
  { href: "/catalog", label: "Каталог" },
  { href: "/profile", label: "Личный кабинет" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: "rgba(10,10,10,0.92)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 24px",
          height: 68,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            textDecoration: "none",
          }}
        >
          <div
            style={{
              width: 36,
              height: 36,
              background: "var(--red-neon)",
              borderRadius: 6,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Car size={18} color="#fff" strokeWidth={2.5} />
          </div>
          <span
            className="font-display"
            style={{ fontSize: 24, color: "var(--white)", letterSpacing: "0.1em" }}
          >
            AUTO<span style={{ color: "var(--red-neon)" }}>RENT</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: 4 }} className="hidden md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="link-underline"
              style={{
                padding: "8px 18px",
                fontSize: 13,
                fontWeight: 400,
                color:
                  pathname === link.href ? "var(--red-neon)" : "var(--text-muted)",
                textDecoration: "none",
                transition: "color 0.2s",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <Link
            href="/catalog"
            className="hidden md:flex"
            style={{
              padding: "10px 20px",
              background: "var(--red-neon)",
              color: "#fff",
              borderRadius: 4,
              textDecoration: "none",
              fontSize: 12,
              fontWeight: 500,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "var(--red-light)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "var(--red-neon)";
            }}
          >
            Арендовать
          </Link>

          <Link
            href="/profile"
            style={{
              width: 40,
              height: 40,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 8,
              color: pathname === "/profile" ? "var(--red-neon)" : "var(--text-muted)",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
          >
            <User size={18} />
          </Link>

          {/* Mobile burger */}
          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
            style={{
              width: 40,
              height: 40,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "none",
              border: "none",
              color: "var(--white)",
              cursor: "pointer",
            }}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden"
          style={{
            background: "rgba(10,10,10,0.98)",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            padding: "16px 24px 24px",
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{
                display: "block",
                padding: "14px 0",
                fontSize: 14,
                color: pathname === link.href ? "var(--red-neon)" : "var(--text-muted)",
                textDecoration: "none",
                borderBottom: "1px solid rgba(255,255,255,0.04)",
                fontWeight: 400,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
