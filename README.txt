LOAD & TRIM PWA — VERSION 1.1.6

WHAT'S NEW
- Adds dimensional 3D-style weather icons matching the approved reference design.
- Day/night appearance changes automatically using local sunrise and sunset times.
- Night clear-sky icon uses a deep-magenta crescent moon.
- Partly cloudy conditions show sun+cloud by day and moon+cloud by night.
- Cloud, fog, rain, snow and thunderstorm icons use layered gradients and depth effects.
- Rain icon intensity changes between light, moderate and heavy using the weather code and precipitation data.
- Adds a clean sunrise/sunset strip below the weather readings.
- Keeps the existing 60-second Live status and manual refresh behaviour.

UPDATE INSTRUCTIONS
1. Download and extract this ZIP.
2. Open your existing GitHub repository.
3. Replace the six files in the repository root with the six files from this ZIP:
   index.html, sw.js, version.json, manifest.webmanifest, icon.svg, README.txt
4. Commit the changes and wait for GitHub Pages to publish.
5. Reopen the installed app. It should detect version 1.1.6 and offer the update.

DATA PRESERVATION
This update does not intentionally clear local browser storage or saved calculations. Do not clear site data when updating.

WEATHER NOTE
Weather values are model-based. QNH is estimated from model sea-level pressure and is not an official METAR/ATIS altimeter setting. Always verify actual QNH, wind and weather through approved aviation sources before flight. This app is a training aid, not an operational flight-planning source.
