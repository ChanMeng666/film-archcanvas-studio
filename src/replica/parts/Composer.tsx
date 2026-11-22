/**
 * Act I — the brief composer, and the page it sits on ("Your designs":
 * `src/components/dashboard/DashboardView.tsx` + `BriefComposer.tsx`).
 *
 * A heading, one card — the brief, the closed "Options" button and a CTA that
 * NAMES THE PRICE — and the keyboard hint underneath. The CTA is the product's
 * whole commercial posture in a button, so it is rendered verbatim from
 * `strings.ts` rather than paraphrased: "Design my plan · 1 credit". (Until
 * 2026-11-20 the card also had a typology select and a reference-image button,
 * and the page a sub-line; the product moved the first two behind "Options" and
 * dropped the third, so the replica draws none of them.)
 *
 * ⚠ IT IS LAID OUT AT `composer.scale`, NOT AT `k`. The first nine seconds of
 * the loop are this screen, and they are the first impression of everything
 * after it; sized for the canvas that has not opened yet, the typed brief lands
 * at ten pixels in an 1100 px band and the opening reads as an empty page with a
 * speck on it. `layout.ts` explains why the camera envelope does not apply here.
 *
 * The caret is a plain block whose visibility comes from `state.composer.caret`,
 * which `at.ts` derives from `t`. A CSS blink would be wall-clock and so would
 * differ between two renders of the same film frame.
 */

import type { JSX } from "react";
import { Icon } from "../icons";
import type { LayoutSpec } from "../layout";
import {
  BRIEF_CTA,
  BRIEF_PLACEHOLDER,
  COMPOSER_HINT,
  DASHBOARD_HEADING,
  OPTIONS_BUTTON,
} from "../strings";
import { type as typeStyle, u } from "../style";
import type { ReplicaState } from "../types";

export function Composer({ spec, state }: { spec: LayoutSpec; state: ReplicaState }): JSX.Element {
  const c = spec.composer;
  const a = c.scale;
  const typed = state.composer.text;
  const showPlaceholder = typed.length === 0;

  return (
    <>
      {/* ── the page's own heading ── the dashboard's words, not the landing
          page's. `tests/marketing/studioReplicaStrings.test.ts` reads
          `DashboardView.tsx`. */}
      <div
        style={{
          position: "absolute",
          left: u(c.heading.x),
          top: u(c.heading.y),
          width: u(c.heading.w),
          ...typeStyle(40 * a, 1.1, 300),
          letterSpacing: "-0.01em",
        }}
      >
        {DASHBOARD_HEADING}
      </div>

      <div
        className="sr-card"
        style={{
          position: "absolute",
          left: u(c.card.x),
          top: u(c.card.y),
          width: u(c.card.w),
          height: u(c.card.h),
          borderColor: typed.length > 0 ? "rgb(106 61 240 / 0.4)" : "var(--sr-border)",
          overflow: "hidden",
        }}
      >
        {/* ── the brief ── */}
        <div
          style={{
            position: "absolute",
            left: u(c.input.x - c.card.x),
            top: u(c.input.y - c.card.y),
            width: u(c.input.w),
            height: u(c.input.h),
            overflow: "hidden",
            ...typeStyle(15 * a, 1.5),
            color: showPlaceholder ? "var(--sr-muted-foreground)" : "var(--sr-foreground)",
          }}
        >
          <span className="sr-wrap">{showPlaceholder ? BRIEF_PLACEHOLDER : typed}</span>
          {!showPlaceholder && state.composer.caret ? (
            <span
              style={{
                display: "inline-block",
                width: u(1.5 * a),
                height: u(15 * a),
                marginLeft: u(1 * a),
                background: "var(--sr-foreground)",
                verticalAlign: "text-bottom",
              }}
            />
          ) : null}
        </div>

        {/* ── the control row ── the closed "Options" button, borderless and
            muted as the product draws it; what it hides is not drawn. */}
        <span
          className="sr-row sr-muted"
          style={{
            position: "absolute",
            left: u(c.options.x - c.card.x),
            top: u(c.options.y - c.card.y),
            width: u(c.options.w),
            height: u(c.options.h),
            gap: u(4 * a),
            ...typeStyle(14 * a, 1),
          }}
        >
          {OPTIONS_BUTTON}
          <Icon name="chevronDown" size={u(12 * a)} color="var(--sr-muted-foreground)" />
        </span>

        {/* The CTA names the price. Pressed = a 1 unit nudge, the product's
            `active:translate-y-px` at this scale. */}
        <span
          className="sr-row sr-pill sr-cta"
          style={{
            position: "absolute",
            left: u(c.cta.x - c.card.x),
            top: u(c.cta.y - c.card.y + (state.composer.ctaPressed ? 1 * a : 0)),
            width: u(c.cta.w),
            height: u(c.cta.h),
            justifyContent: "center",
            ...typeStyle(13 * a, 1, 500),
            opacity: state.composer.ctaPressed ? 0.92 : 1,
          }}
        >
          {BRIEF_CTA}
        </span>
      </div>

      <div
        className="sr-wrap"
        style={{
          position: "absolute",
          left: u(c.hint.x),
          top: u(c.hint.y),
          width: u(c.hint.w),
          color: "rgb(123 116 107 / 0.9)",
          ...typeStyle(12 * a, 1.5),
        }}
      >
        {COMPOSER_HINT}
      </div>
    </>
  );
}
