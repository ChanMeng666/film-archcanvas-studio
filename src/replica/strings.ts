/**
 * Every word the replica puts on screen, and where the product says it.
 *
 * THE RULE: the replica is a coded reproduction of the real studio, so a string
 * here that the product does not say is a lie about the product. Each constant
 * names the file it mirrors, and `tests/marketing/studioReplicaStrings.test.ts` proves the
 * match rather than trusting the comment:
 *
 *  • where the product EXPORTS the string (or a function that returns it), the
 *    test imports it and asserts equality — a copy change turns the test red;
 *  • where it is inline JSX, the test reads the product source as text and
 *    asserts the literal occurs in it.
 *
 * This file cannot import the product itself (house rule 1 in `types.ts`), which
 * is exactly why the test has to.
 */

/* ────────────────────────────────────────────────────────────────────────── */
/*  Act I — the brief composer                                                */
/*  src/components/dashboard/BriefComposer.tsx (`COMPOSER_COPY`)              */
/* ────────────────────────────────────────────────────────────────────────── */

export const BRIEF_PLACEHOLDER = "A three-bedroom house with an open-plan kitchen and a study…";

/**
 * The page the composer sits on: "Your designs" (`DASHBOARD_COPY.title` in
 * `src/components/dashboard/DashboardView.tsx`).
 *
 * The replica's Act I is the dashboard's front door, and the front door has a
 * heading. Without it the opening seconds are a card floating in an empty band
 * — the first impression of the whole loop, and the one that has to read at a
 * glance. The product's own words, to the byte; the string test reads
 * `DashboardView.tsx` and asserts they are still there. (The page has no
 * sub-line under its title since 2026-11-20, so the replica draws none.)
 */
export const DASHBOARD_HEADING = "Your designs";

/** The keyboard line (`COMPOSER_COPY.keys`). */
export const COMPOSER_HINT = "Enter to send · Shift+Enter for a new line";

/**
 * The box's one secondary control (`COMPOSER_COPY.options`): building type and
 * reference photos sit behind it, closed, so the replica draws the closed button
 * and nothing it hides.
 */
export const OPTIONS_BUTTON = "Options";

/**
 * The CTA, price and all (`COMPOSER_COPY.priced`): the box of an account whose
 * next design is not its free first one, which is what a design shown being
 * paid for is.
 */
export const BRIEF_CTA = "Design my plan · 1 credit";

/* ────────────────────────────────────────────────────────────────────────── */
/*  Act II — the studio top bar                                               */
/*  src/components/studio/StudioShell.tsx (+ SharePopover.tsx for "Share")     */
/* ────────────────────────────────────────────────────────────────────────── */

export const TOP_BAR_DASHBOARD = "Dashboard";
export const TOP_BAR_TRANSCRIPT = "Transcript";
export const TOP_BAR_SHARE = "Share";

/* ────────────────────────────────────────────────────────────────────────── */
/*  Act II — the command bar                                                  */
/*  src/components/chat/Composer.tsx (variant="bar")                          */
/* ────────────────────────────────────────────────────────────────────────── */

/** With a design on the canvas and nothing selected. */
export const COMMAND_PLACEHOLDER_LATEST =
  "Describe changes to your latest design…";

/**
 * With an element selected. The name comes from `elementDisplayName`
 * (`src/lib/canvas/elementName.ts`), which for a labelled room is its label.
 */
export function commandPlaceholderFor(elementName: string): string {
  return `Tell me what to do with ${elementName}…`;
}

/* ────────────────────────────────────────────────────────────────────────── */
/*  The drafting sheet                                                        */
/*  src/components/studio/DraftingSheet.tsx + src/lib/chat/designerProgress.ts */
/* ────────────────────────────────────────────────────────────────────────── */

/** The sheet's header word. */
export const DRAFTING_LABEL = "Drafting…";

/**
 * The pass counter. The product sheet no longer shows one (2026-11-20: "pass 2/6"
 * is the loop's budget, not the person's progress), so no phase below carries a
 * `pass` and this is never drawn. Kept because `index.ts` is a published API.
 */
export function draftingPass(round: number, maxRounds: number): string {
  return `pass ${round}/${maxRounds}`;
}

/**
 * The phase lines, each with the progress event that produces it.
 *
 * These are `phaseLine()`'s output for a two-storey plan on the `architect`
 * arm — which is what the droplet runs (`DESIGNER_MODE` defaults to
 * `architect`), and the demo plan really does have two storeys, so the
 * "across 2 floors" suffix is the honest line rather than the shorter one.
 *
 * The `progress` objects are structural copies of `DesignerProgress`; the test
 * casts them and feeds them to the real `phaseLine`.
 */
