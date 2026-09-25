import { ImageResponse } from "next/og";
import { brand, LeafMark } from "@/lib/brand";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: brand.dark.background,
        borderRadius: 8,
      }}
    >
      <LeafMark size={22} />
    </div>,
    size,
  );
}
