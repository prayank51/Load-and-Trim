LOAD & TRIM — OFFLINE APP

QUICK START (NO INSTALLATION)
1. Extract the ZIP file.
2. Open index.html in Chrome, Edge, Firefox, or another modern browser.
3. Select the aircraft registration.
4. Enter fuel in litres, pilot weight in kg, and co-pilot weight in kg.
5. The app calculates ramp weight, take-off weight, take-off weight in lb, and CG in inches.
6. “Save this calculation” stores a record in the same browser on that device.
7. To transfer saved records, export the JSON file on one device and import it on the other.

INSTALL AS AN APP (PWA)
Upload all files in this folder to an HTTPS host such as GitHub Pages. Open the hosted page in Chrome and use the browser's Install app / Add to Home screen option. The service worker caches the app so it can open offline after the first successful visit.

SOURCE DATA / FORMULAS
Aircraft empty weights, arms, and taxi-fuel values were transcribed from “Load and Trim New.xlsx”.
Fuel weight = litres × 0.72 kg/L.
Fuel arm = 48 in; pilot and co-pilot arm = 37 in.
Ramp weight = empty weight + fuel weight + pilot + co-pilot.
Take-off weight = ramp weight − taxi-fuel deduction.
Take-off moment = empty moment + fuel moment + crew moments − taxi-fuel moment.
CG = take-off moment ÷ take-off weight.
Take-off weight in lb = kg × 2.2.

IMPORTANT
The workbook's MTOW and MLW cells are blank, and no approved CG envelope is included. This app therefore does not show a certified weight-limit or CG-envelope pass/fail result. Verify all aircraft data and formulas against current approved aircraft documentation and operator procedures before operational use. This app is a calculation aid, not a substitute for an approved load and trim sheet.