export const DRAFTING_PHASES = [
  {
    line: "Drawing the first layout…",
    progress: {
      type: "designer",
      toolCallId: "replica",
      phase: "designing",
      round: 1,
      maxRounds: 4,
      title: null,
      roomLabels: [],
      blocking: null,
      intentSatisfied: null,
      intentTotal: null,
      storeys: null,
      elapsedMs: 0,
      mode: "architect",
    },
  },
  {
    line: "Working through the layout…",
    progress: {
      type: "designer",
      toolCallId: "replica",
      phase: "thinking",
      round: 1,
      maxRounds: 4,
      title: null,
      roomLabels: [],
      blocking: null,
      intentSatisfied: null,
      intentTotal: null,
      storeys: null,
      elapsedMs: 0,
      mode: "architect",
    },
  },
  {
    line: "Checking that every room can be reached across 2 floors…",
    progress: {
      type: "designer",
      toolCallId: "replica",
      phase: "checking",
      round: 1,
      maxRounds: 4,
      title: null,
      roomLabels: [],
      blocking: null,
      intentSatisfied: null,
      intentTotal: null,
      storeys: 2,
      elapsedMs: 0,
      mode: "architect",
    },
  },
  {
    line: "Fixing 3 problems in the drawing across 2 floors…",
    progress: {
      type: "designer",
      toolCallId: "replica",
      phase: "fixing",
      round: 2,
      maxRounds: 4,
      title: null,
      roomLabels: [],
      blocking: 3,
      intentSatisfied: null,
      intentTotal: null,
      intentGateMisses: 0,
      storeys: 2,
      elapsedMs: 0,
      mode: "architect",
    },
  },
  {
    line: "Reviewing the drawing against your brief across 2 floors…",
    progress: {
      type: "designer",
      toolCallId: "replica",
      phase: "fixing",
      round: 3,
      maxRounds: 4,
      title: null,
      roomLabels: [],
      blocking: 0,
      intentSatisfied: null,
      intentTotal: null,
      intentGateMisses: 0,
      storeys: 2,
      elapsedMs: 0,
      mode: "architect",
    },
  },
  {
    line: "Saving your plan…",
    progress: {
      type: "designer",
      toolCallId: "replica",
      phase: "saving",
      round: 3,
      maxRounds: 4,
      title: null,
      roomLabels: [],
      blocking: null,
      intentSatisfied: null,
      intentTotal: null,
      storeys: 2,
      elapsedMs: 0,
      mode: "architect",
    },
  },
] as const;

/**
 * The sheet's "how long will this take" line — one promise on every arm since
 * 2026-11-20. `expectationLine` (`src/lib/chat/designerProgress.ts`), built from
 * `WAIT_PROMISE` (`src/lib/studio/waitCopy.ts`).
 */
export const EXPECTATION_LINE = "A first design takes a while — usually 2 to 3 minutes.";

/* ────────────────────────────────────────────────────────────────────────── */
/*  The sheet's chrome                                                        */
/*  src/components/canvas/designFrame/*.tsx                                  */
/* ────────────────────────────────────────────────────────────────────────── */

/** The ⚑ badge's accessible name. One finding is "1 finding". */
export function reviewBadgeLabel(count: number): string {
  return count > 0
    ? `Review, ${count} ${count === 1 ? "finding" : "findings"}`
    : "Review";
}

/** The two actions on a review pin card. */
export const PIN_FIX = "Have AI fix";
export const PIN_DISMISS = "Dismiss";

/**
 * The card's view switch, Plan | 3D preview (`designFrame/ViewSwitch.tsx`; the
 * second is also `PREVIEW_3D_NAME` in `src/lib/canvas/preview3d/policy.ts`).
 */
export const VIEW_PLAN = "Plan";
export const VIEW_3D_PREVIEW = "3D preview";

/**
 * The line the product keeps visible under every 3D preview
 * (`PREVIEW_3D_LIMITS`, `src/lib/canvas/preview3d/policy.ts`): what the preview
 * draws and what it does not.
 */
export const PREVIEW_3D_LIMITS_LINE =
  "3D preview: walls, openings, floors, stairs and furniture in flat colours. No pitched roofs, sections or elevations.";

