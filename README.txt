LOAD & TRIM — VERSION 1.1.4

Changes:
- Adds a visible “Enable location & get weather” button. Tap it to trigger Chrome's location permission request and retrieve local weather.
- Removes the automatic location request on page load.
- Keeps the weather card and 30-minute freshness indicator.
- Pressure is model-estimated sea-level pressure converted to inHg, not official METAR/ATIS QNH. Verify actual QNH and wind using approved aviation weather sources before flight.
- Retains the existing aircraft calculator, CG envelope display, saved calculations, calculator popup, and offline PWA files.

Deployment:
1. Extract this ZIP.
2. Replace the six existing repository-root files: index.html, sw.js, version.json, manifest.webmanifest, icon.svg, README.txt.
3. Commit/publish the changes to GitHub Pages.
4. Open the app in Chrome and tap “Enable location & get weather”.
5. If Chrome asks, choose Allow. Internet is required to retrieve weather; the calculator remains available offline.

Important:
- Do not clear Chrome site data; saved calculations are stored locally in the browser.
- This tool is a training aid only. Verify all weight-and-balance inputs and limits against the current approved aircraft POH/AFM and aircraft-specific data. Do not use it as the sole basis for flight release.


Version 1.1.5 weather behaviour:
- When the app opens, it automatically refreshes weather if location permission was already granted in Chrome.
- If permission has not yet been granted, tap “Enable location & get weather” once and allow access.
- After a successful fetch, “Live” is shown for 60 seconds.
- After 60 seconds, the card shows the elapsed last-updated time and a refresh button.
- Tapping refresh fetches new data and restarts the 60-second Live period. If refresh fails, the previous readings remain visible with the last-updated time and refresh button.
- Weather is model-based; the displayed pressure is not official METAR/ATIS QNH. Verify actual aviation weather before flight.
