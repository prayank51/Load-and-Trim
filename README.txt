LOAD & TRIM — UPDATE NOTIFICATION

Upload/replace index.html, sw.js, version.json, manifest.webmanifest and icon.svg in the ROOT of your existing GitHub Pages repository. README.txt is optional.

For every future release:
1. Edit the app code.
2. Change "version" in version.json to a new value (for example 1.0.1 to 1.0.2).
3. Commit all changed files to the GitHub Pages branch.
4. After deployment, students who open the app online are checked for updates. If the version differs, they see: "A newer version is available. Please update it for accurate calculation."
5. "Update now" clears the old app cache and reloads the new version.

The app checks on open and approximately once per minute while open. A student must be online to learn about a new release; offline users continue with their last cached version. Existing users should open the app online and refresh once after this feature is first deployed.

AVIATION SAFETY: The source workbook has blank MTOW/MLW fields and no approved CG envelope. This app does not certify weight/CG limits. Verify data and formulas against current approved aircraft documentation and procedures before operational use.