/** The storey chip group's name, and one chip per storey. */
export const STOREY_GROUP = "Storey";
export function storeyChip(level: number): string {
  return `L${level}`;
}
export function storeyTitle(level: number, name?: string | null): string {
  return name ?? `Storey ${level}`;
}

/** The caption row's version count. */
export function versionLabel(n: number): string {
  return `v${n}`;
}

/* ────────────────────────────────────────────────────────────────────────── */
/*  The tweaks panel                                                          */
/*  src/components/canvas/TweaksPanel.tsx (the toolbar button shares the name) */
/* ────────────────────────────────────────────────────────────────────────── */

export const TWEAKS_TITLE = "Tweak parameters";
export const TWEAKS_RESET = "Reset";
export const TWEAKS_SAVE = "Save";

/** The success toast a saved tweak raises. */
export const TWEAK_SAVED_TOAST = "Tweak saved — now the latest version";

/* ────────────────────────────────────────────────────────────────────────── */
/*  The export menu                                                           */
/*  src/components/canvas/ExportMenu.tsx                                      */
/*                                                                            */
/*  The replica shows the Image and CAD groups ONLY. That is a partial view of */
/*  a real menu, not an invented one: the third group names the source format, */
/*  which is machinery the buyer never needs to see.                          */
/* ────────────────────────────────────────────────────────────────────────── */

export const EXPORT_TRIGGER = "Export";

export interface ExportItem {
  label: string;
  /** The item's second line — a description, not part of its name. */
  sublabel: string;
}

export interface ExportGroup {
  label: string;
  items: readonly ExportItem[];
}

export const EXPORT_GROUPS: readonly ExportGroup[] = [
  {
    label: "Image",
    items: [
      { label: "PNG", sublabel: "Raster bitmap" },
      { label: "SVG", sublabel: "Scalable vector" },
    ],
  },
  {
    label: "CAD",
    items: [
      { label: "DXF", sublabel: "CAD layers + linetypes" },
      { label: "PDF", sublabel: "Vector print" },
    ],
  },
] as const;

/* ────────────────────────────────────────────────────────────────────────── */
/*  The canvas toolbar                                                        */
/*  src/components/canvas/CanvasToolbar.tsx                                   */
/* ────────────────────────────────────────────────────────────────────────── */

export const CANVAS_TOOLBAR_LABEL = "Canvas";
export const ZOOM_OUT_LABEL = "Zoom out (Ctrl -)";
export const ZOOM_IN_LABEL = "Zoom in (Ctrl +)";
export const FIT_TO_VIEW_LABEL = "Fit to view (F)";
export function zoomChip(pct: number): string {
  return `${pct}%`;
}
export function resetZoomLabel(pct: number): string {
  return `Reset zoom (${pct}%)`;
}

/* ────────────────────────────────────────────────────────────────────────── */
/*  The replica's own honesty caption — not a product string                  */
/* ────────────────────────────────────────────────────────────────────────── */

/**
 * The one sentence in here that the product does not say, because the product
 * has no reason to: a real design takes two to three minutes and this loop is
 * thirty-five seconds. It is on screen for at least three seconds in every cut,
 * and a test integrates that rather than trusting the beat table.
 */
export const HONESTY_CAPTION =
  "Sequence shortened — a design really takes two to three minutes.";

/**
 * The elapsed mini-timer's format (`formatElapsed`,
 * `src/hooks/use-elapsed-while.ts`). Seconds are zero-padded only once minutes
 * are present, so a short wait reads clean ("45s") and a long one aligns
 * ("2m 03s").
 */
export function formatElapsed(seconds: number): string {
  const safe = Math.max(0, Math.floor(seconds));
  const mins = Math.floor(safe / 60);
  const secs = safe % 60;
  if (mins > 0) return `${mins}m ${String(secs).padStart(2, "0")}s`;
  return `${secs}s`;
}

/** Below this the product hides the timer entirely. */
export const ELAPSED_VISIBLE_AFTER_S = 15;

/**
 * How long the drafting the replica compresses REALLY takes, in seconds.
 *
 * The timer on screen counts this scale, not the five seconds the loop spends
 * on it. A replica whose clock said "5s" would be claiming a speed the product
 * does not have — the opposite of what the honesty caption is there for. 154 s
 * is the measured work of the arm that runs in production (`designerProgress.ts`
 * cites it against the 170 s deadline in `designer/contract.ts`).
 */
export const DRAFTING_REAL_SEC = 154;
