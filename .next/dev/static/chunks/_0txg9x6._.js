(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/data/cars.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cars",
    ()=>cars,
    "popularCars",
    ()=>popularCars
]);
const cars = [
    {
        id: 1,
        slug: "bmw-m5-2023",
        brand: "BMW",
        model: "M5 Competition",
        year: 2023,
        transmission: "Автомат",
        engine: "4.4л V8 Turbo, 625 л.с.",
        pricePerDay: 18500,
        image: "https://images.unsplash.com/photo-1593816581101-67c10fc73963?w=800&q=80&auto=format&fit=crop",
        category: "Премиум",
        seats: 5,
        popular: true
    },
    {
        id: 2,
        slug: "mercedes-s500-2023",
        brand: "Mercedes-Benz",
        model: "S 500 4MATIC",
        year: 2023,
        transmission: "Автомат",
        engine: "3.0л I6 Turbo, 435 л.с.",
        pricePerDay: 22000,
        image: "https://images.unsplash.com/photo-1619221496652-7ee3d7406203?w=800&q=80&auto=format&fit=crop",
        category: "Премиум",
        seats: 5,
        popular: true
    },
    {
        id: 3,
        slug: "porsche-911-2022",
        brand: "Porsche",
        model: "911 Carrera S",
        year: 2022,
        transmission: "Автомат",
        engine: "3.0л Boxer-6 Turbo, 450 л.с.",
        pricePerDay: 25000,
        image: "https://images.unsplash.com/photo-1589270618430-e2e652059aac?w=800&q=80&auto=format&fit=crop",
        category: "Спорт",
        seats: 2,
        popular: true
    },
    {
        id: 4,
        slug: "range-rover-sport-2023",
        brand: "Land Rover",
        model: "Range Rover Sport",
        year: 2023,
        transmission: "Автомат",
        engine: "3.0л I6 Turbo, 395 л.с.",
        pricePerDay: 19000,
        image: "https://images.unsplash.com/photo-1549632891-a0bea6d0355b?w=800&q=80&auto=format&fit=crop",
        category: "Внедорожник",
        seats: 5,
        popular: true
    },
    {
        id: 5,
        slug: "audi-rs6-2023",
        brand: "Audi",
        model: "RS6 Avant",
        year: 2023,
        transmission: "Автомат",
        engine: "4.0л V8 TFSI, 600 л.с.",
        pricePerDay: 20500,
        image: "https://sales-audi.ru/upload/rs6-avant/4.jpg",
        category: "Премиум",
        seats: 5,
        popular: false
    },
    {
        id: 6,
        slug: "toyota-camry-2023",
        brand: "Toyota",
        model: "Camry 3.5 V6",
        year: 2023,
        transmission: "Автомат",
        engine: "3.5л V6, 249 л.с.",
        pricePerDay: 5500,
        image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&q=80&auto=format&fit=crop",
        category: "Бизнес",
        seats: 5,
        popular: true
    },
    {
        id: 7,
        slug: "tesla-model-s-2023",
        brand: "Tesla",
        model: "Model S Plaid",
        year: 2023,
        transmission: "Автомат",
        engine: "Электро, 1020 л.с.",
        pricePerDay: 15000,
        image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&q=80&auto=format&fit=crop",
        category: "Премиум",
        seats: 5,
        popular: false
    },
    {
        id: 8,
        slug: "lamborghini-urus-2022",
        brand: "Lamborghini",
        model: "Urus S",
        year: 2022,
        transmission: "Автомат",
        engine: "4.0л V8 Biturbo, 666 л.с.",
        pricePerDay: 45000,
        image: "https://images.unsplash.com/photo-1636853394258-969726a04424?w=800&q=80&auto=format&fit=crop",
        category: "Внедорожник",
        seats: 5,
        popular: false
    },
    {
        id: 9,
        slug: "volkswagen-golf-2022",
        brand: "Volkswagen",
        model: "Golf 8 GTI",
        year: 2022,
        transmission: "Автомат",
        engine: "2.0л TSI, 245 л.с.",
        pricePerDay: 4200,
        image: "https://images.unsplash.com/photo-1605475300127-0a31e8273bc2?w=800&q=80&auto=format&fit=crop",
        category: "Эконом",
        seats: 5,
        popular: false
    },
    {
        id: 10,
        slug: "ferrari-f8-tributo-2022",
        brand: "Ferrari",
        model: "F8 Tributo",
        year: 2022,
        transmission: "Автомат",
        engine: "3.9л V8 Turbo, 720 л.с.",
        pricePerDay: 60000,
        image: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?w=800&q=80&auto=format&fit=crop",
        category: "Спорт",
        seats: 2,
        popular: false
    },
    {
        id: 11,
        slug: "hyundai-tucson-2023",
        brand: "Hyundai",
        model: "Tucson 2.5 AWD",
        year: 2023,
        transmission: "Автомат",
        engine: "2.5л GDi, 190 л.с.",
        pricePerDay: 3800,
        image: "https://images.unsplash.com/photo-1575090536203-2a6193126514?w=800&q=80&auto=format&fit=crop",
        category: "Эконом",
        seats: 5,
        popular: false
    },
    {
        id: 12,
        slug: "bentley-continental-gt-2023",
        brand: "Bentley",
        model: "Continental GT Speed",
        year: 2023,
        transmission: "Автомат",
        engine: "6.0л W12 Biturbo, 659 л.с.",
        pricePerDay: 55000,
        image: "https://images.unsplash.com/photo-1604946881982-a3321fcf07f0?w=800&q=80&auto=format&fit=crop",
        category: "Премиум",
        seats: 4,
        popular: false
    }
];
const popularCars = cars.filter((c)=>c.popular);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hooks/useBookings.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useBookings",
    ()=>useBookings
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
const STORAGE_KEY = "autorent_bookings";
function useBookings() {
    _s();
    const [bookings, setBookings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loaded, setLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useBookings.useEffect": ()=>{
            try {
                const raw = localStorage.getItem(STORAGE_KEY);
                if (raw) setBookings(JSON.parse(raw));
            } catch  {}
            setLoaded(true);
        }
    }["useBookings.useEffect"], []);
    const addBooking = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useBookings.useCallback[addBooking]": (booking)=>{
            const newBooking = {
                ...booking,
                id: `AR-${Date.now()}`,
                createdAt: new Date().toISOString(),
                status: "Ожидает"
            };
            setBookings({
                "useBookings.useCallback[addBooking]": (prev)=>{
                    const updated = [
                        newBooking,
                        ...prev
                    ];
                    try {
                        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
                    } catch  {}
                    return updated;
                }
            }["useBookings.useCallback[addBooking]"]);
            return newBooking;
        }
    }["useBookings.useCallback[addBooking]"], []);
    const removeBooking = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useBookings.useCallback[removeBooking]": (id)=>{
            setBookings({
                "useBookings.useCallback[removeBooking]": (prev)=>{
                    const updated = prev.filter({
                        "useBookings.useCallback[removeBooking].updated": (b)=>b.id !== id
                    }["useBookings.useCallback[removeBooking].updated"]);
                    try {
                        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
                    } catch  {}
                    return updated;
                }
            }["useBookings.useCallback[removeBooking]"]);
        }
    }["useBookings.useCallback[removeBooking]"], []);
    return {
        bookings,
        addBooking,
        removeBooking,
        loaded
    };
}
_s(useBookings, "xKr2U90pZ58dyWAyG+q+JbO5lnc=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/booking/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BookingPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$cars$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/cars.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useBookings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useBookings.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.mjs [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.mjs [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.mjs [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$car$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Car$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/car.mjs [app-client] (ecmascript) <export default as Car>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.mjs [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-square.mjs [app-client] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.mjs [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.mjs [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.mjs [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.mjs [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
/* ── Success toast ───────────────────────────── */ function SuccessToast({ bookingId, onClose }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: "fixed",
            inset: 0,
            zIndex: 1000,
            background: "rgba(0,0,0,0.85)",
            backdropFilter: "blur(8px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 24
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "animate-fade-up",
            style: {
                background: "var(--black-2)",
                border: "1px solid rgba(255,59,48,0.3)",
                borderRadius: 16,
                padding: "48px 40px",
                maxWidth: 460,
                width: "100%",
                textAlign: "center"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        width: 72,
                        height: 72,
                        background: "rgba(255,59,48,0.1)",
                        border: "2px solid var(--red-neon)",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "0 auto 24px"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                        size: 34,
                        style: {
                            color: "var(--red-neon)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/booking/page.tsx",
                        lineNumber: 45,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/booking/page.tsx",
                    lineNumber: 35,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "font-display",
                    style: {
                        fontSize: 32,
                        color: "var(--white)",
                        letterSpacing: "0.04em",
                        marginBottom: 12
                    },
                    children: "БРОНИРОВАНИЕ ОФОРМЛЕНО!"
                }, void 0, false, {
                    fileName: "[project]/app/booking/page.tsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    style: {
                        color: "var(--text-muted)",
                        fontSize: 14,
                        lineHeight: 1.7,
                        marginBottom: 8
                    },
                    children: "Ваше бронирование успешно создано."
                }, void 0, false, {
                    fileName: "[project]/app/booking/page.tsx",
                    lineNumber: 50,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "inline-block",
                        padding: "6px 18px",
                        background: "rgba(255,59,48,0.08)",
                        border: "1px solid rgba(255,59,48,0.2)",
                        borderRadius: 6,
                        color: "var(--red-neon)",
                        fontSize: 13,
                        letterSpacing: "0.06em",
                        marginBottom: 32
                    },
                    children: bookingId
                }, void 0, false, {
                    fileName: "[project]/app/booking/page.tsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    style: {
                        color: "var(--text-muted)",
                        fontSize: 13,
                        marginBottom: 32
                    },
                    children: "Мы свяжемся с вами в ближайшее время для подтверждения."
                }, void 0, false, {
                    fileName: "[project]/app/booking/page.tsx",
                    lineNumber: 68,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "flex",
                        gap: 12,
                        justifyContent: "center",
                        flexWrap: "wrap"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/profile",
                            className: "btn-primary",
                            style: {
                                textDecoration: "none",
                                fontSize: 13
                            },
                            onClick: onClose,
                            children: "Мои бронирования"
                        }, void 0, false, {
                            fileName: "[project]/app/booking/page.tsx",
                            lineNumber: 72,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "btn-outline",
                            style: {
                                fontSize: 13
                            },
                            onClick: onClose,
                            children: "Ещё одна аренда"
                        }, void 0, false, {
                            fileName: "[project]/app/booking/page.tsx",
                            lineNumber: 80,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/booking/page.tsx",
                    lineNumber: 71,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/booking/page.tsx",
            lineNumber: 23,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/booking/page.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_c = SuccessToast;
/* ── Main form ───────────────────────────────── */ function BookingForm() {
    _s();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { addBooking } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useBookings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBookings"])();
    const preselectedId = params.get("carId") ? Number(params.get("carId")) : null;
    const [selectedCarId, setSelectedCarId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(preselectedId ?? __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$cars$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cars"][0].id);
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        phone: "",
        email: "",
        startDate: "",
        endDate: "",
        comment: ""
    });
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [submitting, setSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [successId, setSuccessId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const selectedCar = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$cars$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cars"].find((c)=>c.id === selectedCarId) ?? __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$cars$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cars"][0];
    const days = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "BookingForm.useMemo[days]": ()=>{
            if (!form.startDate || !form.endDate) return 0;
            const diff = (new Date(form.endDate).getTime() - new Date(form.startDate).getTime()) / 86400000;
            return diff > 0 ? Math.ceil(diff) : 0;
        }
    }["BookingForm.useMemo[days]"], [
        form.startDate,
        form.endDate
    ]);
    const total = days * selectedCar.pricePerDay;
    function set(field, value) {
        setForm((p)=>({
                ...p,
                [field]: value
            }));
        setErrors((p)=>({
                ...p,
                [field]: ""
            }));
    }
    function validate() {
        const e = {};
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
        if (Object.keys(e).length) {
            setErrors(e);
            return;
        }
        setSubmitting(true);
        await new Promise((r)=>setTimeout(r, 800));
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
            total
        });
        setSubmitting(false);
        setSuccessId(booking.id);
    }
    const today = new Date().toISOString().split("T")[0];
    const inputStyle = (err)=>({
            width: "100%",
            padding: "13px 16px",
            background: "var(--black-3)",
            border: `1px solid ${err ? "var(--red-neon)" : "rgba(255,255,255,0.08)"}`,
            borderRadius: 8,
            color: "var(--white)",
            fontSize: 14,
            outline: "none",
            transition: "border-color 0.2s"
        });
    const labelStyle = {
        display: "flex",
        alignItems: "center",
        gap: 8,
        fontSize: 12,
        color: "var(--text-muted)",
        letterSpacing: "0.06em",
        textTransform: "uppercase",
        marginBottom: 8
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            successId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SuccessToast, {
                bookingId: successId,
                onClose: ()=>{
                    setSuccessId(null);
                    setForm({
                        name: "",
                        phone: "",
                        email: "",
                        startDate: "",
                        endDate: "",
                        comment: ""
                    });
                    router.push("/catalog");
                }
            }, void 0, false, {
                fileName: "[project]/app/booking/page.tsx",
                lineNumber: 177,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    paddingTop: 68,
                    minHeight: "100vh"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            background: "var(--black-2)",
                            borderBottom: "1px solid rgba(255,255,255,0.06)",
                            padding: "48px 24px"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                maxWidth: 1100,
                                margin: "0 auto"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/catalog",
                                    style: {
                                        display: "inline-flex",
                                        alignItems: "center",
                                        gap: 8,
                                        color: "var(--text-muted)",
                                        textDecoration: "none",
                                        fontSize: 13,
                                        marginBottom: 20,
                                        letterSpacing: "0.04em"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                            size: 14
                                        }, void 0, false, {
                                            fileName: "[project]/app/booking/page.tsx",
                                            lineNumber: 189,
                                            columnNumber: 15
                                        }, this),
                                        " Назад к каталогу"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/booking/page.tsx",
                                    lineNumber: 188,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        fontSize: 11,
                                        letterSpacing: "0.12em",
                                        textTransform: "uppercase",
                                        color: "var(--red-neon)",
                                        marginBottom: 10
                                    },
                                    children: "Оформление"
                                }, void 0, false, {
                                    fileName: "[project]/app/booking/page.tsx",
                                    lineNumber: 191,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "font-display",
                                    style: {
                                        fontSize: "clamp(36px, 6vw, 72px)",
                                        color: "var(--white)"
                                    },
                                    children: "БРОНИРОВАНИЕ АВТО"
                                }, void 0, false, {
                                    fileName: "[project]/app/booking/page.tsx",
                                    lineNumber: 194,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/booking/page.tsx",
                            lineNumber: 187,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/booking/page.tsx",
                        lineNumber: 186,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            maxWidth: 1100,
                            margin: "0 auto",
                            padding: "40px 24px",
                            display: "grid",
                            gridTemplateColumns: "1fr 360px",
                            gap: 32,
                            alignItems: "flex-start"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            background: "var(--black-2)",
                                            border: "1px solid rgba(255,255,255,0.07)",
                                            borderRadius: 12,
                                            padding: 28,
                                            marginBottom: 24
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "font-heading",
                                                style: {
                                                    fontSize: 17,
                                                    color: "var(--white)",
                                                    marginBottom: 20,
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: 10
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$car$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Car$3e$__["Car"], {
                                                        size: 16,
                                                        style: {
                                                            color: "var(--red-neon)"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/booking/page.tsx",
                                                        lineNumber: 208,
                                                        columnNumber: 17
                                                    }, this),
                                                    " Выберите автомобиль"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/booking/page.tsx",
                                                lineNumber: 207,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    position: "relative"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: selectedCarId ?? "",
                                                        onChange: (e)=>setSelectedCarId(Number(e.target.value)),
                                                        style: {
                                                            ...inputStyle(),
                                                            appearance: "none",
                                                            cursor: "pointer",
                                                            paddingRight: 44
                                                        },
                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$cars$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cars"].map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: c.id,
                                                                style: {
                                                                    background: "var(--black-2)"
                                                                },
                                                                children: [
                                                                    c.brand,
                                                                    " ",
                                                                    c.model,
                                                                    " — ",
                                                                    c.pricePerDay.toLocaleString("ru-RU"),
                                                                    " ₽/сут"
                                                                ]
                                                            }, c.id, true, {
                                                                fileName: "[project]/app/booking/page.tsx",
                                                                lineNumber: 217,
                                                                columnNumber: 21
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/booking/page.tsx",
                                                        lineNumber: 211,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                        size: 16,
                                                        style: {
                                                            position: "absolute",
                                                            right: 14,
                                                            top: "50%",
                                                            transform: "translateY(-50%)",
                                                            color: "var(--text-muted)",
                                                            pointerEvents: "none"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/booking/page.tsx",
                                                        lineNumber: 222,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/booking/page.tsx",
                                                lineNumber: 210,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: "flex",
                                                    gap: 16,
                                                    marginTop: 16,
                                                    padding: "16px",
                                                    background: "var(--black-3)",
                                                    borderRadius: 8,
                                                    border: "1px solid rgba(255,59,48,0.12)"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            width: 100,
                                                            height: 68,
                                                            borderRadius: 6,
                                                            overflow: "hidden",
                                                            flexShrink: 0
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: selectedCar.image,
                                                            alt: selectedCar.model,
                                                            style: {
                                                                width: "100%",
                                                                height: "100%",
                                                                objectFit: "cover"
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/booking/page.tsx",
                                                            lineNumber: 229,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/booking/page.tsx",
                                                        lineNumber: 227,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                style: {
                                                                    color: "var(--red-neon)",
                                                                    fontSize: 10,
                                                                    letterSpacing: "0.08em",
                                                                    textTransform: "uppercase",
                                                                    marginBottom: 4
                                                                },
                                                                children: selectedCar.brand
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/booking/page.tsx",
                                                                lineNumber: 232,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "font-heading",
                                                                style: {
                                                                    color: "var(--white)",
                                                                    fontSize: 15,
                                                                    marginBottom: 4
                                                                },
                                                                children: selectedCar.model
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/booking/page.tsx",
                                                                lineNumber: 233,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                style: {
                                                                    color: "var(--text-muted)",
                                                                    fontSize: 12
                                                                },
                                                                children: selectedCar.engine
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/booking/page.tsx",
                                                                lineNumber: 234,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/booking/page.tsx",
                                                        lineNumber: 231,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/booking/page.tsx",
                                                lineNumber: 226,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/booking/page.tsx",
                                        lineNumber: 206,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            background: "var(--black-2)",
                                            border: "1px solid rgba(255,255,255,0.07)",
                                            borderRadius: 12,
                                            padding: 28,
                                            marginBottom: 24
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "font-heading",
                                                style: {
                                                    fontSize: 17,
                                                    color: "var(--white)",
                                                    marginBottom: 20,
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: 10
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                        size: 16,
                                                        style: {
                                                            color: "var(--red-neon)"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/booking/page.tsx",
                                                        lineNumber: 242,
                                                        columnNumber: 17
                                                    }, this),
                                                    " Личные данные"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/booking/page.tsx",
                                                lineNumber: 241,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: "grid",
                                                    gridTemplateColumns: "1fr 1fr",
                                                    gap: 16
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                style: labelStyle,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                                        size: 11
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/booking/page.tsx",
                                                                        lineNumber: 246,
                                                                        columnNumber: 45
                                                                    }, this),
                                                                    " Имя и фамилия *"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/booking/page.tsx",
                                                                lineNumber: 246,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                placeholder: "Александр Петров",
                                                                value: form.name,
                                                                onChange: (e)=>set("name", e.target.value),
                                                                style: inputStyle(errors.name)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/booking/page.tsx",
                                                                lineNumber: 247,
                                                                columnNumber: 19
                                                            }, this),
                                                            errors.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                style: {
                                                                    color: "var(--red-neon)",
                                                                    fontSize: 11,
                                                                    marginTop: 5
                                                                },
                                                                children: errors.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/booking/page.tsx",
                                                                lineNumber: 248,
                                                                columnNumber: 35
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/booking/page.tsx",
                                                        lineNumber: 245,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                style: labelStyle,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                                        size: 11
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/booking/page.tsx",
                                                                        lineNumber: 251,
                                                                        columnNumber: 45
                                                                    }, this),
                                                                    " Телефон *"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/booking/page.tsx",
                                                                lineNumber: 251,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                placeholder: "+7 (999) 123-45-67",
                                                                value: form.phone,
                                                                onChange: (e)=>set("phone", e.target.value),
                                                                style: inputStyle(errors.phone)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/booking/page.tsx",
                                                                lineNumber: 252,
                                                                columnNumber: 19
                                                            }, this),
                                                            errors.phone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                style: {
                                                                    color: "var(--red-neon)",
                                                                    fontSize: 11,
                                                                    marginTop: 5
                                                                },
                                                                children: errors.phone
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/booking/page.tsx",
                                                                lineNumber: 253,
                                                                columnNumber: 36
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/booking/page.tsx",
                                                        lineNumber: 250,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            gridColumn: "1 / -1"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                style: labelStyle,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                                        size: 11
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/booking/page.tsx",
                                                                        lineNumber: 256,
                                                                        columnNumber: 45
                                                                    }, this),
                                                                    " Email *"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/booking/page.tsx",
                                                                lineNumber: 256,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "email",
                                                                placeholder: "email@example.com",
                                                                value: form.email,
                                                                onChange: (e)=>set("email", e.target.value),
                                                                style: inputStyle(errors.email)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/booking/page.tsx",
                                                                lineNumber: 257,
                                                                columnNumber: 19
                                                            }, this),
                                                            errors.email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                style: {
                                                                    color: "var(--red-neon)",
                                                                    fontSize: 11,
                                                                    marginTop: 5
                                                                },
                                                                children: errors.email
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/booking/page.tsx",
                                                                lineNumber: 258,
                                                                columnNumber: 36
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/booking/page.tsx",
                                                        lineNumber: 255,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/booking/page.tsx",
                                                lineNumber: 244,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/booking/page.tsx",
                                        lineNumber: 240,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            background: "var(--black-2)",
                                            border: "1px solid rgba(255,255,255,0.07)",
                                            borderRadius: 12,
                                            padding: 28,
                                            marginBottom: 24
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "font-heading",
                                                style: {
                                                    fontSize: 17,
                                                    color: "var(--white)",
                                                    marginBottom: 20,
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: 10
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                        size: 16,
                                                        style: {
                                                            color: "var(--red-neon)"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/booking/page.tsx",
                                                        lineNumber: 266,
                                                        columnNumber: 17
                                                    }, this),
                                                    " Даты аренды"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/booking/page.tsx",
                                                lineNumber: 265,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: "grid",
                                                    gridTemplateColumns: "1fr 1fr",
                                                    gap: 16
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                style: labelStyle,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                                        size: 11
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/booking/page.tsx",
                                                                        lineNumber: 270,
                                                                        columnNumber: 45
                                                                    }, this),
                                                                    " Дата начала *"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/booking/page.tsx",
                                                                lineNumber: 270,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "date",
                                                                min: today,
                                                                value: form.startDate,
                                                                onChange: (e)=>{
                                                                    set("startDate", e.target.value);
                                                                    if (form.endDate && e.target.value >= form.endDate) set("endDate", "");
                                                                },
                                                                style: {
                                                                    ...inputStyle(errors.startDate),
                                                                    colorScheme: "dark"
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/booking/page.tsx",
                                                                lineNumber: 271,
                                                                columnNumber: 19
                                                            }, this),
                                                            errors.startDate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                style: {
                                                                    color: "var(--red-neon)",
                                                                    fontSize: 11,
                                                                    marginTop: 5
                                                                },
                                                                children: errors.startDate
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/booking/page.tsx",
                                                                lineNumber: 272,
                                                                columnNumber: 40
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/booking/page.tsx",
                                                        lineNumber: 269,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                style: labelStyle,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                                        size: 11
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/booking/page.tsx",
                                                                        lineNumber: 275,
                                                                        columnNumber: 45
                                                                    }, this),
                                                                    " Дата окончания *"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/booking/page.tsx",
                                                                lineNumber: 275,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "date",
                                                                min: form.startDate || today,
                                                                value: form.endDate,
                                                                onChange: (e)=>set("endDate", e.target.value),
                                                                style: {
                                                                    ...inputStyle(errors.endDate),
                                                                    colorScheme: "dark"
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/booking/page.tsx",
                                                                lineNumber: 276,
                                                                columnNumber: 19
                                                            }, this),
                                                            errors.endDate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                style: {
                                                                    color: "var(--red-neon)",
                                                                    fontSize: 11,
                                                                    marginTop: 5
                                                                },
                                                                children: errors.endDate
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/booking/page.tsx",
                                                                lineNumber: 277,
                                                                columnNumber: 38
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/booking/page.tsx",
                                                        lineNumber: 274,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/booking/page.tsx",
                                                lineNumber: 268,
                                                columnNumber: 15
                                            }, this),
                                            days > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: 10,
                                                    marginTop: 16,
                                                    padding: "12px 16px",
                                                    background: "rgba(255,59,48,0.06)",
                                                    border: "1px solid rgba(255,59,48,0.15)",
                                                    borderRadius: 8
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                        size: 14,
                                                        style: {
                                                            color: "var(--red-neon)"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/booking/page.tsx",
                                                        lineNumber: 283,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            color: "var(--white)",
                                                            fontSize: 13
                                                        },
                                                        children: [
                                                            "Длительность аренды: ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                style: {
                                                                    color: "var(--red-neon)"
                                                                },
                                                                children: [
                                                                    days,
                                                                    " ",
                                                                    days === 1 ? "день" : days < 5 ? "дня" : "дней"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/booking/page.tsx",
                                                                lineNumber: 285,
                                                                columnNumber: 42
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/booking/page.tsx",
                                                        lineNumber: 284,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/booking/page.tsx",
                                                lineNumber: 282,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/booking/page.tsx",
                                        lineNumber: 264,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            background: "var(--black-2)",
                                            border: "1px solid rgba(255,255,255,0.07)",
                                            borderRadius: 12,
                                            padding: 28
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "font-heading",
                                                style: {
                                                    fontSize: 17,
                                                    color: "var(--white)",
                                                    marginBottom: 20,
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: 10
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                                                        size: 16,
                                                        style: {
                                                            color: "var(--red-neon)"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/booking/page.tsx",
                                                        lineNumber: 294,
                                                        columnNumber: 17
                                                    }, this),
                                                    " Комментарий"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/booking/page.tsx",
                                                lineNumber: 293,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                rows: 4,
                                                placeholder: "Особые пожелания, адрес доставки или дополнительная информация...",
                                                value: form.comment,
                                                onChange: (e)=>set("comment", e.target.value),
                                                style: {
                                                    ...inputStyle(),
                                                    resize: "vertical",
                                                    minHeight: 100,
                                                    fontFamily: "inherit"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/app/booking/page.tsx",
                                                lineNumber: 296,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/booking/page.tsx",
                                        lineNumber: 292,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/booking/page.tsx",
                                lineNumber: 204,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "sticky",
                                    top: 88
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        background: "var(--black-2)",
                                        border: "1px solid rgba(255,255,255,0.07)",
                                        borderRadius: 12,
                                        padding: 28
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-heading",
                                            style: {
                                                fontSize: 16,
                                                color: "var(--white)",
                                                marginBottom: 20
                                            },
                                            children: "Итог бронирования"
                                        }, void 0, false, {
                                            fileName: "[project]/app/booking/page.tsx",
                                            lineNumber: 309,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                paddingBottom: 20,
                                                borderBottom: "1px solid rgba(255,255,255,0.06)",
                                                marginBottom: 20
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        borderRadius: 8,
                                                        overflow: "hidden",
                                                        marginBottom: 14,
                                                        aspectRatio: "16/9"
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: selectedCar.image,
                                                        alt: selectedCar.model,
                                                        style: {
                                                            width: "100%",
                                                            height: "100%",
                                                            objectFit: "cover"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/booking/page.tsx",
                                                        lineNumber: 317,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/booking/page.tsx",
                                                    lineNumber: 315,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    style: {
                                                        color: "var(--red-neon)",
                                                        fontSize: 10,
                                                        letterSpacing: "0.08em",
                                                        textTransform: "uppercase",
                                                        marginBottom: 4
                                                    },
                                                    children: selectedCar.brand
                                                }, void 0, false, {
                                                    fileName: "[project]/app/booking/page.tsx",
                                                    lineNumber: 319,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-heading",
                                                    style: {
                                                        color: "var(--white)",
                                                        fontSize: 16
                                                    },
                                                    children: selectedCar.model
                                                }, void 0, false, {
                                                    fileName: "[project]/app/booking/page.tsx",
                                                    lineNumber: 320,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/booking/page.tsx",
                                            lineNumber: 314,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: "flex",
                                                flexDirection: "column",
                                                gap: 12,
                                                marginBottom: 20
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: "flex",
                                                        justifyContent: "space-between"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                color: "var(--text-muted)",
                                                                fontSize: 13
                                                            },
                                                            children: "Цена в сутки"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/booking/page.tsx",
                                                            lineNumber: 326,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                color: "var(--white)",
                                                                fontSize: 13
                                                            },
                                                            children: [
                                                                selectedCar.pricePerDay.toLocaleString("ru-RU"),
                                                                " ₽"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/booking/page.tsx",
                                                            lineNumber: 327,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/booking/page.tsx",
                                                    lineNumber: 325,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: "flex",
                                                        justifyContent: "space-between"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                color: "var(--text-muted)",
                                                                fontSize: 13
                                                            },
                                                            children: "Количество дней"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/booking/page.tsx",
                                                            lineNumber: 330,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                color: "var(--white)",
                                                                fontSize: 13
                                                            },
                                                            children: days || "—"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/booking/page.tsx",
                                                            lineNumber: 331,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/booking/page.tsx",
                                                    lineNumber: 329,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: "flex",
                                                        justifyContent: "space-between"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                color: "var(--text-muted)",
                                                                fontSize: 13
                                                            },
                                                            children: "Страховка"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/booking/page.tsx",
                                                            lineNumber: 334,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                color: "var(--red-neon)",
                                                                fontSize: 13
                                                            },
                                                            children: "Включена"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/booking/page.tsx",
                                                            lineNumber: 335,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/booking/page.tsx",
                                                    lineNumber: 333,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: "flex",
                                                        justifyContent: "space-between"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                color: "var(--text-muted)",
                                                                fontSize: 13
                                                            },
                                                            children: "Доставка"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/booking/page.tsx",
                                                            lineNumber: 338,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                color: "var(--red-neon)",
                                                                fontSize: 13
                                                            },
                                                            children: "Бесплатно"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/booking/page.tsx",
                                                            lineNumber: 339,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/booking/page.tsx",
                                                    lineNumber: 337,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/booking/page.tsx",
                                            lineNumber: 324,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                height: 1,
                                                background: "rgba(255,255,255,0.06)",
                                                marginBottom: 20
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/app/booking/page.tsx",
                                            lineNumber: 343,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: "flex",
                                                justifyContent: "space-between",
                                                alignItems: "flex-end",
                                                marginBottom: 24
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        color: "var(--text-muted)",
                                                        fontSize: 13
                                                    },
                                                    children: "Итого"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/booking/page.tsx",
                                                    lineNumber: 346,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        textAlign: "right"
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-display",
                                                        style: {
                                                            fontSize: 30,
                                                            color: "var(--white)",
                                                            letterSpacing: "0.02em"
                                                        },
                                                        children: total > 0 ? total.toLocaleString("ru-RU") + " ₽" : "—"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/booking/page.tsx",
                                                        lineNumber: 348,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/booking/page.tsx",
                                                    lineNumber: 347,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/booking/page.tsx",
                                            lineNumber: 345,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "btn-primary",
                                            onClick: handleSubmit,
                                            disabled: submitting,
                                            style: {
                                                width: "100%",
                                                justifyContent: "center",
                                                fontSize: 14,
                                                opacity: submitting ? 0.7 : 1,
                                                cursor: submitting ? "wait" : "pointer"
                                            },
                                            children: submitting ? "Оформляем..." : "Подтвердить бронирование"
                                        }, void 0, false, {
                                            fileName: "[project]/app/booking/page.tsx",
                                            lineNumber: 354,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                textAlign: "center",
                                                color: "var(--text-muted)",
                                                fontSize: 11,
                                                marginTop: 12,
                                                lineHeight: 1.6
                                            },
                                            children: "Нажимая кнопку, вы соглашаетесь с условиями аренды"
                                        }, void 0, false, {
                                            fileName: "[project]/app/booking/page.tsx",
                                            lineNumber: 369,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/booking/page.tsx",
                                    lineNumber: 308,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/booking/page.tsx",
                                lineNumber: 307,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/booking/page.tsx",
                        lineNumber: 201,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/booking/page.tsx",
                lineNumber: 184,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(BookingForm, "I+99m1XLCglZpsjT5rF8RLknJvI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useBookings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBookings"]
    ];
});
_c1 = BookingForm;
function BookingPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                paddingTop: 120,
                textAlign: "center",
                color: "var(--text-muted)"
            },
            children: "Загрузка..."
        }, void 0, false, {
            fileName: "[project]/app/booking/page.tsx",
            lineNumber: 382,
            columnNumber: 25
        }, this),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BookingForm, {}, void 0, false, {
            fileName: "[project]/app/booking/page.tsx",
            lineNumber: 383,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/booking/page.tsx",
        lineNumber: 382,
        columnNumber: 5
    }, this);
}
_c2 = BookingPage;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "SuccessToast");
__turbopack_context__.k.register(_c1, "BookingForm");
__turbopack_context__.k.register(_c2, "BookingPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_0txg9x6._.js.map