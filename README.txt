LOAD & TRIM — VERSION 1.1.1

Changes in this release:
- Applies the user-approved input layout: aircraft registration and fuel on the first row; pilot and co-pilot on the second row.
- Removes the basic empty weight / empty-weight arm / taxi fuel hint beneath aircraft registration.
- Places Save, Calculator, and Reset in one three-column row. Buttons use the approved compact rectangular style, 50px desktop/default height, icons above labels, and spacing above the button row.
- Retains blank-by-default numeric inputs; blank values are treated as zero.
- Fuel remains entered in litres and converted to kg by the existing calculation.
- Retains the popup calculator with arithmetic, decimals, percentage, sign change, clear (C), and backspace (⌫).
- Retains S/R CG envelopes, marker colours, saved calculations, offline support, and update notification.

Deployment:
Replace the five app files in the ROOT of the existing GitHub Pages repository: index.html, sw.js, version.json, manifest.webmanifest, and icon.svg. Commit the changes. The existing app URL remains unchanged.

Saved calculations remain in this browser/device local storage. Export/import is available for backup or transfer; there is no automatic cross-device sync.
