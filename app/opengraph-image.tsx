import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";
import { siteConfig } from "@/data/site";
import { brand, LeafMark } from "@/lib/brand";

export const alt = `${profile.name} — ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const dots = [brand.accent.red, brand.accent.yellow, brand.accent.green];

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 72,
        color: brand.dark.foreground,
        background: brand.dark.background,
        backgroundImage:
          "radial-gradient(circle at 25% 0%, rgba(167,192,128,0.22), transparent 55%), radial-gradient(circle at 85% 15%, rgba(131,192,146,0.16), transparent 50%)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        {dots.map((color) => (
          <div
            key={color}
            style={{
              width: 16,
              height: 16,
              borderRadius: 999,
              background: color,
            }}
          />
        ))}
        <div
          style={{
            display: "flex",
            marginLeft: 12,
            fontSize: 26,
            color: brand.dark.muted,
          }}
        >
          {`${siteConfig.handle}@${siteConfig.name}`}
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            display: "flex",
            fontSize: 80,
            fontWeight: 700,
            letterSpacing: -2,
          }}
        >
          {profile.name}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 12,
            fontSize: 38,
            color: brand.accent.aqua,
          }}
        >
          {profile.role}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          fontSize: 26,
          color: brand.dark.muted,
        }}
      >
        <div
          style={{ display: "flex" }}
        >{`${profile.location} · ${profile.availability}`}</div>
        <LeafMark size={48} />
      </div>
    </div>,
    size,
  );
}
