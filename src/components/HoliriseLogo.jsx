import React from "react";

export default function HoliriseLogo({ className = "", size = "default", light = true }) {
  const sizeMap = {
    small: { icon: 32, fontSize: "1rem", subSize: "0.6rem", gap: "8px" },
    default: { icon: 40, fontSize: "1.15rem", subSize: "0.65rem", gap: "10px" },
    large: { icon: 56, fontSize: "1.6rem", subSize: "0.8rem", gap: "14px" },
  };
  const s = sizeMap[size] || sizeMap.default;

  return (
    <div
      className={`holirise-logo ${className}`}
      style={{ display: "flex", alignItems: "center", gap: s.gap }}
    >
      <div
        className="holirise-logo-icon"
        style={{
          width: s.icon,
          height: s.icon,
          borderRadius: "50%",
          background: "#B7D93D",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#042C23",
          fontSize: s.fontSize,
          flexShrink: 0,
        }}
      >
        <i className="bi bi-compass"></i>
      </div>
      <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.2 }}>
        <span
          style={{
            fontWeight: 800,
            fontSize: s.fontSize,
            color: light ? "#fff" : "#042C23",
            letterSpacing: "2px",
          }}
        >
          HOLIRISE
        </span>
        <span
          style={{
            fontSize: s.subSize,
            color: light ? "rgba(255,255,255,0.55)" : "#66756F",
            letterSpacing: "1px",
            textTransform: "uppercase",
            fontWeight: 500,
          }}
        >
          Personal Development Center
        </span>
      </div>
    </div>
  );
}
