import { ImageResponse } from "next/og";
import { brand, LeafMark } from "@/lib/brand";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: brand.dark.background,
      }}
    >
      <LeafMark size={120} />
    </div>,
    size,
  );
}
