import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Ami Rifansyah - Fullstack Developer & IT Consultant";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Gambar preview saat link dibagikan di LinkedIn, WhatsApp, dll.
export default async function OpengraphImage() {
  const photo = await readFile(join(process.cwd(), "public/images/profile/ami2.jpeg"));
  const photoSrc = `data:image/jpeg;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          gap: 64,
          padding: 80,
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
          color: "#f8fafc",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={photoSrc}
          width={360}
          height={360}
          style={{ borderRadius: 9999, objectFit: "cover", border: "8px solid #334155" }}
          alt=""
        />
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 72, fontWeight: 800 }}>Ami Rifansyah</div>
          <div style={{ fontSize: 40, color: "#cbd5e1" }}>Fullstack Developer & IT Consultant</div>
          <div style={{ fontSize: 28, color: "#94a3b8" }}>Next.js · React · Node.js · Laravel · Mobile</div>
        </div>
      </div>
    ),
    size
  );
}
