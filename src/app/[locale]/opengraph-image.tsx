import { ImageResponse } from "next/og";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { site } from "@/config/site";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const currentLocale = isLocale(locale) ? (locale as Locale) : "en";
  const dict = getDictionary(currentLocale);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#0f1110",
          color: "#ffffff",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <span
            style={{
              fontSize: "30px",
              fontWeight: 400,
              letterSpacing: "-0.02em",
            }}
          >
            Vado
          </span>
          <span
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "999px",
              background: "#b4471f",
            }}
          />
          <span
            style={{
              marginLeft: "12px",
              fontSize: "14px",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#8b8f8c",
            }}
          >
            {dict.hero.eyebrow}
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: "68px",
              fontWeight: 500,
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
              maxWidth: "900px",
            }}
          >
            <span>{dict.hero.titleLead}</span>
            <span style={{ color: "#b4471f", fontStyle: "italic" }}>
              {dict.hero.titleEm}
            </span>
          </div>
          <div
            style={{
              fontSize: "22px",
              color: "#a9ada9",
              maxWidth: "720px",
              lineHeight: 1.4,
            }}
          >
            {dict.meta.ogTagline}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid #2c2f2d",
            paddingTop: "24px",
            fontSize: "14px",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#7d817e",
          }}
        >
          <span>{site.domain}</span>
          <span>{dict.hero.stats[0].value} {dict.hero.stats[0].label}</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
