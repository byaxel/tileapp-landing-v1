import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Tile App — Subscription Tracker";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#ffffff",
          gap: 32,
        }}
      >
        {/* App icon */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://tileapp.byaxel.dev/images/tile_app_icon_light_appbg.png"
          alt=""
          width={120}
          height={120}
          style={{ borderRadius: 24 }}
        />

        {/* Title */}
        <div
          style={{
            fontSize: 48,
            fontWeight: 300,
            color: "#111111",
            letterSpacing: "-0.02em",
          }}
        >
          Tile App
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 24,
            fontWeight: 300,
            color: "#888888",
            letterSpacing: "0.02em",
          }}
        >
          Subscription Tracker
        </div>
      </div>
    ),
    { ...size },
  );
}
