import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "linear-gradient(140deg, #fff5e7 0%, #f1dfbe 48%, #d59f5b 100%)",
          color: "#2c1608",
          padding: "56px",
          fontFamily: "system-ui",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            fontWeight: 700,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
          }}
        >
          JC Nagar, Bengaluru
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ display: "flex", fontSize: 68, fontWeight: 800 }}>
            Apartment For Sale
          </div>
          <div style={{ display: "flex", fontSize: 42, fontWeight: 700 }}>
            Rs 42L • 675 sq ft • Rent Rs 18.5k/month
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 30 }}>
          <span>2 scooter parking</span>
          <span>Call +91 9620221991</span>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}