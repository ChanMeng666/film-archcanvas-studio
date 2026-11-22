/**
 * Every file the film loads, named as a LITERAL.
 *
 * **Remotion fails softly on a missing `staticFile()`** — a blank region, not an
 * error — so an eight-master render can complete and ship with a hole in it.
 * `capture/verify-assets.mjs` is the only defence, and it can only check a call
 * whose argument it can read: `staticFile(someVariable)` is reported as
 * unverifiable and stays that way.
 *
 * So the screenplay's asset paths are mapped through a TABLE of literal calls
 * rather than by rewriting a string at runtime. One still, one checked path,
 * and a screenplay that asks for a second throws here instead of drawing
 * nothing.
 */

import { staticFile } from "remotion";

/**
 * The replica's image assets, as `scripts/sync-replica.mjs` stages them: the
 * product's `public/<path>` is `public/<path>` here, under the same path the
 * screenplay names. Since archcanvas #399 that is one still — the product's own
 * 3D preview of the demo's final variant. (The renderings this table used to
 * hold were removed from the product on 2026-11-22, and from here with them.)
 */
const ASSETS: Record<string, string> = {
  "/studio-demo/townhouse-tweak3-3d.webp": staticFile("studio-demo/townhouse-tweak3-3d.webp"),
};

/**
 * The `assetUrl` the replica is handed.
 *
 * The screenplay names `/studio-demo/<name>.webp`, which is the path the WEB
 * host serves. Anything else is a bug in the screenplay or an asset that was
 * never synced, and both are better as a thrown error at module-adjacent time
 * than as an empty card in master number six.
 */
export const replicaAssetUrl = (src: string): string => {
  const file = ASSETS[src];
  if (!file) {
    throw new Error(
      `no synced asset for "${src}" — add it to ASSETS in scripts/sync-replica.mjs and src/assets.ts, and re-sync`,
    );
  }
  return file;
};

export const WORDMARK = staticFile("brand/archcanvas-wordmark.svg");
export const ICON = staticFile("brand/archcanvas-icon.svg");
