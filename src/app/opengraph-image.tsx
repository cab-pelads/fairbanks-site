import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const dynamic = "force-static";
export const alt = "Fairbanks Advocacia: advocacia de família, sucessões e patrimônio em São Paulo";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logo = await readFile(join(process.cwd(), "public/brand/logo-branco.svg"));
  const logoSrc = `data:image/svg+xml;base64,${logo.toString("base64")}`;
  const font = await readFile(
    join(process.cwd(), "src/fonts/libre-baskerville-700.ttf"),
  ).catch(() => null);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#3d182e",
          color: "white",
          fontFamily: font ? "Libre Baskerville" : "serif",
        }}
      >
        <img src={logoSrc} alt="" width={420} height={124} />
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 48, lineHeight: 1.15, maxWidth: 1000 }}>
            Advocacia de família, sucessões e patrimônio em São Paulo
          </div>
          <div style={{ fontSize: 26, color: "#cba65b" }}>Dra. Cristiane Fairbanks · OAB/SP 274.480 · Mais de 20 anos de experiência</div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: font ? [{ name: "Libre Baskerville", data: font, weight: 700, style: "normal" }] : undefined,
    },
  );
}
