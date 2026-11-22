/**
 * The card's 3D preview — laid over the plan, on the same paper, exactly where
 * the product's `Preview3D` lays itself over the card's drawing.
 *
 * The picture is a STILL of the product's own 3D preview of the drawing the card
 * shows (captured from `Preview3D` itself, from the demo's final variant), not a
 * model drawn here and never an AI image. What says what it is is the product's
 * own chrome, nothing added: the card's view switch, pressed on "3D preview"
 * (`SheetChrome`), and the limits line the product keeps under every 3D preview
 * — what the preview draws and what it does not — shown whenever the still is.
 * The product has no badge on the view itself, so neither does the replica.
 *
 * World space: it rides the camera with the sheet it replaces, and is drawn
 * inside the sheet's own box by `StudioReplica`.
 *
 * The image arrives through `assetUrl`, so the web host can serve it from
 * `/showcase/...` and the film can map the same path onto a local file without
 * either rewriting the screenplay.
 */

import type { JSX } from "react";
import type { LayoutSpec } from "../layout";
import { PREVIEW_3D_LIMITS_LINE } from "../strings";
import { pct, type as typeStyle, u } from "../style";

export function Preview3DView({
  spec,
  src,
  progress,
  assetUrl,
}: {
  spec: LayoutSpec;
  src: string | null;
  progress: number;
  /** Map a screenplay path onto something this host can fetch. */
  assetUrl: (src: string) => string;
}): JSX.Element | null {
  const p = pct(progress);
  if (!src || p <= 0.01) return null;
  // The sheet's own chrome scale: this is the sheet's view, not stage chrome.
  const k = spec.ck;

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        background: "#ffffff",
        opacity: p,
      }}
    >
      <div style={{ position: "relative", flex: "1 1 auto", minHeight: 0 }}>
        {/* eslint-disable-next-line @next/next/no-img-element -- the replica runs
            outside Next.js by design (house rule 1 in `types.ts`); `next/image`
            does not exist in the film repo. */}
        <img
          src={assetUrl(src)}
          alt=""
          style={{
            display: "block",
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
      </div>
      <p
        style={{
          margin: 0,
          flex: "0 0 auto",
          padding: `${u(4 * k)} ${u(8 * k)}`,
          borderTop: "var(--sr-hair) solid var(--sr-border)",
          color: "var(--sr-muted-foreground)",
          ...typeStyle(10 * k, 1.35),
        }}
      >
        {PREVIEW_3D_LIMITS_LINE}
      </p>
    </div>
  );
}
