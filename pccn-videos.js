/* PCCN lecture video links — the ONE place to paste links as faculty send them.
   For each video use ONE of:
     { yt: "YouTube video id" }        e.g. https://youtu.be/AbC123xyz  ->  { yt: "AbC123xyz" }
     { drive: "Google Drive file id" } e.g. https://drive.google.com/file/d/1AbC.../view  ->  { drive: "1AbC..." }
     null                              shows "Coming soon"
   A full YouTube or Drive link also works: { url: "https://..." }.
   Links saved in Admin → Settings → Video links override this file, so either place works. */
window.PCCN_VIDEOS = {
  v01: null, // M01 · Why Children Are Different · 10 min
  v02: null, // M01 · PAT & Primary Assessment · 16 min
  v03: null, // M01 · The DIRECT Approach · 14 min
  v04: null, // M02 · Respiratory Distress vs Failure · 10 min
  v05: null, // M02 · Oxygen Delivery Systems · 12 min
  v06: null, // M02 · Bag-Mask Ventilation · 14 min
  v07: null, // M02 · High-Flow Nasal Cannula · 14 min
  v08: null, // M02 · The Art of Nebulisation · 10 min
  v09: null, // M03 · Clinical Features of Dehydration · 10 min
  v10: null, // M03 · Types of Shock — Type and Severity · 12 min
  v11: null, // M03 · Fluid Resuscitation · 14 min
  v12: null, // M03 · NIBP — How to Choose · 8 min
  v13: null  // M03 · The Physiologically Difficult Airway · 15 min
};
window.PCCN_VIDEO_MODULES = { '01': ['v01', 'v02', 'v03'], '02': ['v04', 'v05', 'v06', 'v07', 'v08'], '03': ['v09', 'v10', 'v11', 'v12', 'v13'] };
